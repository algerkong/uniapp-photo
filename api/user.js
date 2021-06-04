import request from "./httpload.js"

export function userLogin(username, password) {
	console.log(username,password)
	return request.post(
		'/api/login', {
			username: username,
			password: password
		}
	)
}

export function addUser(data){
	return request.post(
		'/api/user',
		data
	)
}

export function getIdUser(id){
	return request.get(
	'/api/user/id',
	{
		params: {
			id
		}
	}
	)
}


//获取用户动态
export function getUserDynamic(params,userId){
	return request.post('/api/dynamic/find',{userId:userId},{params})
}

//获取用户评论
export function getUserComment(params){
	return request.get('/api/comment/user',{params})
}

// export function login(data) {
//   return request({
//     url: '/api/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/api/login/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/api/login/logout',
//     method: 'get'
//   })
// }
