import axios from 'axios';

const AxiosInterceptor = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	changeOrigin: true,
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' },
	// withCredentials: true,
	// timeout: 15000,
});

axios.defaults.withCredentials = true;

// request interceptors
AxiosInterceptor.interceptors.request.use(
	config => {
		// config.headers.Authorization = 'Bearer ' + token;
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

AxiosInterceptor.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return Promise.reject(error);

		// const status = error.response.status;
		//
		// switch (status) {
		// 	case 401: {
		// 		window.location.href = '/';
		// 		return Promise.reject(error.message);
		// 	}

		// 	case 403: {
		// 		window.location.href = '/';
		// 		return Promise.reject(error.message);
		// 	}

		// 	default: {
		// 		return Promise.reject(error);
		// 	}
		// }
	},
);

export default AxiosInterceptor;
