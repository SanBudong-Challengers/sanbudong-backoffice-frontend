/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-bootstrap/Modal';

function AptNameDeleteModal({ show, setShow, aptId, aptName, deleteNewAptName }) {
	const handleClose = () => setShow(false);

	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
			<Modal.Header closeButton>
				<Modal.Title>단지명 삭제하기</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<span>'{aptName}' 을(를) 단지 리스트에서 삭제하시겠습니까?</span>
			</Modal.Body>
			<Modal.Footer>
				<button className="backBtn" onClick={handleClose}>
					취소
				</button>
				<button className="deleteBtn" onClick={() => deleteNewAptName(aptId)}>
					삭제
				</button>
			</Modal.Footer>
		</Modal>
	);
}

export default AptNameDeleteModal;
