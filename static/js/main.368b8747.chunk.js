(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{3:function(e,t,n){"use strict";n.d(t,"u",(function(){return r})),n.d(t,"t",(function(){return c})),n.d(t,"H",(function(){return a})),n.d(t,"G",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"J",(function(){return u})),n.d(t,"I",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"h",(function(){return O})),n.d(t,"z",(function(){return j})),n.d(t,"y",(function(){return b})),n.d(t,"x",(function(){return h})),n.d(t,"w",(function(){return f})),n.d(t,"v",(function(){return p})),n.d(t,"m",(function(){return m})),n.d(t,"p",(function(){return v})),n.d(t,"q",(function(){return g})),n.d(t,"r",(function(){return S})),n.d(t,"o",(function(){return I})),n.d(t,"s",(function(){return _})),n.d(t,"l",(function(){return x})),n.d(t,"C",(function(){return A})),n.d(t,"n",(function(){return E})),n.d(t,"f",(function(){return C})),n.d(t,"j",(function(){return y})),n.d(t,"B",(function(){return w})),n.d(t,"A",(function(){return R})),n.d(t,"g",(function(){return T})),n.d(t,"k",(function(){return z})),n.d(t,"F",(function(){return D})),n.d(t,"c",(function(){return L})),n.d(t,"D",(function(){return P})),n.d(t,"E",(function(){return U})),n.d(t,"d",(function(){return k})),n.d(t,"e",(function(){return M}));var r="LOGIN_SUCCESS",c="LOGIN_FAIL",a="SIGN_UP_SUCCESS",o="SIGN_UP_FAIL",s="ACTIVATION_SUCCESS",i="ACTIVATION_FAIL",u="LOAD_USER_SUCCESS",l="LOAD_USER_FAIL",d="AUTHENTICATED_SUCCESS",O="AUTHENTICATED_FAIL",j="PASSWORD_RESET_SUCCESS",b="PASSWORD_RESET_FAIL",h="PASSWORD_RESET_CONFIRM_SUCCESS",f="PASSWORD_RESET_CONFIRM_FAIL",p="LOGOUT",m="LOAD_ACCOUNT_DATA",v="LOAD_PERMISSIONS",g="LOAD_PRODUCTS_SUCCESS",S="LOAD_PRODUCT_SUCCESS",I="LOAD_MORE_PRODUCTS_SUCCESS",_="LOAD_SLIDERS_SUCCESS",x="GET_CATEGORIES_SUCCESS",A="REMOVE_COUPON",E="LOAD_LOGO",C="ADD_TO_CART",y="CLEAR_CART",w="REMOVE_CART_ITEM",R="REDUCE_CART_ITEM",T="ADD_TO_WISHLIST",z="CLEAR_WISHLIST",D="REMOVE_WISHLIST_ITEM",L="ADD_COUPON",P="REMOVE_ERRORS",U="REMOVE_MESSAGES",k="ADD_ERROR",M="ADD_MESSAGE"},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(17),o=n.n(a),s=n(1),i=n(20),u=n(5),l=n(14),d=n(16),O=n(34),j=n(35),b=n(3),h={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null,error:null,success_message:null,account_data:null,permissions:null};var f=n(13),p={products:[],next:null,prev:null,count:null,sliders:[],categories:[],categories_count:null,product:null,coupon:null,logo:null};var m=function(e){var t=e.size;return e.prevCartItems.filter((function(e){return(null===e||void 0===e?void 0:e.size.id)!==t.id}))},v=function(e){var t=e.size,n=e.prevItems,r=e.nextItem,c=function(e){var t=e.prevItems,n=e.size;return t.find((function(e){return(null===e||void 0===e?void 0:e.size.id)===n.id}))}({prevItems:n,size:t});return c?n.map((function(e){return(null===t||void 0===t?void 0:t.amount)>(null===e||void 0===e?void 0:e.quantity)&&(null===e||void 0===e?void 0:e.size.id)===(null===t||void 0===t?void 0:t.id)?Object(s.a)(Object(s.a)({},e),{},{quantity:(null===e||void 0===e?void 0:e.quantity)+1}):e})):[].concat(Object(f.a)(n),[Object(s.a)(Object(s.a)({},r),{},{size:t,quantity:1})])},g=function(e){var t=e.size,n=e.prevCartItems,r=(e.cartItemToReduce,n.find((function(e){return(null===e||void 0===e?void 0:e.size.id)===t.id})));return 1===r.quantity?n.filter((function(e){return(null===e||void 0===e?void 0:e.size.id)!==(null===r||void 0===r?void 0:r.size.id)})):n.map((function(e){return(null===e||void 0===e?void 0:e.size.id)===(null===r||void 0===r?void 0:r.size.id)?Object(s.a)(Object(s.a)({},e),{},{quantity:(null===e||void 0===e?void 0:e.quantity)-1}):e}))},S={cartItems:[]};var I=function(e){var t=e.prevItems,n=e.nextItem;return t.filter((function(e){return e.id!==n.id}))},_=function(e){var t=e.prevItems,n=e.nextItem,r=function(e){var t=e.prevItems,n=e.nextItem;return t.find((function(e){return e.id===n.id}))}({prevItems:t,nextItem:n});return r?I({prevItems:t,nextItem:n}):[].concat(Object(f.a)(t),[n])},x={wishItems:[]};var A=Object(d.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case b.i:return Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!0,error:null});case b.h:return Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!1,error:r});case b.u:return localStorage.setItem("access",r.access),localStorage.setItem("refresh",r.refresh),Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!0,access:r.access,refresh:r.refresh,error:null,success_message:[t.message]});case b.t:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(s.a)(Object(s.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null,success_message:null,error:r});case b.J:return Object(s.a)(Object(s.a)({},e),{},{user:r,error:null});case b.I:return Object(s.a)(Object(s.a)({},e),{},{user:null,error:r});case b.v:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(s.a)(Object(s.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null,success_message:r,error:null});case b.H:return Object(s.a)(Object(s.a)({},e),{},{isAuthenticated:!1,success_message:[r],error:null});case b.G:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(s.a)(Object(s.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null,success_message:null,error:r});case b.z:case b.x:case b.b:return Object(s.a)(Object(s.a)({},e),{},{success_message:r,error:null});case b.D:return Object(s.a)(Object(s.a)({},e),{},{error:null});case b.d:return Object(s.a)(Object(s.a)({},e),{},{error:r});case b.e:return Object(s.a)(Object(s.a)({},e),{},{success_message:r});case b.E:return Object(s.a)(Object(s.a)({},e),{},{success_message:null});case b.y:case b.w:case b.a:return Object(s.a)(Object(s.a)({},e),{},{error:r});case b.m:return Object(s.a)(Object(s.a)({},e),{},{account_data:r});case b.p:return Object(s.a)(Object(s.a)({},e),{},{permissions:r});default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case b.q:return Object(s.a)(Object(s.a)({},e),{},{products:t.results,next:t.next,prev:t.prev,count:t.count});case b.o:return Object(s.a)(Object(s.a)({},e),{},{products:[].concat(Object(f.a)(t.old_products),Object(f.a)(t.results)),next:t.next,prev:t.prev,count:t.count});case b.l:return Object(s.a)(Object(s.a)({},e),{},{categories:t.results,categories_count:t.count});case b.s:return Object(s.a)(Object(s.a)({},e),{},{sliders:r});case b.r:return Object(s.a)(Object(s.a)({},e),{},{product:r});case b.c:return Object(s.a)(Object(s.a)({},e),{},{coupon:r});case b.C:return Object(s.a)(Object(s.a)({},e),{},{coupon:null});case b.n:return Object(s.a)(Object(s.a)({},e),{},{logo:r});default:return e}},cartData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.f:return Object(s.a)(Object(s.a)({},e),{},{cartItems:v({size:t.size,prevItems:e.cartItems,nextItem:t.payload})});case b.B:return Object(s.a)(Object(s.a)({},e),{},{cartItems:m({size:t.size,prevCartItems:e.cartItems})});case b.A:return Object(s.a)(Object(s.a)({},e),{},{cartItems:g({size:t.size,prevCartItems:e.cartItems,cartItemToReduce:t.payload})});case b.j:return Object(s.a)(Object(s.a)({},e),{},{cartItems:[]});default:return e}},wishData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.g:return Object(s.a)(Object(s.a)({},e),{},{wishItems:_({prevItems:e.wishItems,nextItem:t.payload})});case b.F:return Object(s.a)(Object(s.a)({},e),{},{wishItems:I({prevWishItems:e.wishItems,wishItemToRemove:t.payload})});case b.k:return Object(s.a)(Object(s.a)({},e),{},{wishItems:[]});default:return e}}}),E=[j.a],C=Object(d.createStore)(A,{},Object(O.composeWithDevTools)(d.applyMiddleware.apply(void 0,E))),y=function(e){return{user:e.auth.user}},w=function(e){var t=Object(l.c)(y).user,n=Object(u.g)();return Object(r.useEffect)((function(){(null===t||void 0===t?void 0:t.is_staff)||n.push("/login")}),[t]),t},R=function(e){return w(e)&&e.children},T=function(e){return{isAuthenticated:e.auth.isAuthenticated}},z=function(e){var t=Object(l.c)(T).isAuthenticated,n=Object(u.g)();return Object(r.useEffect)((function(){t||n.push("/login")}),[t]),t},D=function(e){return z(e)&&e.children},L=(n(52),n(2));var P=function(){return Object(L.jsx)("div",{class:"text-center ",style:{marginTop:"50%"},children:Object(L.jsx)("div",{class:"spinner-grow text-primary",role:"status",children:Object(L.jsx)("span",{class:"visually-hidden",children:"Loading..."})})})},U=c.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(22),n.e(14)]).then(n.bind(null,168))})),k=c.a.lazy((function(){return n.e(29).then(n.bind(null,172))})),M=c.a.lazy((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,171))})),W=c.a.lazy((function(){return n.e(17).then(n.bind(null,153))})),N=c.a.lazy((function(){return n.e(18).then(n.bind(null,154))})),G=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(21)]).then(n.bind(null,155))})),F=c.a.lazy((function(){return Promise.all([n.e(1),n.e(26)]).then(n.bind(null,156))})),q=c.a.lazy((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,157))})),V=c.a.lazy((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,158))})),H=c.a.lazy((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,159))})),B=c.a.lazy((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,160))})),J=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(20)]).then(n.bind(null,161))})),$=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(23)]).then(n.bind(null,166))})),K=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(24)]).then(n.bind(null,162))})),Q=c.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(25),n.e(10)]).then(n.bind(null,170))})),X=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(27)]).then(n.bind(null,163))})),Y=[{path:"/",exact:!0,comp:Object(L.jsx)(U,{})},{path:"/login",exact:!0,comp:Object(L.jsx)(q,{})},{path:"/signup",exact:!0,comp:Object(L.jsx)(V,{})},{path:"/reset-password",exact:!0,comp:Object(L.jsx)(H,{})},{path:"/password/reset/confirm/:uid/:token",exact:!0,comp:Object(L.jsx)(B,{})},{path:"/category/:category_slug",exact:!0,comp:Object(L.jsx)(J,{})},{path:"/filter/:url",exact:!0,comp:Object(L.jsx)(X,{})},{path:"/product/:slug/:id",exact:!0,comp:Object(L.jsx)(Q,{})},{path:"/search",exact:!0,comp:Object(L.jsx)(G,{})},{path:"/wishlist",exact:!0,comp:Object(L.jsx)(F,{})},{path:"/about",exact:!0,comp:Object(L.jsx)(W,{})},{path:"/contact",exact:!0,comp:Object(L.jsx)(N,{})}],Z=[{path:"/account",exact:!0,comp:Object(L.jsx)($,{})},{path:"/checkout",exact:!0,comp:Object(L.jsx)(K,{})}],ee=[{path:"/react-admin/all/:category",exact:!0,comp:Object(L.jsx)(M,{})},{path:"/react-admin",exact:!0,comp:Object(L.jsx)(k,{})}],te=c.a.lazy((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,169))})),ne=c.a.lazy((function(){return Promise.all([n.e(0),n.e(11),n.e(8)]).then(n.bind(null,165))}));var re=function(){return Object(L.jsx)(l.a,{store:C,children:Object(L.jsx)(r.Suspense,{fallback:Object(L.jsx)(P,{}),children:Object(L.jsx)(i.a,{basename:"/itoneshop",children:Object(L.jsxs)(u.d,{children:[Z.map((function(e){return Object(L.jsx)(u.b,Object(s.a)(Object(s.a)({},e),{},{children:Object(L.jsx)(D,{children:Object(L.jsx)(ne,{children:e.comp})})}))})),Y.map((function(e){return Object(L.jsx)(u.b,Object(s.a)(Object(s.a)({},e),{},{children:Object(L.jsx)(ne,{children:e.comp})}))})),ee.map((function(e){return Object(L.jsx)(u.b,Object(s.a)(Object(s.a)({},e),{},{children:Object(L.jsx)(R,{children:Object(L.jsx)(te,{children:e.comp})})}))})),Object(L.jsx)(u.b,{path:"/admin",component:function(){return window.location.href="https://itoneshop.pythonanywhere.com/admin",null}})]})})})})},ce=n(24),ae=n(56),oe=n(38),se=n(39);ce.a.use(se.a).use(oe.a).use(ae.e).init({debug:!1,fallbackLng:"tk",whitelist:["en","ru","tk"],react:{useSuspense:!1},backend:{loadPath:"".concat("/itoneshop","/locales/{{lng}}/{{ns}}.json"),addPath:"".concat("/itoneshop","/locales/{{lng}}/{{ns}}")},detection:{order:["localStorage"],lookupLocalStorage:"lng",checkWhitelist:!0},supportedLngs:["en","ru","tk"],saveMissing:!0,saveMissingTo:"all",interpolation:{escapeValue:!1}}),ce.a.on("languageChanged",(function(e){localStorage.setItem("lng",e)}));ce.a;var ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}console.log("In registering service worker");var le=document.getElementById("root");le.hasChildNodes()?o.a.hydrate(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(re,{})}),le):o.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(re,{})}),le),function(e){if("serviceWorker"in navigator){if(new URL("/itoneshop",window.location.href).origin!==window.location.origin)return;console.log("Almost registered service worker..."),window.addEventListener("load",(function(){var t="".concat("/itoneshop","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ue(t,e)}))}}()}},[[54,6,7]]]);
//# sourceMappingURL=main.368b8747.chunk.js.map