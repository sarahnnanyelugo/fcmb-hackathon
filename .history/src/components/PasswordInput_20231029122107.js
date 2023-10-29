import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";
import Bank from "../assets/images/loader.png";
import InputCode from "./VerificationCodeInput/VerifyCode";
import VerificationInput from "react-verification-input";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

function PasswordInput({ callBack }) {
  const [show, setShow] = useState(false);
  const [verPin, setVerPin] = useState("null");
  const [pinCount, setPinCount] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(v) {
    if (v.length === 4) {
      setPinCount(true);
    }
    callBack(v);
    setTimeout(() => {
      checker();
    }, 200);
    return;
  }
  function checker() {
    setVerPin(localStorage.getItem("pin_ver", "null"));
    if (verPin == "null")
      setTimeout(() => {
        checker();
      }, 2000);
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
              {pinCount === true && verPin == "null" ? (
                <img src={Bank} alt="icon" width="20%" className="rotate" />
              ) : (
                ""
              )}{" "}
              {pinCount === true && verPin === "false" ? (
                <>
                  <br />
                  <Link to={"/"} className="forgot-pin">
                    Forgot Pin
                  </Link>
                  <p className="error-msg">
                    Incorrect pin. <span>2</span> more attempts before being
                    locked out for 1 hour
                  </p>
                </>
              ) : (
                ""
              )}
            </center>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PasswordInput;
