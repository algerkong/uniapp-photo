(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-historyDynamic-historyDynamic"],{"0549":function(t,e,i){"use strict";var A=i("4ea4");i("26e9"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=A(i("4559")),a={data:function(){return{historyList:null}},onShow:function(){this.historyList=uni.getStorageSync("history").reverse()},methods:{toDynamic:function(t){n.default.dynamicDetail=t.data,uni.navigateTo({url:"/pages/dynamic/dynamic"})}}};e.default=a},"12db":function(t,e,i){"use strict";var A=i("5d3b"),n=i.n(A);n.a},1506:function(t,e,i){var A=i("80c3");"string"===typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);var n=i("4f06").default;n("327a2e3a",A,!0,{sourceMap:!1,shadowMode:!1})},"3c52":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var A="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",n={name:"u-avatar",props:{bgColor:{type:String,default:"transparent"},src:{type:String,default:""},size:{type:[String,Number],default:"default"},mode:{type:String,default:"circle"},text:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},index:{type:[String,Number],default:""},sexIcon:{type:String,default:"man"},levelIcon:{type:String,default:"level"},levelBgColor:{type:String,default:""},sexBgColor:{type:String,default:""},showSex:{type:Boolean,default:!1},showLevel:{type:Boolean,default:!1}},data:function(){return{error:!1,avatar:this.src?this.src:A}},watch:{src:function(t){t?(this.avatar=t,this.error=!1):(this.avatar=A,this.error=!0)}},computed:{wrapStyle:function(){var t={};return t.height="large"==this.size?"120rpx":"default"==this.size?"90rpx":"mini"==this.size?"70rpx":this.size+"rpx",t.width=t.height,t.flex="0 0 ".concat(t.height),t.backgroundColor=this.bgColor,t.borderRadius="circle"==this.mode?"500px":"5px",this.text&&(t.padding="0 6rpx"),t},imgStyle:function(){var t={};return t.borderRadius="circle"==this.mode?"500px":"5px",t},uText:function(){return String(this.text)[0]},uSexStyle:function(){var t={};return this.sexBgColor&&(t.backgroundColor=this.sexBgColor),t},uLevelStyle:function(){var t={};return this.levelBgColor&&(t.backgroundColor=this.levelBgColor),t}},methods:{loadError:function(){this.error=!0,this.avatar=A},click:function(){this.$emit("click",this.index)}}};e.default=n},"3c8f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return A}));var A={uIcon:i("5a40").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},a=[]},"44e76":function(t,e,i){"use strict";i.r(e);var A=i("5244"),n=i("9f8a");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("fd17");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],A["b"],A["c"],!1,null,"21bdd9ea",null,!1,A["a"],r);e["default"]=l.exports},4559:function(t,e){var i={},A=[],n={};t.exports={dynamicDetail:i,dynamicList:A,dynamicQuery:n}},"4cb5":function(t,e,i){"use strict";i.r(e);var A=i("3c8f"),n=i("cbca");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("12db");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],A["b"],A["c"],!1,null,"1d7f90d0",null,!1,A["a"],r);e["default"]=l.exports},5244:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return A}));var A={uIcon:i("5a40").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-avatar",style:[t.wrapStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[!t.uText&&t.avatar?i("v-uni-image",{staticClass:"u-avatar__img",style:[t.imgStyle],attrs:{src:t.avatar,mode:t.imgMode},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.loadError.apply(void 0,arguments)}}}):t.uText?i("v-uni-text",{staticClass:"u-line-1",style:{fontSize:"38rpx"}},[t._v(t._s(t.uText))]):t._t("default"),t.showSex?i("v-uni-view",{staticClass:"u-avatar__sex",class:["u-avatar__sex--"+t.sexIcon],style:[t.uSexStyle]},[i("u-icon",{attrs:{name:t.sexIcon,size:"20"}})],1):t._e(),t.showLevel?i("v-uni-view",{staticClass:"u-avatar__level",style:[t.uLevelStyle]},[i("u-icon",{attrs:{name:t.levelIcon,size:"20"}})],1):t._e()],2)},a=[]},"57bc":function(t,e,i){var A=i("24fb");e=A(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-navbar[data-v-1d7f90d0]{width:100%}.u-navbar-fixed[data-v-1d7f90d0]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1d7f90d0]{width:100%}.u-navbar-inner[data-v-1d7f90d0]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-1d7f90d0]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1d7f90d0]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1d7f90d0]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-1d7f90d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-1d7f90d0]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-1d7f90d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-1d7f90d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"5d3b":function(t,e,i){var A=i("57bc");"string"===typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);var n=i("4f06").default;n("fb9433d4",A,!0,{sourceMap:!1,shadowMode:!1})},"62a5":function(t,e,i){var A=i("24fb");e=A(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.history-list[data-v-6fe4f6eb]{background-color:#fff;border-radius:%?10?%}.history-list .history-item[data-v-6fe4f6eb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?20?%;background-color:#fff;border-radius:%?10?%;-webkit-transition:.3s;transition:.3s}.history-list .history-item[data-v-6fe4f6eb]:active{-webkit-filter:brightness(80%);filter:brightness(80%)}.history-list .history-item .content[data-v-6fe4f6eb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?20?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.history-list .history-item .content .title[data-v-6fe4f6eb]{color:#858486;font-size:%?24?%}.history-list .history-item .content .user-top[data-v-6fe4f6eb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.history-list .history-item .content .user-top .name[data-v-6fe4f6eb]{font-size:%?32?%}.history-list .history-item .content .user-top .time[data-v-6fe4f6eb]{font-size:%?24?%;color:#858486}.page[data-v-6fe4f6eb]{background-color:#f2f1f6;min-height:100vh;padding:%?20?%}',""]),t.exports=e},"655b":function(t,e,i){var A=i("62a5");"string"===typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);var n=i("4f06").default;n("741446aa",A,!0,{sourceMap:!1,shadowMode:!1})},"80c3":function(t,e,i){var A=i("24fb");e=A(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-avatar[data-v-21bdd9ea]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#606266;border-radius:10px;position:relative}.u-avatar__img[data-v-21bdd9ea]{width:100%;height:100%}.u-avatar__sex[data-v-21bdd9ea]{position:absolute;width:%?32?%;color:#fff;height:%?32?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?100?%;top:5%;z-index:1;right:-7%;border:1px #fff solid}.u-avatar__sex--man[data-v-21bdd9ea]{background-color:#2979ff}.u-avatar__sex--woman[data-v-21bdd9ea]{background-color:#fa3534}.u-avatar__sex--none[data-v-21bdd9ea]{background-color:#f90}.u-avatar__level[data-v-21bdd9ea]{position:absolute;width:%?32?%;color:#fff;height:%?32?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?100?%;bottom:5%;z-index:1;right:-7%;border:1px #fff solid;background-color:#f90}',""]),t.exports=e},"83ac":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return A}));var A={uNavbar:i("4cb5").default,uAvatar:i("44e76").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("u-navbar",{attrs:{"back-text":"浏览历史"}}),i("v-uni-view",{staticClass:"history-list"},t._l(t.historyList,(function(e){return e.data.user?i("v-uni-view",{staticClass:"history-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDynamic(e)}}},[i("u-avatar",{attrs:{size:"60",src:t.$baseurl+e.data.user.avatar}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"user-top"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.data.user.nickName))]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.$rTime(e.time)))])],1),i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.data.title))])],1)],1):t._e()})),1)],1)},a=[]},"9a4a":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var A=uni.getSystemInfoSync(),n={},a={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:A.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(A.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(A.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=a},"9f8a":function(t,e,i){"use strict";i.r(e);var A=i("3c52"),n=i.n(A);for(var a in A)"default"!==a&&function(t){i.d(e,t,(function(){return A[t]}))}(a);e["default"]=n.a},c272:function(t,e,i){"use strict";var A=i("655b"),n=i.n(A);n.a},cbca:function(t,e,i){"use strict";i.r(e);var A=i("9a4a"),n=i.n(A);for(var a in A)"default"!==a&&function(t){i.d(e,t,(function(){return A[t]}))}(a);e["default"]=n.a},e7fd:function(t,e,i){"use strict";i.r(e);var A=i("83ac"),n=i("ed75");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("c272");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],A["b"],A["c"],!1,null,"6fe4f6eb",null,!1,A["a"],r);e["default"]=l.exports},ed75:function(t,e,i){"use strict";i.r(e);var A=i("0549"),n=i.n(A);for(var a in A)"default"!==a&&function(t){i.d(e,t,(function(){return A[t]}))}(a);e["default"]=n.a},fd17:function(t,e,i){"use strict";var A=i("1506"),n=i.n(A);n.a}}]);