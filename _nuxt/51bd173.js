(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("7388ab72",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";r(50);var n={data:function(){return{searchText:""}},methods:{search:function(t){switch(t){case"baidu":window.open("https://www.baidu.com/s?wd="+this.searchText);break;case"bing":window.open("https://www.bing.com/search?q="+this.searchText);break;case"stack_overflow":window.open("https://stackoverflow.com/search?q="+this.searchText);break;case"github":window.open("https://github.com/search?q="+this.searchText);break;case"gitee":window.open("https://search.gitee.com/?q=ddd"+this.searchText);break;case"google":default:window.open("https://www.google.com/search?q="+this.searchText)}this.searchText=""}},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}},mounted:function(){}},o=r(88),c=r(132),l=r.n(c),v=r(363),d=r(367),h=r(172),f=r(368),_=r(173),m=r(174),w=r(369),k=r(85),x=r(175),T=r(176),y=r(110),V=r(138),C=r(366),$=r(364),L=r(365),N=r(224),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-avatar",{attrs:{color:"grey darken-1",size:"32"}},[n("img",{attrs:{src:r(277),alt:"John"}})]),t._v(" "),n("v-toolbar-title",{staticClass:"ml-1"},[t._v("Let's Start.Page")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{centered:"",dense:"",flat:"","hide-details":"",rounded:"","solo-inverted":"",label:this.$t("search")},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-fade-transition",{attrs:{"leave-absolute":""}},[n("v-menu",{attrs:{"offset-y":"",bottom:"",left:"","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-magnify")])],1)]}}])},[t._v(" "),n("v-card",[n("v-card-text",[n("v-container",[n("v-btn",{staticClass:"mr-1 mb-1",attrs:{depressed:""},on:{click:function(e){return t.search("google")}}},[t._v(t._s(t.$t("google")))]),t._v(" "),n("v-btn",{staticClass:"mr-1 mb-1",attrs:{depressed:""},on:{click:function(e){return t.search("baidu")}}},[t._v(t._s(t.$t("baidu")))]),t._v(" "),n("v-btn",{staticClass:"mr-1 mb-1",attrs:{depressed:""},on:{click:function(e){return t.search("bing")}}},[t._v(t._s(t.$t("bing")))]),t._v(" "),n("v-btn",{staticClass:"mr-1 mb-1",attrs:{depressed:""},on:{click:function(e){return t.search("stack_overflow")}}},[t._v(t._s(t.$t("stack_overflow")))]),t._v(" "),n("v-btn",{staticClass:"mr-1 mb-1",attrs:{depressed:""},on:{click:function(e){return t.search("github")}}},[t._v(t._s(t.$t("github")))]),t._v(" "),n("v-btn",{staticClass:"mr-1 mb-1",attrs:{depressed:""},on:{click:function(e){return t.search("gitee")}}},[t._v(t._s(t.$t("gitee")))])],1)],1)],1)],1)],1)]},proxy:!0}]),model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",href:"https://github.com/renfei/letsstart.page",target:"_blank",rel:"nofollow"}},[n("v-icon",[t._v("mdi-github")])],1),t._v(" "),n("v-menu",{attrs:{"offset-y":"","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-translate")])],1)]}}])},[t._v(" "),n("v-list",t._l(t.availableLocales,(function(e){return n("v-list-item",{key:e.code},[n("v-list-item-title",[n("nuxt-link",{staticStyle:{color:"#000000","text-decoration":"none",display:"block"},attrs:{to:t.switchLocalePath(e.code)}},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)],1)})),1)],1)],1),t._v(" "),n("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAvatar:h.a,VBtn:f.a,VCard:_.a,VCardText:m.a,VContainer:w.a,VFadeTransition:k.b,VIcon:x.a,VList:T.a,VListItem:y.a,VListItemTitle:V.a,VMenu:C.a,VSpacer:$.a,VTextField:L.a,VToolbarTitle:N.a})},247:function(t,e,r){r(248),t.exports=r(249)},271:function(t,e,r){"use strict";r(208)},272:function(t,e,r){var n=r(12)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},277:function(t,e,r){t.exports=r.p+"img/letsstart.page.184a6ad.png"},354:function(t,e,r){var map={"./en-US":[244,0],"./en-US.js":[244,0],"./zh-CN":[245,1],"./zh-CN.js":[245,1]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r(n)}))}n.keys=function(){return Object.keys(map)},n.id=354,t.exports=n},75:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(271),r(88)),c=r(132),l=r.n(c),v=r(363),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[247,8,3,9]]]);