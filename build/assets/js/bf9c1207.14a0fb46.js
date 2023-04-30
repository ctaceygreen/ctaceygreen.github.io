"use strict";(self.webpackChunkctaceygreen_github_io=self.webpackChunkctaceygreen_github_io||[]).push([[228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7234:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={slug:"azure-consumption-functions-healthcheck-with-deployment-slots",title:"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?",author:"Chris Tacey-Green",author_title:"Engineer, Architect, Human",author_url:"https://github.com/ctaceygreen",author_image_url:"https://avatars.githubusercontent.com/u/11404995?v=4",tags:["deployment-slots","healthcheck","consumption","function","azure"]},i=void 0,s={permalink:"/blog/azure-consumption-functions-healthcheck-with-deployment-slots",editUrl:"https://github.com/ctaceygreen/ctaceygreen.github.io/blog/2021-08-26-azure-consumption-functions-healthcheck-with-deployment-slots.md",source:"@site/blog/2021-08-26-azure-consumption-functions-healthcheck-with-deployment-slots.md",title:"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?",description:"Setting the scene",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"deployment-slots",permalink:"/blog/tags/deployment-slots"},{label:"healthcheck",permalink:"/blog/tags/healthcheck"},{label:"consumption",permalink:"/blog/tags/consumption"},{label:"function",permalink:"/blog/tags/function"},{label:"azure",permalink:"/blog/tags/azure"}],readingTime:3.42,truncated:!1,prevItem:{title:"Returning",permalink:"/blog/returning"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l=[{value:"Setting the scene",id:"setting-the-scene",children:[]},{value:"So what&#39;s the problem here?",id:"so-whats-the-problem-here",children:[]},{value:"The solution",id:"the-solution",children:[]}],u={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setting-the-scene"},"Setting the scene"),(0,a.kt)("p",null,"Okay that title has quite a few elements to it, so let's break down exactly what we're trying to do here..."),(0,a.kt)("p",null,"Our situation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An Azure Function running on a consumption plan"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots"},"Deployment slots")," configured within our IaC (a guide on these could be a separate post)"),(0,a.kt)("li",{parentName:"ul"},"An ADO pipeline that deploys our IaC, code and then swaps our staging and production slot")),(0,a.kt)("h2",{id:"so-whats-the-problem-here"},"So what's the problem here?"),(0,a.kt)("p",null,"Our problem is that with the current setup, swapping slots on a consumption Function assumes healthiness based on loading the root URL of your Function App. This may be suitable for simple Functions, but as soon as your Function has downstream dependencies (such as a reliance on a DB, queue or other API), our requirements become more complicated. Ideally, our deployment process would look something like :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deploy infrastructure"),(0,a.kt)("li",{parentName:"ul"},"Deploy code to staging slot"),(0,a.kt)("li",{parentName:"ul"},"Check downstream dependencies are correctly configured and accessible to staging slot"),(0,a.kt)("li",{parentName:"ul"},"Swap staging and production slot")),(0,a.kt)("p",null,"Hopefully you can see now that our root URL is letting us down slightly."),(0,a.kt)("p",null,"This is where we can turn to health-checks. In many services (App Service, Kubernetes etc), zero-downtime deployments utilise health probes, which hit a predefined HTTP endpoint to determine that your app is ready and healthy. An experienced blogger and all-round smart guy named John Reilly has already created a similar post ",(0,a.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"},"here")," to explain how we can achieve this for Azure App Service. This process can be followed if you're running your Functions on an App Service plan. If only this worked for consumption Functions too, my post would be completely unnecessary!\nUnfortunately, it doesn't. The ",(0,a.kt)("inlineCode",{parentName:"p"},"healthcheckPath")," used in App Service to facilitate this functionality is not supported on the consumption plan. Annoying, but we still have a solution!"),(0,a.kt)("h2",{id:"the-solution"},"The solution"),(0,a.kt)("p",null,"There are some sneaky appsettings that we can set on our Function. These configure which endpoint is used during slot warmup to check your slot is healthy. The appsettings are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"appsettings" : [\n    {\n        "name": "WEBSITE_WARMUP_PATH",\n        "value": "[parameters(\'healthcheckPath\')]"\n    },\n    {\n        "name": "WEBSITE_SWAP_WARMUP_PING_PATH",\n        "value": "[parameters(\'healthcheckPath\')]"\n    },\n    {\n        "name": "WEBSITE_SWAP_WARMUP_PING_STATUSES",\n        "value": "200"\n    }\n    ...\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WEBSITE_WARMUP_PATH")," - Used in a few different areas of Azure. The reason we need it is because we have authentication enabled across all endpoints of our Function. Unlike the healthcheckPath functionality of app-service, the Function slot warmup process does not run 'behind' the auth/ip restriction layer. Therefore, this appsetting specifies that the authentication layer should ignore this path and allow anonymous calls. This should be considered carefully with your use-case, ensuring that you're not opening yourself up to DOS attacks or returning sensitive information that can be used as a security hole."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WEBSITE_SWAP_WARMUP_PING_PATH")," - The path to your healthcheck/ping endpoint on your Function. e.g. '/api/healthcheck'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WEBSITE_SWAP_WARMUP_PING_STATUSES")," - The statuses that you will accept as a successful response from your healthcheck endpoint. Without this, Azure will consider some redirect status codes as successful responses, so in our example we're making this much more specific with just a '200' considered successful.")),(0,a.kt)("p",null,"After adding this into your ARM template for the Function ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft.Web/Sites")," and it's associated slot, you're good to go! The final step is to ensure that your ADO pipeline is running the task below to swap slots on your Function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- task: AzureAppServiceManager@0\n  displayName: 'Swap Staging Slot with Production'\n  inputs:\n    action: 'Swap Slots'\n    azureSubscription: '$(azureSubscription)'\n    resourceGroupName: $(resourceGroupName)\n    webAppName: $(functionName)\n    SourceSlot: 'stage'\n")),(0,a.kt)("p",null,"Running this ADO pipeline step will now check your ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBSITE_SWAP_WARMUP_PING_PATH")," is returning the expected status before swapping your slot into production. This should greatly reduce the likelihood of a consumption Function being deployed to production with misconfigured dependencies (e.g. invalid connection-string). You could easily implement this pattern for any consumption Functions within your estate, even non-http-triggers, all you'd need to do is ensure that an associated healthcheck http-trigger Function was deployed alongside it."),(0,a.kt)("p",null,"That should do us for this one! If anything isn't clear, get in touch and I'd be happy to provide more reproducable examples of the entire ARM template and pipeline steps."),(0,a.kt)("p",null,"Until next time..."))}p.isMDXComponent=!0}}]);