webpackJsonp([3],{"/Cvs":function(t,e,n){"use strict";e.a={props:{category:{name:String,required:!0}}}},"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"0uGb":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},"1NFj":function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c-base-share",attrs:{"data-balloon":"Share on "+this.network,"data-balloon-pos":"up","data-balloon-type":"mini"}},[e("img",{staticClass:"c-base-share__image",attrs:{src:"/images/components/BaseShare/"+this.network.toLowerCase()+".svg"},on:{click:this.onClick}})])};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},"1eh2":function(t,e,n){"use strict";var r=n("/5sW"),a=n("xdPp"),o=n.n(a),i=n("NRb0"),s=n.n(i),c=n("heqL");c.keys().forEach(function(t){var e=c(t),n=o()(s()(t.replace(/^\.\/(.*)\.\w+$/,"$1")));r.default.component(n,e.default||e)})},"2Hfd":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".c-base-cheatsheet{display:block;padding:10px;border:1px solid #313d4f;border-radius:6px;background:#273142}.c-base-cheatsheet .c-base-cheatsheet__link .c-base-cheatsheet__thumbnail{width:100%;height:160px;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.c-base-cheatsheet .c-base-cheatsheet__content{padding:10px;text-align:left}.c-base-cheatsheet .c-base-cheatsheet__content .c-base-cheatsheet__name{margin-bottom:20px;color:#fff;font-size:18px}.c-base-cheatsheet .c-base-cheatsheet__content .c-base-cheatsheet__share{margin-top:12px;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.c-base-cheatsheet .c-base-cheatsheet__content .c-base-cheatsheet__share .c-base-cheatsheet__network{margin-right:6px}.c-base-cheatsheet .c-base-cheatsheet__content .c-base-cheatsheet__share .c-base-cheatsheet__network:last-of-type{margin-right:0}",""])},"3Bkm":function(t,e,n){"use strict";e.a={props:{link:{type:String,required:!0},name:{type:String,required:!0},thumbnail:{type:String,required:!0}},data:function(){return{networks:["Slack","Messenger","Telegram","Twitter","LinkedIn"]}}}},"92qO":function(t,e,n){var r=n("AWeh");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("5d8de6f1",r,!1,{sourceMap:!1})},AWeh:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".c-base-divider{display:flex;align-items:center}.c-base-divider .c-base-divider__category{margin-right:40px;color:#fff;text-align-last:left;text-transform:uppercase;font-weight:700;font-size:18px}.c-base-divider .c-base-divider__line{flex:1;display:block;height:1px;border:0;border-top:1px solid #313d4f}",""])},F88d:function(t,e,n){"use strict";var r=n("rNqm"),a=n("P+aQ"),o=!1;var i=function(t){o||n("QC2f")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},GJ4R:function(t,e,n){var r=n("qCKK");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("4ed52727",r,!1,{sourceMap:!1})},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,o=e.data,i=e.props;o.nuxtChild=!0;for(var s=n,c=n.$nuxt.nuxt.transitions,u=n.$nuxt.nuxt.defaultTransition,p=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&p++,n=n.$parent;o.nuxtChildDepth=p;var l=c[p]||u,f={};r.forEach(function(t){void 0!==l[t]&&(f[t]=l[t])});var h={};a.forEach(function(t){"function"==typeof l[t]&&(h[t]=l[t].bind(s))});var d=h.beforeEnter;h.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),d)return d.call(s,t)};var m=[t("router-view",o)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:f,on:h},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],a=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),a=n("HBB+"),o=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:a.a,NuxtError:o.a}}},NtbS:function(t,e,n){var r=n("yznp");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("8a1821f6",r,!1,{sourceMap:!1})},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},QC2f:function(t,e,n){var r=n("0uGb");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("3c2f3948",r,!1,{sourceMap:!1})},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var a={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=a},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("pFYg"),a=n.n(r),o=n("//Fk"),i=n.n(o),s=n("Xxa5"),c=n.n(s),u=n("mvHQ"),p=n.n(u),l=n("exGp"),f=n.n(l),h=n("fZjL"),d=n.n(h),m=n("woOf"),x=n.n(m),v=n("/5sW"),b=n("unZF"),g=n("qcny"),y=n("YLfZ"),_=function(){var t=f()(c.a.mark(function t(e,n,r){var a,o,i=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!$.nuxt.err||n.path!==e.path,this._queryChanged=p()(e.query)!==p()(n.query),this._diffQuery=this._queryChanged?Object(y.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(y.k)(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}));return function(e,n,r){return t.apply(this,arguments)}}(),w=function(){var t=f()(c.a.mark(function t(e,n,r){var a,o,s,u,p,l,f,h,d=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return a=!1,o=function(t){if(n.path===t.path&&d.$loading.finish&&d.$loading.finish(),n.path!==t.path&&d.$loading.pause&&d.$loading.pause(),!a){a=!0;var e=[];C=Object(y.e)(n,e).map(function(t,r){return Object(y.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(y.m)($,{route:e,from:n,next:o.bind(this)});case 6:if(this._dateLastError=$.nuxt.dateErr,this._hadError=!!$.nuxt.err,s=[],(u=Object(y.e)(e,s)).length){t.next=24;break}return t.next=13,T.call(this,u,$.context);case 13:if(!a){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof g.a.layout?g.a.layout($.context):g.a.layout);case 17:return p=t.sent,t.next=20,T.call(this,u,$.context,p);case 20:if(!a){t.next=22;break}return t.abrupt("return");case 22:return $.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return u.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(R(u,e,n)),t.prev=26,t.next=29,T.call(this,u,$.context);case 29:if(!a){t.next=31;break}return t.abrupt("return");case 31:if(!$.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(l=u[0].options.layout)&&(l=l($.context)),t.next=37,this.loadLayout(l);case 37:return l=t.sent,t.next=40,T.call(this,u,$.context,l);case 40:if(!a){t.next=42;break}return t.abrupt("return");case 42:if(!$.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(f=!0,u.forEach(function(t){f&&"function"==typeof t.options.validate&&(f=t.options.validate({params:e.params||{},query:e.query||{}}))}),f){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,i.a.all(u.map(function(t,n){if(t._path=Object(y.b)(e.matched[s[n]].path)(e.params),t._dataRefresh=!1,d._pathChanged&&t._path!==C[n])t._dataRefresh=!0;else if(!d._pathChanged&&d._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return d._diffQuery[t]}))}if(!d._hadError&&d._isMounted&&!t._dataRefresh)return i.a.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,u=o&&c?30:45;if(o){var p=Object(y.j)(t.options.asyncData,$.context).then(function(e){Object(y.a)(t,e),d.$loading.increase&&d.$loading.increase(u)});a.push(p)}if(c){var l=t.options.fetch($.context);l&&(l instanceof i.a||"function"==typeof l.then)||(l=i.a.resolve(l)),l.then(function(t){d.$loading.increase&&d.$loading.increase(u)}),a.push(l)}return i.a.all(a)}));case 51:a||(this.$loading.finish&&this.$loading.finish(),C=u.map(function(t,n){return Object(y.b)(e.matched[s[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),C=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(h=g.a.layout)&&(h=h($.context)),t.next=63,this.loadLayout(h);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])}));return function(e,n,r){return t.apply(this,arguments)}}(),k=function(){var t=f()(c.a.mark(function t(e){var n,r,a,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $=e.app,j=e.router,t.next=4,i.a.all(O(j));case 4:return n=t.sent,r=new v.default($),a=E.layout||"default",t.next=9,r.loadLayout(a);case 9:if(r.setLayout(a),o=function(){r.$mount("#__nuxt"),v.default.nextTick(function(){F(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(R(n,j.currentRoute)),C=j.currentRoute.matched.map(function(t){return Object(y.b)(t.path)(j.currentRoute.params)})),r.$loading={},E.error&&r.error(E.error),j.beforeEach(_.bind(r)),j.beforeEach(w.bind(r)),j.afterEach(q),j.afterEach(A.bind(r)),!E.serverRendered){t.next=22;break}return o(),t.abrupt("return");case 22:w.call(r,j.currentRoute,j.currentRoute,function(t){if(!t)return q(j.currentRoute,j.currentRoute),z.call(r,j.currentRoute),void o();j.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 23:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),C=[],$=void 0,j=void 0,E=window.__NUXT__||{};function R(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=x()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);d()(a).filter(function(t){return a[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function S(t,e){return E.serverRendered&&e&&Object(y.a)(t,e),t._Ctor=t,t}function O(t){var e=this,n=Object(y.d)(t.options.base,t.options.mode);return Object(y.c)(t.match(n),function(){var t=f()(c.a.mark(function t(n,r,a,o,i){var s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return s=S(Object(y.l)(n),E.data?E.data[i]:null),a.components[o]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,e)}));return function(e,n,r,a,o){return t.apply(this,arguments)}}())}function T(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof b.a[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),b.a[t])}),!o)return Object(y.i)(a,e)}function q(t,e){Object(y.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":a()(t))||t.options||((t=v.default.extend(t))._Ctor=t,n.components[r]=t),t})}function z(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?g.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e($.context)),this.setLayout(e)}function A(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||v.default.nextTick(function(){Object(y.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&C[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)v.default.set(t.$data,r,n[r])}}),z.call(n,t)})}function F(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),j.afterEach(function(e,n){v.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(g.b)().then(k).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||b;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=g,e.e=y,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return d()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=_,e.k=w,n.d(e,"h",function(){return k}),n.d(e,"m",function(){return C}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return f.a.resolve();return $(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=$,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=r||{},c=s.pretty?E:encodeURIComponent,u=0;u<t.length;u++){var p=t[u];if("string"!=typeof p){var l,f=i[p.name];if(null==f){if(p.optional){p.partial&&(o+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be defined')}if(Array.isArray(f)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received `'+a()(f)+"`");if(0===f.length){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=c(f[h]),!e[u].test(l))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received `'+a()(l)+"`");o+=(0===h?p.prefix:p.delimiter)+l}}else{if(l=p.asterisk?R(f):c(f),!e[u].test(l))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+l+'"');o+=p.prefix+l}}else o+=p}return o}}(function(t,e){var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var c=n[0],u=n[1],p=n.index;if(i+=t.slice(o,p),o=p+c.length,u)i+=u[1];else{var l=t[o],f=n[2],h=n[3],d=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var b=null!=f&&null!=l&&l!==f,g="+"===x||"*"===x,y="?"===x||"*"===x,_=n[2]||s,w=d||m;r.push({name:h||a++,prefix:f||"",delimiter:_,optional:y,repeat:g,partial:b,asterisk:!!v,pattern:w?O(w):v?".*":"[^"+S(_)+"]+?"})}}o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n};var r=n("mvHQ"),a=n.n(r),o=n("pFYg"),i=n.n(o),s=n("Xxa5"),c=n.n(s),u=n("exGp"),p=n.n(u),l=n("//Fk"),f=n.n(l),h=n("fZjL"),d=n.n(h),m=n("Dd8w"),x=n.n(m),v=n("/5sW"),b=function(){return{}};function g(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return d()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function _(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return d()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function w(t){var e=this;return f.a.all(_(t,function(){var t=p()(c.a.mark(function t(n,r,a,o){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return t.abrupt("return",a.components[o]=g(n));case 5:case"end":return t.stop()}},t,e)}));return function(e,n,r,a){return t.apply(this,arguments)}}()))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var k=function(){var t=p()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:return t.abrupt("return",x()({},e,{meta:y(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=p()(c.a.mark(function t(e,n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=13;break}t.t0=!0,t.t1=e,t.t2=n.payload,t.t3=n.error,t.t4={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,payload:t.t2,error:t.t3,base:"/",env:t.t4},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":i()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=T(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 13:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=21;break}return t.next=20,k(n.route);case 20:e.context.route=t.sent;case 21:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=27;break}return t.next=26,k(n.from);case 26:e.context.from=t.sent;case 27:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function $(t,e){var n=void 0;return(n=2===t.length?new f.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof f.a||"function"==typeof n.then)||(n=f.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function E(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function S(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function T(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),i=(n?n+"://":"//")+o.shift(),s=o.filter(Boolean).join("/"),c=void 0;return 2===(o=s.split("#")).length&&(s=o[0],c=o[1]),i+=s?"/"+s:"",e&&"{}"!==a()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return d()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=c?"#"+c:""}},YOVY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("gFrk"),a=n("1NFj"),o=!1;var i=function(t){o||n("NtbS")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file="components/BaseShare.vue",e.default=s.exports},c1us:function(t,e,n){var r=n("2Hfd");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("ef155566",r,!1,{sourceMap:!1})},ct3O:function(t,e,n){"use strict";var r=n("gT20"),a=n("QhKw"),o=!1;var i=function(t){o||n("GJ4R")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-error.vue",e.a=s.exports},gFrk:function(t,e,n){"use strict";e.a={props:{network:{type:String,required:!0}},methods:{onClick:function(){this.$emit("click",this.network)}}}},gT20:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},heqL:function(t,e,n){var r={"./BaseCheatsheet.vue":"j86q","./BaseDivider.vue":"wNxV","./BaseShare.vue":"YOVY"};function a(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="heqL"},j86q:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3Bkm"),a=n("nttI"),o=!1;var i=function(t){o||n("c1us")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file="components/BaseCheatsheet.vue",e.default=s.exports},kpH8:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c-base-divider"},[e("span",{staticClass:"c-base-divider__category"},[this._v(this._s(this.category))]),e("hr",{staticClass:"c-base-divider__line"})])};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:c,routes:[{path:"/",component:s,name:"index"}],fallback:!1})};var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("/ocq");o.default.use(i.default);var s=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var c=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new a.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},mveG:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""])},nttI:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-base-cheatsheet"},[n("a",{staticClass:"c-base-cheatsheet__link",attrs:{href:t.link,target:"_blank"}},[n("img",{staticClass:"c-base-cheatsheet__thumbnail",attrs:{src:"/images/components/BaseCheatsheet/"+t.thumbnail}})]),n("div",{staticClass:"c-base-cheatsheet__content"},[n("a",{staticClass:"c-base-cheatsheet__name",attrs:{href:t.link,target:"_blank"}},[t._v("The "+t._s(t.name)+" Cheatsheet")]),n("div",{staticClass:"c-base-cheatsheet__share"},t._l(t.networks,function(t){return n("base-share",{key:t,staticClass:"c-base-cheatsheet__network",attrs:{network:t}})}))])])};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},qCKK:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return E});var r=n("Xxa5"),a=n.n(r),o=n("//Fk"),i=(n.n(o),n("C4MV")),s=n.n(i),c=n("woOf"),u=n.n(c),p=n("Dd8w"),l=n.n(p),f=n("exGp"),h=n.n(f),d=n("MU8w"),m=(n.n(d),n("/5sW")),x=n("p3jY"),v=n.n(x),b=n("mtxM"),g=n("0F0d"),y=n("HBB+"),_=n("WRRc"),w=n("ct3O"),k=n("Hot+"),C=n("yTq1"),$=n("YLfZ"),j=n("1eh2");n.d(e,"a",function(){return w.a});var E=function(){var t=h()(a.a.mark(function t(e){var n,r,o,i,c,p;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e),r=l()({router:n,nuxt:{defaultTransition:R,transitions:[R],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?u()({},R,{name:t}):u()({},R,t):R}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},C.a),o=e?e.next:function(t){return r.router.push(t)},i=void 0,e?i=n.resolve(e.url).route:(c=Object($.d)(n.options.base),i=n.resolve(c).route),t.next=7,Object($.m)(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 7:if(p=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof j.default){t.next=11;break}return t.next=11,Object(j.default)(r.context,p);case 11:t.next=14;break;case 14:return t.abrupt("return",{app:r,router:n});case 15:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();m.default.component(g.a.name,g.a),m.default.component(y.a.name,y.a),m.default.component(_.a.name,_.a),m.default.component(k.a.name,k.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var R={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},rNqm:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},uMhA:function(t,e,n){var r=n("mveG");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("72e7ad30",r,!1,{sourceMap:!1})},unZF:function(t,e,n){"use strict";e.a={}},wNxV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/Cvs"),a=n("kpH8"),o=!1;var i=function(t){o||n("92qO")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file="components/BaseDivider.vue",e.default=s.exports},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("F88d"),s=n("uMhA"),c=(n.n(s),{_default:function(){return n.e(0).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),u={};e.a={head:{title:"Awesome Cheatsheets",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Awesome cheatsheets for popular programming languages, frameworks and development tools. They include everything you should know in one single file."}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(c["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?a.a.resolve(u[n]):c[n]().then(function(t){return u[n]=t,delete c[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},yznp:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".c-base-share{display:inline-block}.c-base-share .c-base-share__image{width:32px;height:32px;cursor:pointer}",""])}},["T23V"]);