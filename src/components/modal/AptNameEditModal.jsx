/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AptNameEditModal({ show, setShow, aptId, aptName, saveNewAptName }) {
	const [newName, setNewName] = useState('');
	const handleClose = () => setShow(false);

	useEffect(() => {
		setNewName(aptName);
	}, [aptName]);

	useEffect(() => {
		console.log(newName);
	}, [newName]);

	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
			<Modal.Header closeButton>
				<Modal.Title>단지명 수정하기</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<input type="text" defaultValue={aptName} onChange={e => setNewName(e.target.value)} />
			</Modal.Body>
			<Modal.Footer>
				<button className="backBtn" onClick={handleClose}>
					취소
				</button>
				<button
					className="saveBtn"
					onClick={() =>
						newName.replace(/ /g, '').length > 0 ? saveNewAptName(aptId, newName) : null
					}
				>
					저장
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default AptNameEditModal;
