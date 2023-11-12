import React from 'react';

function HouseSearchPage() {
	return (
		<div className="subPageWrapper">
			<div className="pageTitle">
				<span>매물 찾기</span>
				<button className="optionButton">단지명 추가</button>
			</div>
			<div className="option">
				<div className="optionItem">
					<div className="label">단지명</div>
					<div className="value">
						<select>
							<option disabled selected>
								--단지명을 선택하세요--
							</option>
							<option value="1">아파트1</option>
							<option value="2">아파트2</option>
							<option value="3">아파트3</option>
						</select>
						<button>초기화</button>
					</div>
				</div>
				<div className="optionItem">
					<div className="label">가격</div>
					<div className="value">
						<input type="text" />
						<span>만원 ~ </span>
						<input type="text" />
						<span>만원</span>
						<button>적용</button>
					</div>
				</div>
				<div className="optionItem">
					<div className="label">평수</div>
					<div className="value">
						<input type="text" />
						<span>
							m<sup>2</sup> ~{' '}
						</span>
						<input type="text" />
						<span>
							m<sup>2</sup>
						</span>
						<button>적용</button>
					</div>
				</div>
				<div className="optionItem">
					<div className="label">거래유형</div>
					<div className="value">
						<select>
							<option disabled selected>
								--거래유형을 선택하세요--
							</option>
							<option value="1">매매</option>
							<option value="2">전세</option>
							<option value="3">월세</option>
						</select>
						<button>초기화</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HouseSearchPage;
