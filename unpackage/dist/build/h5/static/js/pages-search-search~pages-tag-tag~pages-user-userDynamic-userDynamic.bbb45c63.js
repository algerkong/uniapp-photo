(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search~pages-tag-tag~pages-user-userDynamic-userDynamic"],{"0090":function(t,e,i){"use strict";i.r(e);var n=i("fe57"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"0bf5":function(t,e,i){"use strict";i.r(e);var n=i("694f"),a=i("7033");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("d0c8"),i("745b");var c,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"01efc4c6",null,!1,n["a"],c);e["default"]=s.exports},"1f0b":function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("8f11"),a={name:"dynamic-item",data:function(){return{imgs:[],imgStyle:{padding:"0 10rpx 10rpx 0",height:"216rpx"},imgStyle1:{padding:"0 0 10rpx 0",height:"216rpx"},is:!1,isDel:!1,userId:"",content:"确定要删除动态吗",del:!0}},props:{dynamic:{type:Object,default:{}}},mounted:function(){var t=this;this.dynamic.imgs.forEach((function(e){t.imgs.push(t.$baseurl+e.src)}));var e=uni.getStorageSync("user").id;this.userId=e,(0,n.getIsPraise)({userId:e,dynamicId:this.dynamic.id}).then((function(e){t.is=e.data.isPraise}))},computed:{getStatus:function(){switch(this.dynamic.status){case 1:return"来自今日推荐";case 2:return"来自编辑推荐";default:return"动态"}}},methods:{toUserDynamic:function(t){uni.navigateTo({url:"/pages/user/userDynamic/userDynamic?userId="+t})},deleteDynamic:function(){var t=this;(0,n.delDynamic)(this.dynamic.id).then((function(e){t.$refs.uToast.show({title:"删除成功",type:"success",icon:!0,position:"top"}),t.del=!1}))},showImgs:function(t){uni.previewImage({urls:this.imgs,current:t})},praiseDynamic:function(){var t=this,e={userId:uni.getStorageSync("user").id,dynamicId:this.dynamic.id};(0,n.giveLike)(e).then((function(e){200==e.data.code?(t.is=!1,t.dynamic.praises.push("aaa")):201==e.data.code&&(t.is=!0,t.dynamic.praises.pop())}))},toDynamic:function(){uni.navigateTo({url:"/pages/dynamic/dynamic?id="+this.dynamic.id})}}};e.default=a},"22c5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-grid[data-v-00eebdbf]{width:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"30b0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-grid-item[data-v-02c7666e]{box-sizing:border-box;background:#fff;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;-webkit-flex-direction:column;flex-direction:column}.u-grid-item-hover[data-v-02c7666e]{background:#f7f7f7!important}.u-grid-marker-box[data-v-02c7666e]{position:absolute;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;line-height:0}.u-grid-marker-wrap[data-v-02c7666e]{position:absolute}.u-grid-item-box[data-v-02c7666e]{padding:%?30?% 0;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%}',""]),t.exports=e},"4c4e":function(t,e,i){"use strict";i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-grid",props:{col:{type:[Number,String],default:3},border:{type:Boolean,default:!0},align:{type:String,default:"left"},hoverClass:{type:String,default:"u-hover-class"}},data:function(){return{index:0}},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"==typeof t.updateParentData&&t.updateParentData()}))}},created:function(){this.children=[]},computed:{parentData:function(){return[this.hoverClass,this.col,this.size,this.border]},gridStyle:function(){var t={};switch(this.align){case"left":t.justifyContent="flex-start";break;case"center":t.justifyContent="center";break;case"right":t.justifyContent="flex-end";break;default:t.justifyContent="flex-start"}return t}},methods:{click:function(t){this.$emit("click",t)}}};e.default=n},"537d":function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-divider",props:{halfWidth:{type:[Number,String],default:150},borderColor:{type:String,default:"#dcdfe6"},type:{type:String,default:"primary"},color:{type:String,default:"#909399"},fontSize:{type:[Number,String],default:26},bgColor:{type:String,default:"#ffffff"},height:{type:[Number,String],default:"auto"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},useSlot:{type:Boolean,default:!0}},computed:{lineStyle:function(){var t={};return-1!=String(this.halfWidth).indexOf("%")?t.width=this.halfWidth:t.width=this.halfWidth+"rpx",this.borderColor&&(t.borderColor=this.borderColor),t}},methods:{click:function(){this.$emit("click")}}};e.default=n},"567b":function(t,e,i){var n=i("22c5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("bef2f67e",n,!0,{sourceMap:!1,shadowMode:!1})},"59de":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-grid",class:{"u-border-top u-border-left":t.border},style:[t.gridStyle]},[t._t("default")],2)},r=[]},"5ac9":function(t,e,i){"use strict";var n=i("567b"),a=i.n(n);a.a},"62c5":function(t,e,i){var n=i("a391");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6b82fe7a",n,!0,{sourceMap:!1,shadowMode:!1})},"694f":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uImage:i("64a7").default,uGrid:i("b264").default,uGridItem:i("c199").default,uIcon:i("5a40").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.del?i("v-uni-view",{staticClass:"dynamic",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDynamic.apply(void 0,arguments)},longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.isDel=!0}}},[i("v-uni-view",{staticClass:"dynamic-top",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toUserDynamic(t.dynamic.user.id)}}},[i("u-image",{attrs:{width:"70rpx",height:"70rpx",mode:"aspectFill",src:t.$baseurl+t.dynamic.user.avatar,shape:"circle"}}),i("v-uni-view",{staticClass:"user-text"},[i("v-uni-view",{staticClass:"user-nickname"},[t._v(t._s(t.dynamic.user.nickName))]),i("v-uni-view",{staticClass:"status"},[t._v(t._s(t.getStatus))])],1),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.$rTime(t.dynamic.createdAt)))])],1),i("v-uni-view",{staticClass:"dynamic-content"},[i("div",{staticClass:"title"},[t._v(t._s(t.dynamic.title))]),i("div",{staticClass:"content"},[t._v(t._s(t.dynamic.content))])]),t.dynamic.imgs?i("v-uni-view",{staticClass:"img-list"},[i("u-grid",{attrs:{col:t.dynamic.imgs.length%3==0||t.dynamic.imgs.length>4?"3":"2",border:!1}},t._l(t.dynamic.imgs,(function(e,n){return i("u-grid-item",{key:n,attrs:{"custom-style":(n+1)%3!=0?t.imgStyle:t.imgStyle1,index:n}},[i("v-uni-image",{staticClass:"img",attrs:{src:t.$baseurl+e.src,mode:"aspectFill"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.showImgs(n)}}})],1)})),1)],1):t._e(),i("v-uni-view",{staticClass:"dynamic-btn"},[i("v-uni-view",{staticClass:"btn-item"},[i("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.praiseDynamic.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"thumb-up",color:!t.is&&t.dynamic.praises.length>0?"#2979ff":""}}),i("span",[t._v(t._s(t.dynamic.praises.length))])],1)],1),i("v-uni-view",{staticClass:"btn-item"},[i("v-uni-view",[i("u-icon",{attrs:{name:"chat"}}),i("span",[t._v(t._s(t.dynamic.comments.length))])],1)],1),i("v-uni-view",{staticClass:"btn-item"},[i("v-uni-view",[i("u-icon",{attrs:{name:"zhuanfa"}}),i("span",[t._v("分享")])],1)],1)],1)],1):t._e()},r=[]},7033:function(t,e,i){"use strict";i.r(e);var n=i("1f0b"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"745b":function(t,e,i){"use strict";var n=i("a6fb"),a=i.n(n);a.a},"7eef":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-divider[data-v-fec8ac4c]{width:100%;position:relative;text-align:center;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;flex-direction:row}.u-divider-line[data-v-fec8ac4c]{border-bottom:1px solid #e4e7ed;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:center;transform-origin:center}.u-divider-line--bordercolor--primary[data-v-fec8ac4c]{border-color:#2979ff}.u-divider-line--bordercolor--success[data-v-fec8ac4c]{border-color:#19be6b}.u-divider-line--bordercolor--error[data-v-fec8ac4c]{border-color:#2979ff}.u-divider-line--bordercolor--info[data-v-fec8ac4c]{border-color:#909399}.u-divider-line--bordercolor--warning[data-v-fec8ac4c]{border-color:#f90}.u-divider-text[data-v-fec8ac4c]{white-space:nowrap;padding:0 %?16?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex}',""]),t.exports=e},"836d":function(t,e,i){"use strict";var n=i("a0a9"),a=i.n(n);a.a},"8f11":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getDynamic=r,e.getIdDynamic=c,e.delDynamic=o,e.addDynamic=s,e.getComment=d,e.getIsPraise=u,e.giveLike=l,e.addComment=f,e.delComment=p;var a=n(i("d3e1"));function r(t){return a.default.get("/api/dynamic",{params:t})}function c(t){return a.default.get("/api/dynamic/id",{params:{id:t}})}function o(t){return a.default.delete("/api/dynamic/"+t)}function s(t){return a.default.post("/api/dynamic",t)}function d(t){return a.default.get("/api/comment",{params:t})}function u(t){return a.default.get("/api/praise/is",{params:t})}function l(t){return a.default.post("/api/praise",t)}function f(t){return a.default.post("/api/comment",t)}function p(t){return a.default.delete("/api/comment/"+t)}},a0a9:function(t,e,i){var n=i("7eef");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("269a8f83",n,!0,{sourceMap:!1,shadowMode:!1})},a114:function(t,e,i){"use strict";i.r(e);var n=i("4c4e"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},a391:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-grid-item-box[data-v-01efc4c6]{padding:0!important}",""]),t.exports=e},a3db:function(t,e,i){"use strict";i.r(e);var n=i("c85d"),a=i("b167");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("836d");var c,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"fec8ac4c",null,!1,n["a"],c);e["default"]=s.exports},a6fb:function(t,e,i){var n=i("df24");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("59164285",n,!0,{sourceMap:!1,shadowMode:!1})},b167:function(t,e,i){"use strict";i.r(e);var n=i("537d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},b264:function(t,e,i){"use strict";i.r(e);var n=i("59de"),a=i("a114");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("5ac9");var c,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"00eebdbf",null,!1,n["a"],c);e["default"]=s.exports},bf2e:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-grid-item",style:{background:t.bgColor,width:t.width},attrs:{"hover-class":t.parentData.hoverClass,"hover-stay-time":200},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-grid-item-box",class:[t.parentData.border?"u-border-right u-border-bottom":""],style:[t.customStyle]},[t._t("default")],2)],1)},r=[]},c199:function(t,e,i){"use strict";i.r(e);var n=i("bf2e"),a=i("0090");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("d355");var c,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"02c7666e",null,!1,n["a"],c);e["default"]=s.exports},c85d:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-divider",style:{height:"auto"==t.height?"auto":t.height+"rpx",backgroundColor:t.bgColor,marginBottom:t.marginBottom+"rpx",marginTop:t.marginTop+"rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-divider-line",class:[t.type?"u-divider-line--bordercolor--"+t.type:""],style:[t.lineStyle]}),t.useSlot?i("v-uni-view",{staticClass:"u-divider-text",style:{color:t.color,fontSize:t.fontSize+"rpx"}},[t._t("default")],2):t._e(),i("v-uni-view",{staticClass:"u-divider-line",class:[t.type?"u-divider-line--bordercolor--"+t.type:""],style:[t.lineStyle]})],1)},r=[]},d0c8:function(t,e,i){"use strict";var n=i("62c5"),a=i.n(n);a.a},d355:function(t,e,i){"use strict";var n=i("f0f3"),a=i.n(n);a.a},df24:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dynamic[data-v-01efc4c6]{background-color:#fff;padding:%?15?%;margin-bottom:%?20?%;border-radius:%?10?%;box-shadow:%?0?% %?5?% %?10?% #eee}.img-list[data-v-01efc4c6]{overflow:hidden;margin-top:%?20?%}.img-list .img[data-v-01efc4c6]{width:100%!important;height:%?217?%!important;border-radius:%?10?%;overflow:hidden;background-color:#e9ecf1}.dynamic-top[data-v-01efc4c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.dynamic-top .user-text[data-v-01efc4c6]{margin-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.dynamic-top .user-text .user-nickname[data-v-01efc4c6]{font-size:%?26?%}.dynamic-top .user-text .status[data-v-01efc4c6]{font-size:%?20?%;color:#949494}.dynamic-top .user-text .user-name[data-v-01efc4c6]{font-size:%?26?%;color:#999}.dynamic-top .time[data-v-01efc4c6]{font-size:%?22?%;color:#767676}.dynamic-content[data-v-01efc4c6]{margin-top:%?20?%}.dynamic-content .title[data-v-01efc4c6]{font-size:%?36?%;font-weight:500}.dynamic-btn[data-v-01efc4c6]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.dynamic-btn .btn-item[data-v-01efc4c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?30?%;color:#949494}.dynamic-btn .btn-item span[data-v-01efc4c6]{margin-left:%?15?%}',""]),t.exports=e},f0f3:function(t,e,i){var n=i("30b0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("258708b8",n,!0,{sourceMap:!1,shadowMode:!1})},fe57:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-grid-item",props:{bgColor:{type:String,default:"#ffffff"},index:{type:[Number,String],default:""},customStyle:{type:Object,default:function(){return{padding:"30rpx 0"}}}},data:function(){return{parentData:{hoverClass:"",col:3,border:!0}}},created:function(){this.updateParentData(),this.parent.children.push(this)},computed:{width:function(){return 100/Number(this.parentData.col)+"%"}},methods:{updateParentData:function(){this.getParentData("u-grid")},click:function(){this.$emit("click",this.index),this.parent&&this.parent.click(this.index)}}};e.default=n}}]);