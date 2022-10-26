import { apiServer } from "./const";

export const request = async ({url, method = 'GET', data = null, callBack}) => {
	try {
		const headers = {};
		let body;

		if(data){
			headers['Content-Type'] = 'application/json';
			body = JSON.stringify(data)
		}
		const response = await fetch(url, {
			method,
			headers,
			body
		})

		const result = await response.json();
		if(callBack){
			callBack(result)
		} else {
			return result
		}

	} catch (event) {
		console.warn('Error: ', event.message)
	}
}


export const requestGetUsers = async ({callBack, result}) => {
	request({
		callBack,
		url: `${apiServer}&result=${result}`
	})
}

document.window.addEventLestener