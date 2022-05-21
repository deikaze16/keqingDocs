"use strict";(self.webpackChunkkeqing_docs_2=self.webpackChunkkeqing_docs_2||[]).push([[118],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9860:function(e,t,r){r.r(t),r.d(t,{assets:function(){return X},contentTitle:function(){return L},default:function(){return U},frontMatter:function(){return K},metadata:function(){return W},toc:function(){return Z}});var n=r(3117),o=r(102),a=r(7294),i=r(3905);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function u(e){var t=(0,a.useRef)(e),r=(0,a.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,r.current}var s=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},f=function(e){return"touches"in e},p=function(e){return e&&e.ownerDocument.defaultView||self},m=function(e,t,r){var n=e.getBoundingClientRect(),o=f(t)?function(e,t){for(var r=0;r<e.length;r++)if(e[r].identifier===t)return e[r];return e[0]}(t.touches,r):t;return{left:s((o.pageX-(n.left+p(e).pageXOffset))/n.width),top:s((o.pageY-(n.top+p(e).pageYOffset))/n.height)}},d=function(e){!f(e)&&e.preventDefault()},h=a.memo((function(e){var t=e.onMove,r=e.onKey,n=l(e,["onMove","onKey"]),o=(0,a.useRef)(null),i=u(t),s=u(r),h=(0,a.useRef)(null),v=(0,a.useRef)(!1),g=(0,a.useMemo)((function(){var e=function(e){d(e),(f(e)?e.touches.length>0:e.buttons>0)&&o.current?i(m(o.current,e,h.current)):r(!1)},t=function(){return r(!1)};function r(r){var n=v.current,a=p(o.current),i=r?a.addEventListener:a.removeEventListener;i(n?"touchmove":"mousemove",e),i(n?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,n=o.current;if(n&&(d(t),!function(e,t){return t&&!f(e)}(t,v.current)&&n)){if(f(t)){v.current=!0;var a=t.changedTouches||[];a.length&&(h.current=a[0].identifier)}n.focus(),i(m(n,t,h.current)),r(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),s({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},r]}),[s,i]),b=g[0],k=g[1],y=g[2];return(0,a.useEffect)((function(){return y}),[y]),a.createElement("div",c({},n,{onTouchStart:b,onMouseDown:b,className:"react-colorful__interactive",ref:o,onKeyDown:k,tabIndex:0,role:"slider"}))})),v=function(e){return e.filter(Boolean).join(" ")},g=function(e){var t=e.color,r=e.left,n=e.top,o=void 0===n?.5:n,i=v(["react-colorful__pointer",e.className]);return a.createElement("div",{className:i,style:{top:100*o+"%",left:100*r+"%"}},a.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},k=(Math.PI,function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}}),y=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:b(e.h),s:b(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:b(o/2),a:b(n,2)}},w=function(e){var t=y(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},x=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),i=n*(1-r),c=n*(1-(t-a)*r),l=n*(1-(1-t+a)*r),u=a%6;return{r:b(255*[n,c,i,i,l,n][u]),g:b(255*[l,n,n,c,i,i][u]),b:b(255*[i,i,l,n,n,c][u]),a:b(o,2)}},N=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},_=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),i=a-Math.min(t,r,n),c=i?a===t?(r-n)/i:a===r?2+(n-t)/i:4+(t-r)/i:0;return{h:b(60*(c<0?c+6:c)),s:b(a?i/a*100:0),v:b(a/255*100),a:o}},C=a.memo((function(e){var t=e.hue,r=e.onChange,n=v(["react-colorful__hue",e.className]);return a.createElement("div",{className:n},a.createElement(h,{onMove:function(e){r({h:360*e.left})},onKey:function(e){r({h:s(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":b(t)},a.createElement(g,{className:"react-colorful__hue-pointer",left:t/360,color:w({h:t,s:100,v:100,a:1})})))})),E=a.memo((function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:w({h:t.h,s:100,v:100,a:1})};return a.createElement("div",{className:"react-colorful__saturation",style:n},a.createElement(h,{onMove:function(e){r({s:100*e.left,v:100-100*e.top})},onKey:function(e){r({s:s(t.s+100*e.left,0,100),v:s(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},a.createElement(g,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:w(t)})))})),M=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0};function O(e,t,r){var n=u(r),o=(0,a.useState)((function(){return e.toHsva(t)})),i=o[0],c=o[1],l=(0,a.useRef)({color:t,hsva:i});(0,a.useEffect)((function(){if(!e.equal(t,l.current.color)){var r=e.toHsva(t);l.current={hsva:r,color:t},c(r)}}),[t,e]),(0,a.useEffect)((function(){var t;M(i,l.current.hsva)||e.equal(t=e.fromHsva(i),l.current.color)||(l.current={hsva:i,color:t},n(t))}),[i,e,n]);var s=(0,a.useCallback)((function(e){c((function(t){return Object.assign({},t,e)}))}),[]);return[i,s]}var T,j="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,H=new Map,z=function(e){j((function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!H.has(t)){var n=t.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',H.set(t,n);var o=T||r.nc;o&&n.setAttribute("nonce",o),t.head.appendChild(n)}}),[])},D=function(e){var t=e.className,r=e.colorModel,n=e.color,o=void 0===n?r.defaultColor:n,i=e.onChange,u=l(e,["className","colorModel","color","onChange"]),s=(0,a.useRef)(null);z(s);var f=O(r,o,i),p=f[0],m=f[1],d=v(["react-colorful",t]);return a.createElement("div",c({},u,{ref:s,className:d}),a.createElement(E,{hsva:p,onChange:m}),a.createElement(C,{hue:p.h,onChange:m,className:"react-colorful__last-control"}))},P={defaultColor:"000",toHsva:function(e){return _(k(e))},fromHsva:function(e){return r=(t=x(e)).g,n=t.b,"#"+N(t.r)+N(r)+N(n);var t,r,n},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||M(k(e),k(t))}},S=function(e){return a.createElement(D,c({},e,{colorModel:P}))},F=/^#?([0-9A-F]{3,8})$/i,I=function(e){var t=e.color,r=void 0===t?"":t,n=e.onChange,o=e.onBlur,i=e.escape,s=e.validate,f=e.format,p=e.process,m=l(e,["color","onChange","onBlur","escape","validate","format","process"]),d=(0,a.useState)((function(){return i(r)})),h=d[0],v=d[1],g=u(n),b=u(o),k=(0,a.useCallback)((function(e){var t=i(e.target.value);v(t),s(t)&&g(p?p(t):t)}),[i,p,s,g]),y=(0,a.useCallback)((function(e){s(e.target.value)||v(i(r)),b(e)}),[r,i,s,b]);return(0,a.useEffect)((function(){v(i(r))}),[r,i]),a.createElement("input",c({},m,{value:f?f(h):h,spellCheck:"false",onChange:k,onBlur:y}))},R=function(e){return"#"+e},B=function(e){var t=e.prefixed,r=e.alpha,n=l(e,["prefixed","alpha"]),o=(0,a.useCallback)((function(e){return e.replace(/([^0-9A-F]+)/gi,"").substr(0,r?8:6)}),[r]),i=(0,a.useCallback)((function(e){return function(e,t){var r=F.exec(e),n=r?r[1].length:0;return 3===n||6===n||!!t&&4===n||!!t&&8===n}(e,r)}),[r]);return a.createElement(I,c({},n,{escape:o,format:t?R:void 0,process:R,validate:i}))};function q(){var e=(0,a.useState)("#aabbcc"),t=e[0],r=e[1];return a.createElement("div",null,a.createElement("section",{className:"resposive example"},a.createElement(S,{color:t,className:"resposive ",onChange:r})),a.createElement("section",{style:{backgroundColor:t,fontWeight:600,padding:"1rem"}},a.createElement("label",{htmlFor:"textclr"},"Color Hex : #"),a.createElement(B,{id:"textclr",color:t,onChange:r})))}var A=["components"],K={},L="Morph Tester",W={unversionedId:"Features/morph-tester",id:"Features/morph-tester",title:"Morph Tester",description:"",source:"@site/docs/Features/morph-tester.md",sourceDirName:"Features",slug:"/Features/morph-tester",permalink:"/docs/Features/morph-tester",draft:!1,editUrl:"https://github.com/deikaze16/keqingDocs/edit/master/docs/Features/morph-tester.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Multiframe Tester",permalink:"/docs/Features/multiframe-tester"},next:{title:"Card Tracer",permalink:"/docs/Features/trace"}},X={},Z=[{value:"How to use",id:"how-to-use",level:3},{value:"Color picker",id:"color-picker",level:3}],V={toc:Z};function U(e){var t=e.components,a=(0,o.Z)(e,A);return(0,i.kt)("wrapper",(0,n.Z)({},V,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"morph-tester"},"Morph Tester"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Morph Tester",src:r(4154).Z,title:":size=100%",width:"1178",height:"457"})),(0,i.kt)("p",null,"We're also provide another feature: ",(0,i.kt)("strong",{parentName:"p"},"Morph tester"),"! It's still in beta phase, so it's free for everyone to use. At the moment, it doesn't test a morphed card you own. Keqing can only test one color for the morphs (aside from white). Character names are hidden for now due to  inaccurate colors shown. The usage is similar to frame testing, with an additional parameter: the hex code for the morph color."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Non-premium servers can only use test with 1 type only (HUE), upgrade to premium version to be able to test for 6 types"))),(0,i.kt)("h3",{id:"how-to-use"},"How to use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Search for the character through ",(0,i.kt)("inlineCode",{parentName:"li"},"k!lookup")," "),(0,i.kt)("li",{parentName:"ul"},"Select the corresponding edition"),(0,i.kt)("li",{parentName:"ul"},"React with \ud83d\udd8c\ufe0f."),(0,i.kt)("li",{parentName:"ul"},"Type the frame name with the hex color next to it, example: ",(0,i.kt)("inlineCode",{parentName:"li"},"Broken Mirror #ff0000"),(0,i.kt)("img",{src:"https://cdn.discordapp.com/attachments/910106115444977694/977499446805942332/unknown.png",style:{maxWidth:"500px",margin:"20px 0"}})),(0,i.kt)("li",{parentName:"ul"},"Select the Morph Type ",(0,i.kt)("strong",{parentName:"li"},"(Premium only)"),(0,i.kt)("img",{src:"https://cdn.discordapp.com/attachments/910106115444977694/977499510827794452/unknown.png",style:{maxWidth:"500px",margin:"20px 0"}})),(0,i.kt)("li",{parentName:"ul"},"Done ;) ",(0,i.kt)("br",null),(0,i.kt)("img",{src:"https://cdn.discordapp.com/attachments/910106115444977694/977499609603645500/unknown.png",style:{maxWidth:"500px",margin:"20px 0"}}))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Non-premium servers can only test using ",(0,i.kt)("inlineCode",{parentName:"li"},"Hue")," type"),(0,i.kt)("li",{parentName:"ul"},"What are morph types? It's the Blending type. Just experiment with it for now since we're still not sure which one is used by Karuta")))),(0,i.kt)("h3",{id:"color-picker"},"Color picker"),(0,i.kt)(q,{mdxType:"Color"}))}U.isMDXComponent=!0},4154:function(e,t,r){t.Z=r.p+"assets/images/morph-b2c73691de00fd40c5e4f3c286bd1170.png"}}]);