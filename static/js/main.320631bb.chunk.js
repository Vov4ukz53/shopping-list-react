(this["webpackJsonpshopping-list-react"]=this["webpackJsonpshopping-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(7),i=n.n(r),s=(n(13),n(4)),u=n(8),a=n(2),d=(n(14),n(0)),l=function(t){var e=t.addNewProduct,n=Object(c.useState)(""),o=Object(a.a)(n,2),r=o[0],i=o[1],s=Object(c.useState)(!0),u=Object(a.a)(s,2),l=u[0],j=u[1],b=Object(c.useRef)();Object(c.useEffect)((function(){b.current.focus()}),[]);return Object(d.jsxs)("form",{className:"form js-form",onSubmit:function(t){t.preventDefault(),""!==r.trim()&&(e(r.trim()),i(""))},children:[Object(d.jsx)("input",{className:"form__input",type:"text",name:"product",placeholder:"Napisz artyku\u0142!",value:r,onChange:function(t){var e=t.target;i(e.value)},ref:b}),Object(d.jsx)("button",{className:"form__button",onClick:function(){j((function(t){return t})),l&&b.current.focus()},children:"Dodaj do listy"})]})},j=(n(16),function(t){var e=t.products,n=t.hideDone,c=t.removeProduct,o=t.toggleDoneProduct;return Object(d.jsx)("ul",{className:"products",children:e.map((function(t){return Object(d.jsxs)("li",{className:"products__item".concat(t.done&&n?" products__item--hidden":""),children:[Object(d.jsx)("button",{className:"products__itemButton".concat(t.done?" products__itemButton--done":""),onClick:function(){return o(t.id)}}),Object(d.jsx)("span",{className:'"products__itemContent'.concat(t.done?" products__itemContent--done":""),children:t.content}),Object(d.jsx)("button",{className:"products__itemButton products__itemButton--delete",onClick:function(){return c(t.id)}})]},t.id)}))})}),b=(n(17),function(t){var e=t.products,n=t.hideDone,c=t.toggleHideDone,o=t.setAllDone;return Object(d.jsx)("div",{className:"buttons",children:e.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("button",{className:"buttons__button",onClick:c,children:[e.some((function(t){return t.done}))&&n?"Poka\u017c":"Ukryj"," zaznaczone"]}),Object(d.jsx)("button",{className:"buttons__button",disabled:e.every((function(t){return t.done})),onClick:o,children:"Zaznacz wszystkie"})]})})}),f=(n(18),function(t){var e=t.title,n=t.body,c=t.extraHeaderContent;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("div",{className:"section__header",children:[Object(d.jsx)("h2",{className:"section__title",children:e}),c]}),Object(d.jsx)("div",{className:"section__body",children:n})]})}),m=(n(19),function(t){var e=t.title;return Object(d.jsx)("h1",{className:"header__title",children:e})}),O=(n(20),function(t){var e=t.children;return Object(d.jsx)("main",{className:"page",children:e})});var p=function(){var t=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("products"))||[]})),e=Object(a.a)(t,2),n=e[0],o=e[1];Object(c.useEffect)((function(){localStorage.setItem("products",JSON.stringify(n))}),[n]);var r=Object(c.useState)(!1),i=Object(a.a)(r,2),p=i[0],h=i[1],_=function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))};return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(O,{children:[Object(d.jsx)(m,{title:"Lista zakup\xf3w"}),Object(d.jsx)(f,{title:"Dodaj nowy artyku\u0142",body:Object(d.jsx)(l,{addNewProduct:function(t){o((function(e){return[].concat(Object(u.a)(e),[{content:t,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(d.jsx)(f,{title:"Lista zakup\xf3w",body:Object(d.jsx)(j,{products:n,hideDone:p,removeProduct:_,toggleDoneProduct:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(d.jsx)(b,{products:n,hideDone:p,toggleHideDone:function(){h((function(t){return!t}))},removeProduct:_,setAllDone:function(){o((function(t){return t.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{done:!0})}))}))}})})]})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),h()}],[[21,1,2]]]);
//# sourceMappingURL=main.320631bb.chunk.js.map