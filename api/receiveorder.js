import request from "./httpload.js"

//获取订单
export function addReceiveorder(data){
	return request.post('/api/receiveorder',data)
}