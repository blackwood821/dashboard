"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[2982],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),g=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=g(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=g(t),y=l,m=s["".concat(p,".").concat(y)]||s[y]||c[y]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var g=2;g<r;g++)o[g]=t[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=t(8168),l=(t(6540),t(5680));const r={},o="Panels",i={unversionedId:"extensions/api/panels",id:"extensions/api/panels",title:"Panels",description:"A Panel is a defined area in the Rancher UI where custom UI components can be shown.",source:"@site/docs/extensions/api/panels.md",sourceDirName:"extensions/api",slug:"/extensions/api/panels",permalink:"/dashboard/extensions/api/panels",draft:!1,tags:[],version:"current",lastUpdatedAt:1711983612,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cards",permalink:"/dashboard/extensions/api/cards"},next:{title:"Tabs",permalink:"/dashboard/extensions/api/tabs"}},p={},g=[{value:"addPanel",id:"addpanel",level:2},{value:"PanelLocation.DETAILS_MASTHEAD options",id:"panellocationdetails_masthead-options",level:3},{value:"PanelLocation.DETAIL_TOP options",id:"panellocationdetail_top-options",level:3},{value:"PanelLocation.RESOURCE_LIST options",id:"panellocationresource_list-options",level:3}],d={toc:g},s="wrapper";function c(e){let{components:n,...r}=e;return(0,l.yg)(s,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"panels"},"Panels"),(0,l.yg)("p",null,"A Panel is a defined area in the Rancher UI where custom UI components can be shown."),(0,l.yg)("p",null,"Panels are added to Rancher via the ",(0,l.yg)("inlineCode",{parentName:"p"},"addPanel")," method."),(0,l.yg)("h2",{id:"addpanel"},"addPanel"),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"(Rancher version v2.7.2)")),(0,l.yg)("p",null,"This method adds a panel/content to the UI."),(0,l.yg)("p",null,"Method:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(where: String, when: LocationConfig, options: Object);\n")),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Arguments")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"where")," string parameter admissable values for this method:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"PanelLocation.DETAILS_MASTHEAD")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Location for a panel on the Details Masthead area of a Resource Detail page (only for modes ",(0,l.yg)("inlineCode",{parentName:"td"},"detail")," (v2.7.2), ",(0,l.yg)("inlineCode",{parentName:"td"},"edit")," (v2.7.2), ",(0,l.yg)("inlineCode",{parentName:"td"},"config")," (v2.7.2) and ",(0,l.yg)("inlineCode",{parentName:"td"},"create")," (v2.7.7))")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"PanelLocation.DETAIL_TOP")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Location for a panel on the Detail Top area of a Resource Detail page (only for modes ",(0,l.yg)("inlineCode",{parentName:"td"},"detail")," (v2.7.2), ",(0,l.yg)("inlineCode",{parentName:"td"},"edit")," (v2.7.2), ",(0,l.yg)("inlineCode",{parentName:"td"},"config")," (v2.7.) and ",(0,l.yg)("inlineCode",{parentName:"td"},"create")," (v2.7.7))")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"PanelLocation.RESOURCE_LIST")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Location for a panel on a Resource List View page (above the table area - only for mode ",(0,l.yg)("inlineCode",{parentName:"td"},"list")," (v2.7.2))")))),(0,l.yg)("br",null),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"when")," Object admissable values:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"LocationConfig")," as described above for the ",(0,l.yg)("a",{parentName:"p",href:"./common#locationconfig"},"LocationConfig object"),"."),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"panellocationdetails_masthead-options"},"PanelLocation.DETAILS_MASTHEAD options"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Details Masthead",src:t(5481).A,width:"1511",height:"1001"})),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,l.yg)("inlineCode",{parentName:"p"},"options")," with ",(0,l.yg)("inlineCode",{parentName:"p"},"'PanelLocation.DETAILS_MASTHEAD'")," are:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"component")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null},'Component to be rendered as content on the "detail view" Masthead component')))),(0,l.yg)("p",null,"Usage example for ",(0,l.yg)("inlineCode",{parentName:"p"},"'PanelLocation.DETAILS_MASTHEAD'"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(\n  PanelLocation.DETAILS_MASTHEAD\n  { resource: ['catalog.cattle.io.clusterrepo'] },\n  { component: () => import('./MastheadDetailsComponent.vue') }\n);\n")),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"panellocationdetail_top-options"},"PanelLocation.DETAIL_TOP options"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"DetailTop",src:t(6014).A,width:"1511",height:"1001"})),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,l.yg)("inlineCode",{parentName:"p"},"options")," with ",(0,l.yg)("inlineCode",{parentName:"p"},"'PanelLocation.DETAIL_TOP'")," are:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"component")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null},'Component to be rendered as content on the "detail view" detailTop component')))),(0,l.yg)("p",null,"Usage example for ",(0,l.yg)("inlineCode",{parentName:"p"},"'PanelLocation.DETAIL_TOP'"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(\n  PanelLocation.DETAIL_TOP,\n  { resource: ['catalog.cattle.io.clusterrepo'] },\n  { component: () => import('./DetailTopComponent.vue') }\n);\n")),(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"panellocationresource_list-options"},"PanelLocation.RESOURCE_LIST options"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"List View",src:t(4444).A,width:"1511",height:"1001"})),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,l.yg)("inlineCode",{parentName:"p"},"options")," with ",(0,l.yg)("inlineCode",{parentName:"p"},"'PanelLocation.RESOURCE_LIST'")," are:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Key"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"component")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null},'Component to be rendered as content above a table on a "list view"')))),(0,l.yg)("p",null,"Usage example for ",(0,l.yg)("inlineCode",{parentName:"p"},"'PanelLocation.RESOURCE_LIST'"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(\n  PanelLocation.RESOURCE_LIST,\n  { resource: ['catalog.cattle.io.app'] },\n  { component: () => import('./BannerComponent.vue') }\n);\n")))}c.isMDXComponent=!0},6014:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/detailtop-93d0c11527f85f73edb5a839132b9b90.png"},4444:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/list-view-8eecca10089243a82abac917e3e8dbb5.png"},5481:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/masthead-f9ad33e650fbc0029145d6e4c664cb23.png"}}]);