/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import Logo from '../../assets/images/logo.png';

function LayoutNavbar() {
	return (
		<div className="navbar">
			<a className="navbar__brand" href="/main">
				<img src={Logo} alt="" />
			</a>
			<div className="navbar__content">
				<a href="/search" className="navbar__item">
					매물찾기
				</a>
			</div>
		</div>
	);
}

export default LayoutNavbar;
