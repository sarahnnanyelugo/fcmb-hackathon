import React from "react";
import Top from "../assets/images/top.png";
import Tick from "../assets/images/tick.png";

import "./style.scss";
import { Link } from "react-router-dom";
export const SuccessPage = () => {
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
                        <h6>₦10,000</h6>
                        <p style={{ marginBottom: "30px" }}>
                          Request successfully sent!
                        </p>
                      </div>
                      <p>
                        Your loan request of ₦10,000 has been sent to OJ and
                        awaiting a response.
                      </p>
                      <p>Upon approval, payback date is:</p>
                      <h3 style={{ marginBottom: "50px" }}>27/04/2023</h3>
                      <Link to={"/"}>
                        {" "}
                        <button className="confirm-btn">Back to home</button>
                      </Link>
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
