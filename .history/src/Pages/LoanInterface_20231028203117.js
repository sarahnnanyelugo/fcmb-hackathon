import Top from "../assets/images/top.png";
import Back from "../assets/images/back.png";

import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoanInterface() {
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
                      <div className="col-md-12" style={{ float: "left" }}>
                        {" "}
                        <Link to={"/"}>
                          {" "}
                          <img src={Back} alt="icon" width="40%" />
                        </Link>
                        <small>Request for short term loans</small>
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
