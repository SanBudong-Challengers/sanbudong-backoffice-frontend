import React from 'react';

import Profile from '../assets/images/profile.jpg';

function MainPage() {
	return (
		<div className="mainPage">
			<div className="mainPage__profile">
				<img src={Profile} alt="" />
				<div className="profile_text">
					<span>
						안녕하세요! <br />
						해모로 동그라미 부동산입니다.
					</span>
				</div>
			</div>

			<div className="mainPage__contact">
				<span>CONTACT</span> <span>대표 김은숙 010.2513.2655</span>
			</div>
		</div>
	);
}

export default MainPage;
