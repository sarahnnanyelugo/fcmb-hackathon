import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";
import Bank from "../assets/images/bank.png";
import InputCode from "./VerificationCodeInput/VerifyCode";
import VerificationInput from "react-verification-input";

function PasswordInput() {
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
          <div className="col-md-12 ">
            <center>
              <h6>Confirm Loan</h6>
              <p>Input your pin to confirm loan application</p>
            </center>
            <center>
              {" "}
              <VerificationInput
                length={4}
                autoFocus="true"
                classNames={{
                  container: "container",
                  character: "character",
                  characterInactive: "character--inactive",
                  characterSelected: "character--selected",
                }}
              />
            </center>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PasswordInput;
