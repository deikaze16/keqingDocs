"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Server Drop Ping",s={unversionedId:"features/server-drop-ping",id:"features/server-drop-ping",title:"Server Drop Ping",description:"Server Drop",source:"@site/docs/features/server-drop-ping.md",sourceDirName:"features",slug:"/features/server-drop-ping",permalink:"/keqingDocs/features/server-drop-ping",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/features/server-drop-ping.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"(Not) Starboard",permalink:"/keqingDocs/features/not-starboard"},next:{title:"Wishlist Notifier",permalink:"/keqingDocs/features/wishlist-notifier"}},l={},p=[{value:"How to use",id:"how-to-use",level:3},{value:"Role restriction",id:"role-restriction",level:3},{value:"Disable Feature",id:"disable-feature",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-drop-ping"},"Server Drop Ping"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7171).Z,title:":size=100%",width:"1156",height:"336"}),"\n",(0,a.kt)("img",{alt:"Server Drop",src:r(45).Z,title:":size=100%",width:"1161",height:"597"})),(0,a.kt)("p",null,"Basically same as the ",(0,a.kt)("a",{parentName:"p",href:"./wishlist-notifier"},"Wishlist Notifier")),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, if you want to use this feature, you need to enable it in your server."),(0,a.kt)("li",{parentName:"ul"},"How? If you are an admin, just click the ",(0,a.kt)("button",{class:"btn btn-success"},"Enable this feature")," button")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Drop",src:r(6236).Z,title:":size=100%",width:"1159",height:"348"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After that you can run the command below")),(0,a.kt)("admonition",{title:"Command :",type:"info"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"adropwatch\n")),(0,a.kt)("p",{parentName:"admonition"},"To remove your ",(0,a.kt)("span",{class:"mention"},"@Server Drop Ping")," role, just click the ",(0,a.kt)("button",{class:"btn btn-danger"},"Disable My Ping")," button"),(0,a.kt)("p",{parentName:"admonition"},"Note : You can use this command on any servers")),(0,a.kt)("admonition",{title:"Important",type:"warning"},(0,a.kt)("span",{class:"mention"},"@Keqing")," must have the ",(0,a.kt)("code",null,"MANAGE ROLES")," perms"),(0,a.kt)("h3",{id:"role-restriction"},"Role restriction"),(0,a.kt)("p",null,"This feature can be limited so that a role is required to obtain the ",(0,a.kt)("span",{class:"mention"},"@Server Drop Ping")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Format : [p]adropaccess <@role | false>\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Use false to make it available to all members.")),(0,a.kt)("h3",{id:"disable-feature"},"Disable Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"[p]dropwath")," command"),(0,a.kt)("li",{parentName:"ul"},"Press the ",(0,a.kt)("button",{class:"btn btn-danger"},"Disable this feature")," button")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Important ",(0,a.kt)("span",{class:"mention"},"@Keqing")," will delete the ",(0,a.kt)("span",{class:"mention"},"@Server Drop Ping")," role, which means all members will lose the role.")))}u.isMDXComponent=!0},45:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/drop-bcc3dcd96bfc24f6b62502efddadedba.png"},6236:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/drop2-2dc7e4814486d10a23123c3cf93b91e8.png"},7171:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dropwatch-d3adf58a1b88c3d61f6e70a88c1cd89e.png"}}]);