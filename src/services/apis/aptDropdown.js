import AxiosInterceptor from '../AxiosInterceptor';

export function addAptListItem(queryStringRequest) {
	return AxiosInterceptor({
		url: '/addApt',
		method: 'post',
		data: queryStringRequest,
	});
}

export function getAptList(queryStringRequest) {
	return AxiosInterceptor({
		url: '/getApt',
		method: 'get',
		params: queryStringRequest,
	});
}
