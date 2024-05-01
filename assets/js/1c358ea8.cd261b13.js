"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[8957],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(8168),r=(n(6540),n(5680));const o={},s="Unit Tests",i={unversionedId:"testing/unit-test",id:"testing/unit-test",title:"Unit Tests",description:"The dashboard is configured to run unit tests with Jest in combination of vue-test-utils, for Vue scoped cases.",source:"@site/docs/testing/unit-test.md",sourceDirName:"testing",slug:"/testing/unit-test",permalink:"/dashboard/testing/unit-test",draft:!1,tags:[],version:"current",lastUpdatedAt:1714530301,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Storybook",permalink:"/dashboard/storybook"},next:{title:"E2E Tests",permalink:"/dashboard/testing/e2e-test"}},l={},u=[{value:"VSCode debugging tools",id:"vscode-debugging-tools",level:2},{value:"Style guide",id:"style-guide",level:2},{value:"Jest global configuration",id:"jest-global-configuration",level:2},{value:"Describe and test/it statement",id:"describe-and-testit-statement",level:3},{value:"Simple tests",id:"simple-tests",level:3},{value:"AAA pattern",id:"aaa-pattern",level:3},{value:"Behaviors over implementations",id:"behaviors-over-implementations",level:3},{value:"Parameterization",id:"parameterization",level:3},{value:"Coverage",id:"coverage",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"unit-tests"},"Unit Tests"),(0,r.yg)("p",null,"The dashboard is configured to run unit tests with Jest in combination of vue-test-utils, for Vue scoped cases."),(0,r.yg)("p",null,"Requirements to accept tests:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JS and TS formats"),(0,r.yg)("li",{parentName:"ul"},"Suffix with ",(0,r.yg)("inlineCode",{parentName:"li"},".test")," or ",(0,r.yg)("inlineCode",{parentName:"li"},".spec")),(0,r.yg)("li",{parentName:"ul"},"Contained in any directory ",(0,r.yg)("inlineCode",{parentName:"li"},"__tests__"))),(0,r.yg)("p",null,"Adopted commands:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"yarn test"),", run and watch every test"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"yarn test:ci"),", script used for CI, which outputs a coverage report to ",(0,r.yg)("inlineCode",{parentName:"li"},"/coverage")," folder")),(0,r.yg)("p",null,"Example tests can be found in ",(0,r.yg)("inlineCode",{parentName:"p"},"/components/__tests__"),". For more information about testing vue components, see the ",(0,r.yg)("a",{parentName:"p",href:"https://vue-test-utils.vuejs.org/"},"vue test utils")," and ",(0,r.yg)("a",{parentName:"p",href:"https://jestjs.io/docs/getting-started"},"jest")," docs."),(0,r.yg)("h2",{id:"vscode-debugging-tools"},"VSCode debugging tools"),(0,r.yg)("p",null,"It is possible to use debugging tools within Jest via VSCode. To do so, open the debugger panel (Ctrl/Cmd+Shift+D) and select the ",(0,r.yg)("inlineCode",{parentName:"p"},"Debug Jest Tests")," option from the dropdown. This will start a debug session with the Jest tests, allowing you to set breakpoint, inspect code and visualize variables on the panel itself. As usual it's possible to execute the tests by ",(0,r.yg)("inlineCode",{parentName:"p"},"F5")," after selecting the right option."),(0,r.yg)("h2",{id:"style-guide"},"Style guide"),(0,r.yg)("p",null,"On top of the recommendation provided by the ",(0,r.yg)("a",{parentName:"p",href:"https://vuejs.org/guide/scaling-up/testing.html"},"Vue documentation"),", it is also encouraged to follow these patterns to create readable and aimed tests."),(0,r.yg)("h2",{id:"jest-global-configuration"},"Jest global configuration"),(0,r.yg)("p",null,"Some of the global configuration for Jest can be found in the ",(0,r.yg)("inlineCode",{parentName:"p"},"jest.setup.js")," file, mainly to avoid repetitions. This will include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Global Vue mounted",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Components"),(0,r.yg)("li",{parentName:"ul"},"Modules"),(0,r.yg)("li",{parentName:"ul"},"Directives"),(0,r.yg)("li",{parentName:"ul"},"Getters (e.g., i18n/t)"))),(0,r.yg)("li",{parentName:"ul"},"Global hooks, e.g. ",(0,r.yg)("inlineCode",{parentName:"li"},"afterEach()")," with mocks resets")),(0,r.yg)("h3",{id:"describe-and-testit-statement"},"Describe and test/it statement"),(0,r.yg)("p",null,"To clearly state the scope of the test, it's convenient to define in the first ",(0,r.yg)("inlineCode",{parentName:"p"},"describe")," always define with a noun the name of the function, method, or component being tested. Multiple assertions may be grouped together under a common statement in ",(0,r.yg)("inlineCode",{parentName:"p"},"describe")," block, as it helps to avoid repetition and ensure a set of tests to be included. Each ",(0,r.yg)("inlineCode",{parentName:"p"},"test"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"it")," block should then start with a verb related to what is the expectation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"describe('myfunction', () => {\n  describe('given the same parameter', () => {\n    it('should return the same result', () => {\n      // Test code\n    });\n   \n    it('should return something else for a second parameter', () => {\n      // Test code\n    });\n  });\n});\n")),(0,r.yg)("p",null,"For further information, consult the ",(0,r.yg)("a",{parentName:"p",href:"https://jestjs.io/docs/api#describename-fn"},"Jest API")," documentation."),(0,r.yg)("h3",{id:"simple-tests"},"Simple tests"),(0,r.yg)("p",null,"Test with the highest readability and reliability should avoid logic, as this will increase line of code and have to be tested as well. Static data is then preferred over computation and should be declared always within the describe or test or as close as possible."),(0,r.yg)("p",null,"Don't:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"test('define if is required to use this in our component from the response', () => {\n  const myData = externalFunction(externalData);\n\n  for(data in myData) {\n    data.key = 'something else'\n  }\n  \n  expect(isRequired(myData)).toBe(true);\n});\n")),(0,r.yg)("p",null,"Do:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"describe('FX: isRequired', () => {\n  test('should return true', () => {\n    const myData = { key: 'required case' };\n    \n    const result = isRequired(myData);\n\n    expect(result).toBe(true);\n  });\n});\n")),(0,r.yg)("h3",{id:"aaa-pattern"},"AAA pattern"),(0,r.yg)("p",null,"Adoption of AAA format (arrange, act, assert) for tests. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Arrange is where you prepare test, e.g. set properties to a component or declare variables"),(0,r.yg)("li",{parentName:"ul"},"Act is when an event or function is triggered"),(0,r.yg)("li",{parentName:"ul"},"Assertion correspond to the expectation of the test")),(0,r.yg)("p",null,"Don't:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"describe('FX: isRequired', () => {\n  test('should return true', () => {\n    let myData = { key: 'required case' };\n\n    expect(myData).toBeTruthy();\n\n    myData.key = 'something else';\n    const result = isRequired(myData);\n\n    expect(result).toBe(true);\n\n    myData['key2'] = 'another key/value';\n\n    expect(result).toBe(false);\n  });\n});\n")),(0,r.yg)("p",null,"Do:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"describe('FX: isRequired', () => {\n  test('should return true', () => {\n    const myData = { key: 'required case' };\n    \n    const result = isRequired(myData);\n\n    expect(result).toBe(true);\n  });\n\n  test('should return false if malformed data', () => {\n    const myData = {\n      key: 'required case',\n      key2: 'another key/value'\n    };\n    \n    const result = isRequired(myData);\n\n    expect(result).toBe(false);\n  });\n});\n")),(0,r.yg)("h3",{id:"behaviors-over-implementations"},"Behaviors over implementations"),(0,r.yg)("p",null,"As also defined in the Vue documentation for ",(0,r.yg)("a",{parentName:"p",href:"https://vuejs.org/guide/scaling-up/testing.html#component-testing"},"component")," and ",(0,r.yg)("a",{parentName:"p",href:"https://vuejs.org/guide/scaling-up/testing.html#testing-composables"},"composable testing"),", it is recommended to test rendered elements over internal API of the component."),(0,r.yg)("p",null,"Following an input example as in the ",(0,r.yg)("a",{parentName:"p",href:"https://v2.vuejs.org/v2/cookbook/unit-testing-vue-components.html?redirect=true#Base-Example"},"documentation"),"."),(0,r.yg)("p",null,"Don't:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const wrapper = mount(YourComponent);\nconst inputWrapper = wrapper.find(`[data-testid=your-component]`;\n\ninputWrapper.setValue(1);\n\nexpect(wrapper.emitted('input')[0][0]).toBe(1);\n")),(0,r.yg)("p",null,"Do:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const wrapper = mount(YourComponent);\nconst inputWrapper = wrapper.find(`[data-testid=your-component]`;\n\ninputWrapper.setValue(1);\n\nexpect(wrapper.text()).toContain('1')\n")),(0,r.yg)("h3",{id:"parameterization"},"Parameterization"),(0,r.yg)("p",null,"When multiple cases are required to be tested for the same component, it is recommended to avoid multiple actions and assertions or even worse logic, but rather rely on Jest functions to parametrize the test."),(0,r.yg)("p",null,"Don't:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"describe('FX: isRequired', () => {\n  test('should return true', () => {\n    let myData = { key: 'required case' };\n\n    expect(myData).toBeTruthy();\n\n    myData.key = 'something else';\n\n    expect(result).toBe(true);\n\n    myData.key = 'another value';\n\n    expect(result).toBe(true);\n  });\n});\n")),(0,r.yg)("p",null,"Do:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"describe('FX: isRequired', () => {\n  test.each([\n    'required case',\n    'something else',\n    'another value',\n  ])('should return true', (key) => {\n    const myData = { key };\n    \n    const result = isRequired(myData);\n\n    expect(result).toBe(true);\n  });\n});\n")),(0,r.yg)("h2",{id:"coverage"},"Coverage"),(0,r.yg)("p",null,"Both unit and E2E tests generate coverage respectively with Jest and NYC. These values are generated on both PR and push to ",(0,r.yg)("inlineCode",{parentName:"p"},"master")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"release")," after merging. The service used to display the values is Codecov and can be found ",(0,r.yg)("a",{parentName:"p",href:"https://app.codecov.io/gh/rancher/dashboard"},"here"),"."),(0,r.yg)("p",null,"Special attention goes to the E2E as the code is instrumented with Babel and the configuration is set within Nuxt.js."))}c.isMDXComponent=!0}}]);