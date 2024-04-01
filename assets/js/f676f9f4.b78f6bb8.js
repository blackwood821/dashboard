"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[4545],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(8168),o=(t(6540),t(5680));const a={},i="Cloud Credential",l={unversionedId:"extensions/usecases/node-driver/cloud-credential",id:"extensions/usecases/node-driver/cloud-credential",title:"Cloud Credential",description:"Cloud Credentials store the username & password, or other similar information, needed to talk to a particular provider.  There is typically a 1-to-1 mapping of cloud credentials to drivers.  If one provider (e.g. Amazon) has both a Machine driver for RKE (using EC2) and a Cluster driver for Kontainer Engine (using EKS) then you can and should use a single shared type of credential (e.g. aws) for both.",source:"@site/docs/extensions/usecases/node-driver/cloud-credential.md",sourceDirName:"extensions/usecases/node-driver",slug:"/extensions/usecases/node-driver/cloud-credential",permalink:"/dashboard/extensions/usecases/node-driver/cloud-credential",draft:!1,tags:[],version:"current",lastUpdatedAt:1711983612,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"About Node Drivers",permalink:"/dashboard/extensions/usecases/node-driver/about-drivers"},next:{title:"Machine Config",permalink:"/dashboard/extensions/usecases/node-driver/machine-config"}},s={},d=[],c={toc:d},u="wrapper";function p(e){let{components:n,...a}=e;return(0,o.yg)(u,(0,r.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cloud-credential"},"Cloud Credential"),(0,o.yg)("p",null,"Cloud Credentials store the username & password, or other similar information, needed to talk to a particular provider.  There is typically a 1-to-1 mapping of cloud credentials to drivers.  If one provider (e.g. Amazon) has both a ",(0,o.yg)("em",{parentName:"p"},"Machine")," driver for RKE (using EC2) and a ",(0,o.yg)("em",{parentName:"p"},"Cluster")," driver for Kontainer Engine (using EKS) then you can and should use a single shared type of credential (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"aws"),") for both."),(0,o.yg)("p",null,"A cloud credential component for a given driver will be automatically registered when placed in the ",(0,o.yg)("inlineCode",{parentName:"p"},"cloud-credential")," folder and named with the name of the driver (e.g. ",(0,o.yg)("inlineCode",{parentName:"p"},"openstack.vue"),")."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: Your extension's entry file must call ",(0,o.yg)("inlineCode",{parentName:"p"},"importTypes")," for the automatic registration to work")),(0,o.yg)("p",null,"The component should be a standard Vue component which displays each field that is relevant to authentication and lets the user configure them.  Only the actual auth fields themselves, the rest of configuring the name, description, save buttons, etc is handled outside of the credential component."),(0,o.yg)("p",null,"Your component should emit a ",(0,o.yg)("inlineCode",{parentName:"p"},"validationChanged")," event every time a value changes.  It should also (but doesn't ",(0,o.yg)("em",{parentName:"p"},"have to")," implement a ",(0,o.yg)("inlineCode",{parentName:"p"},"test()")," method.  This may be asynchronous, and should make an API call or similar to see if the provided credentials work.  Return ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if they're ok and ",(0,o.yg)("inlineCode",{parentName:"p"},"false")," otherwise.  When provided, this is called before saving and the user won't be able to save until their input causes you return ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"value")," property of the component will be bound to the cloud credential resource."),(0,o.yg)("p",null,"Other properties:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mode")," - String mode - can be ",(0,o.yg)("inlineCode",{parentName:"li"},"view"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"edit")," or ",(0,o.yg)("inlineCode",{parentName:"li"},"create"),". Controls should be disabled when in view mode. Controls should be populated from existing values for the view and edit modes.")),(0,o.yg)("p",null,"Example Cloud Credential UI:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Example Cloud Credential UI!",src:t(6210).A,width:"719",height:"405"})))}p.isMDXComponent=!0},6210:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/openstack-cloud-credential-36eb5e47e3c02e5937be4c6701505cc2.png"}}]);