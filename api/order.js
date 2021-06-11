import request from "./httpload.js"

//获取订单
export function getOrder(params){
	return request.get('/api/order',{params})
}

export function getIdOrder(id){
	return request.get('/api/order/id',{params:{id:id}})
}

export function addOrder(data){
	return request.post('/api/order',data)
}

