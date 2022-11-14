"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="Kubernetes Resources Data Load Optimizations",l={unversionedId:"code-base-works/kubernetes-resources-data-load",id:"code-base-works/kubernetes-resources-data-load",title:"Kubernetes Resources Data Load Optimizations",description:'In order to improve performance of Rancher Dashboard especially for systems with a large number of resources, several changes have been introduced to the codebase such as incremental loading of list views, manual refresh of list views and optimisation for "secondary" data load.',source:"@site/docs/code-base-works/kubernetes-resources-data-load.md",sourceDirName:"code-base-works",slug:"/code-base-works/kubernetes-resources-data-load",permalink:"/dashboard/code-base-works/kubernetes-resources-data-load",draft:!1,tags:[],version:"current",lastUpdatedAt:1668417951,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keyboard shortcuts",permalink:"/dashboard/code-base-works/keyboard-shortcuts"},next:{title:"Machine Drivers",permalink:"/dashboard/code-base-works/machine-drivers"}},s={},p=[{value:"The <code>resource-manager</code> mixin for secondary data load",id:"the-resource-manager-mixin-for-secondary-data-load",level:2},{value:"Quick usage guide",id:"quick-usage-guide",level:3},{value:"Methods available",id:"methods-available",level:3},{value:"<strong>resourceManagerFetchSecondaryResources</strong>",id:"resourcemanagerfetchsecondaryresources",level:4},{value:"<strong>resourceManagerClearSecondaryResources</strong>",id:"resourcemanagerclearsecondaryresources",level:4},{value:"The <code>resource-fetch</code> mixin for incremental loading and manual refresh",id:"the-resource-fetch-mixin-for-incremental-loading-and-manual-refresh",level:2},{value:"Implementation examples",id:"implementation-examples",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kubernetes-resources-data-load-optimizations"},"Kubernetes Resources Data Load Optimizations"),(0,r.kt)("p",null,'In order to improve performance of Rancher Dashboard especially for systems with a large number of resources, several changes have been introduced to the codebase such as incremental loading of list views, manual refresh of list views and optimisation for "secondary" data load.'),(0,r.kt)("h2",{id:"the-resource-manager-mixin-for-secondary-data-load"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"resource-manager")," mixin for secondary data load"),(0,r.kt)("p",null,'This is the mixin responsible for optimizing the loading of "secondary" data (data that is used to complete information on a given page, ex: populating a select input) which doesn\'t need to be watched (updated via websocket) or stored in the Vue store (Vuex). '),(0,r.kt)("p",null,"It fetches namespaced data directly from our API, avoiding the need to fetch all items and then filtering by a given namespace."),(0,r.kt)("p",null,"If you specify a namespace but any of the given resources you configured for your data fetch is not namespaced, the mixin will take care of that."),(0,r.kt)("p",null,"It will only return the data for successful network requests, throwing a ",(0,r.kt)("inlineCode",{parentName:"p"},"console.error")," for any requests that have failed."),(0,r.kt)("p",null,"It provides a way to fetch data only for namespaced resources, which is very useful on a CREATE screen scenario where if a user toggles the namespace selector, data will need to be fetched again, but only for those namespace-dependent resources."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," by default, data fetched using this mixin will ",(0,r.kt)("strong",{parentName:"p"},"NOT")," have a model applied to it. There's an option called classify that will apply models if needed."),(0,r.kt)("h3",{id:"quick-usage-guide"},"Quick usage guide"),(0,r.kt)("p",null,"Just import the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource-manager")," mixin to the given page, create the configuration variable that tells which data it should load and use the method ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceManagerFetchSecondaryResources")," to load the given data."),(0,r.kt)("p",null,'If you want a code example on Rancher Dashoard, check for a full implementation of the "secondary data load" on ',(0,r.kt)("inlineCode",{parentName:"p"},"mixins/workloads.js"),"."),(0,r.kt)("p",null,"Example: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Importing mixin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import ResourceManager from '@shell/mixins/resource-manager';\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setting up a configuration variable")),(0,r.kt)("p",null,"Allowed params for the configuration object:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"String"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," - Namespace identifier"),(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"Object"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," - Object containing info about the data needed to be fetched and how it should be parsed. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: The object KEY NEEDS to be the resource TYPE!")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"Array"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"data[TYPE].applyTo")," - The array of operations needed to be performed for the specific data TYPE"),(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"String"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"data[TYPE].applyTo[x].var")," - The 'this' property name that should be populated with the data fetched"),(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"Boolean"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"data[TYPE].applyTo[x].classify")," - Whether the data fetched should have a model applied to it"),(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"Function"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"data[TYPE].applyTo[x].parsingFunc")," - Optional parsing function if the fetched data needs to be parsed")),(0,r.kt)("p",null,"Example of a configuration object to be used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource-manager"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"this.secondaryResourceDataConfig = {\n  namespace: 'fleet-default',\n  data: {\n    'secrets': {\n      applyTo: [\n        { var: 'namespacedSecrets' },\n        {\n          var:         'imagePullNamespacedSecrets',\n          parsingFunc: (data) => {\n            return data.filter(secret => (secret._type === 'docker' || secret._type === 'docker_json'));\n          },\n          classify: true\n        }\n      ]\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Looking at the above example, we configuring the secondary data load to get data for the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet-default")," and with fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets"),"from the API and apply it to two diferent variables:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Will apply the full set of results fetched for the resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets")," to variable ",(0,r.kt)("inlineCode",{parentName:"p"},"this.namespacedSecrets"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Will apply the parsed set of results (",(0,r.kt)("inlineCode",{parentName:"p"},"parsingFunc")," defines how data should be parsed) to the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"this.imagePullNamespacedSecrets")," which will apply the correct model to that parsed dataset because of the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"classify")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialize secondary data load")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"async fetch() {\n  this.resourceManagerFetchSecondaryResources(this.secondaryResourceDataConfig);\n}\n")),(0,r.kt)("h3",{id:"methods-available"},"Methods available"),(0,r.kt)("h4",{id:"resourcemanagerfetchsecondaryresources"},(0,r.kt)("strong",{parentName:"h4"},"resourceManagerFetchSecondaryResources")),(0,r.kt)("p",null,"Function used to initialize the data loading procedure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"Object"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"dataConfig")," - Configuration object"),(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"Boolean"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"onlyNamespaced")," - Flag to enable the fetch from API ",(0,r.kt)("em",{parentName:"li"},"ONLY")," for namespaced resources (will ignore requests for non-namespaced resources you have defined on the configuration object). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"async fetch() {\n  this.resourceManagerFetchSecondaryResources(dataConfig, onlyNamespaced);\n}\n")),(0,r.kt)("h4",{id:"resourcemanagerclearsecondaryresources"},(0,r.kt)("strong",{parentName:"h4"},"resourceManagerClearSecondaryResources")),(0,r.kt)("p",null,'Function used to clear the results for the secondary resource data fetch. It\'s a very useful method in a CREATE screen scenario where a user can "create" a namespace on the UI, operation which will make all our previous namespaced results invalid and in need to be cleared.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"Object"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"dataConfig")," - Configuration object"),(0,r.kt)("li",{parentName:"ul"},"@param {",(0,r.kt)("strong",{parentName:"li"},"Boolean"),"} ",(0,r.kt)("inlineCode",{parentName:"li"},"onlyNamespaced")," - Flag to enable the fetch from API ",(0,r.kt)("em",{parentName:"li"},"ONLY")," for namespaced resources (will ignore requests for non-namespaced resources you have defined on the configuration object). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"async fetch() {\n  this.resourceManagerClearSecondaryResources(dataConfig, onlyNamespaced);\n}\n")),(0,r.kt)("h2",{id:"the-resource-fetch-mixin-for-incremental-loading-and-manual-refresh"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"resource-fetch")," mixin for incremental loading and manual refresh"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resource-fetch")," mixin is the controller for all operations on a list view regarding the incremental loading and manual refresh features."),(0,r.kt)("p",null,"Both incremental loading and manual refresh are features that affect LIST views and are activated on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Performance")," section under ",(0,r.kt)("inlineCode",{parentName:"p"},"Global Settings")," on Rancher Dashboard UI via a flag and also a configurable threshold of number of items for which is they are triggerable."),(0,r.kt)("p",null,"To understand better how the mixin works, one should understand first how list views are managed and rendered."),(0,r.kt)("p",null,"A list view of resources (table with a list of items of a given resource) can be of two types:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a ",(0,r.kt)("em",{parentName:"li"},"custom")," list, which are defined on ",(0,r.kt)("inlineCode",{parentName:"li"},"/shell/list")," folder on the Rancher Dashboard project"),(0,r.kt)("li",{parentName:"ol"},"a ",(0,r.kt)("em",{parentName:"li"},"default")," list, which will apply to all resources that ",(0,r.kt)("strong",{parentName:"li"},"aren't")," defined on ",(0,r.kt)("inlineCode",{parentName:"li"},"/shell/list")," folder with a dedicated file")),(0,r.kt)("p",null,"Both have a common entry point: the ",(0,r.kt)("inlineCode",{parentName:"p"},"/shell/components/ResourceList/index.vue")," file. This is where all lists start their rendering process."),(0,r.kt)("p",null,"This is where it will decide to load a custom view (follow ",(0,r.kt)("inlineCode",{parentName:"p"},"this.hasListComponent"),") or render a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceTable")," (check template part of the file)."),(0,r.kt)("p",null,"For a default list, we should check for the last couple lines on the ",(0,r.kt)("inlineCode",{parentName:"p"},"async fetch")," method for the function called ",(0,r.kt)("inlineCode",{parentName:"p"},"this.$fetchType(resource)")," which is a method exposed by the mixin (where you can pass the resource type as argument) which will handle all data loading for that given resource type."),(0,r.kt)("p",null,"Under the hood it performs a ",(0,r.kt)("inlineCode",{parentName:"p"},"findAll")," but it append some specific flags for incremental loading (",(0,r.kt)("inlineCode",{parentName:"p"},"incremental"),") and manual refresh (",(0,r.kt)("inlineCode",{parentName:"p"},"hasManualRefresh")," && ",(0,r.kt)("inlineCode",{parentName:"p"},"watch"),") which will tap into the normal flow of data request from our API."),(0,r.kt)("p",null,"For a ",(0,r.kt)("strong",{parentName:"p"},"default")," list view, all should be covered with defaults by the ",(0,r.kt)("inlineCode",{parentName:"p"},"/shell/components/ResourceList/index.vue")," file."),(0,r.kt)("p",null,"Two quick important notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is a ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," computed prop in the mixin that is the default flag for the loading state of a ",(0,r.kt)("inlineCode",{parentName:"li"},"ResourceTable")),(0,r.kt)("li",{parentName:"ul"},"There is a ",(0,r.kt)("inlineCode",{parentName:"li"},"rows")," computed prop in the mixin that is the default list of items loaded on the mixin")),(0,r.kt)("p",null,"If any of these two are referenced on a custom list template part but aren't defined on the JS part of the same file, it's because it uses the defaults which come from the mixin itself."),(0,r.kt)("p",null,"Another important configuration part is about the incremental loader options (component name ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceLoadingIndicator"),"). "),(0,r.kt)("p",null,"For custom lists the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceTable")," component is on the lookout for a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"$loadingResources")," which is defined on your custom list methods. If it exists, it should return an object with two properties:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loadIndeterminate")," - by default the incremental loader is of a ",(0,r.kt)("strong",{parentName:"p"},"determinate")," type, which means that it will show the current count of items already loaded / total items to be loaded.\n",(0,r.kt)("inlineCode",{parentName:"p"},"loadResources")," - by default the incremental loader will load the counts for the resource passed, but there are custom list views (ex: workloads) are comprised of multiple resources. You'll need to pass an array of all resource types for that list if you want to show the correct numbers on the incremental loader."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Incremental loader")," component (",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceLoadingIndicator"),") is rendered inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Masthead")," component (ResourceList... there are two Mastheads)."),(0,r.kt)("p",null,"Generally, custom lists don't have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Masthead")," specified on it's template, but there's a Masthead rendered. That comes from ",(0,r.kt)("inlineCode",{parentName:"p"},"/shell/components/ResourceList/index.vue"),","),(0,r.kt)("h3",{id:"implementation-examples"},"Implementation examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"simple custom list implementation, with it's own ",(0,r.kt)("inlineCode",{parentName:"p"},"async fetch"),"\ncheck ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog.cattle.io.app")," custom list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"custom list implementation, ",(0,r.kt)("strong",{parentName:"p"},"without")," ",(0,r.kt)("inlineCode",{parentName:"p"},"async fetch"),"\ncheck ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog.cattle.io.clusterrepo")," custom list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"custom list implementation, ",(0,r.kt)("strong",{parentName:"p"},"with")," ",(0,r.kt)("inlineCode",{parentName:"p"},"async fetch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$loadingResources"),"\ncheck ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.cattle.io.bundle")," custom list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"custom list implementation, ",(0,r.kt)("strong",{parentName:"p"},"with")," ",(0,r.kt)("inlineCode",{parentName:"p"},"async fetch")," and it's own Masthead instance\ncheck ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.cattle.io.gitrepo")," custom list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"multiple resources implementation\ncheck ",(0,r.kt)("inlineCode",{parentName:"p"},"workload")," custom list"))))}c.isMDXComponent=!0}}]);