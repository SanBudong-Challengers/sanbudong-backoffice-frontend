import AxiosInterceptor from '../AxiosInterceptor';

export function login(queryStringRequest) {
	return AxiosInterceptor({
		url: `/login`,
		method: 'post',
		params: queryStringRequest,
	});
}

export function logout() {
	return AxiosInterceptor({
		url: `/logout`,
		method: 'post',
	});
}
