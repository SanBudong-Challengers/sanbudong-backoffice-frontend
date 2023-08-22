import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 임시 메인 페이지
import MainPage from '../pages/MainPage';

function Router() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
		</Routes>
	);
}

export default Router;
