import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";
import Bank from "../assets/images/loader.png";
import InputCode from "./VerificationCodeInput/VerifyCode";
import VerificationInput from "react-verification-input";

function PasswordInput({ callBack }) {
  const [show, setShow] = useState(false);
  const [ver, setVer] = useState(null);
  const [pinCount, setPinCount] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(v) {
    if (v.length === 4) {
      setPinCount(true);
    }
    callBack(v);
    setTimeout(() => {
      setVer(localStorage.getItem("pin_ver", null));
    }, 2500);
    return;
  }
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
              <VerificationInput
                validChars="0-9"
                inputProps={{ inputMode: "numeric" }}
                length={4}
                autoFocus="true"
                onChange={handleChange}
                classNames={{
                  container: "container",
                  character: "character",
                  characterInactive: "character--inactive",
                  characterSelected: "character--selected",
                }}
              />
              {pinCount === true && ver != null ? (
                <img src={Bank} alt="icon" width="20%" className="rotate" />
              ) : (
                ""
              )}{" "}
              {pinCount === true && ver == false ? <p>pin error</p> : ""}
            </center>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PasswordInput;
