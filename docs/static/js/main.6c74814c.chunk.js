(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=(n(14),n(15),n(9)),u=n(2),o=n(0),j=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],i=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Add Category"}),Object(o.jsxs)("form",{action:"",onSubmit:function(t){if(t.preventDefault(),0===r.length)return!1;e(r),i("")},children:[Object(o.jsx)("input",{value:r,id:"category",type:"text",onChange:function(t){i(t.target.value)}}),Object(o.jsx)("button",{disabled:0===r.length,type:"submit",children:"Add Category"})]})]})},d=n(6),l=n.n(d),b=n(8),p=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=10&api_key=Ws3cnfGMb4Yws79EAlO4ZtPZoo5xEPg6"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,t.abrupt("return",r.map((function(t){return{id:t.id,url:t.images.downsized_medium.url,title:t.title}})));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.url,n=t.title;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:e,alt:n}),Object(o.jsx)("p",{children:n})]})},h=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e)||{},c=n.data,r=n.loading;return console.log(c),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e}),r&&Object(o.jsx)("p",{className:"animate__animated animate__bounce",children:"Loading"}),Object(o.jsx)("div",{className:"cardContainer animate__animated animate__tada ",children:null===c||void 0===c?void 0:c.map((function(t){return Object(o.jsx)(f,{url:t.url,title:t.title},t.id)}))})]})},O=function(){var t=Object(a.useState)(["Naruto"]),e=Object(u.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)("hr",{}),Object(o.jsx)(j,{setCategories:function(t){c([t].concat(Object(s.a)(n)))}}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(h,{category:t},t)}))})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6c74814c.chunk.js.map