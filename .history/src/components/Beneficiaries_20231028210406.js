import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";
function Beneficiaries() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="beneficiary-modal">
        <p>+ Select peer from beneficiary list</p>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Select Peer</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <input type="search" />
            </form>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Beneficiaries;
