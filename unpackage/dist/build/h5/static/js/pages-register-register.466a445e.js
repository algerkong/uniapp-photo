(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"0fe0":function(t,e,n){"use strict";n.r(e);var i=n("d9ea"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"1f48":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-7696d149]{padding:%?20?%}.page .return[data-v-7696d149]{margin-top:0;display:inline-block;padding:%?20?% %?20?% 0 0}.page .title[data-v-7696d149]{font-size:%?60?%;letter-spacing:%?20?%;margin-top:%?50?%;margin-bottom:%?60?%}.page .input[data-v-7696d149]{margin-bottom:%?40?%;border:%?5?% solid;border-color:#333!important;border-radius:%?8?%!important;padding:%?10?% %?20?%!important}.page .btn[data-v-7696d149]{box-sizing:border-box;border-radius:%?10?%;font-size:%?40?%;letter-spacing:%?10?%;text-align:center;padding:%?15?% 0;-webkit-transition:ease-in .05s;transition:ease-in .05s;margin-bottom:%?40?%}.page .btn[data-v-7696d149]:active{-webkit-transform:scale(.98);transform:scale(.98)}.page .btn-login[data-v-7696d149]{padding:%?25?% 0;background-color:#000;color:#fff}',""]),t.exports=e},"26ca":function(t,e,n){"use strict";var i=n("6896"),a=n.n(i);a.a},"2e66":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("5a40").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():n("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?n("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):n("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?n("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):n("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},r=[]},3507:function(t,e,n){"use strict";n.r(e);var i=n("3e86"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"3e86":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},5279:function(t,e,n){var i=n("fa4e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4623880a",i,!0,{sourceMap:!1,shadowMode:!1})},"64a7":function(t,e,n){"use strict";n.r(e);var i=n("2e66"),a=n("3507");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("ff4c");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"28c068b7",null,!1,i["a"],o);e["default"]=u.exports},6896:function(t,e,n){var i=n("1f48");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("58297a6a",i,!0,{sourceMap:!1,shadowMode:!1})},"7d73":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.userLogin=r,e.addUser=o,e.getIdUser=s,e.editUser=u,e.getUserDynamic=d,e.getUserComment=c;var a=i(n("d3e1"));function r(t,e){return console.log(t,e),a.default.post("/api/login",{username:t,password:e})}function o(t){return a.default.post("/api/user",t)}function s(t){return a.default.get("/api/user/id",{params:{id:t}})}function u(t,e){return a.default.put("/api/user/"+t,e)}function d(t,e){return a.default.post("/api/dynamic/find",{userId:e},{params:t})}function c(t){return a.default.get("/api/comment/user",{params:t})}},"98bf":function(t,e,n){"use strict";n.r(e);var i=n("9f98"),a=n("0fe0");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("26ca");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"7696d149",null,!1,i["a"],o);e["default"]=u.exports},"9f98":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uImage:n("64a7").default,uInput:n("81bc").default,uToast:n("d88d").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"return",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returnPage.apply(void 0,arguments)}}},[n("u-image",{attrs:{width:"40rpx",mode:"widthFix",src:t.returnSrc}})],1),n("v-uni-view",{staticClass:"title"},[t._v("注册")]),n("u-input",{staticClass:"input",attrs:{type:"text",clearable:!0,placeholder:"请输入昵称"},model:{value:t.user.nickName,callback:function(e){t.$set(t.user,"nickName",e)},expression:"user.nickName"}}),n("u-input",{staticClass:"input",attrs:{type:"text",clearable:!0,placeholder:"请输入账号"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),n("u-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),n("u-input",{staticClass:"input",attrs:{type:"password",placeholder:"确认密码"},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}}),n("v-uni-view",{staticClass:"btn btn-login",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnRegister.apply(void 0,arguments)}}},[t._v("注册")]),n("v-uni-navigator",{attrs:{url:"../login/login"}},[n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"30rpx"}},[t._v("已有账号?去登录")])],1),n("u-toast",{ref:"uToast"})],1)},r=[]},d9ea:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7d73"),a={data:function(){return{user:{username:"",password:"",nickName:""},password1:"",returnSrc:"../../static/return.svg"}},methods:{returnPage:function(){uni.navigateBack()},btnRegister:function(){var t=this;if(""!=this.user.username&&""!=this.user.password&&""!=this.password1&&""!=this.user.nickName)if(this.user.password==this.password1)(0,i.addUser)(this.user).then((function(e){200==e.data.code?(t.$refs.uToast.show({title:e.data.message,type:"success",icon:!0,position:"top",url:"/pages/login/login"}),console.log(e)):t.$refs.uToast.show({title:e.data.message,type:"error",icon:!0,position:"top"})})).catch((function(t){console.log(t)}));else{var e="密码输入不一致";this.$refs.uToast.show({title:e,type:"error",icon:!0,position:"top"})}else{var n="请确认输入完整";this.$refs.uToast.show({title:n,type:"error",icon:!0,position:"top"})}}}};e.default=a},fa4e:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-image[data-v-28c068b7]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-28c068b7]{width:100%;height:100%}.u-image__loading[data-v-28c068b7], .u-image__error[data-v-28c068b7]{position:absolute;top:0;left:0;width:100%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},ff4c:function(t,e,n){"use strict";var i=n("5279"),a=n.n(i);a.a}}]);