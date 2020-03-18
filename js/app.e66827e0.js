(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"85ec":function(t,e,n){},"91aa":function(t,e,n){},b16d:function(t,e,n){"use strict";var a=n("bedb"),r=n.n(a);r.a},bedb:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"header"}},[n("h1",[t._v("Denis Perchenko")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Web")])],1),n("li",[n("router-link",{attrs:{to:"/3D"}},[t._v("3D portfolio")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.playerShow,expression:"playerShow"}],attrs:{id:"live_banner"}},[n("span",[t._v("Live")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.playerShow,expression:"playerShow"}],attrs:{id:"twitchPlayer"}}),n("div",{staticStyle:{"min-height":"400px"}},[n("router-view")],1),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center","padding-top":"10px","border-top":"2px solid","margin-top":"30px"}},[n("ul",{attrs:{id:"bot"}},[n("li",{attrs:{id:"gh"}},[n("a",{attrs:{href:"https://www.github.com/plachenko",target:"_blank"}},[n("div",{staticClass:"logo"}),n("span",{staticStyle:{display:"inline-block","padding-top":"2px"}},[t._v("Github")])])]),n("li",{attrs:{id:"ln"}},[n("a",{attrs:{href:"https://www.linkedin.com/in/denis-perchenko-b4ba2a7/",target:"_blank"}},[n("div",{staticClass:"logo"}),n("span",{staticStyle:{display:"inline-block","padding-top":"2px"}},[t._v("LinkedIn")])])])])])}],o=n("d4ec"),s=n("bee2"),c=n("99de"),l=n("7e84"),u=n("262e"),p=n("9ab4"),d=n("cffa"),h=n("60a3"),f=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.playerShow=!1,t.contentShow=!1,t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"enter",value:function(t,e){var n=this;d["a"].from(t,.3,{opacity:0,right:100,onComplete:function(){e(),n.contentShow=!1}})}},{key:"leave",value:function(t,e){var n=this;d["a"].to(t,.3,{opacity:0,left:100,onComplete:function(){e(),n.contentShow=!0}})}},{key:"mounted",value:function(){var t=this,e=new Twitch.Player("twitchPlayer",{channel:"plnrnd"});e.addEventListener("offline",(function(){t.playerShow=!1})),e.addEventListener("online",(function(){t.playerShow=!0}))}}]),e}(h["b"]);f=Object(p["a"])([Object(h["a"])({})],f);var v=f,b=v,y=(n("034f"),n("2877")),_=Object(y["a"])(b,r,i,!1,null,null,null),m=_.exports,w=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"work"},[n("div",{attrs:{id:"repo_container"}},t._l(t.activeRepos,(function(e,a){return n("div",{key:a,staticClass:"repo"},[n("div",{staticClass:"repo_head"},[n("a",{attrs:{href:""+t.base_url+e.name,target:"_blank"}},[t._v(" "+t._s(e.name))])]),n("div",{staticClass:"desc"},[t._v(t._s(e.description))])])})),0)])},O=[],j=(n("4de4"),n("caad"),n("b0c0"),n("d3b7"),n("2532"),function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.repos=[],t.base_url="https://plachenko.github.io/",t.hidden=["plachenko.github.io","flipslide_old","adenga"],t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){var t=this;fetch("https://api.github.com/users/plachenko/repos").then((function(t){return t.json()})).then((function(e){t.repos=e}))}},{key:"activeRepos",get:function(){return this.reposWithPages.sort((function(t,e){return new Date(e.updated_at)-new Date(t.updated_at)}))}},{key:"reposWithPages",get:function(){var t=this;return this.repos.filter((function(e){return e.has_pages&&!t.hidden.includes(e.name)}))}}]),e}(h["b"]));j=Object(p["a"])([Object(h["a"])({name:"Home"})],j);var k=j,S=k,x=(n("b16d"),Object(y["a"])(S,g,O,!1,null,null,null)),P=x.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},C=[],E=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(h["b"]);E=Object(p["a"])([Object(h["a"])({})],E);var $=E,M=$,T=Object(y["a"])(M,D,C,!1,null,null,null),W=T.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("p",[n("strong",[t._v("Denis")]),t._v(" is a Developer located in the southern new hampshire region. A graduate of the "),n("strong",[t._v("New England Instute of Art")]),t._v(" with a BS in Interactive Media Design, he studied the art of motion and functionality. With a passion toward animation and usability, he strives to make things simple and pleasing to use.")])])}],I=(n("e76e"),{}),N=Object(y["a"])(I,A,L,!1,null,null,null),J=N.exports;a["a"].use(w["a"]);var R=[{path:"/",name:"Work",component:P},{path:"/3D",name:"ThreeD",component:W},{path:"/about",name:"About",component:J}],B=new w["a"]({mode:"history",base:"",routes:R}),G=B;a["a"].config.productionTip=!1,new a["a"]({router:G,render:function(t){return t(m)}}).$mount("#app")},e76e:function(t,e,n){"use strict";var a=n("91aa"),r=n.n(a);r.a}});
//# sourceMappingURL=app.e66827e0.js.map