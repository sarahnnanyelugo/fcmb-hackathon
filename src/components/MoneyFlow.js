import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";

import { AccList } from "./AccList";
import { accList } from "../TestData.js/AccList";
import Beneficiaries from "./Beneficiaries";

function MoneyFlow(props) {
  const [show, setShow] = useState(false);
  const [dt, setDt] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleData = (data) => {
    setDt(data);
    console.log(localStorage.setItem("request_from", JSON.stringify(data)));
    handleClose();
  };
  const [state2, setState2] = useState({
    query: "",

    list2: accList,
  });

  return (
    <>
      <div onClick={handleShow} className="">
        {" "}
        <img src={props.icon} alt="icon" width="40%" />
        <h6>{props.heading}</h6>
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
            <h6>{props.heading}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12 modal-inside">
            <form>
              <input type="number" placeholder="input amount" />
              <Beneficiaries />
              <br />
              <textarea
                placeholder="Transaction remark"
                className="form-control"
              />
              <button className="confirm-btn">Submit</button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MoneyFlow;
