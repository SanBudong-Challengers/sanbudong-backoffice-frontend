import React, { useEffect, useState } from 'react';
import { getAptList } from '../services/apis/aptDropdown';
import HouseListTable from '../components/table/HouseListTable';
import { searchBuilding } from '../services/apis/building';

function HouseSearchPage() {
	const [aptList, setAptList] = useState([]);
	const [searchName, setSearchName] = useState('');
	const [searchPriceMax, setSearchPriceMax] = useState('');
	const [searchPriceMin, setSearchPriceMin] = useState('');
	const [searchSizeMax, setSearchSizeMax] = useState('');
	const [searchSizeMin, setSearchSizeMin] = useState('');
	const [searchType, setSearchType] = useState('');

	const [minPriceInput, setMinPriceInput] = useState('');
	const [maxPriceInput, setMaxPriceInput] = useState('');
	const [minSizeInput, setMinSizeInput] = useState('');
	const [maxSizeInput, setMaxSizeInput] = useState('');

	const [aptData, setAptData] = useState([]);

	async function GetAptList() {
		const resp = await getAptList();
		if (parseInt(resp.status / 200, 10) === 1) {
			setAptList(resp.data);
		}
	}

	async function GetBuildingList() {
		const queryStringRequest = {
			aptName: searchName.length > 0 ? searchName : null,
			aptPriceMax: searchPriceMax.length > 0 ? Number(searchPriceMax) : null,
			aptPriceMin: searchPriceMin.length > 0 ? Number(searchPriceMin) : null,
			aptSizeMax: searchSizeMax.length > 0 ? Number(searchSizeMax) : null,
			aptSizeMin: searchSizeMin.length > 0 ? Number(searchSizeMin) : null,
			aptTransactionType: searchType.length > 0 ? searchType : null,
		};
		const resp = await searchBuilding(queryStringRequest);
		if (parseInt(resp.status / 200, 10) === 1) {
			setAptData(resp.data);
		}
	}

	function SearchByPrice() {
		setSearchPriceMax(maxPriceInput);
		setSearchPriceMin(minPriceInput);
	}

	function SearchBySize() {
		setSearchSizeMax(maxSizeInput);
		setSearchSizeMin(minSizeInput);
	}

	useEffect(() => {
		GetBuildingList();
	}, [searchName, searchPriceMax, searchPriceMin, searchSizeMax, searchSizeMin, searchType]);

	useEffect(() => {
		setSearchPriceMax('');
		setSearchSizeMin('');
		setSearchPriceMin('');
		setSearchSizeMax('');
		setSearchType('');
		GetAptList();
		GetBuildingList();
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
						<select
							onChange={e => {
								setSearchName(e.target.value);
							}}
							value={searchName}
						>
							<option selected disabled value="">
								--단지명을 선택하세요--
							</option>
							{aptList.map(item => {
								return <option value={item.aptName}>{item.aptName}</option>;
							})}
						</select>
						<button
							onClick={() => {
								setSearchName('');
							}}
						>
							초기화
						</button>
					</div>
				</div>
				<div className="optionItem">
					<div className="label">가격</div>
					<div className="value">
						<input
							type="text"
							value={minPriceInput}
							onChange={e => {
								setMinPriceInput(e.target.value);
							}}
						/>
						<span>만원 ~ </span>
						<input
							type="text"
							value={maxPriceInput}
							onChange={e => {
								setMaxPriceInput(e.target.value);
							}}
						/>
						<span>만원</span>
						<button
							onClick={() => {
								SearchByPrice();
							}}
						>
							적용
						</button>
					</div>
				</div>
				<div className="optionItem">
					<div className="label">평수</div>
					<div className="value">
						<input
							type="text"
							value={minSizeInput}
							onChange={e => {
								setMinSizeInput(e.target.value);
							}}
						/>
						<span>
							m<sup>2</sup> ~{' '}
						</span>
						<input
							type="text"
							value={maxSizeInput}
							onChange={e => {
								setMaxSizeInput(e.target.value);
							}}
						/>
						<span>
							m<sup>2</sup>
						</span>
						<button
							onClick={() => {
								SearchBySize();
							}}
						>
							적용
						</button>
					</div>
				</div>
				<div className="optionItem">
					<div className="label">거래유형</div>
					<div className="value">
						<select
							value={searchType}
							onChange={e => {
								setSearchType(e.target.value);
							}}
						>
							<option disabled value="">
								--거래유형을 선택하세요--
							</option>
							<option value="매매">매매</option>
							<option value="전세">전세</option>
							<option value="월세">월세</option>
						</select>
						<button
							onClick={() => {
								setSearchType('');
							}}
						>
							초기화
						</button>
					</div>
				</div>
			</div>
			<HouseListTable data={aptData} />
		</div>
	);
}

export default HouseSearchPage;
