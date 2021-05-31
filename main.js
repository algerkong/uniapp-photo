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

Vue.prototype.$baseurl = "http://123.56.226.179:7001"
// Vue.prototype.$baseurl = "http://127.0.0.1:7001"

Vue.prototype.$rTime = date => {
	let json_date = new Date(date);
	json_date.setHours(json_date.getHours() + 8);
	return new Date(new Date(json_date))
		.toISOString()
		.replace(/T/g, " ")
		.replace(/\.[\d]{3}Z/, "");
}

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
