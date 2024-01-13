import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../services/apis/login';

function LoginPage() {
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const { state } = useLocation();

	async function authLogin() {
		const resp = await login({ password });
		if (parseInt(resp.status / 200, 10) === 1) {
			// console.log(resp);
			// console.log(state);
			// if (state) {
			navigate(state);
		} else {
			navigate('/search');
		}
	}
	// }
	return (
		<div className="loginPageWrapper">
			<div className="label">패스워드를 입력해주세요.</div>
			<input type="text" value={password} onChange={e => setPassword(e.target.value)} />
			<button onClick={() => authLogin()}>로그인</button>
		</div>
	);
}

export default LoginPage;
