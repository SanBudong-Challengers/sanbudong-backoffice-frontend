/* eslint-disable react/prop-types */
import React from 'react';

function HouseNameListTable({ data, editAptName, deleteAptName }) {
	const tableHeader = ['단지명', '수정', '삭제'];

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
						<td>{element.aptName}</td>
						<td>
							<button
								className="editBtn"
								onClick={() => editAptName(element.idApt, element.aptName)}
							>
								수정
							</button>
						</td>
						<td>
							<button
								className="deleteBtn"
								onClick={() => deleteAptName(element.idApt, element.aptName)}
							>
								삭제
							</button>
						</td>
					</tr>
				);
			})}
		</table>
	);
}

export default HouseNameListTable;
