import Top from "../assets/images/top.png";
import Back from "../assets/images/back.png";

import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Beneficiaries from "../components/Beneficiaries";

function LoanInterface() {
  const [toCurrency, setToCurrency] = useState("2 days");
  function setThisCurrency(curr) {
    if (curr !== toCurrency) {
      setToCurrency(curr);
    }
  }
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
                      <div className="col-md-12">
                        {" "}
                        <Link to={"/"} style={{ float: "left" }}>
                          {" "}
                          <img src={Back} alt="icon" width="60%" />
                        </Link>
                        <p style={{ float: "left" }}>
                          Request for short term loans
                        </p>
                      </div>
                      <div className="col-md-12">
                        {" "}
                        <Beneficiaries />
                      </div>
                      <div className="col-md-12 amount">
                        <h6 style={{ float: "left" }}>Loan Amount (₦)</h6>
                        <input placeholder="₦10,000" type="text" />
                      </div>
                      <div className="col-md-12 duration">
                        <h6 style={{ float: "left" }}>Loan Duration</h6>

                        <div className="col-md-12 flexy button-holder">
                          <button
                            onClick={() => setThisCurrency("2 days")}
                            id="btn1"
                            className={` ${
                              toCurrency === "2 days" ? "curr-active" : ""
                            }`}
                          >
                            2 days
                          </button>
                          <button
                            onClick={() => setThisCurrency("4 days")}
                            id="btn2"
                            className={` ${
                              toCurrency === "4 days" ? "curr-active" : ""
                            }`}
                          >
                            4 days
                          </button>
                          <button
                            onClick={() => setThisCurrency("6 days")}
                            id="btn3"
                            className={` ${
                              toCurrency === "6 days" ? "curr-active" : ""
                            }`}
                          >
                            6 days
                          </button>
                          <button
                            onClick={() => setThisCurrency("Custom")}
                            id="btn4"
                            className={` ${
                              toCurrency === "Custom" ? "curr-active" : ""
                            }`}
                          >
                            Custom
                          </button>
                        </div>
                      </div>
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

export default LoanInterface;
