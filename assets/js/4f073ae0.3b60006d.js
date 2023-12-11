"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[5080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Github Workflow Configuration",l={unversionedId:"extensions/advanced/workflow-configuration",id:"extensions/advanced/workflow-configuration",title:"Github Workflow Configuration",description:"Extension Charts Workflow",source:"@site/docs/extensions/advanced/workflow-configuration.md",sourceDirName:"extensions/advanced",slug:"/extensions/advanced/workflow-configuration",permalink:"/dashboard/extensions/advanced/workflow-configuration",draft:!1,tags:[],version:"current",lastUpdatedAt:1702328689,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{}},s={},p=[{value:"Extension Charts Workflow",id:"extension-charts-workflow",level:2},{value:"Workflow Permissions",id:"workflow-permissions",level:2},{value:"Extension Chart Inputs",id:"extension-chart-inputs",level:3},{value:"Example usage",id:"example-usage",level:3},{value:"Extension Catalog Image Workflow",id:"extension-catalog-image-workflow",level:2},{value:"Extension Catalog Image Inputs",id:"extension-catalog-image-inputs",level:3},{value:"Example Usage",id:"example-usage-1",level:3},{value:"Versioning",id:"versioning",level:2},{value:"Dispatching Configuration",id:"dispatching-configuration",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github-workflow-configuration"},"Github Workflow Configuration"),(0,r.kt)("h2",{id:"extension-charts-workflow"},"Extension Charts Workflow"),(0,r.kt)("p",null,"To build the charts needed to provide a Helm repository, use the reusable workflow job found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/blob/master/.github/workflows/build-extension-charts.yml"},"here"),". When published you will be able to target the Github repository as a Helm repository, which will serve the charts for installation within the Rancher Dashboard."),(0,r.kt)("h2",{id:"workflow-permissions"},"Workflow Permissions"),(0,r.kt)("p",null,"Each workflow requires permissions to be set correctly to complete the release processes, both builds have specific needs with some overlap:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Extension Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actions")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Charts/Catalog"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"write")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires ",(0,r.kt)("inlineCode",{parentName:"td"},"write")," to ",(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#cancel-a-workflow-run"},"cancel a workflow"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contents")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Charts*/Catalog"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"write"),"*/",(0,r.kt)("inlineCode",{parentName:"td"},"read")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires ",(0,r.kt)("inlineCode",{parentName:"td"},"read")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"actions/checkout"),", and requires ",(0,r.kt)("inlineCode",{parentName:"td"},"write")," (*only necessary in the Chart Build workflow) to ",(0,r.kt)("inlineCode",{parentName:"td"},"put")," the contents of the built extension charts ",(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents"},"into a branch"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deployments")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Charts"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"write")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires ",(0,r.kt)("inlineCode",{parentName:"td"},"write")," when ",(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/deployments/deployments?apiVersion=2022-11-28#create-a-deployment"},"deploying ",(0,r.kt)("inlineCode",{parentName:"a"},"gh-pages")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packages")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Catalog"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"write")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires ",(0,r.kt)("inlineCode",{parentName:"td"},"write")," when a catalog image is created to ",(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#publishing-a-package-using-an-action"},"create the package"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pages")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Charts"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"write")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires write to ",(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/pages/pages?apiVersion=2022-11-28#request-a-github-pages-build"},"request and create page builds")," for the deployment.")))),(0,r.kt)("h3",{id:"extension-chart-inputs"},"Extension Chart Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"permissions")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"This gives the workflow permissions to checkout, build, and push to the repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"target_branch")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"The Github branch target for the extension build assets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tagged_release")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the tag name when triggering workflows by publishing tagged releases. (Requires alternate dispatch rules)")))),(0,r.kt)("h3",{id:"example-usage"},"Example usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"...\njobs:\n  build-extension-charts:\n    name: Build and release Extension charts\n    uses: rancher/dashboard/.github/workflows/build-extension-charts.yml@master\n    permissions:\n      actions: write\n      contents: write\n      deployments: write\n      pages: write\n    with:\n      target_branch: gh-pages\n")),(0,r.kt)("h2",{id:"extension-catalog-image-workflow"},"Extension Catalog Image Workflow"),(0,r.kt)("p",null,"To build an Extension Catalog Image (ECI) for air-gapped/private repositories, use the workflow found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/blob/master/.github/workflows/build-extension-catalog.yml"},"here"),". This will build and push the container image push into the specified registry."),(0,r.kt)("h3",{id:"extension-catalog-image-inputs"},"Extension Catalog Image Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"permissions")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"This gives the workflow permissions to checkout, build, and push to the registry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry_target")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"The container registry to publish the catalog image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry_user")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"The username connected to the container registry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tagged_release")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the tag name when triggering workflows by publishing tagged releases. (Requires alternate dispatch rules)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry_token")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"The password or token used to authenticate with the registry")))),(0,r.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"...\njobs:\n  build-extension-catalog:\n    name: Build and release Extension Catalog Image\n    uses: rancher/dashboard/.github/workflows/build-extension-catalog.yml@master\n    permissions:\n      actions: write\n      contents: read\n      packages: write\n    with:\n      registry_target: ghcr.io\n      registry_user: ${{ github.actor }}\n    secrets: \n      registry_token: ${{ secrets.GITHUB_TOKEN }}\n\n")),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"Each workflow is targeting the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard"},(0,r.kt)("inlineCode",{parentName:"a"},"rancher/dashboard"))," by default. Depending on your ",(0,r.kt)("inlineCode",{parentName:"p"},"@rancher/shell")," and Rancher instance versions, you will need to target the branch per release. For example, if running a Rancher instance version ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.7.7"),", you will need to target the ",(0,r.kt)("inlineCode",{parentName:"p"},"release-2.7.7")," branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"...\njobs:\n  build-extension-charts:\n    name: Build and release Extension charts\n    uses: rancher/dashboard/.github/workflows/build-extension-charts.yml@release-2.7.7\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning:")," The reusable workflow was created after Rancher ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.7.5")," - this means you will ",(0,r.kt)("strong",{parentName:"p"},"NOT")," be able to use these workflow files with this release or any previous releases.")),(0,r.kt)("h2",{id:"dispatching-configuration"},"Dispatching Configuration"),(0,r.kt)("p",null,"As mentioned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tagged_release")," property description, in order to have the workflow triggered by published releases the dispatch will need to be updated.\nThis topic is covered in the ",(0,r.kt)("a",{parentName:"p",href:"../publishing#triggering-a-github-workflow-on-tagged-release"},"Publishing section"),". To be concise, update the dispatch within the workflow file to execute the workflow on the ",(0,r.kt)("inlineCode",{parentName:"p"},"released")," event of a ",(0,r.kt)("inlineCode",{parentName:"p"},"release"),' action:"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"on:\n  release:\n    types: [released]\n")),(0,r.kt)("p",null,"This will ensure that the workflow is only triggered when the tagged release is published and is ",(0,r.kt)("em",{parentName:"p"},"not")," a draft release. "),(0,r.kt)("p",null,"Extensive information on how to trigger workflows can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"},"Github documentation"),"."))}c.isMDXComponent=!0}}]);