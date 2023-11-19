/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function HouseListTable({ data }) {
	const tableHeader = [
		'거래유형',
		'단지명',
		'동',
		'호',
		'평수',
		'타입',
		'방향',
		'가격',
		'소유자명',
		'소유자 전화번호',
		'소유자 통신사',
	];

	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<table className="tableWrapper">
			<tr className="tableHeaderWrapper">
				{tableHeader.map(item => {
					return <th>{item}</th>;
				})}
			</tr>
			{data.map(element => {
				return (
					<tr className="tableBodyItemWrapper">
						<td>{element.aptTransactionType}</td>
						<td>{element.aptName}</td>
						<td>{element.aptDong}동</td>
						<td>{element.aptHo}호</td>
						<td>{element.aptSize}</td>
						<td>{element.aptType}</td>
						<td>{element.aptDirection}</td>
						<td>{Number(element.aptPrice).toLocaleString('ko-KR')}만원</td>
						<td>{element.ownerName}</td>
						<td>{element.ownerPhone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}</td>
						<td>{element.ownerMobileCarrier}</td>
					</tr>
				);
			})}
		</table>
	);
}

export default HouseListTable;
