(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{157:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n(1),o=n(57),s=n(0),c=n(5),i=n(20),u=n(60),p=n(14),l=n(80),f=n(2),d=function(e){return{isAuthenticated:e.auth.isAuthenticated}};t.default=function(){var e=Object(l.a)(["account"]).t,t=Object(s.useState)({username:"",password:""}),n=Object(o.a)(t,2),h=n[0],y=n[1],b=Object(s.useState)(!1),m=Object(o.a)(b,2),g=m[0],x=m[1],v=h.username,w=h.password,j=function(e){return y(Object(a.a)(Object(a.a)({},h),{},Object(r.a)({},e.target.name,e.target.value)))},O=Object(p.b)(),S=Object(p.c)(d).isAuthenticated,k=function(e){e.preventDefault(),x(!0),O(Object(u.c)(v,w)).then((function(e){x(!1)}))};return S?Object(f.jsx)(c.a,{to:"/"}):Object(f.jsxs)("div",{className:"bg-white pt-4 p-5 mx-4 mx-sm-auto",style:{borderRadius:"30px",maxWidth:"400px",margin:"70px auto",boxShadow:"0 10px 30px 0 rgba(68, 55, 77, 0.3)"},children:[Object(f.jsx)("h2",{style:{fontWeight:700},className:"text-center py-3 pb-4",children:e("account:Welcome")}),Object(f.jsxs)("form",{onSubmit:function(e){return k(e)},children:[Object(f.jsx)("input",{type:"text",className:"form-control py-2",placeholder:e("account:Username"),name:"username",id:"loginUsername",value:v,style:{borderRadius:"15px"},onChange:function(e){return j(e)},required:!0}),Object(f.jsx)("input",{type:"password",className:"form-control my-3 py-2",placeholder:e("account:Password"),name:"password",value:w,id:"loginPassword",style:{borderRadius:"15px"},onChange:function(e){return j(e)},required:!0,onKeyDown:function(e){"Enter"===e.key&&k(e)}}),Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("button",{className:"btn btn-primary mx-auto my-4 ",style:{maxWidth:"300px",borderRadius:"15px",fontSize:"18px"},type:"submit",children:g?Object(f.jsx)("div",{class:"spinner-border text-white",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:"Loading..."})}):e("account:Login")})})]}),Object(f.jsxs)("p",{className:"mt-4",children:[e("account:Dont have an account?")," ",Object(f.jsxs)(i.b,{to:"/signup",style:{fontSize:"15px",borderRadius:"10px"},className:"badge  btn-primary my-1 ms-3 py-2  text-decoration-none",children:[e("account:Sign up")," ",Object(f.jsx)("i",{class:"bi bi-arrow-right-circle-fill ms-2 "})]})]}),Object(f.jsxs)("p",{className:"my-0",children:[e("account:Forgot password?")," ",Object(f.jsxs)(i.b,{className:"badge  btn-primary my-1 ms-3 py-2  text-decoration-none",to:"/reset-password",style:{fontSize:"15px",borderRadius:"10px"},children:[e("account:Reset Password"),Object(f.jsx)("i",{class:"bi bi-arrow-right-circle-fill ms-2 "})]})]})]})}},58:function(e){e.exports=JSON.parse('{"error1":"You must be logged in to post comment!","error2":"You must be logged in to delete order!","error3":"Something went wrong","error4":"No such a user or invalid password","error5":"User already exists","error6":"Please, shop before order!","error7":"Please fill fields correctly!","error8":"Not Correct Coupon Code!","error9":"Please write something!","error10":"No products!"}')},59:function(e){e.exports=JSON.parse('{"success1":"Please log in!","success2":"Comment was published!","success3":"Logged in!","success4":"Logged out!","success5":"Sended request for reseting password. Check email!","success6":"Password successfully reseted!","success7":"Sign up successfully!","success8":"Order successfully sent!","success9":"Coupon applied!"}')},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return g}));var r=n(67),a=n.n(r),o=n(68),s=n(3),c=n(58),i=n(59),u=n(69),p=n.n(u),l=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=13;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,p.a.get("".concat("https://itoneshop.pythonanywhere.com","/auth/users/me/"),n);case 5:r=e.sent,t({type:s.J,payload:r.data}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:e.next=13;break;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,u,f;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={headers:{"Content-Type":"application/json"}},u=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,p.a.post("".concat("https://itoneshop.pythonanywhere.com","/auth/jwt/create/"),u,o);case 5:f=n.sent,r({type:s.u,payload:f.data,message:i.success3}),r(l()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r({type:s.t,payload:c.error4});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},d=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},r=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,p.a.post("".concat("https://itoneshop.pythonanywhere.com","/auth/jwt/verify/"),r,n);case 6:"token_not_valid"!==e.sent.data.code?t({type:s.i}):t(function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},r=JSON.stringify({refresh:localStorage.getItem("refresh")}),e.prev=2,e.next=5,p.a.post("".concat("https://itoneshop.pythonanywhere.com","/auth/jwt/refresh/"),r,n);case 5:o=e.sent,t({type:s.u,payload:o.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:s.t,payload:c.error4});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:e.next=14;break;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:s.v,payload:i.success4});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={headers:{"Content-Type":"application/json"}},o=JSON.stringify({email:e}),t.prev=2,t.next=5,p.a.post("".concat("https://itoneshop.pythonanywhere.com","/auth/users/reset_password/"),o,r);case 5:n({type:s.e,payload:i.success5}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),n({type:s.d,payload:c.error3});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t,n,r){return function(){var u=Object(o.a)(a.a.mark((function o(u){var l,f;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l={headers:{"Content-Type":"application/json"}},f=JSON.stringify({uid:e,token:t,new_password:n,re_new_password:r}),a.prev=2,a.next=5,p.a.post("".concat("https://itoneshop.pythonanywhere.com","/auth/users/reset_password_confirm/"),f,l);case 5:u({type:s.e,payload:i.success6}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),u({type:s.d,payload:c.error3});case 11:case"end":return a.stop()}}),o,null,[[2,8]])})));return function(e){return u.apply(this,arguments)}}()},m=function(e,t,n,r,u){return function(){var l=Object(o.a)(a.a.mark((function o(l){var d,h;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return d={headers:{"Content-Type":"application/json"}},h=JSON.stringify({username:e,phone_number:t,email:n,password:r,re_password:u}),a.prev=2,a.next=5,p.a.post("".concat("https://itoneshop.pythonanywhere.com","/auth/users/"),h,d);case 5:l({type:s.H,payload:i.success7}),l(f(e,r)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),l({type:s.G,payload:c.error5});case 12:case"end":return a.stop()}}),o,null,[[2,9]])})));return function(e){return l.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o,s,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!localStorage.getItem("access")){n.next=22;break}return o={headers:{"Content-Type":"multipart/form-data",Authorization:"JWT ".concat(localStorage.getItem("access"))}},s=new FormData,t&&s.append("profile_img",t),s.append("username",e.username),s.append("phone_number",e.phoneNumber),s.append("email",e.email),s.append("city",e.city),s.append("address",e.address),n.prev=9,n.next=12,p.a.patch("".concat("https://itoneshop.pythonanywhere.com","/auth/users/me/"),s,o);case 12:return c=n.sent,r(l()),n.abrupt("return",c);case 17:return n.prev=17,n.t0=n.catch(9),n.abrupt("return",n.t0);case 20:n.next=22;break;case 22:case"end":return n.stop()}}),n,null,[[9,17]])})));return function(e){return n.apply(this,arguments)}}()}},61:function(e,t,n){var r=n(62),a=n(63),o=n(64),s=n(66);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},62:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},63:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],s=!0,c=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(i){c=!0,a=i}finally{try{s||null==n.return||n.return()}finally{if(c)throw a}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},64:function(e,t,n){var r=n(65);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},65:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},66:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(61),a=n.n(r),o=n(28),s=n.n(o),c=n(0),i=n(56);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var p={};function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&p[t[0]]||("string"===typeof t[0]&&(p[t[0]]=new Date),u.apply(void 0,t))}function f(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return l("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!s(r,e)||a&&!s(o,e))))}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(c.useContext)(i.a)||{},o=r.i18n,s=r.defaultNS,u=n||o||Object(i.d)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new i.b),!u){l("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[p,{},!1];return h.t=p,h.i18n={},h.ready=!1,h}u.options.react&&void 0!==u.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=y(y(y({},Object(i.c)()),u.options.react),t),m=b.useSuspense,g=b.keyPrefix,x=e||s||u.options&&u.options.defaultNS;x="string"===typeof x?[x]:x||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(x);var v=(u.isInitialized||u.initializedStoreOnce)&&x.every((function(e){return d(e,u,b)}));function w(){return u.getFixedT(null,"fallback"===b.nsMode?x:x[0],g)}var j=Object(c.useState)(w),O=a()(j,2),S=O[0],k=O[1],N=Object(c.useRef)(!0);Object(c.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function n(){N.current&&k(w)}return N.current=!0,v||m||f(u,x,(function(){N.current&&k(w)})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){N.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[u,x.join()]);var C=Object(c.useRef)(!0);Object(c.useEffect)((function(){N.current&&!C.current&&k(w),C.current=!1}),[u]);var _=[S,u,v];if(_.t=S,_.i18n=u,_.ready=v,v)return _;if(!v&&!m)return _;throw new Promise((function(e){f(u,x,(function(){e()}))}))}}}]);
//# sourceMappingURL=15.6800135a.chunk.js.map