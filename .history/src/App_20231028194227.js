import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./assets/images/top.png";
import Menu from "./assets/images/menu.png";
import Bell from "./assets/images/bell.png";
import Eye from "./assets/images/eye.png";
import Eye2 from "./assets/images/eye2.png";
import Add from "./assets/images/add.png";
import Transfer from "./assets/images/trans.png";
import Card from "./assets/images/atm.png";
import Mobile from "./assets/images/topup.png";
import Lending from "./assets/images/lend.png";
import Data from "./assets/images/data.png";
import Arrow from "./assets/images/arrow.png";
import Home from "./assets/images/home.png";
import Piggy from "./assets/images/piggy.png";
import Settings from "./assets/images/setting.png";
import "./App.scss";
import { useState } from "react";

function App() {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState("");

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };
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
                      <img src={Top} alt="icon" width="100%" />
                      <div className="flexy" style={{ padding: "20px" }}>
                        <div className="col-md-1 ">
                          {" "}
                          <img src={Menu} alt="icon" width="100%" />
                        </div>
                        <div className="col-md-1 offset-md-10">
                          {" "}
                          <img src={Bell} alt="icon" width="100%" />
                        </div>
                      </div>
                      <center>
                        <div className="col-md-5 balance">
                          <div className="flexy">
                            <small className="col-md-8"> Your Balance </small>
                            <span
                              onClick={toggleShowBalance}
                              className="col-md-4"
                            >
                              {showBalance ? (
                                <img
                                  className=""
                                  src={Eye}
                                  alt="Scholar"
                                  width="60%"
                                />
                              ) : (
                                <img
                                  className=""
                                  src={Eye2}
                                  alt="Scholar"
                                  width="80%"
                                />
                              )}
                            </span>
                          </div>
                          <h5>{showBalance ? "₦2,000" : "******"}</h5>
                        </div>
                      </center>
                      <h6 style={{ float: "left" }}>Quick access</h6>
                      <div className="flexy col-md-12 access">
                        <div className="col-md-4">
                          {" "}
                          <img src={Add} alt="icon" width="50%" />
                          <h6>Add money</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Transfer} alt="icon" width="50%" />
                          <h6>Add money</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Card} alt="icon" width="50%" />
                          <h6>Add money</h6>
                        </div>
                      </div>
                      <div className="flexy col-md-12 access2">
                        <div className="col-md-4">
                          {" "}
                          <img src={Mobile} alt="icon" width="50%" />
                          <h6>Add money</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Lending} alt="icon" width="50%" />
                          <h6>Add money</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Data} alt="icon" width="50%" />
                          <h6>Add money</h6>
                        </div>
                      </div>
                      <a href="#">Show More</a>
                      <div className="flexy">
                        <h6>Recent transactions</h6>
                        <small className="offset-md-2">See more</small>
                      </div>
                      <div className="transactions">
                        <div className="flexy">
                          <div className="col-md-2">
                            {" "}
                            <img src={Arrow} alt="icon" width="80%" />
                          </div>
                          <div className="col-md-5">
                            <h6>Payment for data</h6>
                            <a href="#">Tap for more details</a>
                          </div>
                          <div className="col-md-3 offset-md-2">
                            <h6>-5000.000</h6>
                          </div>
                        </div>{" "}
                        <div className="flexy">
                          <div className="col-md-2">
                            {" "}
                            <img src={Arrow} alt="icon" width="80%" />
                          </div>
                          <div className="col-md-5">
                            <h6>Payment for data</h6>
                            <a href="#">Tap for more details</a>
                          </div>
                          <div className="col-md-3 offset-md-2">
                            <h6>-5000.000</h6>
                          </div>
                        </div>{" "}
                        <div className="flexy">
                          <div className="col-md-2">
                            {" "}
                            <img src={Arrow} alt="icon" width="80%" />
                          </div>
                          <div className="col-md-5">
                            <h6>Payment for data</h6>
                            <a href="#">Tap for more details</a>
                          </div>
                          <div className="col-md-3 offset-md-2">
                            <h6>-5000.000</h6>
                          </div>
                        </div>
                      </div>
                      <div className="flexy footer">
                        <div className="col-md-4">
                          {" "}
                          <img src={Home} alt="icon" width="30%" />
                          <h6>Home</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Piggy} alt="icon" width="30%" />
                          <h6>Budget</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Settings} alt="icon" width="30%" />
                          <h6>Setting</h6>
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

export default App;
