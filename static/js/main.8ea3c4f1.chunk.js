(this["webpackJsonpsmoky-sushi"]=this["webpackJsonpsmoky-sushi"]||[]).push([[0],{54:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(0),i=t.n(a),r=t(14),o=t.n(r),s=t(20),l=t(10),u=t(11),j=t(13),d=t(12),h=t(4),b=t(36),O={Base:"/",Main:"/main",Contacts:"/contacts"};Object.freeze(O);var f=O,v=t(15),m=t(34),p=t(73),x={},g=Object(p.a)({},x),w=Object(v.c)({main:g});var _=function(e){var n=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d)(Object(v.a)(m.a));return Object(v.e)(w,e,n)}({main:x}),y=(t(54),function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("section",{className:"main-header",children:[Object(c.jsx)("div",{className:"main-header__left",children:Object(c.jsx)("div",{className:"main-header__logo",children:Object(c.jsx)(s.b,{to:f.Main,children:"Logo"})})}),Object(c.jsxs)("div",{className:"main-header__right d-flex",children:[Object(c.jsx)("div",{className:"main-header__contacts",children:Object(c.jsx)("div",{className:"main-header__contacts_main",children:Object(c.jsx)("h3",{className:"ui no-anchor no-bg",children:Object(c.jsx)(s.b,{to:f.Contacts,children:"Contacts"})})})}),Object(c.jsx)("div",{className:"main-header__language",children:"language"})]})]})}}]),t}(i.a.PureComponent)),k=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"layout-container",children:Object(c.jsxs)("div",{className:"layout-container__data",children:[Object(c.jsx)(y,{}),Object(c.jsx)("div",{className:"content",children:this.props.children})]})})}}]),t}(a.PureComponent),N=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{})}}]),t}(i.a.PureComponent),C=t(72),E=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:["Content",Object(c.jsx)(C.a,{style:{margin:"2em"},children:"Click Here"}),Object(c.jsx)("div",{style:{height:1250}})]})}}]),t}(i.a.PureComponent),P=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(c.jsx)(b.a,{store:_,children:Object(c.jsx)(h.c,{children:Object(c.jsxs)(k,{children:[Object(c.jsx)(h.a,{exact:!0,path:[f.Base,f.Main],component:E}),Object(c.jsx)(h.a,{exact:!0,path:f.Contacts,component:N})]})})})}}]),t}(a.PureComponent),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=document.getElementById("root");o.a.render(Object(c.jsx)(s.a,{basename:"/",children:Object(c.jsx)(P,{})}),M),function(){if("serviceWorker"in navigator){if(new URL("/sushi-vin",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/sushi-vin","/service-worker.js");B?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):L(e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.8ea3c4f1.chunk.js.map