import request from "./httpload.js"

export function getIsPraise(params){
	return request.get("/api/praise/is",{params})
}