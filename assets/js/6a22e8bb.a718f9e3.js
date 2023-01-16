"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,h=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>U,contentTitle:()=>q,default:()=>V,frontMatter:()=>X,metadata:()=>Z,toc:()=>Y});var n=r(7462),o=r(7294),a=r(3905);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function c(e){var t=(0,o.useRef)(e),r=(0,o.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,r.current}var u=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},s=function(e){return"touches"in e},f=function(e){return e&&e.ownerDocument.defaultView||self},p=function(e,t,r){var n=e.getBoundingClientRect(),o=s(t)?function(e,t){for(var r=0;r<e.length;r++)if(e[r].identifier===t)return e[r];return e[0]}(t.touches,r):t;return{left:u((o.pageX-(n.left+f(e).pageXOffset))/n.width),top:u((o.pageY-(n.top+f(e).pageYOffset))/n.height)}},m=function(e){!s(e)&&e.preventDefault()},h=o.memo((function(e){var t=e.onMove,r=e.onKey,n=l(e,["onMove","onKey"]),a=(0,o.useRef)(null),u=c(t),h=c(r),d=(0,o.useRef)(null),v=(0,o.useRef)(!1),g=(0,o.useMemo)((function(){var e=function(e){m(e),(s(e)?e.touches.length>0:e.buttons>0)&&a.current?u(p(a.current,e,d.current)):r(!1)},t=function(){return r(!1)};function r(r){var n=v.current,o=f(a.current),i=r?o.addEventListener:o.removeEventListener;i(n?"touchmove":"mousemove",e),i(n?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,n=a.current;if(n&&(m(t),!function(e,t){return t&&!s(e)}(t,v.current)&&n)){if(s(t)){v.current=!0;var o=t.changedTouches||[];o.length&&(d.current=o[0].identifier)}n.focus(),u(p(n,t,d.current)),r(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),h({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},r]}),[h,u]),b=g[0],y=g[1],k=g[2];return(0,o.useEffect)((function(){return k}),[k]),o.createElement("div",i({},n,{onTouchStart:b,onMouseDown:b,className:"react-colorful__interactive",ref:a,onKeyDown:y,tabIndex:0,role:"slider"}))})),d=function(e){return e.filter(Boolean).join(" ")},v=function(e){var t=e.color,r=e.left,n=e.top,a=void 0===n?.5:n,i=d(["react-colorful__pointer",e.className]);return o.createElement("div",{className:i,style:{top:100*a+"%",left:100*r+"%"}},o.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},g=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},b=(Math.PI,function(e){return N(y(e))}),y=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?g(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?g(parseInt(e.substring(6,8),16)/255,2):1}},k=function(e){return E(_(e))},w=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:g(e.h),s:g(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:g(o/2),a:g(n,2)}},x=function(e){var t=w(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},_=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),i=n*(1-r),l=n*(1-(t-a)*r),c=n*(1-(1-t+a)*r),u=a%6;return{r:g(255*[n,l,i,i,c,n][u]),g:g(255*[c,n,n,l,i,i][u]),b:g(255*[i,i,c,n,n,l][u]),a:g(o,2)}},C=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},E=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?C(g(255*o)):"";return"#"+C(t)+C(r)+C(n)+a},N=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),i=a-Math.min(t,r,n),l=i?a===t?(r-n)/i:a===r?2+(n-t)/i:4+(t-r)/i:0;return{h:g(60*(l<0?l+6:l)),s:g(a?i/a*100:0),v:g(a/255*100),a:o}},O=o.memo((function(e){var t=e.hue,r=e.onChange,n=d(["react-colorful__hue",e.className]);return o.createElement("div",{className:n},o.createElement(h,{onMove:function(e){r({h:360*e.left})},onKey:function(e){r({h:u(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":g(t),"aria-valuemax":"360","aria-valuemin":"0"},o.createElement(v,{className:"react-colorful__hue-pointer",left:t/360,color:x({h:t,s:100,v:100,a:1})})))})),M=o.memo((function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:x({h:t.h,s:100,v:100,a:1})};return o.createElement("div",{className:"react-colorful__saturation",style:n},o.createElement(h,{onMove:function(e){r({s:100*e.left,v:100-100*e.top})},onKey:function(e){r({s:u(t.s+100*e.left,0,100),v:u(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+g(t.s)+"%, Brightness "+g(t.v)+"%"},o.createElement(v,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:x(t)})))})),T=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},j=function(e,t){return e.toLowerCase()===t.toLowerCase()||T(y(e),y(t))};function P(e,t,r){var n=c(r),a=(0,o.useState)((function(){return e.toHsva(t)})),i=a[0],l=a[1],u=(0,o.useRef)({color:t,hsva:i});(0,o.useEffect)((function(){if(!e.equal(t,u.current.color)){var r=e.toHsva(t);u.current={hsva:r,color:t},l(r)}}),[t,e]),(0,o.useEffect)((function(){var t;T(i,u.current.hsva)||e.equal(t=e.fromHsva(i),u.current.color)||(u.current={hsva:i,color:t},n(t))}),[i,e,n]);var s=(0,o.useCallback)((function(e){l((function(t){return Object.assign({},t,e)}))}),[]);return[i,s]}var D,H="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,S=new Map,I=function(e){H((function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!S.has(t)){var n=t.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',S.set(t,n);var o=D||r.nc;o&&n.setAttribute("nonce",o),t.head.appendChild(n)}}),[])},R=function(e){var t=e.className,r=e.colorModel,n=e.color,a=void 0===n?r.defaultColor:n,c=e.onChange,u=l(e,["className","colorModel","color","onChange"]),s=(0,o.useRef)(null);I(s);var f=P(r,a,c),p=f[0],m=f[1],h=d(["react-colorful",t]);return o.createElement("div",i({},u,{ref:s,className:h}),o.createElement(M,{hsva:p,onChange:m}),o.createElement(O,{hue:p.h,onChange:m,className:"react-colorful__last-control"}))},z={defaultColor:"000",toHsva:b,fromHsva:function(e){return k({h:e.h,s:e.s,v:e.v,a:1})},equal:j},B=function(e){return o.createElement(R,i({},e,{colorModel:z}))},F=/^#?([0-9A-F]{3,8})$/i,L=function(e){var t=e.color,r=void 0===t?"":t,n=e.onChange,a=e.onBlur,u=e.escape,s=e.validate,f=e.format,p=e.process,m=l(e,["color","onChange","onBlur","escape","validate","format","process"]),h=(0,o.useState)((function(){return u(r)})),d=h[0],v=h[1],g=c(n),b=c(a),y=(0,o.useCallback)((function(e){var t=u(e.target.value);v(t),s(t)&&g(p?p(t):t)}),[u,p,s,g]),k=(0,o.useCallback)((function(e){s(e.target.value)||v(u(r)),b(e)}),[r,u,s,b]);return(0,o.useEffect)((function(){v(u(r))}),[r,u]),o.createElement("input",i({},m,{value:f?f(d):d,spellCheck:"false",onChange:y,onBlur:k}))},K=function(e){return"#"+e},W=function(e){var t=e.prefixed,r=e.alpha,n=l(e,["prefixed","alpha"]),a=(0,o.useCallback)((function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,r?8:6)}),[r]),c=(0,o.useCallback)((function(e){return function(e,t){var r=F.exec(e),n=r?r[1].length:0;return 3===n||6===n||!!t&&4===n||!!t&&8===n}(e,r)}),[r]);return o.createElement(L,i({},n,{escape:a,format:t?K:void 0,process:K,validate:c}))};function A(){const[e,t]=(0,o.useState)("#aabbcc");return o.createElement("div",null,o.createElement("section",{className:"resposive example"},o.createElement(B,{color:e,className:"resposive ",onChange:t})),o.createElement("section",{style:{backgroundColor:e,fontWeight:600,padding:"1rem"}},o.createElement("label",{htmlFor:"textclr"},"Color Hex : #"),o.createElement(W,{id:"textclr",color:e,onChange:t})))}const X={sidebar_position:5,title:"Morph Tester",description:"Frame tester with (fake) morph features."},q="Morph Tester",Z={unversionedId:"features/morph-tester",id:"features/morph-tester",title:"Morph Tester",description:"Frame tester with (fake) morph features.",source:"@site/docs/features/morph-tester.md",sourceDirName:"features",slug:"/features/morph-tester",permalink:"/features/morph-tester",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/features/morph-tester.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Morph Tester",description:"Frame tester with (fake) morph features."},sidebar:"mySidebar",previous:{title:"Most Tested Frames \u2b50",permalink:"/features/most-tested-frames"},next:{title:"Card Tracer",permalink:"/features/trace"}},U={},Y=[{value:"How to use",id:"how-to-use",level:3},{value:"Color picker",id:"color-picker",level:3}],J={toc:Y};function V(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},J,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"morph-tester"},"Morph Tester"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Morph Tester",src:r(1363).Z,title:":size=100%",width:"1178",height:"457"})),(0,a.kt)("p",null,"We also provide another feature: ",(0,a.kt)("strong",{parentName:"p"},"Morph testing"),"! This feature is still in beta phase, so it's free for everyone to use. At the moment, it cannot test any cards that you own; it can only test one color for the morph (aside from white). Character names are hidden since inaccurate colors are shown otherwise. The usage of this feature is similar to frame testing, with an additional parameter: the hex code for the morph color."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Non-premium servers can only use test with 1 type only (HUE), upgrade to premium version to be able to test for 6 types")),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Search for the character through ",(0,a.kt)("inlineCode",{parentName:"p"},"k!lookup")," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the corresponding edition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"React with \ud83d\udd8c\ufe0f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type the frame name with the hex color next to it, example: ",(0,a.kt)("inlineCode",{parentName:"p"},"Broken Mirror #ff0000")),(0,a.kt)("img",{src:"https://cdn.discordapp.com/attachments/910106115444977694/977499446805942332/unknown.png",style:{maxWidth:"500px",margin:"20px 0"}})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the Morph Type ",(0,a.kt)("strong",{parentName:"p"},"(Premium only)")),(0,a.kt)("img",{src:"https://cdn.discordapp.com/attachments/910106115444977694/977499510827794452/unknown.png",style:{maxWidth:"500px",margin:"20px 0"}})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Done ;) ",(0,a.kt)("br",null)),(0,a.kt)("img",{src:"https://cdn.discordapp.com/attachments/910106115444977694/977499609603645500/unknown.png",style:{maxWidth:"500px",margin:"20px 0"}}))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Non-premium servers can only test using ",(0,a.kt)("inlineCode",{parentName:"li"},"Hue")," type"),(0,a.kt)("li",{parentName:"ul"},"What are morph types? It's the Blending type. Just experiment with it for now since we're still not sure which one is used by Karuta"))),(0,a.kt)("h3",{id:"color-picker"},"Color picker"),(0,a.kt)(A,{mdxType:"Color"}))}V.isMDXComponent=!0},1363:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/morph-b2c73691de00fd40c5e4f3c286bd1170.png"}}]);