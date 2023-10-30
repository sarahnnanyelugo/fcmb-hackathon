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
    console.log(localStorage.setItem("request_from", JSON.stringify(data)));
    handleClose();
  };
  const [state2, setState2] = useState({
    query: "",

    list2: accList,
  });
  return (
    <>
      <div onClick={handleShow} className="beneficiary-modal">
        {!dt ? <p style={{ cursor: "pointer" }}>+ Select beneficiary</p> : ""}
        {dt ? (
          <>
            <small
              className=""
              style={{
                float: "right",
                fontSize: "8px",
                cursor: "pointer",
              }}
            >
              Change Peer
            </small>
            <div className="flexy" style={{ marginTop: "20px" }}>
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
                <h6 style={{ marginBottom: 0 }}>{dt.bankName}</h6>
                <p style={{ color: "#000" }}>{dt.accName}</p>
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
                <AccList
                  data={data}
                  onClick={handleData}
                  key={data.beneficiary_id}
                />
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
