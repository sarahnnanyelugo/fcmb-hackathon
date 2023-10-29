import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./components.scss";
import Bank from "../assets/images/bank.png";
import { AccList } from "./AccList";
import { accList } from "../TestData.js/AccList";

function Beneficiaries() {
  const [show, setShow] = useState(false);
  const [dt, setDt] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleData = (data) => {
    setDt(data);
    handleClose();
  };
  const [state2, setState2] = useState({
    query: "",

    list2: accList,
  });
  return (
    <>
      <div onClick={handleShow} className="beneficiary-modal">
        {!dt ? <p>+ Select peer from beneficiary list</p> : ""}
        {dt ? (
          <>
            <small
              className=""
              style={{
                float: "right",
                fontSize: "8px",
                cursor: "pointer",
                marginBottom: "15px",
              }}
            >
              Change Peer
            </small>
            <div className="flexy">
              {" "}
              <div className="col-md-2">
                {" "}
                <img
                  src={dt.bank}
                  alt="icon"
                  width="80%"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div>
                <h6>{dt.bankName}</h6>
                <p>{dt.accName}</p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
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
