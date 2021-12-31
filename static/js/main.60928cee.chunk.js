(this["webpackJsonpshopping-list-react"]=this["webpackJsonpshopping-list-react"]||[]).push([[0],{50:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,d,u=t(0),s=t.n(u),b=t(20),l=t.n(b),p=t(3),j=t(7),x=t(4),h=Object(p.b)(r||(r=Object(x.a)(['\n   html {\n      box-sizing: border-box;\n      height: 100%;\n   }\n\n   *,\n   ::after,\n   ::before {\n      box-sizing: inherit;\n   }\n\n   body {\n      font-family: "Montserrat", sans-serif;\n      background-color: #e5e2e2;\n   }\n']))),m=t(15),f=t(8),O=p.d.div(o||(o=Object(x.a)(["\n   max-width: 1030px;\n\tmargin: 0 auto;\n\tpadding: 0px 15px;\n"]))),g=t(1),w=function(n){var e=n.children;return Object(g.jsx)(O,{children:e})},k=p.d.nav(c||(c=Object(x.a)(["\n   @media (max-width: ","px) {\n      flex-basis: 100%;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),A=p.d.ul(i||(i=Object(x.a)(["\n   list-style: none;\n   display: flex;\n   padding: 0px;\n   margin: 0px;\n\n   @media (max-width: ","px) {\n      justify-content: center;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),v=p.d.li(a||(a=Object(x.a)(["\n   margin: 0px 0px 0px 20px;\n\n   @media (max-width: ","px) {\n      margin: 10px 15px 0px;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),y=Object(p.d)(m.b)(d||(d=Object(x.a)(["\n   color: ","; \n   text-decoration: none;\n   transition: color .3s;\n\n   &:hover{\n      color: ",";\n   }\n\n   &.active{\n      font-weight: 700;\n   }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.linen}));var z,C,P,F,S,B,N,R,U,D,I,E,J,W,M,X,Z,G,K,V,Q,Y,H,L=function(){return Object(g.jsx)(k,{children:Object(g.jsxs)(A,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(y,{to:"/producty",children:"Produkty"})}),Object(g.jsx)(v,{children:Object(g.jsx)(y,{to:"/autor",children:"O autorze"})})]})})},T=p.d.header(z||(z=Object(x.a)(["\n   background: ",";\n"])),(function(n){return n.theme.colors.mainColor})),q=p.d.div(C||(C=Object(x.a)(["\n   display: flex;\n   flex-wrap: wrap;\n   align-items: center;\n   justify-content: space-between;\n   margin-bottom: 40px;\n   padding: 15px 0;\n\n   @media (max-width: ","px) {\n      margin-bottom: 20px;\n      justify-content: center;\n      padding: 10px 0;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),_=Object(p.d)(m.b)(P||(P=Object(x.a)(["\n   margin: 0px;\n   color: ",";\n   font-size: 24px;\n   text-decoration: none;\n   font-weight: 700;\n"])),(function(n){return n.theme.colors.white})),$=function(n){var e=n.logo;return Object(g.jsx)(T,{children:Object(g.jsx)(w,{children:Object(g.jsxs)(q,{children:[Object(g.jsx)(_,{to:"/producty",children:e}),Object(g.jsx)(L,{})]})})})},nn=p.d.div(F||(F=Object(x.a)(["\n   background-color: #fff;\n\tmargin: 15px 0;\n\tbox-shadow: 0px 0px 3px #aa9d9d;\n"]))),en=p.d.div(S||(S=Object(x.a)(["\n   padding: 20px;\n\tborder-bottom: 1px solid ",";\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: space-between;\n\n   @media (max-width: ","px) {\n   padding: 10px;\n   }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.breakpoints.mobile})),tn=p.d.h2(B||(B=Object(x.a)(["\n\tmargin: 0;\n"]))),rn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(g.jsxs)(nn,{children:[Object(g.jsxs)(en,{children:[Object(g.jsx)(tn,{children:e}),r]}),t]})},on=p.d.div(N||(N=Object(x.a)(["\n   display: grid;\n\tgrid-template-columns: auto auto;\n\n   @media (max-width: ","px) {\n\t   grid-template-columns: 1fr;\n\t   width: 100%;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),cn=p.d.button(R||(R=Object(x.a)(["\n   cursor: pointer;\n\tborder: none;\n\tbackground: transparent;\n\tcolor: ",";\n\ttransition: all 0.3s;\n\n   ","\n\n   &:hover{\n      text-decoration: underline;\n   }\n\n   &:active:{\n      color: hsl(194, 80%, 21%);\n   }\n\n   &:disabled{\n      color: rgb(184, 180, 180);\n\t   cursor: default;\n      &:hover{\n         text-decoration: none;\n      }\n   }\n\n   @media (max-width: ","px) {\n      width: 100%;\n      margin-top: 10px;\n   }\n"])),(function(n){return n.theme.colors.mainColor}),(function(n){return n.error&&Object(p.c)(U||(U=Object(x.a)(["\n      color:",";\n      text-decoration: none;\n   "])),(function(n){return n.theme.colors.firebrick}))}),(function(n){return n.theme.breakpoints.mobile})),an=t(18),dn="products",un=function(n){return localStorage.setItem(dn,JSON.stringify(n))},sn=Object(an.b)({name:"products",initialState:{products:JSON.parse(localStorage.getItem(dn))||[],hideDone:!1,loading:!1,error:!1},reducers:{addProduct:function(n,e){var t=n.products,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleDoneProduct:function(n,e){var t=n.products,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},removeProduct:function(n,e){var t=n.products,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},setAllDone:function(n){n.products.forEach((function(n){return n.done=!0}))},fetchExampleProducts:function(n){n.loading=!n.loading},setProducts:function(n,e){var t=e.payload;n.products=t,n.loading=!1},productsRequestFailed:function(n){n.error=!0,n.loading=!1}}}),bn=sn.actions,ln=bn.addProduct,pn=bn.toggleHideDone,jn=bn.toggleDoneProduct,xn=bn.removeProduct,hn=bn.setAllDone,mn=bn.fetchExampleProducts,fn=bn.productsRequestFailed,On=bn.setProducts,gn=function(n){return n.products},wn=function(n){return gn(n).products},kn=function(n){return gn(n).hideDone},An=function(n){return gn(n).loading},vn=function(n){return gn(n).error},yn=function(n){return wn(n).every((function(n){return n.done}))},zn=function(n){return wn(n).every((function(n){return!n.done}))},Cn=function(n){return wn(n).length>0},Pn=function(n){var e=["8wROpJA5ZbnXAymcQ4IB2","9nnWI7ma6t58_k9hRvRk2","Z3MfgjbWPl1MGS7TRtDO0"];return wn(n).some((function(n){var t=n.id;return e.includes(t)}))},Fn=sn.reducer,Sn=function(){var n=Object(j.c)(kn),e=Object(j.c)(yn),t=Object(j.c)(zn),r=Object(j.c)(Cn),o=Object(j.b)();return Object(g.jsx)(on,{children:r&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(cn,{disabled:t,onClick:function(){return o(pn())},children:[n?"Poka\u017c":"Ukryj"," zaznaczone"]}),Object(g.jsx)(cn,{disabled:e,onClick:function(){return o(hn())},children:"Zaznacz wszystkie"})]})})},Bn=function(){var n=Object(j.c)(An),e=Object(j.c)(vn),t=Object(j.c)(Pn),r=Object(j.b)();return Object(g.jsx)(cn,{error:e,disabled:n||t,onClick:function(){return r(mn())},children:n?"\u0141adowanie...":t?"Produkty pobrane":e?"B\u0142\u0105d pobierania danych, spr\xf3buj ponownie!":"Pobierz przykladowe producty"})},Nn=t(32),Rn=p.d.form(D||(D=Object(x.a)(["\n   display: flex;\n\tpadding: 20px;\n\n   @media (max-width: ","px) {\n      flex-direction: column;\n      padding: 10px;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),Un=p.d.button(I||(I=Object(x.a)(["\n\tbackground-color: ",";\n\tcolor: #fff;\n\tborder: none;\n\tpadding: 10px;\n\tcursor: pointer;\n\ttransition: background-color 0.3s, transform 0.3s;\n\n   @media (min-width: ","px) {\n      &:hover {\n         background-color: hsl(194, 80%, 31%);\n         transform: scale(1.1);\n      }\n\n      &:active {\n         background-color: hsl(194, 80%, 17%);\n      }\n   }\n"])),(function(n){return n.theme.colors.mainColor}),(function(n){return n.theme.breakpoints.tablets})),Dn=p.d.input(E||(E=Object(x.a)(["\n   border: 1px solid ",";\n\tpadding: 10px;\n\tflex: 1 1 auto;\n\tmargin-right: 20px;\n\n   @media (max-width: ","px) {\n\t\tmargin: 0px 0px 15px 0px;\n   }\n\n   ","\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.search&&Object(p.c)(J||(J=Object(x.a)(["\n      margin: 0px;\n\n      @media(max-width: ","px){\n         margin: 0px;\n      }\n   "])),(function(n){return n.theme.breakpoints.mobile}))})),In=function(){var n=Object(u.useState)(""),e=Object(Nn.a)(n,2),t=e[0],r=e[1],o=Object(u.useRef)(),c=Object(j.b)();Object(u.useEffect)((function(){o.current.focus()}),[]);return Object(g.jsxs)(Rn,{onSubmit:function(n){n.preventDefault();var e=t.trim();""!==e&&(c(ln({content:e,done:!1,id:Object(an.c)()})),r(""),o.current.focus())},children:[Object(g.jsx)(Dn,{type:"text",name:"product",placeholder:"Nazwa produktu",value:t,onChange:function(n){var e=n.target;r(e.value)},ref:o}),Object(g.jsx)(Un,{className:"form__button",children:"Dodaj do listy"})]})},En=p.d.ul(W||(W=Object(x.a)(["\n   padding: 20px;\n\tmargin-bottom: 0;\n\n   @media (max-width: ","px) {\n      padding: 10px;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),Jn=p.d.li(M||(M=Object(x.a)(["\n   display: grid;\n\tgrid-template-columns: 50px 1fr 50px;\n\talign-items: center;\n\tpadding-bottom: 10px;\n\tmargin-bottom: 15px;\n\tborder-bottom: 1px solid ",";\n\tword-break: break-word;\n\n   &:last-child {\n\t   margin-bottom: 0px;\n   }\n\n   ","\n\n   @media (max-width: ","px) {\n\t\tgrid-template-columns: 40px 1fr 40px;\n   }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.hidden&&Object(p.c)(X||(X=Object(x.a)(["\n      display: none;\n   "])))}),(function(n){return n.theme.breakpoints.mobile})),Wn=p.d.span(Z||(Z=Object(x.a)(["\n   ","\n"])),(function(n){return n.done&&Object(p.c)(G||(G=Object(x.a)(["\n      text-decoration: line-through;\n   "])))})),Mn=p.d.button(K||(K=Object(x.a)(["\n   width: 30px;\n\theight: 30px;\n\tpadding: 0;\n\tborder: none;\n\tbackground-color: rgb(70, 129, 2);\n\tcursor: pointer;\n\tjustify-self: center;\n\ttransition: background-color .3s, border .1s;\n\tbox-shadow: 1px 2px 3px #000;\n   \n   &:hover{\n\t   background-color: hsl(88, 97%, 21%);\n      }\n\n   &:active{\n\t   transform: translate(2px,2px);\n   \tbox-shadow: none;\n   }\n\n   @media (max-width: ","px) {\n      justify-self: start;  \n   }\n\n   ","\n\n   ","\n"])),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.toggleDone&&Object(p.c)(V||(V=Object(x.a)(['\n      background-image: url("','");\n      background-repeat: no-repeat;\n      background-position: 50% 4px;\n   '])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABnklEQVQ4jZ2UMUtdQRCFzy4PeYSHhViI+CssUlhYhWBtIVZWKVIGSfGQIFg8xDo/Ij/CIoiNhY2FP8BKxMKkkPBIcr4U7tW59+2N4sBl7z139szM2dlJerBcVuuVZnsgaZALWSTKYc3hW533RwyYk7SaUhpGsrjGjQ3eDRzJdiTNpZR+dCPG0psnYi1/YCjpg6TllNJ5jeg5rGXAJ9vfgaXa/z7Sro4C3gC7wA3wrsbRdwAzGDAEPgN3wKSUPZNQn5YtzHZDdm/7AphXuyuqJVYNGAFj4B64BjZ69wEZWAVGnXJjqWPgJw92VNplViJgAGwX52+2FztEI2CPJzsFFvpkEbBh+6o4/wK+FqEzMLT9xXaT2S3wHujXHHgLXNK2MbAA7JcgAH+Bw0JWu4456rcOXAHYpgh/HMiwfWx7ZUazWqZFx80gOoEI4DewViGr9W3rALaKTg0RwBQ4qB7Af7Csp1vw0fY0JHkCLL+UqAtkSbJ9WPS7A9b7/GrYoHy0ZmJKaSLpj6SppLOwqTYz++ZoO+PSg/Mh+rODQ1L+B4CFqI6ATCDXAAAAAElFTkSuQmCC")}),(function(n){return n.remove&&Object(p.c)(Q||(Q=Object(x.a)(['\n      background: url("','") 50% no-repeat;\n      background-color: rgb(216, 47, 35);\n\n      &:hover{\n         background-color: hsl(4, 72%, 54%);\n      }\n\n      @media (max-width: ',"px) {\n\t\t   justify-self: end;\n      }\n   "])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABeUlEQVQ4jb3Uz0pVURQG8J8bdRBiIhpxVYgQiZ6jxwikd/AFxAdw7EhnzgRn4iQaNAh6ABEKAkECSQNNveapwVn73n1P50pl9MFm7bXP+vPttdc6I2qkkFXIUTzHCzw0iFt8xB5OtCC1yA52cY0fLeszXjb8ekwyq1JO4BnGcR4rO8/gEZ6Gnv16AbPhdKyEJxEMdrAZ+xlshN0sFsO+iyN0R8JwHCtYLvT5SPhFv1ajkSw1zk/wCoeZISxgya/IzO86n1aXKZWvu4v3hUO3EaDUv+vX7hu21Ffu1TPFWlO/4inW8Sn0D6FfqNtmG6/j27G6PCkHygyrIsM53ujX6AhvcRU273BQMO75ljX8XVRDzgcYNvd/g6oM8ifB7rKtyo/DrtLKZFii5k/hPqgUffgv8H8fJc/yROhTeKxus4Q57eM4MCmwqu7+W3wNWer5f3iBS/1J6eQYubFz5JsiwWSRuak/KPZ5xiuk5qTshxxruc4wHOMsM/wJzsRgo5nvfF8AAAAASUVORK5CYII=",(function(n){return n.theme.breakpoints.mobile}))})),Xn=Object(p.d)(m.b)(Y||(Y=Object(x.a)(["\n   color: ",";\n   text-decoration: none;\n"])),(function(n){return n.theme.colors.mainColor})),Zn="szukaj",Gn=function(n){var e=Object(f.h)();return new URLSearchParams(e.search).get(n)},Kn=function(){var n=Gn(Zn),e=Object(j.c)((function(e){return function(n,e){var t=wn(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(e,n)})),t=Object(j.c)(kn),r=Object(j.b)();return Object(g.jsx)(En,{children:e.map((function(n){return Object(g.jsxs)(Jn,{hidden:n.done&&t,children:[Object(g.jsx)(Mn,{toggleDone:n.done,onClick:function(){return r(jn(n.id))}}),Object(g.jsx)(Wn,{done:n.done,children:Object(g.jsx)(Xn,{to:"/producty/".concat(n.id),children:n.content})}),Object(g.jsx)(Mn,{remove:!0,onClick:function(){return r(xn(n.id))}})]},n.id)}))})},Vn=p.d.div(H||(H=Object(x.a)(["\n   display: flex;\n   padding: 20px;\n\n   @media(max-width: ","px){\n      padding: 10px;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),Qn=function(){var n=Gn(Zn),e=function(){var n=Object(f.h)(),e=Object(f.g)(),t=new URLSearchParams(n.search);return function(r){var o=r.key,c=r.value;void 0!==c?t.set(o,c):t.delete(o),e.push("".concat(n.pathname,"?").concat(t.toString()))}}();return Object(g.jsx)(Vn,{children:Object(g.jsx)(Dn,{search:!0,placeholder:"Filtruj produkty",value:n||"",onChange:function(n){var t=n.target;e({key:Zn,value:""!==t.value.trim()?t.value:void 0})}})})};var Yn,Hn,Ln,Tn,qn=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(w,{children:[Object(g.jsx)(rn,{title:"Dodaj nowy produkt",body:Object(g.jsx)(In,{}),extraHeaderContent:Object(g.jsx)(Bn,{})}),Object(g.jsx)(rn,{title:"Wyszukiwarka",body:Object(g.jsx)(Qn,{})}),Object(g.jsx)(rn,{title:"Lista zakup\xf3w",body:Object(g.jsx)(Kn,{}),extraHeaderContent:Object(g.jsx)(Sn,{})})]})})},_n=p.d.div(Yn||(Yn=Object(x.a)(["\n   padding: 20px;\n   display: inline-block;\n\n   @media (max-width: ","px) {\n      padding: 10px;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),$n=p.d.p(Hn||(Hn=Object(x.a)(["\n   border-bottom: 1px solid ",";\n\n   ","\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.notFind&&Object(p.c)(Ln||(Ln=Object(x.a)(["\n      padding: 20px;\n      margin: 0px;\n      color: ",";\n   "])),(function(n){return n.theme.colors.firebrick}))})),ne=p.d.strong(Tn||(Tn=Object(x.a)(["\n   letter-spacing: 1.1px;\n"])));var ee=function(){var n=Object(f.i)().id,e=Object(j.c)((function(e){return function(n,e){return wn(n).find((function(n){return n.id===e}))}(e,n)})),t=Object(j.c)(wn);return e?Object(g.jsxs)(_n,{children:[Object(g.jsxs)($n,{children:[Object(g.jsx)(ne,{children:"Nazwa produktu:"})," ",e.content]}),Object(g.jsxs)($n,{children:[Object(g.jsx)(ne,{children:"Product zaznaczony:"})," ",e.done?"Tak":"Nie"]}),Object(g.jsxs)($n,{children:[Object(g.jsx)(ne,{children:"Kolejno\u015bc na li\u015bcie:"})," ",t.indexOf(e)+1]})]}):Object(g.jsx)($n,{notFind:!0,children:"Nie znaleziono produktu!"})};var te,re,oe,ce,ie,ae,de=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(w,{children:Object(g.jsx)(rn,{title:"Szczeg\xf3ly produktu!",body:Object(g.jsx)(ee,{})})})})},ue=t.p+"static/media/frontend.d29f39e9.png",se=p.d.div(te||(te=Object(x.a)(["\n   display: grid;\n   grid-template-columns: auto 200px;\n   grid-gap: 15px;\n   align-items: center;\n   padding: 20px;\n   @media (max-width: ","px) {\n      padding: 20px 10px;\n      grid-template-columns: 1fr;\n   }\n"])),(function(n){return n.theme.breakpoints.mobile})),be=p.d.p(re||(re=Object(x.a)(["\n   margin: 0px 0px 15px 0px;\n\n   &:last-child{\n      margin: 0;\n   }\n"]))),le=p.d.strong(oe||(oe=Object(x.a)(["\n   letter-spacing: 1.2px;\n"]))),pe=p.d.div(ce||(ce=Object(x.a)(["\n   ","\n"])),(function(n){return n.image&&Object(p.c)(ie||(ie=Object(x.a)(['\n      background-image: url("','");\n      height: 200px;\n      animation: '," 60s linear infinite;\n\n      @media (max-width: ","px) {\n         width: 200px;\n         justify-self: center;\n      }\n   "])),ue,je,(function(n){return n.theme.breakpoints.mobile}))})),je=Object(p.e)(ae||(ae=Object(x.a)(["\n   from {\n      transform: rotate(0deg);\n   }\n   to {\n      transform: rotate(-360deg);\n   }\n"]))),xe=function(){return Object(g.jsxs)(se,{children:[Object(g.jsxs)(pe,{children:[Object(g.jsxs)(be,{children:[Object(g.jsx)(le,{children:"Witam serdecznie!"})," Mam 31 lat i pochodz\u0119 z Ukrainy, studiowa\u0142em we Lwowie."]}),Object(g.jsx)(be,{children:"Od 2014r mieszkam we Wroc\u0142awiu. Mam dwie c\xf3reczki, kt\xf3re mnie codziennie motywuj\u0105 i nape\u0142niaj\u0105 ka\u017cdy dzie\u0144 pozytywem!"}),Object(g.jsxs)(be,{children:["Od roku ucz\u0119 si\u0119 frontendu i moim marzeniem jest ",Object(g.jsx)(le,{children:"zosta\u0107 front-end developerem."})," Poniewa\u017c chce robic na co dzie\u0144 to, co mi si\u0119 podoba."]})]}),Object(g.jsx)(pe,{image:!0})]})};var he=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(w,{children:Object(g.jsx)(rn,{title:"Vova Bronevych",body:Object(g.jsx)(xe,{})})})})},me=function(){return Object(g.jsxs)(m.a,{children:[Object(g.jsx)($,{logo:"Lista zakup\xf3w"}),Object(g.jsxs)(f.d,{children:[Object(g.jsx)(f.b,{path:"/producty/:id",children:Object(g.jsx)(de,{})}),Object(g.jsx)(f.b,{path:"/producty",children:Object(g.jsx)(qn,{})}),Object(g.jsx)(f.b,{path:"/autor",children:Object(g.jsx)(he,{})}),Object(g.jsx)(f.b,{path:"/",children:Object(g.jsx)(f.a,{to:"/producty"})})]})]})},fe=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))},Oe=t(33),ge=t(11),we=t.n(ge),ke=t(14),Ae=t(31),ve=function(){var n=Object(Ae.a)(we.a.mark((function n(){var e;return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/shopping-list-react/exampleProducts.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ye=we.a.mark(Pe),ze=we.a.mark(Fe),Ce=we.a.mark(Se);function Pe(){var n;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ke.c)(1500);case 3:return e.next=5,Object(ke.b)(ve);case 5:return n=e.sent,e.next=8,Object(ke.d)(On(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(ke.d)(fn());case 14:return e.next=16,console.error(e.t0);case 16:case"end":return e.stop()}}),ye,null,[[0,10]])}function Fe(){var n;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ke.e)(wn);case 2:return n=e.sent,e.next=5,Object(ke.b)(un,n);case 5:case"end":return e.stop()}}),ze)}function Se(){return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ke.g)(mn.type,Pe);case 2:return n.next=4,Object(ke.f)("*",Fe);case 4:case"end":return n.stop()}}),Ce)}var Be=Se,Ne=we.a.mark(Re);function Re(){return we.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ke.a)([Be()]);case 2:case"end":return n.stop()}}),Ne)}var Ue=Object(Oe.a)(),De=Object(an.a)({reducer:{products:Fn},middleware:[Ue]});Ue.run(Re);var Ie=De,Ee={colors:{borderColor:"#e5e2e2",mainColor:"#1283a5",firebrick:"#B22222",black:"#000000",white:"#ffffff",linen:"#FAF0E6"},breakpoints:{tablets:992,mobile:767}};l.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(j.a,{store:Ie,children:Object(g.jsxs)(p.a,{theme:Ee,children:[Object(g.jsx)(h,{}),Object(g.jsx)(me,{})]})})}),document.getElementById("root")),fe()}},[[50,1,2]]]);
//# sourceMappingURL=main.60928cee.chunk.js.map