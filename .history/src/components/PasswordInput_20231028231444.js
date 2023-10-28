import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";
import Bank from "../assets/images/bank.png";
import InputCode from "./VerificationCodeInput/VerifyCode";

function PasswordInput() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="confirm-btn">
        Confirm loan
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12 modal-inside">
            <center>
              <h6>Confirm Loan</h6>
              <p>Input your pin to confirm loan application</p>
            </center>
            <InputCode
              length={4}
              loading={loading}
              onComplete={(code) => {
                setLoading(true);
                setTimeout(() => setLoading(false), 10000);
              }}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PasswordInput;