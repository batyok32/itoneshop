(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[27],{163:function(e,t,n){"use strict";n.r(t);var c=n(57),i=n(0),a=n(70),o=n(14),s=n(77),r=n(5),l=n(93),u=n(80),d=n(78),j=n(75),b=n(100),m=n(2),O=function(e){return{products:Object(s.c)(e),prev:e.products.prev,next:e.products.next,count:e.products.count,categories:Object(s.a)(e)}};t.default=function(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),n=t[0],s=t[1],f=Object(i.useState)(null),p=Object(c.a)(f,2),h=p[0],g=p[1],v=Object(i.useState)(!1),k=Object(c.a)(v,2),x=k[0],w=k[1],y=Object(i.useState)(!1),_=Object(c.a)(y,2),N=_[0],L=_[1],P=Object(u.a)(["home","common"]),S=P.t,C=P.i18n,B=Object(r.i)().url,E=Object(o.c)(O),F=E.products,J=E.count,M=Object(o.b)();return Object(i.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"}),g(l.a.find((function(e){return e.name===B})))}),[B]),Object(i.useEffect)((function(){if(h){var e="".concat(null===h||void 0===h?void 0:h.api_link,"&").concat(n?"&limit=20&offset=".concat(n):"");L(!1),w(!0),n?M(Object(a.j)(e,F,C.language)).then((function(e){w(!1)})):M(Object(a.j)(e,null,C.language)).then((function(e){w(!1)}))}else g(l.a.find((function(e){return e.name===B})))}),[h,N,C.language]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{searchedCategoryName:x?Object(m.jsx)("div",{class:"spinner-border text-white",role:"status",children:Object(m.jsx)("span",{class:"visually-hidden",children:"Loading..."})}):S("categories.".concat(null===h||void 0===h?void 0:h.name))}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(j.a,{topmar:!1,searchedCategoryName:S("categories.".concat(null===h||void 0===h?void 0:h.name))}),Object(m.jsx)("div",{className:"row align-items-center justify-content-between mb-1 mt-5",children:Object(m.jsx)("div",{className:"col-12  py-2",children:Object(m.jsxs)("h5",{children:[J," ",S("common:items_found")]})})}),Object(m.jsx)("hr",{style:{color:"#6270FB"}}),Object(m.jsx)(b.a,{setClickedLoadMore:L,setLoadMore:s,isLoading:x})]})]})}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=[{name:"newproducts",link:"/filter/newproducts",api_link:"new=true&ordering=created&limit=10"},{name:"discountProducts",link:"/filter/discountProducts",api_link:"ordering=created&limit=10"},{name:"expensiveProducts",link:"/filter/expensiveProducts",api_link:"ordering=-new_price&limit=10"},{name:"Kowusler",link:"/category/shoes",api_link:"category_name=shoes&limit=10"},{name:"Balaklar",link:"/category/shoes",api_link:"category_name=kowus&limit=10"}]}}]);
//# sourceMappingURL=27.1cf84b8d.chunk.js.map