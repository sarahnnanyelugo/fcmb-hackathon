import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./assets/images/top.png";
import Menu from "./assets/images/menu.png";
import Bell from "./assets/images/bell.png";
import Eye from "./assets/images/eye.png";
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
                            <small> Your Balance </small>
                            <span onClick={toggleShowBalance}>
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
                                  src={Eye}
                                  alt="Scholar"
                                  width="60%"
                                />
                              )}
                            </span>
                          </div>
                          <h5>{showBalance ? "₦2,000" : "******"}</h5>
                        </div>
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

export default App;
