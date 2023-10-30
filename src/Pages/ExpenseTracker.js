import Top from "../assets/images/top.png";
import Img from "../assets/images/illus.png";
import Bank from "../assets/images/fcmb.png";

import "./style.scss";
import { Link } from "react-router-dom";

function ExpenseTracker() {
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
                      <div className="col-md-12 expense-landing">
                        {" "}
                        <img src={Img} alt="icon" width="100%" />{" "}
                      </div>
                      <h6>Description Box Power</h6>
                      <p style={{ marginBottom: "80px" }}>
                        Harness the power of the “DESCRIPTION BOX” used during
                        money transfers, bill payments or utilities and get a
                        proper breakdown of how you spend on every bills.
                      </p>
                      <Link to={"/tracker-interface"}>
                        {" "}
                        <button className="confirm-btn">Proceed</button>
                      </Link>
                      <center>
                        <Link to={"/"}>Back</Link>
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

export default ExpenseTracker;
