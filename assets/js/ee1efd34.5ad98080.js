"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,b=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(b,s(s({ref:t},p),{},{components:n})):o.createElement(b,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},s="Storybook",i={unversionedId:"storybook",id:"storybook",title:"Storybook",description:"Rancher Dashboard uses Storybook to document its component and design kit.",source:"@site/docs/storybook.md",sourceDirName:".",slug:"/storybook",permalink:"/dashboard/storybook",draft:!1,tags:[],version:"current",lastUpdatedAt:1683754664,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Miscellaneous",permalink:"/dashboard/extensions/advanced"},next:{title:"Unit Tests",permalink:"/dashboard/testing/unit-test"}},c={},l=[{value:"Source",id:"source",level:3},{value:"How to write",id:"how-to-write",level:3},{value:"Stories in Document Format",id:"stories-in-document-format",level:3},{value:"Basic example",id:"basic-example",level:3},{value:"Stories in Component Story Format",id:"stories-in-component-story-format",level:3},{value:"Basic example",id:"basic-example-1",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storybook"},"Storybook"),(0,r.kt)("p",null,"Rancher Dashboard uses Storybook to document its component and design kit."),(0,r.kt)("p",null,"The published Storybook is available here: ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.github.io/storybook/"},"https://rancher.github.io/storybook/"),"."),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("p",null,"The Source for Storybook is contained in the main Dashboard GitHub repository (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard"},"https://github.com/rancher/dashboard"),")."),(0,r.kt)("p",null,"Stories are contained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"storybook/stories")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 dashboard\n|  \u251c\u2500\u2500 storybook             // All files and setup for Storybook are here\n|  |  \u251c\u2500\u2500 stories            // Stories folder\n|  |  |  |  \u251c\u2500\u2500 WIP          // WIP stories \n|  |  |  |  \u251c\u2500\u2500 components   // All components stories are here\n|  |  |  |  \u251c\u2500\u2500 foundation   // All foundation stories are here\n")),(0,r.kt)("h3",{id:"how-to-write"},"How to write"),(0,r.kt)("h3",{id:"stories-in-document-format"},"Stories in Document Format"),(0,r.kt)("p",null,"MDX is a standard file format that combines Markdown with JSX. It means you can use Markdown\u2019s terse syntax (such as # heading) for your documentation, write stories that compile to our component story format, and freely embed JSX component blocks at any point in the file. All at once."),(0,r.kt)("p",null,"For more details refer to ",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/vue/writing-docs/mdx#basic-example"},"storybook official documentation"),"."),(0,r.kt)("h3",{id:"basic-example"},"Basic example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\n\x3c!-- Checkbox.stories.mdx --\x3e\n\nimport { Canvas, Meta, Story } from '@storybook/addon-docs';\n\nimport Checkbox from './Checkbox.vue';\n\n<Meta title=\"Components/Checkbox\" component={Checkbox} />\n\n\x3c!-- Add template for checkbox stories --\x3e\nexport const Template = (args, { argTypes }) => ({\n  props: Object.keys(argTypes),\n  components: { Checkbox },\n  template: '<Checkbox v-bind=\"$props\" />',\n});\n\n# Checkbox\n\nWith `MDX`, we can define a story for `Checkbox` right in the middle of our\nMarkdown documentation.\n\n\x3c!-- Define different states for checkbox --\x3e\n<Canvas columns={2}>\n  Default\n  <Story\n    name=\"Checked\"\n    args={{\n      label: 'Accept term of service',\n    }}>\n    {Template.bind({})}\n  </Story>\n  Selected\n  <Story\n    name=\"Selected\"\n    args={{\n      label: 'Accept term of service',\n      value: true\n    }}>\n    {Template.bind({})}\n  </Story>\n  Disabled\n  <Story\n    name=\"Disabled\"\n    args={{\n      label: 'Accept term of service',\n      disabled: true,\n      value: true\n    }}>\n    {Template.bind({})}\n  </Story>\n</Canvas>\n\n\x3c!-- Add ArgsTable for Checkbox  --\x3e\n<ArgsTable of={Checkbox} />\n\n")),(0,r.kt)("h3",{id:"stories-in-component-story-format"},"Stories in Component Story Format"),(0,r.kt)("p",null,"Define stories according to the Component Story Format (CSF), an ES6 module-based standard that is easy to write and portable between tools."),(0,r.kt)("p",null,"For more details refer to ",(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/vue/writing-stories/introduction"},"storybook official documentation"),"."),(0,r.kt)("h3",{id:"basic-example-1"},"Basic example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\n\x3c!-- PercentageBar.stories.js --\x3e\n\nimport PercentageBar from './Components/PercentageBar';\n\n\nexport default {\n  title:      'WIP/PercentageBar',\n  component:  PercentageBar,\n  argTypes:   {\n    preferredDirection: {\n      control: {\n        type:    'select',\n        options: ['LESS', 'MORE']\n      }\n    }\n  }\n};;\n\n\x3c!-- Add template for PercentageBar stories --\x3e\nexport const Story = (args, { argTypes }) => ({\n  components: { PercentageBar },\n  props:      Object.keys(argTypes),\n  template:   `\n    <div style=\"width: 300px\">\n      <PercentageBar v-bind=\"$props\"/>\n    </div>`,\n});\n\n\n\x3c!-- Define story for PercentageBar --\x3e\nStory.story = { name: 'PercentageBar' };\nStory.args = {\n  value:              45,\n  showPercentage:     true.valueOf,\n  preferredDirection: 'LESS'\n};\n\n")))}d.isMDXComponent=!0}}]);