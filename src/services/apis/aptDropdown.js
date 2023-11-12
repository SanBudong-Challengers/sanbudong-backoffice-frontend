import AxiosInterceptor from '../AxiosInterceptor';

export function addAptListItem(queryStringRequest) {
	return AxiosInterceptor({
		url: '/addApt',
		method: 'post',
		data: queryStringRequest,
	});
}

export function getAptList() {
	return AxiosInterceptor({
		url: '/getApt',
		method: 'get',
	});
}
