"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[544],{232:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var a=l(7294);const n=()=>{const{sidebar:e}=(()=>{const[e,t]=(0,a.useState)();return(0,a.useEffect)((()=>{(async()=>{const e=(await Promise.all([fetch("http://api.keqingbot.com:5050/api/sketch/")])).map((e=>e.json())),[l]=await Promise.all(e);t(l)})()}),[]),{sidebar:e}})();return e?a.createElement("div",{className:"sketch"},a.createElement("main",null,a.createElement("div",{className:"container"},a.createElement("h1",null,a.createElement("a",{href:"/"},"Keqing Bot | Community's Sketch Gallery")),a.createElement("hr",null),a.createElement("div",{class:"cards"},e.map((e=>a.createElement("div",{class:"card"},a.createElement("h2",{class:"card-title"},e.name),a.createElement("img",{src:e.imageUrl,alt:"",width:150}),a.createElement("div",{class:"card-desc"},a.createElement("p",null,"Code: ",a.createElement("code",null,e.code)),a.createElement("p",null," Ink: \ud83e\ude78 ",e.ink.toLocaleString()),a.createElement("p",null," Sketcher: ",e.sketcher),a.createElement("p",null,"Owner: ",e.owner))))))))):a.createElement(a.Fragment,null,a.createElement("div",{class:"lds-ellipsis"},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null)))}}}]);