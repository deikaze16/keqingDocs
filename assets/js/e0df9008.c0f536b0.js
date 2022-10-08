"use strict";(self.webpackChunkkeqing_docs_2=self.webpackChunkkeqing_docs_2||[]).push([[51],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Card Tracer",s={unversionedId:"Features/trace",id:"Features/trace",title:"Card Tracer",description:"Card Tracer",source:"@site/docs/Features/trace.md",sourceDirName:"Features",slug:"/Features/trace",permalink:"/Features/trace",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/Features/trace.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Morph Tester",permalink:"/Features/morph-tester"},next:{title:"Bits Calculator",permalink:"/Features/bits-calculator"}},l={},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"card-tracer"},"Card Tracer"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/867945490786959382/977516813258719282/unknown.png",alt:"Card Tracer"})),(0,n.kt)("p",null,"We're finally making ",(0,n.kt)("inlineCode",{parentName:"p"},"atrace")," available for public use! For those who don't know, this command allows players to ",(0,n.kt)("strong",{parentName:"p"},"find low print and mid print of any character up to #500"),". No need to use your search bar on every server you're in. No more code hunting bounties ",(0,n.kt)("del",{parentName:"p"},"and potential ban from self bots/spamming"),". Finding cards have never been easier, all of the card codes are just one command away!"),(0,n.kt)("admonition",{title:"How to use",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Command : ",(0,n.kt)("inlineCode",{parentName:"p"},"atrace [filters]")),(0,n.kt)("p",{parentName:"admonition"},"The filters used are similar to the filters used in Karuta's collection ")),(0,n.kt)("p",null,"All of these codes are obtained from ",(0,n.kt)("strong",{parentName:"p"},"a player's collection"),", when a card is ",(0,n.kt)("strong",{parentName:"p"},"viewed"),", or when ",(0,n.kt)("strong",{parentName:"p"},"the card info is shown"),". Any server where ",(0,n.kt)("em",{parentName:"p"},"@Keqing")," or ",(0,n.kt)("em",{parentName:"p"},"@Mikey")," bot is present will have the cards' data saved to the database. As we're using the ",(0,n.kt)("strong",{parentName:"p"},"same database"),", card codes saved by ",(0,n.kt)("em",{parentName:"p"},"@Mikey")," will also show up in our atrace."),(0,n.kt)("p",null,"Some may have concerns about this as it might've violated Karuta's rules. It also bypasses a player's private collection - the card they're hiding are still seen by everyone. There's also the tendency to get scammed because of this. We've considered all of them, and here is our take about those matters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Craig allows this feature. We confirmed that it doesn't violate any rules. Players don't have to worry about getting banned for using this feature."),(0,n.kt)("li",{parentName:"ul"},"The codes can still be found even if a bot doesn't save them. The codes are limited to alphanumeric characters, and cards dropped at a certain time range only differs by 2-3 characters. As long as they know when it dropped, any player can just test all the possible codes, given enough time and determination  (assuming they don't get blacklisted for spamming). If you don't want to sell your card, just decline all offers. Turn off direct messages from server members and limit them to your friends only. However, if you still don't want it to be shown, we'll be adding a command to hide a card in atrace."),(0,n.kt)("li",{parentName:"ul"},"It's part of the game to learn the latest market pricing of card and items. To prevent getting ripped-off/low balled, ask around the official server's ",(0,n.kt)("em",{parentName:"li"},"#player-advice"),", use a card pricing guide, or wait for more offers.")),(0,n.kt)("p",null,"We hope this feature would make this game better. Players can look for their favorite cards and sellers will surely receive the best offer for their cards. If you have further concerns about the feature, use ",(0,n.kt)("em",{parentName:"p"},"#\ud83d\udce9\u30fbfeedback-and-suggestions"),"."))}p.isMDXComponent=!0}}]);