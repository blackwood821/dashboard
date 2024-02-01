"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[8623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Products",l={unversionedId:"extensions/api/nav/products",id:"extensions/api/nav/products",title:"Products",description:"A product is a top-level view in Rancher. A product typically adds a navigation entry into the",source:"@site/docs/extensions/api/nav/products.md",sourceDirName:"extensions/api/nav",slug:"/extensions/api/nav/products",permalink:"/dashboard/extensions/api/nav/products",draft:!1,tags:[],version:"current",lastUpdatedAt:1706786808,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Metadata",permalink:"/dashboard/extensions/api/metadata"},next:{title:"Custom page",permalink:"/dashboard/extensions/api/nav/custom-page"}},p={},d=[{value:"Registering a Product",id:"registering-a-product",level:2},{value:"Product Definition",id:"product-definition",level:2},{value:"Creating a product",id:"creating-a-product",level:3}],u={toc:d},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"products"},"Products"),(0,a.kt)("p",null,"A product is a top-level view in Rancher. A product typically adds a navigation entry into the\ntop-level slide-in menu in Rancher. When the user navigates to the link, the product renders\nthe entire view beneath the header bar."),(0,a.kt)("p",null,"Products typically declare their navigation such that it is presented on the left-hand side, e.g."),(0,a.kt)("h2",{id:"registering-a-product"},"Registering a Product"),(0,a.kt)("p",null,"Defining a product leverages the ",(0,a.kt)("inlineCode",{parentName:"p"},"addProduct")," extension method, which should be defined on the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," on your root folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // ....\n\n  // ... provide metadata\n\n  // Load a product\n  plugin.addProduct(require('./product'));\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"addProduct")," method registers a module which will be invoked by Rancher at the\nappropriate point in its lifecycle to create the product."),(0,a.kt)("p",null,"You can register more than one product in an extension."),(0,a.kt)("h2",{id:"product-definition"},"Product Definition"),(0,a.kt)("p",null,"The module registered via ",(0,a.kt)("inlineCode",{parentName:"p"},"addProduct")," must export an ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," method. This is invoked with two parameters;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"$plugin")," API"),(0,a.kt)("li",{parentName:"ul"},"The VueX store")),(0,a.kt)("h3",{id:"creating-a-product"},"Creating a product"),(0,a.kt)("p",null,"An example ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," function for creating a new product is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  \n  const { product } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: // this will the route path that will be your entry point for this product\n  });\n}\n")),(0,a.kt)("p",null,"The function ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," comes from ",(0,a.kt)("inlineCode",{parentName:"p"},"$plugin.DSL")," will add your extension to the top-level slide-in menu."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.DSL")," is called with the store and your product name and returns a number of functions to add and configure products and navigation. The example above shows the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," function")),(0,a.kt)("p",null,"The allowed parameters for the ",(0,a.kt)("inlineCode",{parentName:"p"},"product")," function are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"icon")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"icon name (based on ",(0,a.kt)("a",{parentName:"td",href:"https://rancher.github.io/icons/"},"rancher icons"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"svg")),(0,a.kt)("td",{parentName:"tr",align:null},"Module"),(0,a.kt)("td",{parentName:"tr",align:null},"SVG icon (alernative to above). Typically use the ",(0,a.kt)("inlineCode",{parentName:"td"},"require")," method with a path of an SVG file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"inStore")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Which store should the product be registered on. Use ",(0,a.kt)("inlineCode",{parentName:"td"},"management")," for a top-level product and ",(0,a.kt)("inlineCode",{parentName:"td"},"cluster")," for a cluster-level product")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"weight")),(0,a.kt)("td",{parentName:"tr",align:null},"Int"),(0,a.kt)("td",{parentName:"tr",align:null},"Side menu ordering (bigger number on top)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"to")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://v3.router.vuejs.org/api/#routes"},"Vue Router route config")),(0,a.kt)("td",{parentName:"tr",align:null},"Route to where the click on the product top-level menu should lead to")))))}s.isMDXComponent=!0}}]);