"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[544],{232:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(6154),n=l(7294);const c=()=>{const{sidebar:e}=(()=>{const[e,t]=(0,n.useState)();return(0,n.useEffect)((()=>{(async()=>{const e=(await Promise.all([a.Z.put("http://localhost:5050/api/sketch/",{apikeys:"abcde"})])).map((e=>e.data)),[l]=await Promise.all(e);t(l)})()}),[]),{sidebar:e}})();return e?n.createElement("div",{className:"sketch"},n.createElement("main",null,n.createElement("div",{className:"container"},n.createElement("h1",null,n.createElement("a",{href:"/"},"Keqing Bot | Community's Sketch Gallery")),n.createElement("hr",null),n.createElement("div",{class:"cards"},e.map((e=>n.createElement("div",{class:"card"},n.createElement("h2",{class:"card-title"},e.name),n.createElement("img",{src:e.imageUrl,alt:"",width:150}),n.createElement("div",{class:"card-desc"},n.createElement("p",null,"Code: ",n.createElement("code",null,e.code)),n.createElement("p",null," Ink: \ud83e\ude78 ",e.ink.toLocaleString()),n.createElement("p",null," Sketcher: ",e.sketcher),n.createElement("p",null,"Owner: ",e.owner))))))))):n.createElement(n.Fragment,null,n.createElement("div",{class:"lds-ellipsis"},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null)))}}}]);