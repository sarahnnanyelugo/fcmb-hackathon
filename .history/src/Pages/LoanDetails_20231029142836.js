import Top from "../assets/images/top.png";
import Back from "../assets/images/back.png";

import "./style.scss";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Beneficiaries from "../components/Beneficiaries";
import PasswordInput from "../components/PasswordInput";
import { useNavigate } from "react-router-dom";

function LoanDetails() {
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
        setTimeout(() => {
          console.log(localStorage.setItem("pin_ver", "false"));
        }, 5000);
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
                      <Link to={"/lender"}>Back</Link>
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
