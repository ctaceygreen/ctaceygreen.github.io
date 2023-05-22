"use strict";(self.webpackChunkctaceygreen_github_io=self.webpackChunkctaceygreen_github_io||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"paved-paths-series-part-4-the-anatomy-of-paved-paths","metadata":{"permalink":"/blog/paved-paths-series-part-4-the-anatomy-of-paved-paths","editUrl":"https://github.com/ctaceygreen/ctaceygreen.github.io/blog/2023-05-21-paved-paths-04-anatomy-of-paved-paths/index.md","source":"@site/blog/2023-05-21-paved-paths-04-anatomy-of-paved-paths/index.md","title":"Paved Paths Series - Part 4 - The Anatomy of Paved Paths","description":"Part 4 of the series - A deeper dive into the inner workings of paved paths","date":"2023-05-21T00:00:00.000Z","formattedDate":"May 21, 2023","tags":[{"label":"paved-path","permalink":"/blog/tags/paved-path"},{"label":"anatomy","permalink":"/blog/tags/anatomy"},{"label":"inner-workings","permalink":"/blog/tags/inner-workings"},{"label":"building-blocks","permalink":"/blog/tags/building-blocks"},{"label":"blueprints","permalink":"/blog/tags/blueprints"},{"label":"funnels","permalink":"/blog/tags/funnels"},{"label":"culture","permalink":"/blog/tags/culture"}],"readingTime":10.62,"hasTruncateMarker":true,"authors":[{"name":"Chris Tacey-Green","title":"Engineer, Architect, Human","url":"https://github.com/ctaceygreen","image_url":"https://avatars.githubusercontent.com/u/11404995?v=4","imageURL":"https://avatars.githubusercontent.com/u/11404995?v=4"},{"name":"Rick Roche","title":"Software Engineer, Solutions Architect, Hiking Enthusiast","url":"https://www.rickroche.com/","image_url":"https://www.rickroche.com/images/avatar.png","imageURL":"https://www.rickroche.com/images/avatar.png"}],"frontMatter":{"unlisted":true,"slug":"paved-paths-series-part-4-the-anatomy-of-paved-paths","title":"Paved Paths Series - Part 4 - The Anatomy of Paved Paths","description":"Part 4 of the series - A deeper dive into the inner workings of paved paths","authors":[{"name":"Chris Tacey-Green","title":"Engineer, Architect, Human","url":"https://github.com/ctaceygreen","image_url":"https://avatars.githubusercontent.com/u/11404995?v=4","imageURL":"https://avatars.githubusercontent.com/u/11404995?v=4"},{"name":"Rick Roche","title":"Software Engineer, Solutions Architect, Hiking Enthusiast","url":"https://www.rickroche.com/","image_url":"https://www.rickroche.com/images/avatar.png","imageURL":"https://www.rickroche.com/images/avatar.png"}],"image":"https://christaceygreen.com/2023-05-21-paved-paths-04-anatomy-of-paved-paths/title-image.png","tags":["paved-path","anatomy","inner-workings","building-blocks","blueprints","funnels","culture"]},"nextItem":{"title":"Paved Paths Series - Part 2 - A One Pager","permalink":"/blog/paved-paths-series-part-2-a-one-pager"}},"content":"![title image reading \\"The anatomy of paved paths\\" with lego behind it](/2023-05-21-paved-paths-04-anatomy-of-paved-paths/title-image.png)\\n\\n:::info Paved Path Series\\nThis is Part 4 in a series of posts discussing Paved Paths between [Rick](https://www.rickroche.com/) and I.\\n- [Part 1 - Paved Paths: Let\'s talk about paved paths](https://www.rickroche.com/2023/04/paved-paths-series-part-1-lets-talk-about-paved-paths)\\n- [Part 2 - Paved Paths: One Pager](https://christaceygreen.com/blog/paved-paths-series-part-2-a-one-pager)\\n- [Part 3 - Paved Paths: Why Paved Paths?](https://www.rickroche.com/2023/05/paved-paths-series-part-3-why-paved-paths)\\n:::\\n\\nIn this post, we explore the inner workings of what makes up a paved path, aiming to demystify the components that will help you to realise the characteristics of a good paved path.\\n\\n# What are they made of?\\n\\nPaved paths will tend to be specific to your organisation, your tech stack and your principles but there are several questions that they should be able to answer, spanning four categories\\n- Building Blocks\\n- Blueprints & Funnels\\n- Documentation and Onboarding\\n- Culture\\n\\n\x3c!--truncate--\x3e\\n\\n\\n![Venn diagram of the intersection of four circles, Docs & Onboarding, Blueprints & funnels, Building blocks, and Culture](paved-path-venn.png)\\n\\n\\n## Building blocks\\n\\n### Categorise your building blocks\\n\\n:::info Answers the questions:\\n- When I need to perform \\"X\\" in my app/service, what tool/technology do I use?\\n- I want to \\"do X\\", do we have something in the organisation that enables that already?\\n- Do we have multiple technologies/tools doing the same thing? How do I know what to choose? What is the tools\' lifecycle?\\n- To adopt this approach, what cultural changes are needed in the team?\\n:::\\n\\nThere are a general set of styles of building blocks that are useful here:\\n\\n**Infrastructure building blocks** - ingress (load balancing, WAF etc), compute, secrets / config management, feature flags etc\\n- Think of all the components you need to bring your architecture to life\\n\\n**Application building blocks** - internal libraries, common project structure, scaffolded apps with add-ins for observability, authN/Z, using config / secrets / feature flags etc\\n- e.g. Spring Initializr for Spring Boot projects or dotnet templates\\n\\n**Workflow / process building blocks** - Dev(SecFin...)Ops\\n- Things that run in our pipelines - start small and increment here\\n\\t- e.g. Dependency management, SAST, SCA, tests, linters, cost management etc\\n\\n:::caution\\nMake this a rule:\xa0**If it\'s not part of your pipeline, it doesn\'t exist**\\n:::\\n\\nWrite these building blocks down, they form a set of outlines that your paved paths aim to fill out over time, a roadmap of sorts. This can be as simple as a list on a wiki, modelled in software (Enterprise Architecture tools etc), loaded into an Internal Developer Portal or put into a picture. Make it accessible to all, easy to navigate and easy to update.\\n\\n![](paved-paths-anatomy-categories.png)\\n\\nIn your organisation, you will most likely find components that are fulfilled by multiple applications / libraries, a simple way to highlight the lifecycle of these is to use a technology radar and [Build your Own Radar](https://www.thoughtworks.com/radar/byor). This helps teams to decide what they should be phasing in, and phasing out.\\n\\n### How to structure your building blocks\\n\\nWhenever we think of building blocks, LEGO comes to mind. Keeping the building blocks composable is a great idea - you don\'t want your paved paths to become a new ball of mud.\\n\\nFor **infrastructure** building blocks, outputs could be layered Infrastructure as Code (IaC) modules\\n- Tier 1 - discrete components. e.g. a load balancer module, a WAF module\\n- Tier 2 - \u201cLEGO\u201d style building blocks, using tier 1. e.g. an application load balancer with WAF\\n-  Tier 3 - \u201cDUPLO\u201d style building blocks that enable infra needed to realise a blueprint - one click accelerators using tier 1 and 2. e.g. a public facing static web application\\n\\nFor **workflow / process** building blocks, outputs could be a pipeline template library\\n- Tier 1 - discrete jobs. e.g. build container, scan container, push to registry\\n- Tier 2 - \u201cLEGO\u201d style building blocks, orchestrating tier 1. e.g. build &rarr; scan &rarr; push to registry\\n-  Tier 3 - \u201cDUPLO\u201d style building blocks that enable common stages in a pipeline using tier 1 and tier 2\\n- Tier 4 - full end-to-end pipelines for specific blueprints or generic pipeline structures. e.g. Full CI/CD spanning multiple environments\\n\\nAdding extensibility points to all pipeline templates in tiers 3/4 will help to avoid duplication where teams want \\"almost\\" whats there.\\n\\nFor **application** building blocks, outputs could be internal code libraries, such as `npm` or `nuget` packages\\n- Tier 1 - base functionality, following engineering standards. e.g. Logging implementation. Authentication middleware.\\n- Tier 2 - \\"LEGO\\" style building blocks, using tier 1, combining into a common bootstrapping library. e.g. ServiceCollection extension methods for a REST API setting up auth middleware and standard logging of HTTP requests.\\n- Tier 3 - \\"DUPLO\\" style building blocks, using tier 1 and tier 2, that implement a common pattern or process. e.g. A base class for event-driven handlers, implementing an inbox pattern and standard event handling methods.\\n\\nThink about what guard rails can be put in place for each building block. We like the \\"prevent / detect / guide\\" model:\\n- **Prevent** controls stop teams from doing things that violate a policy or standard. E.g. preventing the creation of a load balancer exposing HTTP or preventing the push of a build of an image that has critical vulnerabilities to your registry.\\n- **Detect** controls allow teams to do things that may not be perfect, or mitigated by other controls but allow them to proceed and then a secondary process monitors them.\\n- **Guide** controls are simply guidance and lessons learnt in using different components.\\n\\nThe goal is to enable teams to move quickly and safely, enabling them to compose their own high-quality solutions using the building blocks. This is where we would push for the inclusion of standards, to make it easy for teams to do the \\"right things\\".\\n\\n\\n## Blueprints and funnels\\n\\n:::info Answers the questions:\\n- What are the common patterns / deployment options that are supported?\\n- When I need to do Z, is there a set of accelerators that bootstrap my starting point?\\n- For my use-case how do I know what paved path to choose?\\n:::\\n\\nOutputs would be common blueprints for popular use cases, highlighting technology choices, non-functional characteristics and security. Blueprints should select the building blocks needed to realise the desired architecture, compose them together and provide tooling that allows teams to bootstrap and go. **Blueprints are not pretty pictures - they are evolving software**.\\n\\nE.g.\\n- A Java based internal API\\n- A Python based public API\\n- A .NET based asynchronous service\\n- A public facing static web application\\n\\nThe focus should be on enabling self-service. Iterating on this tooling with teams is critically important; we can easily get stuck into months of development building a CLI tool that no one will use. Make these blueprints accessible, get feedback from your users and iterate.\\n\\nExamples would be (from basic to advanced)\\n- A set of steps on a wiki, illustrating which steps to follow\\n- Repositories with fully functional code (app & infra) that teams can clone, run and modify\\n- A CLI tool that walks them through a wizard, creating repo\'s, infrastructure and pipelines as needed\\n\\n![](paved-path-blueprint-accelerate.png)\\n\\n**Funnels** are decision trees that allow teams to walk through their use case and end up selecting the correct blueprint. E.g. Asking questions around the users or systems that interact with the service being built. These questions will lead to different blueprints: one for client credential grant flow or one for PKCE. Or helping a team decide if their service is public facing and needs to be protected by a public facing WAF directly.\\n\\n![](paved-paths-anatomy-funnel.png)\\n\\n## Culture\\n\\nInterwoven throughout your paved paths will be elements that influence the way your teams work. You may be moving teams towards trunk-based development or separating release and deployment using feature flags. Without guidance as to the why, and how to use the techniques effectively, your paved paths with struggle to gain traction, adoption and success.\\n\\nSimilarly, by shifting functions left, or enabling autonomy, there will be new responsibilities that teams are now accountable for. These need to be articulated, discussed and understood by all involved - you cannot over communicate these cultural changes.\\n\\nSpend time with the teams adopting your paved paths, understand what aspects of their daily processes are affected and help them adjust. It could be as simple as sharing links such as [Ship / Show / Ask](https://martinfowler.com/articles/ship-show-ask.html) to help them decide when to push straight to trunk. Spend time with engineering managers and agile practitioners in your organisation to help them understand these changes as well. Processes will need to be adapted and updated.\\n\\nCharacteristics of a healthy culture, ready for paved paths would be:\\n- A continuous improvement mindset\\n- An organisation sponsoring long-term value, rather than short-term wins\\n- Collaborative, proactive communication and knowledge sharing\\n- Iterative and incremental development\\n- Embracing DevOps practices, see [Culture - Continuous Delivery](https://continuousdelivery.com/implementing/culture/)\\n\\n**Communicate. Listen. Iterate - As a collective.**\\n\\n\\n## Documentation and Onboarding\\n\\nWhen thinking of how to catalogue and share paved paths, the first thing that will most likely jump to mind is [backstage.io](https://backstage.io/) or similar Internal Developer Portal (IDP). We will immediately temper the enthusiasm. Getting an IDP setup and showcasing all your paved paths will take time, time that could be better spent creating more building blocks and blueprints. You will most likely end up with an IDP, but gradually work towards that goal - a shiny portal doesn\'t enable teams to be autonomous or get up and running quickly, but a good set of building blocks, blueprints and a well-written `README.md` will.\\n\\nSplit your documentation into two categories - one for the users of the paved paths (your engineers) and one for contributors to the paved paths. This will allow you to focus on enablement for engineers using the paved paths and separate, deep, technical \\"how this all works\\" style documentation. \\n\\nInside each of these categories, using the [Divio Documentation System](https://documentation.divio.com/) is a great place to start. It provides simple principles to guide how your documents be structured into four functions: tutorials, how-to guides, reference and explanation. Keep the functions distinct from one another and split into the two audience categories. E.g. Under tutorials for your engineers, you would expect to find a tutorial on getting an API into production. Under tutorials for your contributors, you would expect to find a tutorial on adding a new terraform module to your infrastructure building blocks.\\n\\n:::tip \\nThe key thing to keep in mind at all times is the journey that the hikers are taking through your documentation. Put yourself in their shoes, blank out everything you already know, and stare at the woodland with fresh eyes. How well does your documentation hold up? Is it clear where to start? Is it intuitive to navigate? Can your great tooling actually be discovered? If an internal tool drops in the forest, but no one is around to hear it, does it make a sound?\\n:::\\n\\nGetting teams started using your paved paths is critical to their success and should be straight-forward. Teams using your documentation will test it - no documentation will survive first contact with them and this feedback is vital to help you improve. When onboarding teams, make feedback loops on the experience explicit - create mechanisms for them to ask questions, provide feedback and enable you to learn. Make getting help a first class citizen, add `--help`  to all your tools with links to your documentation, create a messaging channel for questions and answers. Questions your users have will highlight gaps in the developer experience as well as places that require more enablement help. Similarly, make giving feedback a first class citizen - don\'t be afraid to poll your users.\\n\\nWith whatever we produce, the vital thing is that we\'re treating our paved paths with the respect they deserve. Just as we have UX (user experience) for our client-facing products, we have DX (developer experience) for our paved paths. Fundamentally, all the same techniques should be used here as we would use for client-facing products. Research, agile methodologies, continuous feedback, continuous improvement. To succeed, we can use techniques we\'re already familiar with, the only difference is that our customer is an engineer!\\n\\nNext, in part 5, we\'ll discuss where Platform Engineering comes into all of this, and whether you *need* it to build paved paths.\\n\\n## References\\n\\n- [The Twelve-Factor App](https://12factor.net/)\\n- [Build your Own Radar | Thoughtworks](https://www.thoughtworks.com/radar/byor)\\n- [What is a Paved Path?.by Matt Stine | CodeX | Medium](https://medium.com/codex/what-is-a-paved-path-b2294463a3a9)\\n- [Create your Paved Roads (hella-secure.com)](https://www.hella-secure.com/post/create-your-paved-roads)\\n- [Paving the Road to Production (infoq.com)](https://www.infoq.com/articles/paving-road-production-coinbase/)\\n- [Designing Golden Paths (redhat.com)](https://cloud.redhat.com/blog/designing-golden-paths)\\n- [How We Use Golden Paths to Solve Fragmentation in Our Software Ecosystem - Spotify Engineering : Spotify Engineering (atspotify.com)](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/)"},{"id":"paved-paths-series-part-2-a-one-pager","metadata":{"permalink":"/blog/paved-paths-series-part-2-a-one-pager","editUrl":"https://github.com/ctaceygreen/ctaceygreen.github.io/blog/2023-04-30-paved-paths-02-one-pager/index.md","source":"@site/blog/2023-04-30-paved-paths-02-one-pager/index.md","title":"Paved Paths Series - Part 2 - A One Pager","description":"Part 2 of the series - Your one-pager to demonstrate the value of paved paths","date":"2023-04-30T00:00:00.000Z","formattedDate":"April 30, 2023","tags":[{"label":"paved-path","permalink":"/blog/tags/paved-path"},{"label":"one-pager","permalink":"/blog/tags/one-pager"},{"label":"summary","permalink":"/blog/tags/summary"}],"readingTime":3.245,"hasTruncateMarker":true,"authors":[{"name":"Chris Tacey-Green","title":"Engineer, Architect, Human","url":"https://github.com/ctaceygreen","image_url":"https://avatars.githubusercontent.com/u/11404995?v=4","imageURL":"https://avatars.githubusercontent.com/u/11404995?v=4"},{"name":"Rick Roche","title":"Software Engineer, Solutions Architect, Hiking Enthusiast","url":"https://www.rickroche.com/","image_url":"https://www.rickroche.com/images/avatar.png","imageURL":"https://www.rickroche.com/images/avatar.png"}],"frontMatter":{"slug":"paved-paths-series-part-2-a-one-pager","title":"Paved Paths Series - Part 2 - A One Pager","description":"Part 2 of the series - Your one-pager to demonstrate the value of paved paths","authors":[{"name":"Chris Tacey-Green","title":"Engineer, Architect, Human","url":"https://github.com/ctaceygreen","image_url":"https://avatars.githubusercontent.com/u/11404995?v=4","imageURL":"https://avatars.githubusercontent.com/u/11404995?v=4"},{"name":"Rick Roche","title":"Software Engineer, Solutions Architect, Hiking Enthusiast","url":"https://www.rickroche.com/","image_url":"https://www.rickroche.com/images/avatar.png","imageURL":"https://www.rickroche.com/images/avatar.png"}],"image":"https://christaceygreen.com/2023-04-30-paved-paths-02-one-pager/title-image.png","tags":["paved-path","one-pager","summary"]},"prevItem":{"title":"Paved Paths Series - Part 4 - The Anatomy of Paved Paths","permalink":"/blog/paved-paths-series-part-4-the-anatomy-of-paved-paths"},"nextItem":{"title":"Returning","permalink":"/blog/returning"}},"content":"![title image reading \\"Paved Paths: A one pager\\" with a hiking photo](/2023-04-30-paved-paths-02-one-pager/title-image.png)\\n\\n:::info Paved Path Series\\nThis is Part 2 in a series of posts discussing Paved Paths between [Rick](https://www.rickroche.com/) and I.\\n- [Part 1 - Paved Paths: Let\'s talk about paved paths](https://www.rickroche.com/2023/04/paved-paths-series-part-1-lets-talk-about-paved-paths)\\n- [Part 3 - Paved Paths: Why Paved Paths?](https://www.rickroche.com/2023/05/paved-paths-series-part-3-why-paved-paths)\\n- [Part 4 - Paved Paths: The Anatomy of Paved Paths](https://christaceygreen.com/blog/paved-paths-series-part-4-the-anatomy-of-paved-paths)\\n:::\\n\\n:::note Why just one page?\\nWe both found ourselves needing to write a one-page summary of paved paths. This would most likely act as a landing page for someone to \'get the gist\' of what these are. Low detail. Imagine the CxO of your company wants to know what these are.\\n:::\\n\\n\x3c!--truncate--\x3e\\n\\n# What is a paved path?\\nA paved path ensures that a well-trodden route is an easy, quick and safe way of reaching a clearly defined destination.\\n\\n## Hiking\\nImagine you\'re hiking through a woodland. Your destination is \'Chuck\'s Caf\xe9\', 4 miles away. You have a couple of options in this situation:\\n1. Woodland map in hand, follow the predefined path to the caf\xe9.\\n2. Knife in hand, head directly into the bush, confident you have the navigation and athletic abilities to reach the caf\xe9.\\n\\n![image of a path through woodland with two possible routes](./forest_path.png)\\n\\nClearly, #2 is a much more adventurous decision to make. It may result in you learning new skills, or honing your existing ones. It could drive you to solve problems in new, innovative ways. However, it will most likely cause you to reach the caf\xe9 much later than if you\'d followed the predefined path, dishevelled and missing your watch.\\n\\nOption #1 is our paved path. It is predictable, safe, and fast. It will need walkers to make very few decisions(maybe a fork or two), will be smooth to traverse, and protects them from the risks of the deeper woodland (see: Bears). It is also unlikely to yield any opportunities for innovation.\\n\\nThis is the equivalent of our Engineers aiming for their destination of a \'REST API\'. Nothing is stopping them from taking the untrodden path, where they will define patterns from scratch, and solve all of the problems along the way. It takes time though. It\'s also risky; there may well be challenges the team hadn\'t even considered when they started the journey, like securing their API against internal attackers. A paved path takes care of all of this for them, and much like a cookie-cutter, allows them to produce, in this example, APIs of consistent quality in a predictable amount of time.\\n\\n# Does this turn us into a stale assembly line?\\n\\nNo. But it could, if used incorrectly.\\n\\nTo succeed, we need exploitation **and** exploration. \\n\\nIf all of our teams only ever follow a fixed paved path, innovation dies. The path never evolves. The destination never changes. The technical value of the company will slowly diminish, until we wake up and realise none of our customer base owns a fax machine anymore.\\n\\nAt the other extreme, if every team is adventuring into the woodland when 80% of them are trying to reach the same destination, we\'re not exploiting enough. We\'re solving the same problems in different ways, over and over again, instead of focusing on innovating elsewhere.\\n\\nSo... we need both. We need paved paths, which serves the 80% across common use cases. We deliver consistently and with quality. The 20% are in the woodland, exploring new paths, new patterns, new technologies. These new paths may become forks on the paved path, as destinations evolve. If we ensure a balance between exploitation and exploration, paved paths massively empower our engineers and the organisation as a whole, without ever becoming stale.\\n\\nIn part 3 we go into more detail on why organisations need paved paths - read it [here](https://www.rickroche.com/2023/05/paved-paths-series-part-3-why-paved-paths) !\\n\\nFeatured image background by [Austin Ban](https://unsplash.com/@austinban?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/juHayWuaaoQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)\\nMap image generated by [Craiyon](https://www.craiyon.com/), updated using [excalidraw](https://github.com/excalidraw/excalidraw)"},{"id":"returning","metadata":{"permalink":"/blog/returning","editUrl":"https://github.com/ctaceygreen/ctaceygreen.github.io/blog/2023-04-26-returning/index.md","source":"@site/blog/2023-04-26-returning/index.md","title":"Returning","description":"So I disappeared from blogging for...a year and a half.","date":"2023-04-26T00:00:00.000Z","formattedDate":"April 26, 2023","tags":[{"label":"returning","permalink":"/blog/tags/returning"}],"readingTime":0.735,"hasTruncateMarker":true,"authors":[{"name":"Chris Tacey-Green","title":"Engineer, Architect, Human","url":"https://github.com/ctaceygreen","imageURL":"https://avatars.githubusercontent.com/u/11404995?v=4"}],"frontMatter":{"slug":"returning","title":"Returning","author":"Chris Tacey-Green","author_title":"Engineer, Architect, Human","author_url":"https://github.com/ctaceygreen","author_image_url":"https://avatars.githubusercontent.com/u/11404995?v=4","tags":["returning"]},"prevItem":{"title":"Paved Paths Series - Part 2 - A One Pager","permalink":"/blog/paved-paths-series-part-2-a-one-pager"},"nextItem":{"title":"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?","permalink":"/blog/azure-consumption-functions-healthcheck-with-deployment-slots"}},"content":"So I disappeared from blogging for...a year and a half.\\n\\nI apologise. I was focusing my energy on a very important deployment - my daughter! And if I\'m honest, on balance, my daughter probably wins out in importance versus this blog.\\n\\n\x3c!--truncate--\x3e\\n\\nBut my daughter is now an incredibly cute, happy and genuinely funny 1 year old. I reckon we\'re at a point where I can find spare minutes in my day to get back into blogging. This isn\'t just a random thought though, I have plans! I\'m currently working on a series of posts, alongside an epic human, on a topic I find extremely interesting. We also happen to believe it\'s vitally important given the direction the industry is heading.\\n\\nSo not only will I be back, but I\'ll be back with some regular posts! It\'s an Easter miracle.\\n\\nOK, that\'s all. See you very soon..."},{"id":"azure-consumption-functions-healthcheck-with-deployment-slots","metadata":{"permalink":"/blog/azure-consumption-functions-healthcheck-with-deployment-slots","editUrl":"https://github.com/ctaceygreen/ctaceygreen.github.io/blog/2021-08-26-azure-consumption-functions-healthcheck-with-deployment-slots/index.md","source":"@site/blog/2021-08-26-azure-consumption-functions-healthcheck-with-deployment-slots/index.md","title":"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?","description":"Setting the scene","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"deployment-slots","permalink":"/blog/tags/deployment-slots"},{"label":"healthcheck","permalink":"/blog/tags/healthcheck"},{"label":"consumption","permalink":"/blog/tags/consumption"},{"label":"function","permalink":"/blog/tags/function"},{"label":"azure","permalink":"/blog/tags/azure"}],"readingTime":3.425,"hasTruncateMarker":true,"authors":[{"name":"Chris Tacey-Green","title":"Engineer, Architect, Human","url":"https://github.com/ctaceygreen","imageURL":"https://avatars.githubusercontent.com/u/11404995?v=4"}],"frontMatter":{"slug":"azure-consumption-functions-healthcheck-with-deployment-slots","title":"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?","author":"Chris Tacey-Green","author_title":"Engineer, Architect, Human","author_url":"https://github.com/ctaceygreen","author_image_url":"https://avatars.githubusercontent.com/u/11404995?v=4","tags":["deployment-slots","healthcheck","consumption","function","azure"]},"prevItem":{"title":"Returning","permalink":"/blog/returning"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"## Setting the scene\\n\\nOkay that title has quite a few elements to it, so let\'s break down exactly what we\'re trying to do here...\\n\\nOur situation:\\n* An Azure Function running on a consumption plan\\n* [Deployment slots](https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots) configured within our IaC (a guide on these could be a separate post)\\n* An ADO pipeline that deploys our IaC, code and then swaps our staging and production slot\\n\\n\x3c!--truncate--\x3e\\n\\n## So what\'s the problem here?\\n\\nOur problem is that with the current setup, swapping slots on a consumption Function assumes healthiness based on loading the root URL of your Function App. This may be suitable for simple Functions, but as soon as your Function has downstream dependencies (such as a reliance on a DB, queue or other API), our requirements become more complicated. Ideally, our deployment process would look something like :\\n* Deploy infrastructure\\n* Deploy code to staging slot\\n* Check downstream dependencies are correctly configured and accessible to staging slot\\n* Swap staging and production slot\\n\\nHopefully you can see now that our root URL is letting us down slightly.\\n\\nThis is where we can turn to health-checks. In many services (App Service, Kubernetes etc), zero-downtime deployments utilise health probes, which hit a predefined HTTP endpoint to determine that your app is ready and healthy. An experienced blogger and all-round smart guy named John Reilly has already created a similar post [here](https://blog.johnnyreilly.com/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments) to explain how we can achieve this for Azure App Service. This process can be followed if you\'re running your Functions on an App Service plan. If only this worked for consumption Functions too, my post would be completely unnecessary!\\nUnfortunately, it doesn\'t. The `healthcheckPath` used in App Service to facilitate this functionality is not supported on the consumption plan. Annoying, but we still have a solution!\\n\\n## The solution\\n\\nThere are some sneaky appsettings that we can set on our Function. These configure which endpoint is used during slot warmup to check your slot is healthy. The appsettings are as follows:\\n\\n```json\\n\\"appsettings\\" : [\\n    {\\n        \\"name\\": \\"WEBSITE_WARMUP_PATH\\",\\n        \\"value\\": \\"[parameters(\'healthcheckPath\')]\\"\\n    },\\n    {\\n        \\"name\\": \\"WEBSITE_SWAP_WARMUP_PING_PATH\\",\\n        \\"value\\": \\"[parameters(\'healthcheckPath\')]\\"\\n    },\\n    {\\n        \\"name\\": \\"WEBSITE_SWAP_WARMUP_PING_STATUSES\\",\\n        \\"value\\": \\"200\\"\\n    }\\n    ...\\n]\\n```\\n\\n* `WEBSITE_WARMUP_PATH` - Used in a few different areas of Azure. The reason we need it is because we have authentication enabled across all endpoints of our Function. Unlike the healthcheckPath functionality of app-service, the Function slot warmup process does not run \'behind\' the auth/ip restriction layer. Therefore, this appsetting specifies that the authentication layer should ignore this path and allow anonymous calls. This should be considered carefully with your use-case, ensuring that you\'re not opening yourself up to DOS attacks or returning sensitive information that can be used as a security hole.\\n* `WEBSITE_SWAP_WARMUP_PING_PATH` - The path to your healthcheck/ping endpoint on your Function. e.g. \'/api/healthcheck\'\\n* `WEBSITE_SWAP_WARMUP_PING_STATUSES` - The statuses that you will accept as a successful response from your healthcheck endpoint. Without this, Azure will consider some redirect status codes as successful responses, so in our example we\'re making this much more specific with just a \'200\' considered successful.\\n\\nAfter adding this into your ARM template for the Function `Microsoft.Web/Sites` and it\'s associated slot, you\'re good to go! The final step is to ensure that your ADO pipeline is running the task below to swap slots on your Function:\\n\\n```yml\\n- task: AzureAppServiceManager@0\\n  displayName: \'Swap Staging Slot with Production\'\\n  inputs:\\n    action: \'Swap Slots\'\\n    azureSubscription: \'$(azureSubscription)\'\\n    resourceGroupName: $(resourceGroupName)\\n    webAppName: $(functionName)\\n    SourceSlot: \'stage\'\\n```\\n\\nRunning this ADO pipeline step will now check your `WEBSITE_SWAP_WARMUP_PING_PATH` is returning the expected status before swapping your slot into production. This should greatly reduce the likelihood of a consumption Function being deployed to production with misconfigured dependencies (e.g. invalid connection-string). You could easily implement this pattern for any consumption Functions within your estate, even non-http-triggers, all you\'d need to do is ensure that an associated healthcheck http-trigger Function was deployed alongside it.\\n\\nThat should do us for this one! If anything isn\'t clear, get in touch and I\'d be happy to provide more reproducable examples of the entire ARM template and pipeline steps.\\n\\nUntil next time..."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/ctaceygreen/ctaceygreen.github.io/blog/2021-08-1-welcome/index.md","source":"@site/blog/2021-08-1-welcome/index.md","title":"Welcome","description":"I figured the first post couldn\'t be a heavy technical braindump. That would be rude.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"welcome","permalink":"/blog/tags/welcome"}],"readingTime":0.985,"hasTruncateMarker":true,"authors":[{"name":"Chris Tacey-Green","title":"Engineer, Architect, Human","url":"https://github.com/ctaceygreen","imageURL":"https://avatars.githubusercontent.com/u/11404995?v=4"}],"frontMatter":{"slug":"welcome","title":"Welcome","author":"Chris Tacey-Green","author_title":"Engineer, Architect, Human","author_url":"https://github.com/ctaceygreen","author_image_url":"https://avatars.githubusercontent.com/u/11404995?v=4","tags":["welcome"]},"prevItem":{"title":"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?","permalink":"/blog/azure-consumption-functions-healthcheck-with-deployment-slots"}},"content":"I figured the first post couldn\'t be a heavy technical braindump. That would be rude. \\n\\n\x3c!--truncate--\x3e\\n\\nInstead, here\'s a much more bite-size and welcoming \'Welcome\' post, to break the blog in.\\nSince I\'m British, this is where I\'d naturally talk about the weather to break the ice. So.. it\'s the middle of Summer in the UK, and therefore has been wet, windy and grey today.\\n\\nGood.\\n\\nWith that out of the way, here\'s a quick summary of what topics to expect from the first bunch of posts:\\n* Approaching deployment in Azure Devops\\n* Monitoring in Azure\\n* Alerting in Azure\\n* Logging in Azure (Functions and App Service)\\n* Securing an application in Azure App Service\\n* Azure integration technologies\\n* Why services in Azure want to be event-driven\\n* Building an event-driven solution in Azure\\n* Things you\'ll need in your Azure Function code\\n* Why templates are your friend\\n* Integration in a Hybrid cloud model\\n\\nVery Azure-heavy, I realise. But those who have poked me to create this blog are hoping for some Azure guidance, so this is where I\'ll start my journey into blogging.\\n\\nI better get writing my first post then..."}]}')}}]);