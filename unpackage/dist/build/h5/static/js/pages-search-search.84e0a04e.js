(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"0c7c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-186f42ee]{padding:0 %?20?%;box-sizing:border-box;background-color:#f9f9f9;min-height:100vh}.warp[data-v-186f42ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.warp .text[data-v-186f42ee]{margin-top:%?50?%;color:#fff}.search-input[data-v-186f42ee]{background-color:#f4f4f4;padding:%?10?% %?15?%;border-radius:%?10?%;color:#333;width:%?586?%}.search-btn[data-v-186f42ee]{font-size:%?35?%;text-align:center;width:%?82?%}.none-dynamic[data-v-186f42ee]{min-height:80vh;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?36?%}',""]),t.exports=e},"28f2":function(t,e,n){"use strict";n.r(e);var a=n("aa05"),r=n("55d0");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("b98a");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"186f42ee",null,!1,a["a"],o);e["default"]=c.exports},3946:function(t,e,n){"use strict";n.r(e);var a=n("959d"),r=n("6b05");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("f0b6");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"97c7ea6a",null,!1,a["a"],o);e["default"]=c.exports},"55d0":function(t,e,n){"use strict";n.r(e);var a=n("c4a0"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"6b05":function(t,e,n){"use strict";n.r(e);var a=n("bb3e"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"8cd5":function(t,e,n){var a=n("d339");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("034b0d4e",a,!0,{sourceMap:!1,shadowMode:!1})},"959d":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-mask",class:{"u-mask-zoom":t.zoom,"u-mask-show":t.show},style:[t.maskStyle,t.zoomStyle],attrs:{"hover-stop-propagation":!0},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},aa05:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("fba7").default,uIcon:n("ff0e").default,dynamicItem:n("141a").default,uDivider:n("8a74").default,uMask:n("3946").default,uLoading:n("af38").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("u-navbar",[t._t("default",[a("v-uni-view",{staticClass:"search-input"},[a("v-uni-input",{attrs:{"confirm-type":"搜索",placeholder:"搜索点什么吧..."},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;arguments[0]=e=t.$handleEvent(e),t.sendSearch.apply(void 0,arguments)}},model:{value:t.query.str,callback:function(e){t.$set(t.query,"str",e)},expression:"query.str"}})],1)]),t._t("right",[a("v-uni-view",{staticClass:"search-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendSearch.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"search"}})],1)])],2),a("v-uni-scroll-view",{staticClass:"scroll-view",staticStyle:{height:"100%",width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.onreachBottom.apply(void 0,arguments)}}},[t._l(t.dynamicList,(function(t,e){return a("dynamic-item",{attrs:{dynamic:t}})})),0!=t.dynamicList.length||t.loading?t._e():a("v-uni-view",{staticClass:"none-dynamic"},[a("v-uni-image",{attrs:{src:n("4dcf"),mode:""}}),a("v-uni-view",[t._v("没有搜索到动态")])],1),t.dynamicList.length>t.query.count-1?a("u-divider",{attrs:{"bg-color":"#00000000"}},[t._v(t._s(t.loadStatus))]):t._e(),a("v-uni-view",{staticClass:"bottom"})],2),a("u-mask",{attrs:{show:t.loading}},[a("v-uni-view",{staticClass:"warp"},[a("u-loading",{attrs:{mode:"circle",size:"50"}}),a("v-uni-view",{staticClass:"text"},[t._v("搜索中...")])],1)],1)],1)},i=[]},b98a:function(t,e,n){"use strict";var a=n("ed25"),r=n.n(a);r.a},bb3e:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),n("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("5530")),i={name:"u-mask",props:{show:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},customStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},maskClickAble:{type:Boolean,default:!0}},data:function(){return{zoomStyle:{transform:""},scale:"scale(1.2, 1.2)"}},watch:{show:function(t){t&&this.zoom?this.zoomStyle.transform="scale(1, 1)":!t&&this.zoom&&(this.zoomStyle.transform=this.scale)}},computed:{maskStyle:function(){var t={backgroundColor:"rgba(0, 0, 0, 0.6)"};return this.show?t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.mask:t.zIndex=-1,t.transition="all ".concat(this.duration/1e3,"s ease-in-out"),Object.keys(this.customStyle).length&&(t=(0,r.default)((0,r.default)({},t),this.customStyle)),t}},methods:{click:function(){this.maskClickAble&&this.$emit("click")}}};e.default=i},c4a0:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("ac1f"),n("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i=a(n("141a")),o=n("e65d"),s={components:{dynamicItem:i.default},data:function(){return{query:{str:"",page:1,count:5},loadStatus:"加载更多",dynamicList:[],loading:!1}},onLoad:function(t){this.query.str=t.search,this.sendSearch()},methods:{sendSearch:function(){var t=this;this.loading=!0,(0,o.getDynamic)(this.query).then((function(e){t.dynamicList=e.data.data.list,t.loading=!1}))},onreachBottom:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loadStatus="加载中...","没有更多了"!=t.loadStatus){e.next=3;break}return e.abrupt("return");case 3:return t.query.page+=1,e.next=6,(0,o.getDynamic)(t.query).then((function(e){var n=e.data.data.list;if(0==n.length)return t.query.page-=1,void(t.loadStatus="没有更多了");t.loadStatus="加载更多",t.dynamicList=t.dynamicList.concat(n)}));case 6:case"end":return e.stop()}}),e)})))()}}};e.default=s},d339:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-mask[data-v-97c7ea6a]{position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-mask-show[data-v-97c7ea6a]{opacity:1}.u-mask-zoom[data-v-97c7ea6a]{-webkit-transform:scale(1.2);transform:scale(1.2)}',""]),t.exports=e},ed25:function(t,e,n){var a=n("0c7c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("3f923d49",a,!0,{sourceMap:!1,shadowMode:!1})},f0b6:function(t,e,n){"use strict";var a=n("8cd5"),r=n.n(a);r.a}}]);