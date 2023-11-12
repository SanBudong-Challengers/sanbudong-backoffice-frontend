import React, { useEffect, useState } from 'react';
import { getAptList } from '../services/apis/aptDropdown';

function HouseSearchPage() {
	const [aptList, setAptList] = useState([]);

	async function GetAptList() {
		const resp = await getAptList();
		if (parseInt(resp.status / 200, 10) === 1) {
			setAptList(resp.data);
		}
	}

	useEffect(() => {
		GetAptList();
	}, []);
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
							{aptList.map(item => {
								return <option value={item}>{item}</option>;
							})}
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
