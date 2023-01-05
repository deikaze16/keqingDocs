"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(m,".").concat(f)]||u[f]||c[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3,title:"Multiframe Tester \u2b50",description:"Test multiple frames at once."},o="Multiframe Tester",l={unversionedId:"features/multiframe-tester",id:"features/multiframe-tester",title:"Multiframe Tester \u2b50",description:"Test multiple frames at once.",source:"@site/docs/features/multiframe-tester.md",sourceDirName:"features",slug:"/features/multiframe-tester",permalink:"/keqingDocs/features/multiframe-tester",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/features/multiframe-tester.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Multiframe Tester \u2b50",description:"Test multiple frames at once."},sidebar:"mySidebar",previous:{title:"Frame Tester",permalink:"/keqingDocs/features/frame-tester"},next:{title:"Most Tested Frames \u2b50",permalink:"/keqingDocs/features/most-tested-frames"}},m={},s=[{value:"Command Information",id:"command-information",level:3},{value:"Usage",id:"usage",level:3},{value:"FAQ",id:"faq",level:4},{value:"Answer",id:"answer",level:4}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multiframe-tester"},"Multiframe Tester"),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This feature is available for premium servers only")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Multiframe tester",src:n(5053).Z,title:":size=100%",width:"711",height:"582"})),(0,a.kt)("h3",{id:"command-information"},"Command Information"),(0,a.kt)("admonition",{title:"Command:",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Format")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]getframes <type> [page]")),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"<type>")," = bits, carousel, special, event, transparent, bits type (e.g wood, stone), or Frame names")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Aliases")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]getf"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]getframe"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]multif"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[p]multiframe")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Example"),"  :"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"agetframes bits 1\namultiframe carousel 3\nagetf special 5\namultif event 2\nagetf stone 1\nagetframes budokai, arcana, interface, petals\n"))),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Search for the character through ",(0,a.kt)("inlineCode",{parentName:"li"},"k!lookup")),(0,a.kt)("li",{parentName:"ul"},"Select the corresponding edition"),(0,a.kt)("li",{parentName:"ul"},"Reply to the lookup embed with the multi-frame tester command")),(0,a.kt)("h4",{id:"faq"},"FAQ"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Can i disable Multiframe tester in some channels?"'),(0,a.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,a.kt)("span",{class:"mention"},"@Some random owner"))),(0,a.kt)("h4",{id:"answer"},"Answer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have ",(0,a.kt)("inlineCode",{parentName:"li"},"achannel")," command, you can use that"),(0,a.kt)("li",{parentName:"ul"},"Go to the channel you want and run the command."),(0,a.kt)("li",{parentName:"ul"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"achannel")," command and then click the ",(0,a.kt)("button",{class:"btn btn-primary"},"Toggle features")," button, select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Frame tester")," option and done")))}u.isMDXComponent=!0},5053:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/getframes-420cc2d01f7060e73a830cfa62cb38ce.gif"}}]);