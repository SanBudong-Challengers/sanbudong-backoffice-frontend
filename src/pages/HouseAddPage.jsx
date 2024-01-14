/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';

// routes
import { useNavigate } from 'react-router-dom';

// apis
import { getAptList } from '../services/apis/aptDropdown';
import { addBuilding } from '../services/apis/building';

function HouseAddPage() {
	const navigate = useNavigate();
	const [aptList, setAptList] = useState([]);
	const aptTransactionTypeList = ['매매', '전세', '월세'];
	const mobileCarrierList = ['KT', 'SKT', 'LG U+'];

	const [aptName, setAptName] = useState('');
	const [aptTransactionType, setAptTransactionType] = useState('');
	const [aptDong, setAptDong] = useState('');
	const [aptHo, setAptHo] = useState('');
	const [aptType, setAptType] = useState('');
	const [aptDirection, setAptDirection] = useState('');
	const [aptSize, setAptSize] = useState('');
	const [aptPrice, setAptPrice] = useState('');
	const [aptOption, setAptOption] = useState('');
	const [aptNote, setAptNote] = useState('');

	const [ownerName, setOwnerName] = useState('');
	const [ownerMobileCarrier, setOwnerMobileCarrier] = useState('');
	const [ownerPhone, setOwnerPhone] = useState('');

	const [sizeType, setSizeType] = useState('0');

	async function GetAptList() {
		const resp = await getAptList();
		if (parseInt(resp.status / 200, 10) === 1) {
			setAptList(resp.data);
		}
	}

	async function addNewApt() {
		const params = {
			aptDirection,
			aptDong,
			aptHo,
			aptName,
			aptNote,
			aptOption,
			aptPrice,
			aptSize: sizeType === 1 ? aptSize * 3.305785 : aptSize,
			aptTransactionType,
			aptType,
			ownerMobileCarrier,
			ownerName,
			ownerPhone,
		};
		const resp = await addBuilding(params);
		if (parseInt(resp.status / 200, 10) === 1) {
			navigate('/search');
		}
	}

	// 필수값 확인
	function checkRequired() {
		const required = [];

		if (aptTransactionType === '') {
			required.push('거래유형');
		}
		if (aptName === '') {
			required.push('단지명');
		}
		if (aptDong === '') {
			required.push('동');
		}
		if (aptHo === '') {
			required.push('호');
		}
		if (aptSize === '') {
			required.push('평수');
		}
		if (aptPrice === '') {
			required.push('가격');
		}
		if (ownerName === '') {
			required.push('소유자명');
		}
		if (ownerMobileCarrier === '') {
			required.push('통신사');
		}
		if (ownerPhone === '') {
			required.push('전화번호');
		}

		if (required.length > 0) {
			alert(`미입력된 값이 존재합니다.\n미입력 항목: ${required.join()}`);
			return false;
		}
		return true;
	}

	function checkForm() {
		const requiredFilled = checkRequired();
		if (requiredFilled) {
			addNewApt();
		}
	}

	useEffect(() => {
		GetAptList();
	}, []);

	return (
		<div className="subPageWrapper">
			<div className="pageTitle">
				<span>매물 등록하기</span>
			</div>
			<div className="pageSubTitle">
				<span>매물 정보</span>
			</div>
			<div className="form">
				<div className="form-row">
					<div className="form-item">
						<span>거래유형 *</span>
						<select
							value={aptTransactionType}
							onChange={e => {
								setAptTransactionType(e.target.value);
							}}
						>
							<option disabled value="">
								--거래유형을 선택하세요--
							</option>
							{aptTransactionTypeList.map(item => {
								return <option value={item}>{item}</option>;
							})}
						</select>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<span>단지명 *</span>
						<select
							onChange={e => {
								setAptName(e.target.value);
							}}
							value={aptName}
						>
							<option selected disabled value="">
								--단지명을 선택하세요--
							</option>
							{aptList.map(item => {
								return <option value={item.aptName}>{item.aptName}</option>;
							})}
						</select>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<span>동 *</span>
						<input
							type="text"
							value={aptDong}
							onChange={e => {
								setAptDong(e.target.value);
							}}
						/>
					</div>
					<div className="form-item">
						<span>호 *</span>
						<input
							type="text"
							value={aptHo}
							onChange={e => {
								setAptHo(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<span>타입</span>
						<input
							type="text"
							value={aptType}
							onChange={e => {
								setAptType(e.target.value);
							}}
						/>
					</div>
					<div className="form-item">
						<span>방향</span>
						<input
							type="text"
							value={aptDirection}
							onChange={e => {
								setAptDirection(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<span>면적 *</span>
						<div className="form-content">
							<input
								type="text"
								value={aptSize}
								onChange={e => {
									setAptSize(e.target.value);
								}}
							/>
							<input
								type="radio"
								name="sizeType"
								value="0"
								checked={sizeType === '0'}
								id="sizeType-0"
								onChange={e => {
									console.log(e.target.value);
									setSizeType(e.target.value);
								}}
							/>
							<label htmlFor="sizeType-0">
								m<sup>2</sup>
							</label>
							<input
								type="radio"
								name="sizeType"
								value="1"
								checked={sizeType === '1'}
								id="sizeType-1"
								onChange={e => {
									console.log(e.target.value);
									setSizeType(e.target.value);
								}}
							/>
							<label htmlFor="sizeType-1">평</label>
						</div>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<span>가격 *</span>
						<input
							type="text"
							value={aptPrice}
							onChange={e => {
								setAptPrice(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<span>옵션</span>
						<input
							type="text"
							value={aptOption}
							onChange={e => {
								setAptOption(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<span>메모</span>
						<textarea
							rows="10"
							value={aptNote}
							onChange={e => {
								setAptNote(e.target.value);
							}}
						/>
					</div>
				</div>
			</div>
			<div className="pageSubTitle">
				<span>소유자 정보</span>
			</div>
			<div className="form">
				<div className="form-row">
					<div className="form-item">
						<span>소유자명 *</span>
						<input
							type="text"
							value={ownerName}
							onChange={e => {
								setOwnerName(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="form-row">
					<div className="form-item">
						<span>통신사 *</span>
						<select
							onChange={e => {
								setOwnerMobileCarrier(e.target.value);
							}}
							value={ownerMobileCarrier}
						>
							<option selected disabled value="">
								--통신사를 선택하세요--
							</option>
							{mobileCarrierList.map(item => {
								return <option value={item}>{item}</option>;
							})}
						</select>
					</div>
					<div className="form-item">
						<span>전화번호 *</span>
						<input
							type="text"
							value={ownerPhone}
							onChange={e => {
								setOwnerPhone(e.target.value);
							}}
						/>{' '}
					</div>
				</div>
			</div>
			<button className="submit-btn" onClick={() => checkForm()}>
				등록하기
			</button>
		</div>
	);
}

export default HouseAddPage;
