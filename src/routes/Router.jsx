import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 임시 메인 페이지
import MainPage from '../pages/MainPage';
import HouseSearchPage from '../pages/HouseSearchPage';
import Layout from '../components/layout/Layout';

function Router() {
	return (
		<Routes>
			<Route exact path="/" element={<Navigate to="/main" />} />
			<Route path="/*" exact element={<Layout />}>
				<Route path="main" element={<MainPage />} />
				<Route path="search" element={<HouseSearchPage />} />
			</Route>
		</Routes>
	);
}

export default Router;
