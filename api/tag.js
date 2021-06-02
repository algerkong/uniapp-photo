import request from "./httpload.js"

//获取全部tag
export function getTagList(params){
	return request.get('/api/tag',{params})
}

//获取tag动态
export function getTagDynamic(params,body){
	return request.post('/api/dynamic/find',body,{params})
}
