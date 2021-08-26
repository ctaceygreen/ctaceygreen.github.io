---
slug: azure-consumption-functions-healthcheck-with-deployment-slots
title: How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?
author: Chris Tacey-Green
author_title: Software Architect
author_url: https://github.com/ctaceygreen
author_image_url: https://avatars.githubusercontent.com/u/11404995?v=4
tags: [deployment-slots, healthcheck, consumption, function, azure]
---

## Setting the scene

Okay that title has quite a few elements to it, so let's break down exactly what we're trying to do here...

Our situation:
* An Azure Function running on a consumption plan
* [Deployment slots](https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots) configured within our IaC (a guide on these could be a separate post)
* An ADO pipeline that deploys our IaC, code and then swaps our staging and production slot

## So what's the problem here?

Our problem is that with the current setup, swapping slots on a consumption Function assumes healthiness based on loading the root URL of your Function App. This may be suitable for simple Functions, but as soon as your Function has downstream dependencies (such as a reliance on a DB, queue or other API), our requirements become more complicated. Ideally, our deployment process would look something like :
* Deploy infrastructure
* Deploy code to staging slot
* Check downstream dependencies are correctly configured and accessible to staging slot
* Swap staging and production slot

Hopefully you can see now that our root URL is letting us down slightly.

This is where we can turn to health-checks. In many services (App Service, Kubernetes etc), zero-downtime deployments utilise health probes, which hit a predefined HTTP endpoint to determine that your app is ready and healthy. An experienced blogger and all-round smart guy named John Reilly has already created a similar post [here](https://blog.johnnyreilly.com/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments) to explain how we can achieve this for Azure App Service. This process can be followed if you're running your Functions on an App Service plan. If only this worked for consumption Functions too, my post would be completely unnecessary!
Unfortunately, it doesn't. The `healthcheckPath` used in App Service to facilitate this functionality is not supported on the consumption plan. Annoying, but we still have a solution!

## The solution

There are some sneaky appsettings that we can set on our Function. These configure which endpoint is used during slot warmup to check your slot is healthy. The appsettings are as follows:

```json
"appsettings" : [
    {
        "name": "WEBSITE_WARMUP_PATH",
        "value": "[parameters('healthcheckPath')]"
    },
    {
        "name": "WEBSITE_SWAP_WARMUP_PING_PATH",
        "value": "[parameters('healthcheckPath')]"
    },
    {
        "name": "WEBSITE_SWAP_WARMUP_PING_STATUSES",
        "value": "200"
    }
    ...
]
```

* `WEBSITE_WARMUP_PATH` - Used in a few different areas of Azure. The reason we need it is because we have authentication enabled across all endpoints of our Function. Unlike the healthcheckPath functionality of app-service, the Function slot warmup process does not run 'behind' the auth/ip restriction layer. Therefore, this appsetting specifies that the authentication layer should ignore this path and allow anonymous calls. This should be considered carefully with your use-case, ensuring that you're not opening yourself up to DOS attacks or returning sensitive information that can be used as a security hole.
* `WEBSITE_SWAP_WARMUP_PING_PATH` - The path to your healthcheck/ping endpoint on your Function. e.g. '/api/healthcheck'
* `WEBSITE_SWAP_WARMUP_PING_STATUSES` - The statuses that you will accept as a successful response from your healthcheck endpoint. Without this, Azure will consider some redirect status codes as successful responses, so in our example we're making this much more specific with just a '200' considered successful.

After adding this into your ARM template for the Function `Microsoft.Web/Sites` and it's associated slot, you're good to go! The final step is to ensure that your ADO pipeline is running the task below to swap slots on your Function:

```yml
- task: AzureAppServiceManager@0
  displayName: 'Swap Staging Slot with Production'
  inputs:
    action: 'Swap Slots'
    azureSubscription: '$(azureSubscription)'
    resourceGroupName: $(resourceGroupName)
    webAppName: $(functionName)
    SourceSlot: 'stage'
```

Running this ADO pipeline step will now check your `WEBSITE_SWAP_WARMUP_PING_PATH` is returning the expected status before swapping your slot into production. This should greatly reduce the likelihood of a consumption Function being deployed to production with misconfigured dependencies (e.g. invalid connection-string). You could easily implement this pattern for any consumption Functions within your estate, even non-http-triggers, all you'd need to do is ensure that an associated healthcheck http-trigger Function was deployed alongside it.

That should do us for this one! If anything isn't clear, get in touch and I'd be happy to provide more reproducable examples of the entire ARM template and pipeline steps.

Until next time...