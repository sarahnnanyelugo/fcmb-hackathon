import React, { useEffect, useState } from "react";
import Top from "../assets/images/top.png";
import Tick from "../assets/images/tick.png";
import curr, { dt } from "../components/Utilities";
import { loanRecords } from "../TestData.js";

import "./style.scss";
import { Link } from "react-router-dom";
import { Records } from "../components/Records";
export const SuccessPage = () => {
  const [recs, setRecs] = useState(loanRecords);
  const amount = parseFloat(localStorage.getItem("amount")) || 0; // Parse the value from localStorage
  const loanData = JSON.parse(localStorage.getItem("request_from")) || {};
  let paybackDate = new Date(new Date());
  const loanPayDate = localStorage.getItem("duration");
  // Extract the number of days from the loanPayDate string
  const numberOfDays = parseInt(loanPayDate);
  const formattedDate = dt({ numberOfDays });
  useEffect(() => {
    const records = JSON.parse(localStorage.getItem("records", [])) || [];
    if (records && records.length > 0) {
      setRecs(records);
    } else {
      console.log(localStorage.setItem("records", JSON.stringify(loanRecords)));
    }
  }, []);
  useEffect(() => {
    loanData.numberOfDays = numberOfDays;
    loanData.amount = amount;
    loanData.paybackDate = formattedDate;
    loanData.Bank = loanData.bank;
    loanData.status = "Pending";
    loanData.loan_note = localStorage.getItem("loan_note", null);

    // Initialize a variable to keep track of the highest ID
    let highestId = 0;
    let highestTransactionId = 0;

    // Iterate through the records array to find the highest ID
    const records2 = JSON.parse(localStorage.getItem("records", [])) || [];
    console.log(records2);
    records2.forEach((record) => {
      if (record.id > highestId) {
        highestId = record.id;
      }
    });
    loanData.id = highestId + 1;
    loanData.date = dt(0, true);
    loanData.color = "orange";
    loanData.category = ["received"];
    records2.push(loanData);
    console.log(localStorage.setItem("request_from", JSON.stringify(loanData)));
    console.log(localStorage.setItem("records", JSON.stringify(records2)));
    // console.log(recs);
  }, []);

  // Format the amount as currency using the user's locale
  const formattedAmount = curr(amount);
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
                      <img src={Top} alt="icon" width="100%" />{" "}
                      <center>
                        <h6 style={{ marginTop: "30px" }}>Request Sent</h6>
                      </center>
                      <div className="col-md-12 success-div">
                        <center>
                          <div className="col-md-4">
                            {" "}
                            <img src={Tick} alt="icon" width="100%" />
                          </div>
                        </center>
                        <h5>{formattedAmount}</h5>
                        <p>Request successfully sent!</p>
                      </div>
                      <p style={{ marginTop: "30px", fontWeight: "bold" }}>
                        Your loan request of<span> {formattedAmount}</span> has
                        been sent to{" "}
                        <span style={{ fontSize: "14px" }}>
                          {loanData?.accName}
                        </span>{" "}
                        and awaiting a response.
                      </p>
                      <p>Upon approval, payback date is:</p>
                      <h5 style={{ marginBottom: "50px", fontWeight: "bold" }}>
                        {formattedDate ? formattedDate : "Today"}
                      </h5>
                      <Link to={"/"}>
                        {" "}
                        <button className="confirm-btn">Back to home</button>
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
          </div>
        </center>
      </div>
    </>
  );
};
