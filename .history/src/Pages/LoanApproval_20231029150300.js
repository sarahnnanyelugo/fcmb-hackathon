import React from "react";
import Top from "../assets/images/top.png";
import Tick from "../assets/images/tick.png";

import "./style.scss";
import { Link } from "react-router-dom";
export const LoanApproval = () => {
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
                        <h6 style={{ marginTop: "30px" }}>Reqest Sent</h6>
                      </center>
                      <div className="col-md-12 success-div">
                        <center>
                          <div className="col-md-4">
                            {" "}
                            <img src={Tick} alt="icon" width="100%" />
                          </div>
                        </center>
                        <h5>₦10,000</h5>
                        <p>Request successfully sent!</p>
                      </div>
                      <p style={{ marginTop: "30px", fontWeight: "bold" }}>
                        Your loan request of<span> ₦10,000</span> has been sent
                        to{" "}
                        <span style={{ fontSize: "14px" }}>Abraham Lawal</span>{" "}
                        and awaiting a response.
                      </p>
                      <p>Upon approval, payback date is:</p>
                      <h5 style={{ marginBottom: "50px", fontWeight: "bold" }}>
                        27/04/2023
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
