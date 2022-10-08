"use strict";(self.webpackChunkkeqing_docs_2=self.webpackChunkkeqing_docs_2||[]).push([[317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(m,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4021:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Multiframe Tester",l={unversionedId:"Features/multiframe-tester",id:"Features/multiframe-tester",title:"Multiframe Tester",description:"This feature is available for premium servers only",source:"@site/docs/Features/multiframe-tester.md",sourceDirName:"Features",slug:"/Features/multiframe-tester",permalink:"/Features/multiframe-tester",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/Features/multiframe-tester.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Frame Tester",permalink:"/Features/frame-tester"},next:{title:"Morph Tester",permalink:"/Features/morph-tester"}},m={},p=[{value:"Command Information",id:"command-information",level:3},{value:"Usage",id:"usage",level:3},{value:"FAQ",id:"faq",level:4},{value:"Answer",id:"answer",level:4}],s={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multiframe-tester"},"Multiframe Tester"),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This feature is available for premium servers only")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Multiframe tester",src:r(4374).Z,title:":size=100%",width:"711",height:"582"})),(0,a.kt)("h3",{id:"command-information"},"Command Information"),(0,a.kt)("admonition",{title:"Command:",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Format")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]getframes <type> [page]")),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"<type>")," = bits, carousel, special, event, transparent, bits type (e.g wood, stone), or Frame names")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Aliases")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]getf"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]getframe"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]multif"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]multiframe")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Example"),"  :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"agetframes bits 1\namultiframe carousel 3\nagetf special 5\namultif event 2\nagetf stone 1\nagetframes budokai, arcana, interface, petals\n"))),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Search for the character through ",(0,a.kt)("inlineCode",{parentName:"li"},"k!lookup")),(0,a.kt)("li",{parentName:"ul"},"Select the corresponding edition"),(0,a.kt)("li",{parentName:"ul"},"Reply to the lookup embed with the multi-frame tester command")),(0,a.kt)("h4",{id:"faq"},"FAQ"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Can i disable Multiframe tester in some channels?"'),(0,a.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,a.kt)("em",{parentName:"p"},"@Some random owner"))),(0,a.kt)("h4",{id:"answer"},"Answer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have ",(0,a.kt)("inlineCode",{parentName:"li"},"achannel")," command, you can use that"),(0,a.kt)("li",{parentName:"ul"},"Go to the channel you want and run the command."),(0,a.kt)("li",{parentName:"ul"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"achannel")," command and then click the ",(0,a.kt)("button",{class:"btn btn-primary"},"Toggle features")," button, select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Frame tester")," option and done")))}u.isMDXComponent=!0},4374:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/getframes-420cc2d01f7060e73a830cfa62cb38ce.gif"}}]);