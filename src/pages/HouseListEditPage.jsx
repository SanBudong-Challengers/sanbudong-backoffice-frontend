/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import HouseNameListTable from '../components/table/HouseNameListTable';
import AptNameEditModal from '../components/modal/AptNameEditModal';
import AptNameDeleteModal from '../components/modal/AptNameDeleteModal';
import AptNameAddModal from '../components/modal/AptNameAdddModal';
// import { getAptList } from '../services/apis/aptDropdown';

function HouseListEditPage() {
	const [aptNameData, setAptNameData] = useState([]);

	const [showEditNameModal, setShowEditNameModal] = useState(false);
	const [showDeleteNameModal, setShowDeleteNameModal] = useState(false);
	const [showAddNameModal, setShowAddNameModal] = useState(false);

	const [modifyAptId, setModifyAptId] = useState(0);
	const [modifyAptName, setModifyAptName] = useState('');

	const [deleteAptId, setDeleteAptId] = useState(0);
	const [deleteAptName, setDeleteAptName] = useState('');

	// async function GetAptList() {
	// 	const resp = await getAptList({ page: 0 });
	// 	if (parseInt(resp.status / 200, 10) === 1) {
	// 		setAptNameData(resp.data);
	// 	}
	// }

	function openEditAptNameModal(id, name) {
		setModifyAptId(id);
		setModifyAptName(name);
		setShowEditNameModal(true);
		console.log('edit', id, name);
	}

	function saveNewAptName(id, name) {
		console.log(id, name);
	}

	function openDeleteAptNameModal(id, name) {
		setDeleteAptId(id);
		setDeleteAptName(name);
		setShowDeleteNameModal(true);
		console.log('delete', id);
	}

	function deleteNewAptName(id) {
		console.log(id);
	}

	function openAddAptNameModal() {
		setShowAddNameModal(true);
	}

	function addNewAptName(name) {
		console.log(name);
	}

	useEffect(() => {
		console.log(modifyAptName);
	}, [modifyAptName]);

	useEffect(() => {
		// GetAptList();
		setAptNameData([
			{
				idApt: 1,
				aptName: '단지1',
			},
			{
				idApt: 2,
				aptName: '단지2',
			},
			{
				idApt: 3,
				aptName: '단지3',
			},
		]);
	}, []);

	return (
		<div className="subPageWrapper">
			<div className="pageTitle">
				<span>단지 리스트 관리</span>
				<button
					className="optionButton"
					onClick={() => {
						openAddAptNameModal();
					}}
				>
					새 단지 추가하기
				</button>
			</div>
			<HouseNameListTable
				data={aptNameData}
				editAptName={openEditAptNameModal}
				deleteAptName={openDeleteAptNameModal}
			/>
			<AptNameEditModal
				show={showEditNameModal}
				setShow={setShowEditNameModal}
				aptId={modifyAptId}
				aptName={modifyAptName}
				saveNewAptName={saveNewAptName}
			/>
			<AptNameDeleteModal
				show={showDeleteNameModal}
				setShow={setShowDeleteNameModal}
				aptId={deleteAptId}
				aptName={deleteAptName}
				deleteNewAptName={deleteNewAptName}
			/>
			<AptNameAddModal
				show={showAddNameModal}
				setShow={setShowAddNameModal}
				addNewAptName={addNewAptName}
			/>
		</div>
	);
}

export default HouseListEditPage;
