import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";
import Bank from "../assets/images/bank.png";

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
          <Modal.Title>
            <h6>Select Peer</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12 modal-inside">
            <form>
              <input type="search" placeholder="search" />
            </form>
            <div className="flexy">
              {" "}
              <div className="col-md-2">
                {" "}
                <img src={Bank} alt="icon" width="80%" />
              </div>
              <div>
                <h6>Team 1</h6>
                <p>Second Bank</p>
              </div>
            </div>
            <div className="flexy">
              {" "}
              <div className="col-md-2">
                {" "}
                <img src={Bank} alt="icon" width="80%" />
              </div>
              <div>
                <h6>Account name4</h6>
                <p>Bank name4</p>
              </div>
            </div>
            <div className="flexy">
              {" "}
              <div className="col-md-2">
                {" "}
                <img src={Bank} alt="icon" width="80%" />
              </div>
              <div>
                <h6>Account name3</h6>
                <p>Bank name3</p>
              </div>
            </div>
            <center>
              <a href="#">View more</a>
            </center>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PasswordInput;
