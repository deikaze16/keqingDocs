"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Future Edition Schedule",l={unversionedId:"features/future-edition-schedule",id:"features/future-edition-schedule",title:"Future Edition Schedule",description:"Schedule",source:"@site/docs/features/future-edition-schedule.md",sourceDirName:"features",slug:"/features/future-edition-schedule",permalink:"/features/future-edition-schedule",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/features/future-edition-schedule.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Card Tracer",permalink:"/features/trace"},next:{title:"Bits Calculator",permalink:"/features/bits-calculator"}},u={},c=[{value:"Commands",id:"commands",level:2}],s={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"future-edition-schedule"},"Future Edition Schedule"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Schedule",src:r(7807).Z,width:"1192",height:"508"})),(0,a.kt)("p",null,"With this command, you can track the upcomming edition release date."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("admonition",{title:"Command",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Format")," : ",(0,a.kt)("strong",{parentName:"p"},"[p]","schedule ","[filters]")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"[p]"," => prefix (by default it's ",(0,a.kt)("inlineCode",{parentName:"li"},"a"),")"),(0,a.kt)("li",{parentName:"ul"},"[filters]"," => optional",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"c => character"),(0,a.kt)("li",{parentName:"ul"},"s => series"),(0,a.kt)("li",{parentName:"ul"},"w => wishlist amount"),(0,a.kt)("li",{parentName:"ul"},"e => edition"),(0,a.kt)("li",{parentName:"ul"},"--released => characters that already released"),(0,a.kt)("li",{parentName:"ul"},"o:w => sort by wishlist, if you want to use it, put this before any other filters")))),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Example")," : "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"aschedule"),(0,a.kt)("li",{parentName:"ul"},"aschedule c=sinon s=sword"),(0,a.kt)("li",{parentName:"ul"},"aschedule e=5"),(0,a.kt)("li",{parentName:"ul"},"aschedule o=w e=5"),(0,a.kt)("li",{parentName:"ul"},"aschedule e=5 w>1000  "),(0,a.kt)("li",{parentName:"ul"},"aschedule e=5 w>1000 --released"))))}p.isMDXComponent=!0},7807:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/schedule-4e7f607cf0e9ed8f2c02ab467511015b.png"}}]);