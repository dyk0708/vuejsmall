import {request} from "./request.js";

export function gethomemultidata() {
	return request({
		url: 'api/hy/home/multidata'
	})
}

export function gethomegoods(type,page) {
	return request({
		url: 'api/hy/home/data',
		params: {
			type,
			page
		}
	})
}