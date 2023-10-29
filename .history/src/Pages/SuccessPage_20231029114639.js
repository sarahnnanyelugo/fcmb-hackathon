import React from "react";
import Top from "../assets/images/top.png";
import Back from "../assets/images/back.png";

import "./style.scss";
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
                      <center>Reqest Sent</center>
                      <div className="col-md-12 success-div"></div>
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
