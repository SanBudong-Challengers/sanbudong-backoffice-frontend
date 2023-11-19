import AxiosInterceptor from '../AxiosInterceptor';

export function deleteBuilding(queryStringRequest) {
	return AxiosInterceptor({
		url: `/${queryStringRequest.bno}/delete`,
		method: 'delete',
		params: queryStringRequest,
	});
}

export function editBuilding(queryStringRequest) {
	return AxiosInterceptor({
		url: `/${queryStringRequest.bno}/edit`,
		method: 'put',
		data: queryStringRequest,
	});
}

export function addBuilding(queryStringRequest) {
	return AxiosInterceptor({
		url: `/add`,
		method: 'post',
		data: queryStringRequest,
	});
}

export function searchBuilding(queryStringRequest) {
	return AxiosInterceptor({
		url: `/option`,
		method: 'get',
		params: queryStringRequest,
	});
}
