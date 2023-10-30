import React, { useEffect, useState } from "react";
import Top from "../assets/images/top.png";
import Tick from "../assets/images/tick.png";
import LoadingImg from "../assets/images/ld.gif";
import curr, { dt } from "../components/Utilities";
import { recentTransactions } from "../TestData.js";
import Out from "../assets/images/arrow.png";
import In from "../assets/images/add.png";
import "./style.scss";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
export const LoanApproval = () => {
  const [balance, setBalance] = useState(
    localStorage.getItem("lender_balance", "200000") || 200000.45
  );
  const [requestorBalance, setRequestorBalance] = useState(
    localStorage.getItem("requestor_balance", "0") || 0
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
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("records", [])) || []
  );
  const [loading, setLoading] = useState(true);

  const [recs, setRecs] = useState(recentTransactions);
  useEffect(() => {
    const records =
      JSON.parse(localStorage.getItem("recent_transactions", [])) || [];
    if (records && records.length > 0) {
      setRecs(records);
    } else {
      console.log(
        localStorage.setItem(
          "recent_transactions",
          JSON.stringify(recentTransactions)
        )
      );
    }
  }, []);

  useEffect(() => {
    const lenderBalance = parseFloat(balance) - parseFloat(requestAmount);
    const requestorsBalance =
      parseFloat(requestorBalance) + parseFloat(requestAmount);
    let highestTransactionId = 0;

    // Iterate through the records array to find the highest ID
    const records2 =
      JSON.parse(localStorage.getItem("recent_transactions", [])) || [];
    console.log(records2);
    records2.forEach((record) => {
      if (record.id > highestTransactionId) {
        highestTransactionId = record.id;
      }
    });
    const senderTransactionId = highestTransactionId + 1;
    const receiverTransactionId = highestTransactionId + 2;
    const transactionDate = dt(0, true);
    const senderTransaction = {
      purchase: "Peer 2 Peer loan",
      Bank: In,
      amount: parseFloat(requestAmount),
      id: senderTransactionId,
      beneficiary_id: 1,
      date: transactionDate,
    };
    const receiverTransaction = {
      purchase: "Peer 2 Peer loan",
      Bank: Out,
      amount: 0 - parseFloat(requestAmount),
      id: receiverTransactionId,
      beneficiary_id: 2,
      date: transactionDate,
    };
    records2.push(receiverTransaction);
    records2.push(senderTransaction);
    console.log(
      localStorage.setItem("recent_transactions", JSON.stringify(records2))
    );
    console.log(localStorage.setItem("lender_balance", lenderBalance));
    console.log(localStorage.setItem("requestor_balance", requestorsBalance));
    loanData.status = "Approved";
    loanData.color = "green";
    // Find the record with ID 1
    const recordToUpdate = records.find((record) => record.id === loanData.id);

    if (recordToUpdate) {
      // Create a new updated record with the status changed
      const updatedRecord = {
        ...recordToUpdate,
        status: "Approved",
        color: "green",
      };

      // Create a new array with the updated record
      const updatedRecords = records.map((record) => {
        return record.id === updatedRecord.id ? updatedRecord : record;
      });

      // Update the state with the new records array
      setRecords(updatedRecords);
      console.log(
        localStorage.setItem("records", JSON.stringify(updatedRecords))
      );
    } else {
      console.log("Record with ID not found");
    }

    console.log(localStorage.setItem("request_from", JSON.stringify(loanData)));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="app-header">
        <center>
          <div className="col-md-3">
            {loading ? (
              <>
                <center>
                  <div className="col-md-10 app">
                    <div className="app-inner">
                      <div className="app-inner2">
                        <div className="app-face">
                          {" "}
                          <img src={Top} alt="icon" width="100%" />{" "}
                          <center>
                            <h6 style={{ marginTop: "30px" }}>Processing...</h6>
                          </center>
                          <div className="col-md-12 success-div">
                            <center>
                              <div className="col-md-4">
                                {" "}
                                <img src={LoadingImg} alt="icon" width="100%" />
                              </div>
                            </center>
                            <h5>{curr(loanData.amount)}</h5>
                            <p>Please Wait</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </>
            ) : (
              <>
                <center>
                  <div className="col-md-10 app">
                    <div className="app-inner">
                      <div className="app-inner2">
                        <div className="app-face">
                          {" "}
                          <img src={Top} alt="icon" width="100%" />{" "}
                          <center>
                            <h6 style={{ marginTop: "30px" }}>Loan Approved</h6>
                          </center>
                          <div className="col-md-12 success-div">
                            <center>
                              <div className="col-md-4">
                                {" "}
                                <img src={Tick} alt="icon" width="100%" />
                              </div>
                            </center>
                            <h5>{curr(loanData.amount)}</h5>
                            <p>
                              You have approved {loanData.accName}'s loan
                              request
                            </p>
                          </div>
                          <p style={{ marginTop: "30px", fontWeight: "bold" }}>
                            <span>{curr(loanData.amount)}</span> has been
                            deducted from your account and sent to
                            <span style={{ fontSize: "14px" }}>
                              {" "}
                              {loanData.accName}
                            </span>{" "}
                          </p>
                          <p> {loanData.accName}'s payback date is:</p>
                          <h5
                            style={{
                              marginBottom: "50px",
                              fontWeight: "bold",
                            }}>
                            {loanData.paybackDate}
                          </h5>
                          <Link to={"/lender"}>
                            {" "}
                            <button className="confirm-btn">
                              Back to home
                            </button>
                          </Link>
                          <br />
                          <br />
                          <br />
                          <div className="dash col-md-5">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </>
            )}
          </div>
        </center>
      </div>
    </>
  );
};
