import Top from "../assets/images/top.png";
import Back from "../assets/images/left.png";

import "./style.scss";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function LoanDetails() {
  return (
    <>
      <div className="app-header">
        <center>
          <div className="col-md-3">
            <center>
              <div className="col-md-10 app">
                <div className="app-inner">
                  <div className="app-inner2">
                    <div className="app-face">
                      {" "}
                      <img src={Top} alt="icon" width="100%" /> <br />
                      <br />
                      <Link
                        to={"/lender"}
                        style={{ float: "left", color: "#000" }}
                      >
                        {" "}
                        <img src={Back} alt="icon" width="20%" /> Loan Details
                      </Link>
                      <div className="col-md-12 lender-amount">
                        {" "}
                        <h6>
                          From <span>Afolabi Lawal</span>
                        </h6>
                        <h4>₦10,000</h4>
                      </div>
                      <h6
                        style={{
                          fontSize: "11px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        Loan Details
                      </h6>
                      <div className="loan-details flexy">
                        <div className="col-md-8">
                          <p>Request from</p>
                          <p>Loan Duration</p>
                          <p>Payback date</p>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <h6>Afolabi Lawal</h6>
                            <small>0123456789</small>
                          </div>
                          <p>2 days</p>
                          <p>27/10/2023</p>
                        </div>
                      </div>
                      <div className="flexy">
                        <p className="col-md-4" style={{ textAlign: "left" }}>
                          Note:
                        </p>
                        <p>
                          <strong>
                            {" "}
                            Please I don't know if you can help me wit this
                            amount
                          </strong>
                        </p>
                      </div>
                      <div className="flexy action-btns">
                        <button className="col-md-5 btn-decline">
                          Decline
                        </button>
                        <Link to={"/aproved"} className="col-md-5 offset-md-2 ">
                          <button className="col-md-12 btn-approve">
                            Approve
                          </button>
                        </Link>
                      </div>
                      <p style={{ color: "grey" }}>
                        Note: If approved, a sum of<strong> ₦10,000</strong>{" "}
                        will be deducted from your account automatically.
                      </p>
                      <center>
                        <Link to="/learn">Learn more about P2P Lending</Link>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </center>
      </div>
    </>
  );
}

export default LoanDetails;
