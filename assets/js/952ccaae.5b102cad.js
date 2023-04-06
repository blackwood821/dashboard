"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[35],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const i={},r="Initializing Extensions",l={unversionedId:"extensions/initializing-extensions",id:"extensions/initializing-extensions",title:"Initializing Extensions",description:"Follow instructions here to scaffold your extension. Once you've done so, there are some initialization steps specific to extensions. Beyond that, extensions largely work the same as the rest of the dashboard. There are a set of top-level folders that can be defined and used as they are in the dashboard: chart, cloud-credential, content, detail, edit, list, machine-config, models, promptRemove, l10n, windowComponents, dialog, and formatters. You can read about what each of these folders does here",source:"@site/docs/extensions/initializing-extensions.md",sourceDirName:"extensions",slug:"/extensions/initializing-extensions",permalink:"/dashboard/extensions/initializing-extensions",draft:!1,tags:[],version:"current",lastUpdatedAt:1680775320,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Getting Started",permalink:"/dashboard/extensions/extensions-getting-started"},next:{title:"Extensions API",permalink:"/dashboard/extensions/extensions-api"}},s={},d=[{value:"Defining an Extension information/description",id:"defining-an-extension-informationdescription",level:2},{value:"Defining an Extension as a product",id:"defining-an-extension-as-a-product",level:2},{value:"Initializing Extension Stores",id:"initializing-extension-stores",level:2},{value:"Extension Routing",id:"extension-routing",level:2},{value:"Navigation In and Out of Extensions",id:"navigation-in-and-out-of-extensions",level:2}],p={toc:d};function u(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"initializing-extensions"},"Initializing Extensions"),(0,o.kt)("p",null,"Follow instructions ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/extensions/extensions-getting-started"},"here")," to scaffold your extension. Once you've done so, there are some initialization steps specific to extensions. Beyond that, extensions largely work the same as the rest of the dashboard. There are a set of top-level folders that can be defined and used as they are in the dashboard: ",(0,o.kt)("inlineCode",{parentName:"p"},"chart"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud-credential"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"content"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"detail"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"machine-config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"models"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"promptRemove"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"l10n"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"windowComponents"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dialog"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"formatters"),". You can read about what each of these folders does ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/directory-structure"},"here")),(0,o.kt)("h2",{id:"defining-an-extension-informationdescription"},"Defining an Extension information/description"),(0,o.kt)("p",null,"When setting up a extension, on the Extensions part of Rancher Dashboard you will find information regarding the extension:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Product Information",src:t(7835).Z,width:"1480",height:"838"})),(0,o.kt)("p",null,"Which will come from two separate places: the extension initialization and a README file on the root folder of your extension."),(0,o.kt)("p",null,"The extension initialization should contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata")," extension method to grab fields such as ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  plugin.metadata = require('./package.json');\n}\n")),(0,o.kt)("p",null,"And if you add a ",(0,o.kt)("inlineCode",{parentName:"p"},"README.md")," file to your extension root folder, it will populate the ",(0,o.kt)("inlineCode",{parentName:"p"},"detail")," portion of the product description."),(0,o.kt)("h2",{id:"defining-an-extension-as-a-product"},"Defining an Extension as a product"),(0,o.kt)("p",null,"Product configuration for extensions is largely unchanged (read more about products ",(0,o.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/products-and-navigation"},"here"),"); however, if the extension contains one product intended to have a standalone UI, some additional product configuration is required, via the ",(0,o.kt)("inlineCode",{parentName:"p"},"setIsSingleProduct")," vuex action."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"logoRoute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://v3.router.vuejs.org/api/#routes"},"Vue Router route config")),(0,o.kt)("td",{parentName:"tr",align:null},"Where to navigate when the upper-left logo is clicked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"productNameKey")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"translation key for product name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"afterLoginRoute")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://v3.router.vuejs.org/api/#routes"},"Vue Router route config")),(0,o.kt)("td",{parentName:"tr",align:null},"where to redirect in auth middleware")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"enableSessionCheck")),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Toggle verifying the user auth session on ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event"},"visibility change events"),". Defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"getVersionInfo")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},"Version Info shown in lower left")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"logo")),(0,o.kt)("td",{parentName:"tr",align:null},"SVG"),(0,o.kt)("td",{parentName:"tr",align:null},"what's on the box: set the logo shown in the top level menu")))),(0,o.kt)("p",null,"Defining an extension as product leverages the ",(0,o.kt)("inlineCode",{parentName:"p"},"addProduct")," extension method, which will be defined on the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," on your root folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  // it will grab information such as `name` and `description`\n  plugin.metadata = require('./package.json');\n\n  // Load a product\n  // plugin.addProduct(require('./product'));\n}\n")),(0,o.kt)("p",null,"But as for a basic example of a product definition of your extension on your ",(0,o.kt)("inlineCode",{parentName:"p"},"product.js")," file would be something along these lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function init($plugin, store) {\n  const { product } = $plugin.DSL(store, $plugin.name);\n\n  product({\n    icon:                  'gear',\n    inStore:               'management',\n    removable:             false,\n    showClusterSwitcher:   false,\n  });\n}\n")),(0,o.kt)("p",null,"Which will add your extension to the top-level slide-in menu."),(0,o.kt)("h2",{id:"initializing-extension-stores"},"Initializing Extension Stores"),(0,o.kt)("p",null,"Extensions should explicitly register any store modules in their ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"addDashboardStore")," extension method. This will also add familiar ",(0,o.kt)("a",{parentName:"p",href:"https://vuex.vuejs.org/"},"Vuex")," actions for retrieving and classifying resources, details of which can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/plugins/dashboard-store/index"),"."),(0,o.kt)("p",null,"An example would be to define in the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," of your extension a basic configuration on an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CoreStoreSpecifics, CoreStoreConfig } from '@shell/core/types';\nimport getters from './getters'; // this would be your getters file on your extension /store folder\nimport mutations from './mutations'; // this would be your mutations file on your extension /store folder\nimport actions from './actions'; // this would be your actions file on your extension /store folder\n\nconst yourExtensionFactory = (): CoreStoreSpecifics => {\n  return {\n    state() {\n      return { someStateVariable: '' };\n    },\n\n    getters: { ...getters },\n\n    mutations: { ...mutations },\n\n    actions: { ...actions },\n  };\n};\nconst config: CoreStoreConfig = { namespace: SAME_PRODUCT_NAME_ON_THE_PRODUCT_DEFINITION };\n\nexport default {\n  specifics: yourExtensionFactory(),\n  config\n};\n")),(0,o.kt)("p",null,"And on the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," on your root folder, where you define your extension configuration, you can just use the ",(0,o.kt)("inlineCode",{parentName:"p"},"addDashboardStore")," extension method, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import extensionStore from './store';\n\n// Init the package\nexport default function($plugin: IPlugin) {\n  // Add Vuex store\n  $plugin.addDashboardStore(extensionStore.config.namespace, extensionStore.specifics, extensionStore.config);\n}\n")),(0,o.kt)("p",null,"Extensions can optionally define their own cluster store module by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"isClusterStore")," in the store index, eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const config: CoreStoreConfig = {\n  namespace:      PRODUCT_NAME,\n  isClusterStore: true\n};\n\nexport default {\n  specifics: harvesterFactory(),\n  config,\n  init:      steveStoreInit\n};\n")),(0,o.kt)("p",null,"This will cause the shell ",(0,o.kt)("inlineCode",{parentName:"p"},"loadCluster")," action to run the extension's ",(0,o.kt)("inlineCode",{parentName:"p"},"loadCluster")," action when entering a package, and the extension store's ",(0,o.kt)("inlineCode",{parentName:"p"},"unsubscribe")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," when leaving. "),(0,o.kt)("h2",{id:"extension-routing"},"Extension Routing"),(0,o.kt)("p",null,"Extensions should use a pages directory, as the shell currently does, but routing needs to be explicitly defined then added in the extension index using the extension ",(0,o.kt)("inlineCode",{parentName:"p"},"addRoutes")," method. Extension routes can override existing dashboard routes: they'll be loaded on extension entry and unloaded (with old dashboard routes re-loaded...) on extension leave. As touched on above, cluster and product information used to connect to the cluster and define navigation is determined from the route. Consequently, while extensions have a lot of control over their own routing, anything tied into one kubernetes cluster should be nested in ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/c/_cluster"),"."),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," in your root folder, where you define your extension configuration, you can just use the ",(0,o.kt)("inlineCode",{parentName:"p"},"addRoutes")," extension method, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import extensionRouting from './routing/extension-routing';\n\n// Init the package\nexport default function($plugin: IPlugin) {\n  // Add Vue Routes\n  $plugin.addRoutes(extensionRouting);\n}\n")),(0,o.kt)("p",null,"As in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," you would have something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { YOUR_PRODUCT_NAME } from '../config/elemental-types';\nimport ExtensionDashboardView from '../pages/extensionDashboardView.vue';\n\nconst routes = [\n  // this will make the entry point of your extension product the page `extensionDashboardView`\n  {\n    name:      `${ YOUR_PRODUCT_NAME }-c-cluster`,\n    path:      `/:product/c/:cluster/dashboard`,\n    component: ExtensionDashboardView,\n  }\n];\n\nexport default routes;\n")),(0,o.kt)("p",null,"The routing definition on this example in ",(0,o.kt)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," is based on Vue Router. Check the official documentation ",(0,o.kt)("a",{parentName:"p",href:"https://router.vuejs.org/guide/"},"here"),"."),(0,o.kt)("h2",{id:"navigation-in-and-out-of-extensions"},"Navigation In and Out of Extensions"),(0,o.kt)("p",null,"Extensions can define ",(0,o.kt)("inlineCode",{parentName:"p"},"onEnter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onLeave")," hooks in their index ",(0,o.kt)("inlineCode",{parentName:"p"},"addNavHooks")," extension method, which will run when the authenticated middleware detects a package change by checking the route meta property. ",(0,o.kt)("inlineCode",{parentName:"p"},"onEnter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onLeave")," accept the same props: the vuex store context and a config object containing: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"clusterId")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"The unique ID of the current cluster, determined by the route's ",(0,o.kt)("inlineCode",{parentName:"td"},"cluster")," param")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"product")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the product being navigated to, also taken from the route")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"oldProduct")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the product being navigated away from")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"oldIsExt")),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"True if the previous product was in a package (note that this doesn't distinguish between inter- and intra-package product changes)")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticated")," middleware will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to the management cluster (",(0,o.kt)("inlineCode",{parentName:"li"},"loadManagement"),")"),(0,o.kt)("li",{parentName:"ul"},"Apply product config, as determined from the route (",(0,o.kt)("inlineCode",{parentName:"li"},"applyProducts"),")"),(0,o.kt)("li",{parentName:"ul"},"If an old extension is loaded, run its ",(0,o.kt)("inlineCode",{parentName:"li"},"onLeave")," hook"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"onEnter")," hook for new extension "),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"loadCluster")," (which, as stated above, can run load and unload cluster actions defined in extensions)")),(0,o.kt)("p",null,"An example of the usage ",(0,o.kt)("inlineCode",{parentName:"p"},"onEnter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onLeave")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"addNavHooks")," extension method would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin, OnNavToPackage, OnNavAwayFromPackage } from '@shell/core/types';\n\nconst onEnter: OnNavToPackage = async(store, config) => {\n  // define any function needed here for `onEnter`\n};\nconst onLeave: OnNavAwayFromPackage = async(store, config) => {\n  // define any function needed here for `onLeave`\n};\n\n// Init the extension\nexport default function(plugin: IPlugin) {\n  // Add hooks to Vue navigation world\n  plugin.addNavHooks(onEnter, onLeave);\n}\n")))}u.isMDXComponent=!0},7835:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/product-information-ac8d2051274918a775f1c7f811a3a43e.png"}}]);