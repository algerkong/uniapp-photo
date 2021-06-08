import Request from '@/utils/luch-request/index.js'

// import qs from 'qs'
const http = new Request({
	// baseURL: "http://127.0.0.1:7001", //设置请求的base url
	baseURL: "http://123.56.226.179:7001", //设置请求的base url
	timeout: 30000, //超时时长5分钟,
})

//请求拦截器 
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	const token = uni.getStorageSync('token');
	if (token!=null&&token!=""&&token!=undefined) {
		config.header.token = token;
	}
	
	config.header = {
		...config.header,
		'Access-Control-Allow-Origin': '*', 
	}

	if (config.method === 'POST') {
		config.data = JSON.stringify(config.data);
	}
	return config
}, error => {
	return Promise.resolve(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
	console.log(response)
	
	
	// if(response.data.code!=200){
	// 	uni.showToast({
	// 		icon:"none",
	// 		title:response.data.message
	// 	})
	// }
	return response
}, (error) => {
	console.log(error)
	// uni.showToast({
	// 	icon:"none",
	// 	title:error.data.message
	// })
	//未登录时清空缓存跳转
	if (error.statusCode == 401) {
		uni.clearStorageSync();
		uni.switchTab({
			url: "/pages/index/index.vue"
		})
	}
	return Promise.resolve(error)
})


export default http;