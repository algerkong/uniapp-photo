import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);

import marked from 'marked'

Vue.prototype.$marked = marked
//引入vuex
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

// Vue.prototype.$baseurl = "http://192.168.1.100:7001"
Vue.prototype.$baseurl = "http://127.0.0.1:7001"


Vue.mixin({
	data() {
		return {
			query: '',
		}
	},
	onLoad({
		query
	}) {

		// #ifdef APP-NVUE || APP-PLUS || APP-PLUS-NVUE || APP-VUE
		this.loadFontFaceFromLocal();
		// #endif
	},
	methods: {
		loadFontFaceFromLocal() {
			const url =
				'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500&display=swap'
			uni.loadFontFace({
				family: "Noto Serif SC",
				source: `url("${url}")`,
				success() {
					console.log('success');
				},
				fail(e) {
					console.log('fail');
				}
			});
		}
	}
})

const app = new Vue({
	store,
	...App,
})
app.$mount()
