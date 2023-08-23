"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),h=s,k=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),s=(r(7294),r(3905));const i={title:"Perks Picker"},a=void 0,o={unversionedId:"features/perks_picker",id:"features/perks_picker",title:"Perks Picker",description:"Disclaimer",source:"@site/docs/features/perks_picker.md",sourceDirName:"features",slug:"/features/perks_picker",permalink:"/features/perks_picker",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/features/perks_picker.md",tags:[],version:"current",frontMatter:{title:"Perks Picker"},sidebar:"mySidebar",previous:{title:"Price Calculator",permalink:"/features/price-calc"},next:{title:"Sketch Gallery",permalink:"/features/sketch-gallery"}},c={},l=[{value:"Disclaimer",id:"disclaimer",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Known issue",id:"known-issue",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The dojo system is constantly changing due to new perks/instincts being added, but we try to remain as up-to-date with it as possible. How you structure your build is up to you, the perk picker merely suggests what ",(0,s.kt)("span",{class:"mention"},"@Kasito"),"\u2014one of the foremost dojo experts with over 1million dojo EXP\u2014recommends.")),(0,s.kt)("admonition",{title:"IMPORTANT NOTE",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"The perk picker only works with Spirit technique fighters. Scroll fighters WILL NOT REGISTER.")),(0,s.kt)("h2",{id:"how-to-use"},"How to use"),(0,s.kt)("p",null,"First, have an admin run achannel and activate the perks picker feature in your server\n",(0,s.kt)("img",{src:r(4717).Z,width:"1142",height:"882"})),(0,s.kt)("p",null,"Once its activated, run kfi"),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(5465).Z,width:"810",height:"848"})),(0,s.kt)("p",null,"Then select \u201cperks\u201d"),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(260).Z,width:"976",height:"1170"})),(0,s.kt)("p",null,"After selecting perks, Keqing will automatically pop up with the perk picker feature, which will suggest what we believe is the strongest perk in each level.\n",(0,s.kt)("img",{src:r(7022).Z,width:"1252",height:"1170"})),(0,s.kt)("h2",{id:"how-it-works"},"How it works"),(0,s.kt)("p",null,"The perk picker looks at each individual level of your fighter and suggests the top perk in each level based on ",(0,s.kt)("span",{class:"mention"},"@Kasito"),"\u2019s scoring. Kasito scores with ranked play in mind."),(0,s.kt)("p",null,"Perks with a green dot next to them mean who already have the strongest perk selected\n",(0,s.kt)("img",{src:r(5993).Z,width:"522",height:"152"})),(0,s.kt)("p",null,"Perks with a gray dot mean that you have a perk other than the strongest perk selected\n",(0,s.kt)("img",{src:r(5618).Z,width:"542",height:"152"})),(0,s.kt)("p",null,"At the end of every perk picker message will be a total score. This is the total scores of all the SUGGESTED PERKS, not the total of your selected perks. This feature helps gauge which of your fighters may be worth leveling up/playing ranked with, but take it with a grain of salt.\n",(0,s.kt)("img",{src:r(6117).Z,width:"1406",height:"734"})),(0,s.kt)("h2",{id:"known-issue"},"Known issue"),(0,s.kt)("p",null,"The perk picker isn\u2019t necessarily perfect, and there may be some cases where you want to go with a perk/instinct that isn\u2019t suggested if it fits your build better. One known issue is that the perk picker will sometimes suggest you add multiple openers (do not do this). Instead, we recommend you add the highest opener it suggests, and go with a different perk for the other levels."))}u.isMDXComponent=!0},4717:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/perks1-15f444b413e82957ef4771df7325ebd3.png"},5465:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/perks2-fd8077f7f565c9a5c26a3bec33f69904.png"},260:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/perks3-6b088d3091fbb67fcac78ecaef5224cd.png"},7022:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/perks4-8802bd7d3bd58d0729e1fbbeee6a1f4d.png"},5993:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/perks5-fe82f4a3650fc54b1c5873cae7f57e5e.png"},5618:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/perks6-cc785754a6eaca505b89376a18a6e51d.png"},6117:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/perks7-5201943bf198af8dd925c329194c5cf0.png"}}]);