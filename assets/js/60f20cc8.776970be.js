"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[3987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Extensions configuration",s={unversionedId:"extensions/extensions-configuration",id:"extensions/extensions-configuration",title:"Extensions configuration",description:"Follow instructions here to scaffold your extension. This will assist you in the creation of an extension as a top-level product inside Rancher Dashboard.",source:"@site/docs/extensions/extensions-configuration.md",sourceDirName:"extensions",slug:"/extensions/extensions-configuration",permalink:"/dashboard/extensions/extensions-configuration",draft:!1,tags:[],version:"current",lastUpdatedAt:1704209176,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Getting Started",permalink:"/dashboard/extensions/extensions-getting-started"},next:{title:"Extensions API",permalink:"/dashboard/extensions/api/overview"}},l={},p=[{value:"Extension Package Metadata",id:"extension-package-metadata",level:2},{value:"Configurable Annotations",id:"configurable-annotations",level:3},{value:"Example Configuration",id:"example-configuration",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extensions-configuration"},"Extensions configuration"),(0,r.kt)("p",null,"Follow instructions ",(0,r.kt)("a",{parentName:"p",href:"/dashboard/extensions/extensions-getting-started"},"here")," to scaffold your extension. This will assist you in the creation of an extension as a top-level product inside Rancher Dashboard."),(0,r.kt)("p",null,"Once you've done so, there are some initialization steps specific to extensions. Beyond that, extensions largely work the same as the rest of the dashboard. There are a set of top-level folders that can be defined and used as they are in the dashboard: ",(0,r.kt)("inlineCode",{parentName:"p"},"chart"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-credential"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"detail"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"machine-config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"models"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"promptRemove"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"l10n"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"windowComponents"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dialog"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"formatters"),". You can read about what each of these folders does ",(0,r.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/directory-structure"},"here"),"."),(0,r.kt)("h2",{id:"extension-package-metadata"},"Extension Package Metadata"),(0,r.kt)("p",null,"Each extension package has the ability to customize certain aspects when it comes to compatibility with Rancher Manager/Kubernetes or displaying extension names. These are determined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher.annotations")," object applied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," of an extension package."),(0,r.kt)("p",null,"These annotations allow you to specify compatibility with Kubernetes, Rancher Manager, the Extensions API, and the Rancher UI version by relying on ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/semver/v/6.3.0#ranges"},"semver ranges"),'. As well as version compatibility, you can also specify a Display Name for the Extension package as it appears on the "Extensions" page within the UI.'),(0,r.kt)("h3",{id:"configurable-annotations"},"Configurable Annotations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"catalog.cattle.io/kube-version")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Range")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines if the Kubernetes version that Rancher Manager is utilizing is compatible with the Extension package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"catalog.cattle.io/rancher-version")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Range")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the compatibility of the installed Rancher Manager version with the Extension package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"catalog.cattle.io/ui-extensions-version")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Range")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the Extensions API version that is compatible with the Extension package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"catalog.cattle.io/ui-version")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Range")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the Rancher UI version that is compatible with the Extension package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"catalog.cattle.io/display-name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},'Specifies the Display Name for an Extension package\'s card on the "Extensions" page.')))),(0,r.kt)("h3",{id:"example-configuration"},"Example Configuration"),(0,r.kt)("p",null,"Here's an example configuration of an extensions ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("inlineCode",{parentName:"em"},"./pkg/my-package/package.json")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-package",\n  "description": "my-package plugin description",\n  "version": "0.1.0",\n  "rancher": {\n    "annotations": {\n      "catalog.cattle.io/kube-version": ">= v1.26.0-0 < v1.29.0-0",\n      "catalog.cattle.io/rancher-version": ">= 2.7.7-0 < 2.9.0-0",\n      "catalog.cattle.io/ui-extensions-version": ">= 1.1.0",\n      "catalog.cattle.io/ui-version": ">= 2.7.7-0 < 2.9.0-0",\n      "catalog.cattle.io/display-name": "My Super Great Extension"\n    }\n  },\n  ...\n}\n')))}m.isMDXComponent=!0}}]);