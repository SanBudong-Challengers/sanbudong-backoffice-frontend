/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Cookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component }) {
	const cookies = new Cookies();

	const token = cookies.get('myCookie');
	console.log(token);
	return token ? Component : <Navigate to="/login" {...alert('로그인이 필요합니다.')} />;
}

export default PrivateRoute;
