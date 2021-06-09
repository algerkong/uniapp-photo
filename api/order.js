import request from "./httpload.js"

//获取动态
export function getOrder(params){
	return request.get('/api/order',{params})
}

export function addOrder(data){
	return request.post('/api/order',data)
}

