import request from "./httpload.js"

//获取动态评论
export function getComment(params){
	return request.get('/api/comment',{params})
}

//判断动态是否点赞
export function getIsPraise(params){
	return request.get("/api/praise/is",{params})
}

//给动态点赞
export function giveLike(data){
	return request.post("/api/praise",data)
}

//动态添加评论
export function addComment(data){
	return request.post('/api/comment',data)
}

//删除评论
export function delComment(id){
	return request.delete('/api/comment/'+id)
}