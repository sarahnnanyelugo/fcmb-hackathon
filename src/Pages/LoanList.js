import "bootstrap/dist/css/bootstrap.min.css";
import Top from "../assets/images/top.png";
import Back from "../assets/images/left.png";

import "./style.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LoanList() {
  const [activeIndex, setActiveIndex2] = useState(1);
  const handleClick2 = (index) => setActiveIndex2(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="app-header">
        <Link to={"/lender"}>Lender View</Link>
        <center>
          <div className="col-md-3">
            <center>
              <div className="col-md-10 app">
                <div className="app-inner">
                  <div className="app-inner2">
                    <div className="app-face">
                      <img src={Top} alt="icon" width="100%" />
                      <Link to={"/loan-interface"} style={{ float: "left" }}>
                        {" "}
                        <img src={Back} alt="icon" width="20%" />
                        Loan records
                      </Link>

                      <div className="business-pricing-tab col-md-12">
                        {" "}
                        <div className="tabs ">
                          <button
                            className={`tab ${checkActive2(1, "active2")}`}
                            onClick={() => handleClick2(1)}
                          >
                            Business
                          </button>
                          <button
                            className={`tab ${checkActive2(2, "active2")}`}
                            onClick={() => handleClick2(2)}
                            style={{ marginLeft: "20px" }}
                          >
                            School
                          </button>
                        </div>
                        <div className="panels">
                          <div className={`panel ${checkActive(1, "active2")}`}>
                            1
                          </div>
                          <div className={`panel ${checkActive(2, "active2")}`}>
                            2
                          </div>
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

export default LoanList;
