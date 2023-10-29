import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Bank from "../assets/images/loader.png";

export const Loader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <img src={Bank} alt="icon" width="20%" className="rotate" />
      </Modal.Body>
    </Modal>
  );
};
