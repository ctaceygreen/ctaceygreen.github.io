"use strict";(self.webpackChunkctaceygreen_github_io=self.webpackChunkctaceygreen_github_io||[]).push([[918],{7313:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n=a(7294),l=a(6010),r=a(907),i=a(3783),s=a(6742),o=a(4973);var c=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(2263),m=a(3018);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.versionMetadata,l=(0,d.Z)().siteConfig.title,i=(0,r.gA)({failfast:!0}).pluginId,s=(0,m.J)(i).savePreferredVersionName,o=(0,r.Jo)(i),c=o.latestDocSuggestion,u=o.latestVersionSuggestion,p=null!=c?c:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:u.label,to:p.path,onClick:function(){return s(u.name)}})))}var E=function(e){var t=e.versionMetadata;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(p,{versionMetadata:t})},b=a(1217);function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement(n.Fragment,null,n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(571),L="tocCollapsible_1PrD",Z="tocCollapsibleButton_2O1e",k="tocCollapsibleContent_2Ydz",T="tocCollapsibleExpanded_3GYr";function U(e){var t,a=e.toc,r=e.className,i=(0,m.uR)({initialState:!0}),s=i.collapsed,c=i.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(L,(t={},t[T]=!s,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",Z),onClick:c},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:k,collapsed:s},n.createElement(N.r,{toc:a})))}var y=a(6146),C=a(6159),w="docItemContainer_33ec",A="lastUpdated_3DPF",B="docItemCol_3FnS",x="tocMobile_3Hoh";var I=function(e){var t,a=e.content,s=e.versionMetadata,o=a.metadata,d=a.frontMatter,m=d.image,u=d.keywords,v=d.hide_title,h=d.hide_table_of_contents,p=o.description,g=o.title,f=o.editUrl,L=o.lastUpdatedAt,Z=o.formattedLastUpdatedAt,k=o.lastUpdatedBy,T=(0,r.gA)({failfast:!0}).pluginId,I=(0,r.gB)(T).length>1,M=!v&&void 0===a.contentTitle,D=(0,i.Z)(),O=!h&&a.toc&&a.toc.length>0,S=O&&("desktop"===D||"ssr"===D);return n.createElement(n.Fragment,null,n.createElement(b.Z,{title:g,description:p,keywords:u,image:m}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[B]=!h,t))},n.createElement(E,{versionMetadata:s}),n.createElement("div",{className:w},n.createElement("article",null,I&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",s.label),O&&n.createElement(U,{toc:a.toc,className:x}),n.createElement("div",{className:"markdown"},M&&n.createElement(C.N,null,g),n.createElement(a,null)),(f||L||k)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},f&&n.createElement(y.Z,{editUrl:f})),n.createElement("div",{className:(0,l.Z)("col",A)},(L||k)&&n.createElement(_,{lastUpdatedAt:L,formattedLastUpdatedAt:Z,lastUpdatedBy:k})))),n.createElement(c,{metadata:o}))),S&&n.createElement("div",{className:"col col--3"},n.createElement(N.Z,{toc:a.toc}))))}},6146:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(4973),r=a(2122),i=a(9756),s=a(6010),o="iconEdit_2_ui",c=["className"],d=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(9756),l=a(2122),r=a(7294),i=a(6010),s=a(4973),o=a(3018),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",m=["id"],u=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0,className:d}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,l=e.id,d=(0,n.Z)(e,m),u=(0,o.LU)().navbar.hideOnScroll;return l?r.createElement(t,d,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(a={},a[c]=!u,a)),id:l}),d.children,r.createElement("a",{className:"hash-link",href:"#"+l,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,d)});var t}},571:function(e,t,a){a.d(t,{r:function(){return o},Z:function(){return c}});var n=a(7294),l=a(6010);var r=function(e,t,a){var l=(0,n.useState)(void 0),r=l[0],i=l[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,o=document.getElementsByClassName(e);l<o.length&&!s;){var c=o[l],d=c.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(r&&r.classList.remove(t),c.classList.add(t),i(c),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return r(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);