import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";
import Bank from "../assets/images/bank.png";
import { AccList } from "./AccList";
import { accList } from "../TestData.js/AccList";

function Beneficiaries({ callBack }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleData = (data) => {
    callBack(data);
    handleClose();
  };
  const [state2, setState2] = useState({
    query: "",

    list2: accList,
  });
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
          <div className="col-md-12 modal-inside">
            <form>
              <input type="search" placeholder="search" />
            </form>

            <div className="row ">
              {state2.list2.map((data, index) => (
                <AccList data={data} onClick={handleData} />
              ))}

              <center>
                <a href="#">View more</a>
              </center>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Beneficiaries;
