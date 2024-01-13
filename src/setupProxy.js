/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/login',
		createProxyMiddleware({
			target: 'http://3.39.215.5:8080',
			changeOrigin: true,
		}),
	);
};
