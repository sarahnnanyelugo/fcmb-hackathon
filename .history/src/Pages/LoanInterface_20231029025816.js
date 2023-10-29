import Top from "../assets/images/top.png";
import Back from "../assets/images/back.png";

import "./style.scss";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Beneficiaries from "../components/Beneficiaries";
import PasswordInput from "../components/PasswordInput";
import { useNavigate } from "react-router-dom";

function LoanInterface() {
  const [pin, setPin] = useState("");
  const [toDuration, setToDuration] = useState("2 days");
  const navigate = useNavigate();
  function setThisDuration(curr) {
    if (curr !== toDuration) {
      setToDuration(curr);
    }
  }
  const validPin = "5525";
  function confirmPin(pin) {
    setPin(pin);
  }
  useEffect(() => {
    if (pin.length == 4) {
      console.log("pin ok");
      console.log("validating pin");
      console.log(localStorage.setItem("pin_ver", "null"));
      if (pin == validPin) {
        const timeoutId = setTimeout(() => {
          console.log(localStorage.setItem("pin_ver", "true"));
          navigate("/success-page");
        }, 2000);

        return () => {
          // Clean up the timeout if the component unmounts before the 2 seconds.
          clearTimeout(timeoutId);
        };
      } else {
        console.log(localStorage.setItem("pin_ver", "false"));
      }
    }
  }, [pin]);

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
                            onClick={() => setThisDuration("2 days")}
                            id="btn1"
                            className={` ${
                              toDuration === "2 days" ? "curr-active" : ""
                            }`}
                          >
                            2 days
                          </button>
                          <button
                            onClick={() => setThisDuration("4 days")}
                            id="btn2"
                            className={` ${
                              toDuration === "4 days" ? "curr-active" : ""
                            }`}
                          >
                            4 days
                          </button>
                          <button
                            onClick={() => setThisDuration("6 days")}
                            id="btn3"
                            className={` ${
                              toDuration === "6 days" ? "curr-active" : ""
                            }`}
                          >
                            6 days
                          </button>
                          <button
                            onClick={() => setThisDuration("Custom")}
                            id="btn4"
                            className={` ${
                              toDuration === "Custom" ? "curr-active" : ""
                            }`}
                          >
                            Custom
                          </button>
                        </div>
                        <p>
                          Note: Loan amount will be deducted from your account
                          automatically on <span> 27/10/2023</span>
                        </p>
                      </div>
                      <div className="col-md-12 remark">
                        <div className="flexy">
                          {" "}
                          <h6>Add note</h6>
                          <small className="offset-md-7">(Optional)</small>
                        </div>
                        <textarea
                          placeholder="eg: It will really mean a lot to me if you could help me with this amount to sort out my daughter's medical bills. Thanks"
                          className="form-control"
                        />
                      </div>
                      <center>
                        <PasswordInput callBack={confirmPin} />
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

export default LoanInterface;
