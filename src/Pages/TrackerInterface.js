import Top from "../assets/images/top.png";
import Back from "../assets/images/left.png";
import Bank from "../assets/images/fcmb.png";

import "./style.scss";

import { Link } from "react-router-dom";

function TrackerInterface() {
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
                      <Link
                        to={"/expense-tracker"}
                        style={{ float: "left", marginTop: "15px" }}
                      >
                        <img src={Back} alt="icon" width="10%" />
                        Expense Tracker{" "}
                      </Link>
                      <br />
                      <p style={{ float: "left", textAlign: "left" }}>
                        Track your expenditures
                      </p>
                      <div className="row col-md-12">
                        <h6
                          style={{
                            textAlign: "left",
                            fontSize: "12px",
                            marginTop: "30px",
                          }}
                        >
                          Search word
                        </h6>
                        <input
                          type="search"
                          placeholder="search for keywords"
                          className="search-input"
                        />
                      </div>{" "}
                      <br />
                      <div className="row col-md-12">
                        <h6
                          style={{
                            textAlign: "left",
                            fontSize: "12px",
                            marginTop: "30px",
                          }}
                        >
                          Start date
                        </h6>
                        <input
                          type="date"
                          placeholder=""
                          className="search-input"
                        />
                      </div>{" "}
                      <br />
                      <div className="row col-md-12">
                        <h6
                          style={{
                            textAlign: "left",
                            fontSize: "12px",
                            marginTop: "30px",
                          }}
                        >
                          End date
                        </h6>
                        <input
                          type="date"
                          placeholder=""
                          className="search-input"
                        />
                      </div>
                      <br />
                      <br />
                      <Link to={"/expense-chart"}>
                        {" "}
                        <button className="confirm-btn">View Expenses</button>
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
}

export default TrackerInterface;
