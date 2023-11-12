import React from 'react';

// routes
import { Outlet } from 'react-router-dom';
import LayoutNavbar from './LayoutNavbar';

function Layout() {
	return (
		<div className="layout">
			<div className="layout__navbar">
				<LayoutNavbar />
			</div>
			<div className="layout__content">
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
