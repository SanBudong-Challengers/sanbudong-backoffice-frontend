import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 임시 메인 페이지
import MainPage from '../pages/MainPage';
import HouseSearchPage from '../pages/HouseSearchPage';
import Layout from '../components/layout/Layout';
import HouseAddPage from '../pages/HouseAddPage';
// import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/LoginPage';
import HouseListEditPage from '../pages/HouseListEditPage';

function Router() {
	return (
		<Routes>
			<Route exact path="/" element={<Navigate to="/main" />} />
			<Route path="/*" exact element={<Layout />}>
				<Route path="main" element={<MainPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="search" element={<HouseSearchPage />} />
				<Route path="house-add" element={<HouseAddPage />} />
				<Route path="house-list" element={<HouseListEditPage />} />
			</Route>
			{/* <Route path="/*" exact element={<PrivateRoute component={<Layout />} />}>
				<Route path="search" element={<HouseSearchPage />} />
			</Route> */}
		</Routes>
	);
}

export default Router;
