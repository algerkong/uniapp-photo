(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"049f":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getDayDynamic=r,e.getImgList=o,e.getImgDynamic=s;var i=a(n("362d"));function r(t){return i.default.get("/api/home/daydynamic",{params:t})}function o(t){return i.default.post("/api/img",{},{params:t})}function s(t){return i.default.get("/api/home/imgdynamic",{params:t})}},"34aa":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uImage:n("74c8").default,uWaterfall:n("3046").default,uLazyLoad:n("69fc").default,uLoadmore:n("4e6c").default,uNoNetwork:n("b395").default,uMask:n("3946").default,uLoading:n("af38").default,uTabbar:n("87fa").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"top"}),n("v-uni-view",{staticClass:"title"},[t._v("发现")]),n("v-uni-view",{staticClass:"title-small"},[t._v("今日推荐")]),n("v-uni-view",{staticClass:"new-list"},[n("v-uni-swiper",{staticClass:"new-swiper"},t._l(t.dayList,(function(e,a){return n("v-uni-swiper-item",{key:e.id},[n("v-uni-view",{staticClass:"new-item"},[n("v-uni-view",{staticClass:"new-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showImgs(a)}}},[n("u-image",{attrs:{height:"100%",mode:"aspectFill",src:t.$baseurl+e.imgs[0].src}})],1),n("v-uni-view",{staticClass:"new-user",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toDynamic(e)}}},[n("u-image",{attrs:{width:"70rpx",height:"70rpx",mode:"aspectFill",src:t.$baseurl+e.user.avatar,shape:"circle"}}),n("v-uni-view",{staticClass:"new-user-text"},[n("v-uni-view",{staticClass:"user-nickname"},[t._v(t._s(e.user.nickName))]),n("v-uni-view",{staticClass:"user-name"},[t._v("@"+t._s(e.user.username))])],1),n("v-uni-view",{staticClass:"new-user-time"},[t._v(t._s(t.$rTime(e.createdAt)))])],1)],1)],1)})),1)],1),n("v-uni-view",{staticClass:"img-list-title"},[t._v("最新动态")]),n("u-waterfall",{ref:"uWaterfall",scopedSlots:t._u([{key:"left",fn:function(e){var a=e.leftList;return t._l(a,(function(e,a){return n("v-uni-view",{key:a,staticClass:"demo-warter-l",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toDynamicFull(e)}}},[n("u-lazy-load",{staticClass:"img",attrs:{threshold:"800",image:t.$baseurl+e.item.imgs[0].src,index:a}})],1)}))}},{key:"right",fn:function(e){var a=e.rightList;return t._l(a,(function(e,a){return n("v-uni-view",{key:a,staticClass:"demo-warter-r",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toDynamicFull(e)}}},[n("u-lazy-load",{staticClass:"img",attrs:{threshold:"800",image:t.$baseurl+e.item.imgs[0].src,index:a}})],1)}))}}]),model:{value:t.flowList,callback:function(e){t.flowList=e},expression:"flowList"}}),n("u-loadmore",{attrs:{status:t.loadStatus},on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.addRandomData.apply(void 0,arguments)}}}),n("u-no-network"),n("u-mask",{attrs:{show:t.loading}},[n("v-uni-view",{staticClass:"warp"},[n("u-loading",{attrs:{mode:"circle",size:"50"}})],1)],1),n("v-uni-view",{staticClass:"bottom"}),n("u-tabbar",{attrs:{list:t.$store.state.tabbar,"mid-button":!0}})],1)},r=[]},3946:function(t,e,n){"use strict";n.r(e);var a=n("959d"),i=n("6b05");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("f0b6");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"97c7ea6a",null,!1,a["a"],o);e["default"]=u.exports},5474:function(t,e,n){"use strict";n.r(e);var a=n("8b4d"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"59b2":function(t,e,n){"use strict";var a=n("d241"),i=n.n(a);i.a},"6b05":function(t,e,n){"use strict";n.r(e);var a=n("bb3e"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"74c8":function(t,e,n){"use strict";n.r(e);var a=n("7b73"),i=n("5474");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("774e");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"00140dbc",null,!1,a["a"],o);e["default"]=u.exports},"774e":function(t,e,n){"use strict";var a=n("9af8"),i=n.n(a);i.a},"7b73":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uIcon:n("ff0e").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():n("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?n("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):n("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?n("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):n("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},r=[]},"7fa9":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=n("049f"),o=a(n("8c80")),s={data:function(){return{query:{page:1,count:6},dayList:null,loadStatus:"loadmore",flowList:[],queryImg:{page:0,count:8},list:[],loading:!1}},onLoad:function(){this.getList(),this.addDynamicData();try{this.onReachBottom()}catch(t){}},onShow:function(){o.default.dynamicList.length>this.flowList.length&&(this.flowList,o.default.dynamicList)},computed:{},onReachBottom:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loadStatus="loading",e.next=3,t.addDynamicData();case 3:t.loadStatus="loadmore";case 4:case"end":return e.stop()}}),e)})))()},methods:{getList:function(){var t=this;this.loading=!0,(0,r.getDayDynamic)(this.query).then((function(e){t.dayList=e.data.data.list,t.loading=!1}))},showImgs:function(t){var e=this,n=[];this.dayList[t].imgs.forEach((function(t){n.push(e.$baseurl+t.src)})),uni.previewImage({current:0,urls:n,indicator:"default",longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){console.log(t.errMsg)}}})},addDynamicData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.queryImg.page+=1,!(t.queryImg.page<=50)){e.next=9;break}return e.next=4,t.getImgList();case 4:t.flowList=t.flowList.concat(t.list),o.default.dynamicList=t.flowList,o.default.dynamicQuery=t.queryImg,e.next=10;break;case 9:t.loadStatus="nomore";case 10:0==t.list.length&&(t.loadStatus="nomore",t.queryImg.page-=1);case 11:case"end":return e.stop()}}),e)})))()},getImgList:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getImgDynamic)(t.queryImg).then((function(e){var n=[];e.data.data.list.forEach((function(e,a){n.push({item:e,index:t.flowList.length+a})})),t.list=n}));case 2:case"end":return e.stop()}}),e)})))()},toDynamicFull:function(t){o.default.dynamicDetail=t,uni.navigateTo({url:"./dynamic-full/dynamic-full"})},toDynamic:function(t){uni.navigateTo({url:"/pages/dynamic/dynamic?id="+t.id})}}};e.default=s},"82e6":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-image[data-v-00140dbc]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-00140dbc]{width:100%;height:100%}.u-image__loading[data-v-00140dbc], .u-image__error[data-v-00140dbc]{position:absolute;top:0;left:0;width:100%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"8b4d":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=a},"8c80":function(t,e){var n={},a=[],i={};t.exports={dynamicDetail:n,dynamicList:a,dynamicQuery:i}},"8cd5":function(t,e,n){var a=n("d339");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("034b0d4e",a,!0,{sourceMap:!1,shadowMode:!1})},"959d":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-mask",class:{"u-mask-zoom":t.zoom,"u-mask-show":t.show},style:[t.maskStyle,t.zoomStyle],attrs:{"hover-stop-propagation":!0},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},"9af8":function(t,e,n){var a=n("82e6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("797489ce",a,!0,{sourceMap:!1,shadowMode:!1})},"9fc6":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top[data-v-b09f39f4]{background-color:#f2f1f6;position:fixed;top:0;left:0;height:0;width:100vw;z-index:9999}.warp[data-v-b09f39f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%}.page[data-v-b09f39f4]{padding:%?30?%;background-color:#f2f1f6;min-height:100vh}.page .title[data-v-b09f39f4]{padding-top:%?20?%;margin-top:0;font-size:%?60?%;letter-spacing:%?10?%;margin-bottom:%?40?%}.page .title-small[data-v-b09f39f4]{font-size:%?30?%;letter-spacing:%?5?%;font-weight:700;margin-bottom:%?30?%}.page .new-list .scroll-view_H[data-v-b09f39f4]{height:%?1000?%}.page .new-list .new-swiper[data-v-b09f39f4]{height:%?800?%}.page .new-list .new-item[data-v-b09f39f4]{width:%?690?%;float:left}.page .new-list .new-item .new-img[data-v-b09f39f4]{width:100%;height:%?700?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?10?%}.page .new-list .new-item .new-user[data-v-b09f39f4]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page .new-list .new-item .new-user .new-user-text[data-v-b09f39f4]{margin-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.page .new-list .new-item .new-user .new-user-text .user-nickname[data-v-b09f39f4]{font-size:%?30?%;font-weight:600}.page .new-list .new-item .new-user .new-user-text .user-name[data-v-b09f39f4]{font-size:%?24?%;color:#999}.page .img-list-title[data-v-b09f39f4]{font-size:%?40?%;font-weight:600;margin:%?50?% 0 %?30?%;letter-spacing:%?5?%}.page .demo-warter-l[data-v-b09f39f4]{margin:%?10?% %?10?% %?10?% 0;background-color:#fff;position:relative}.page .demo-warter-l .img[data-v-b09f39f4]{overflow:hidden;border-radius:%?10?%!important}.page .demo-warter-r[data-v-b09f39f4]{margin:%?10?% 0 %?10?% %?10?%;background-color:#fff;position:relative}.page .demo-warter-r .img[data-v-b09f39f4]{overflow:hidden;border-radius:%?10?%!important}.page .demo-image[data-v-b09f39f4]{width:100%}',""]),t.exports=e},bb3e:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),n("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r={name:"u-mask",props:{show:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},customStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},maskClickAble:{type:Boolean,default:!0}},data:function(){return{zoomStyle:{transform:""},scale:"scale(1.2, 1.2)"}},watch:{show:function(t){t&&this.zoom?this.zoomStyle.transform="scale(1, 1)":!t&&this.zoom&&(this.zoomStyle.transform=this.scale)}},computed:{maskStyle:function(){var t={backgroundColor:"rgba(0, 0, 0, 0.6)"};return this.show?t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.mask:t.zIndex=-1,t.transition="all ".concat(this.duration/1e3,"s ease-in-out"),Object.keys(this.customStyle).length&&(t=(0,i.default)((0,i.default)({},t),this.customStyle)),t}},methods:{click:function(){this.maskClickAble&&this.$emit("click")}}};e.default=r},d241:function(t,e,n){var a=n("9fc6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("31330a5d",a,!0,{sourceMap:!1,shadowMode:!1})},d339:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-mask[data-v-97c7ea6a]{position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-mask-show[data-v-97c7ea6a]{opacity:1}.u-mask-zoom[data-v-97c7ea6a]{-webkit-transform:scale(1.2);transform:scale(1.2)}',""]),t.exports=e},db9f:function(t,e,n){"use strict";n.r(e);var a=n("7fa9"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},dfd1:function(t,e,n){"use strict";n.r(e);var a=n("34aa"),i=n("db9f");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("59b2");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"b09f39f4",null,!1,a["a"],o);e["default"]=u.exports},f0b6:function(t,e,n){"use strict";var a=n("8cd5"),i=n.n(a);i.a}}]);