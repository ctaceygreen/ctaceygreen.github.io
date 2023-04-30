"use strict";(self.webpackChunkctaceygreen_github_io=self.webpackChunkctaceygreen_github_io||[]).push([[2905],{6611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(3117),o=(n(7294),n(3905));const a={slug:"azure-consumption-functions-healthcheck-with-deployment-slots",title:"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?",author:"Chris Tacey-Green",author_title:"Engineer, Architect, Human",author_url:"https://github.com/ctaceygreen",author_image_url:"https://avatars.githubusercontent.com/u/11404995?v=4",tags:["deployment-slots","healthcheck","consumption","function","azure"]},i=void 0,c={permalink:"/blog/azure-consumption-functions-healthcheck-with-deployment-slots",editUrl:"https://github.com/ctaceygreen/ctaceygreen.github.io/blog/2021-08-26-azure-consumption-functions-healthcheck-with-deployment-slots/index.md",source:"@site/blog/2021-08-26-azure-consumption-functions-healthcheck-with-deployment-slots/index.md",title:"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?",description:"Setting the scene",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"deployment-slots",permalink:"/blog/tags/deployment-slots"},{label:"healthcheck",permalink:"/blog/tags/healthcheck"},{label:"consumption",permalink:"/blog/tags/consumption"},{label:"function",permalink:"/blog/tags/function"},{label:"azure",permalink:"/blog/tags/azure"}],readingTime:3.425,hasTruncateMarker:!0,authors:[{name:"Chris Tacey-Green",title:"Engineer, Architect, Human",url:"https://github.com/ctaceygreen",imageURL:"https://avatars.githubusercontent.com/u/11404995?v=4"}],frontMatter:{slug:"azure-consumption-functions-healthcheck-with-deployment-slots",title:"How do I check the health of my Azure Consumption Functions when swapping Deployment Slots?",author:"Chris Tacey-Green",author_title:"Engineer, Architect, Human",author_url:"https://github.com/ctaceygreen",author_image_url:"https://avatars.githubusercontent.com/u/11404995?v=4",tags:["deployment-slots","healthcheck","consumption","function","azure"]},prevItem:{title:"Returning",permalink:"/blog/returning"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},u=[{value:"Setting the scene",id:"setting-the-scene",level:2}],s={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setting-the-scene"},"Setting the scene"),(0,o.kt)("p",null,"Okay that title has quite a few elements to it, so let's break down exactly what we're trying to do here..."),(0,o.kt)("p",null,"Our situation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An Azure Function running on a consumption plan"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots"},"Deployment slots")," configured within our IaC (a guide on these could be a separate post)"),(0,o.kt)("li",{parentName:"ul"},"An ADO pipeline that deploys our IaC, code and then swaps our staging and production slot")))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||h[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);