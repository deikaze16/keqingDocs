"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[939],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||n;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={},i="Price Calculator",l={unversionedId:"features/price-calc",id:"features/price-calc",title:"Price Calculator",description:"Disclaimer",source:"@site/docs/features/price-calc.md",sourceDirName:"features",slug:"/features/price-calc",permalink:"/keqingDocs/features/price-calc",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/features/price-calc.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Global Market",permalink:"/keqingDocs/features/Global Market"}},c={},u=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Important notes",id:"important-notes",level:2},{value:"FAQ",id:"faq",level:2},{value:"Answer:",id:"answer",level:4}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"price-calculator"},"Price Calculator"),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("admonition",{title:"Disclaimer",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"At the end the day, pricing cards is an arbitrary matter. So, while the calculator may spit out a certain price range, you\u2019re free to price above, below, or within that. Your cards are your cards, and you\u2019re the one who gets to set the price. That said, calculator is designed to help those new to karuta to better understand the general worth of their cards.")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, klu the character of the card you\u2019re pricing")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Price Calculator",src:r(2423).Z,width:"984",height:"461"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Next, react to the klu message with \ud83d\udcb0 ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Price Calculator",src:r(6755).Z,width:"831",height:"511"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should be prompted to kci the card you\u2019d like to price. Run the kci command, and keqing will calculate your card\u2019s price.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Price Calculator",src:r(1134).Z,width:"878",height:"498"})),(0,o.kt)("h2",{id:"important-notes"},"Important notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The calculator will not account for good/bad effort. Please adjust your price accordingly (i.e., for bad effort, choose the lower price on the range/below the range. for good effort, choose the higher price on the range/above the range)."),(0,o.kt)("li",{parentName:"ul"},"The calculator will not account for special/carousel/event frames. Please look up the frame in question to see what it is going for on the market currently, then add that to the price."),(0,o.kt)("li",{parentName:"ul"},"The calculator will not account for morphs. If you believe your morph is pure or of value, please get it appraised by a professional morph appraiser, then add the result to the price.")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u201cIs the price calculator accurate?\u201d")),(0,o.kt)("h4",{id:"answer"},"Answer:"),(0,o.kt)("p",null,"The calculator is very accurate for most cards. The rates used within the calculator are based off the current pricing guide (updated around twice a month). The guide is created by carefully averaging over 100 sold deals in karuta, meaning the calculator\u2019s prices are as accurate as possible."))}p.isMDXComponent=!0},2423:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/klu-ea89287e28429499b53e9d634f6ab5ef.png"},6755:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/kluresult-7f4bd9b7b6934829838d122c14f52f80.png"},1134:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/priceresult-b67a1307b5315a4d021f7f232acd0c20.png"}}]);