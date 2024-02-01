"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[7661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="Cloud Credential",l={unversionedId:"extensions/usecases/node-driver/cloud-credential",id:"extensions/usecases/node-driver/cloud-credential",title:"Cloud Credential",description:"Cloud Credentials store the username & password, or other similar information, needed to talk to a particular provider.  There is typically a 1-to-1 mapping of cloud credentials to drivers.  If one provider (e.g. Amazon) has both a Machine driver for RKE (using EC2) and a Cluster driver for Kontainer Engine (using EKS) then you can and should use a single shared type of credential (e.g. aws) for both.",source:"@site/docs/extensions/usecases/node-driver/cloud-credential.md",sourceDirName:"extensions/usecases/node-driver",slug:"/extensions/usecases/node-driver/cloud-credential",permalink:"/dashboard/extensions/usecases/node-driver/cloud-credential",draft:!1,tags:[],version:"current",lastUpdatedAt:1706786808,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"About Node Drivers",permalink:"/dashboard/extensions/usecases/node-driver/about-drivers"},next:{title:"Machine Config",permalink:"/dashboard/extensions/usecases/node-driver/machine-config"}},s={},d=[],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloud-credential"},"Cloud Credential"),(0,o.kt)("p",null,"Cloud Credentials store the username & password, or other similar information, needed to talk to a particular provider.  There is typically a 1-to-1 mapping of cloud credentials to drivers.  If one provider (e.g. Amazon) has both a ",(0,o.kt)("em",{parentName:"p"},"Machine")," driver for RKE (using EC2) and a ",(0,o.kt)("em",{parentName:"p"},"Cluster")," driver for Kontainer Engine (using EKS) then you can and should use a single shared type of credential (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"aws"),") for both."),(0,o.kt)("p",null,"A cloud credential component for a given driver will be automatically registered when placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud-credential")," folder and named with the name of the driver (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack.vue"),")."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Your extension's entry file must call ",(0,o.kt)("inlineCode",{parentName:"p"},"importTypes")," for the automatic registration to work")),(0,o.kt)("p",null,"The component should be a standard Vue component which displays each field that is relevant to authentication and lets the user configure them.  Only the actual auth fields themselves, the rest of configuring the name, description, save buttons, etc is handled outside of the credential component."),(0,o.kt)("p",null,"Your component should emit a ",(0,o.kt)("inlineCode",{parentName:"p"},"validationChanged")," event every time a value changes.  It should also (but doesn't ",(0,o.kt)("em",{parentName:"p"},"have to")," implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"test()")," method.  This may be asynchronous, and should make an API call or similar to see if the provided credentials work.  Return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if they're ok and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise.  When provided, this is called before saving and the user won't be able to save until their input causes you return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property of the component will be bound to the cloud credential resource."),(0,o.kt)("p",null,"Other properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mode")," - String mode - can be ",(0,o.kt)("inlineCode",{parentName:"li"},"view"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"edit")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"create"),". Controls should be disabled when in view mode. Controls should be populated from existing values for the view and edit modes.")),(0,o.kt)("p",null,"Example Cloud Credential UI:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example Cloud Credential UI!",src:n(6512).Z,width:"719",height:"405"})))}p.isMDXComponent=!0},6512:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/openstack-cloud-credential-36eb5e47e3c02e5937be4c6701505cc2.png"}}]);