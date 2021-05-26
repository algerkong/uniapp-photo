import request from "./httpload.js"

export function getDayDynamic(params) {
	return request.get("/api/home/daydynamic",{params})
}

// export function getDynamic(params) {
//   return request({
//     url: '/api/dynamic',
//     method: 'get',
//     params: params
//   })
// }


// export function addUser(data){
// 	return request.post(
// 		'/api/user',
// 		data
// 	)
// }

