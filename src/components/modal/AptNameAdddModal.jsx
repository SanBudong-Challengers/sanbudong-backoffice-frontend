/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AptNameAddModal({ show, setShow, addNewAptName }) {
	const [newName, setNewName] = useState('');
	const handleClose = () => setShow(false);

	useEffect(() => {
		console.log(newName);
	}, [newName]);

	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
			<Modal.Header closeButton>
				<Modal.Title>새 단지 추가하기</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<input type="text" defaultValue={newName} onChange={e => setNewName(e.target.value)} />
			</Modal.Body>
			<Modal.Footer>
				<button className="backBtn" onClick={handleClose}>
					취소
				</button>
				<button
					className="saveBtn"
					onClick={() => {
						newName.replace(/ /g, '').length > 0 ? addNewAptName(newName) : null;
					}}
				>
					추가
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default AptNameAddModal;
