import Top from "../assets/images/top.png";
import Back from "../assets/images/left.png";

import "./style.scss";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import curr from "../components/Utilities";

function LoanDetails() {
  const [balance, setBalance] = useState(
    localStorage.getItem("lender_balance", "200000") || 200000.45
  );
  const [requestAmount, setRequestAmount] = useState(
    parseFloat(localStorage.getItem("amount", "0"))
  );
  const [requestor, setRequestor] = useState(
    JSON.parse(localStorage.getItem("requestorData", {})) || null
  );
  const [loanData, setLoanData] = useState(
    JSON.parse(localStorage.getItem("request_from", {})) || null
  );
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
                        style={{ float: "left", color: "#000" }}>
                        {" "}
                        <img src={Back} alt="icon" width="20%" /> Loan Details
                      </Link>
                      <div className="col-md-12 lender-amount">
                        {" "}
                        <h6>
                          From <span>{loanData.accName}</span>
                        </h6>
                        <h4>{curr(loanData.amount)}</h4>
                      </div>
                      <h6
                        style={{
                          fontSize: "11px",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}>
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
                            <h6>{loanData.accName}</h6>
                            <small>0123456789</small>
                          </div>
                          <p>{loanData.numberOfDays} days</p>
                          <p>{loanData.paybackDate}</p>
                        </div>
                      </div>
                      <div className="flexy">
                        <p className="col-md-4" style={{ textAlign: "left" }}>
                          Note:
                        </p>
                        <p>
                          <strong> {loanData.loan_note}</strong>
                        </p>
                      </div>
                      {requestAmount < balance ? (
                        <>
                          <div className="flexy action-btns">
                            <button className="col-md-5 btn-decline">
                              Decline
                            </button>
                            <Link
                              to={"/loan-approval"}
                              className="col-md-5 offset-md-2 ">
                              <button className="col-md-12 btn-approve">
                                Approve
                              </button>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="alert alert-info">
                            You do not have sufficient balance to approve this
                            loan
                          </p>
                        </>
                      )}
                      <p style={{ color: "grey" }}>
                        Note: If approved, a sum of
                        <strong> {curr(loanData.amount)}</strong> will be
                        deducted from your account automatically.
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
