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
