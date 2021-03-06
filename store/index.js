import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


let state = {
	tabbar:[{
			iconPath: "/static/tabbar/home.png",
			selectedIconPath: "/static/tabbar/home-fill.png",
			text: '首页',
			pagePath: "/pages/index/index"
		},
		{
			iconPath: "/static/tabbar/plus-circle.png",
			selectedIconPath: "/static/tabbar/plus-circle-fill.png",
			text: '添加',
			pagePath: "/pages/add/add"
		}
	]
}

const store = new Vuex.Store({
	state: state,
	mutations: {},
	actions: {}
})
export default store
