import "bootstrap/dist/css/bootstrap.min.css";
import Top from "../assets/images/top.png";
import Menu from "../assets/images/menu.png";
import Bell from "../assets/images/bell.png";
import Eye from "../assets/images/eye.png";
import Eye2 from "../assets/images/eye2.png";
import Add from "../assets/images/add.png";
import Transfer from "../assets/images/trans.png";
import Card from "../assets/images/atm.png";
import Mobile from "../assets/images/topup.png";
import Lending from "../assets/images/lend.png";
import Data from "../assets/images/data.png";
import Arrow from "../assets/images/arrow.png";
import HomeIcon from "../assets/images/home.png";
import Piggy from "../assets/images/piggy.png";
import Settings from "../assets/images/setting.png";
import "./style.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import curr from "../components/Utilities";
import { recentTransactions } from "../TestData.js";
import { Transactions } from "../components/Transactions";

function Home() {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(
    parseFloat(localStorage.getItem("requestor_balance", 0)) || 0
  );
  useEffect(() => {
    console.log(localStorage.setItem("requestor_balance", balance));
  });
  useEffect(() => {
    console.log(localStorage.setItem("requestor_balance", balance));
  }, [balance]);

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };
  const [state, setState] = useState({
    query: "",
    list: recentTransactions.slice(0).sort((a, b) => b.id - a.id),
  });
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
                          <h5>{showBalance ? curr(balance) : "******"}</h5>
                        </div>
                      </center>
                      <h6 style={{ float: "left" }}>Quick access</h6>
                      <div className="flexy col-md-12 access">
                        <div className="col-md-4">
                          {" "}
                          <img src={Add} alt="icon" width="40%" />
                          <h6>Add money</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Transfer} alt="icon" width="40%" />
                          <h6>Transfer</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Card} alt="icon" width="40%" />
                          <h6>Card</h6>
                        </div>
                      </div>
                      <div className="flexy col-md-12 access2">
                        <div className="col-md-4">
                          {" "}
                          <img src={Mobile} alt="icon" width="40%" />
                          <h6>Mobile Topup</h6>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <Link to={"/loan-interface"}>
                            {" "}
                            <img src={Lending} alt="icon" width="40%" />
                            <h6>P2P Lending</h6>
                          </Link>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <img src={Data} alt="icon" width="40%" />
                          <h6>Data purchase</h6>
                        </div>
                      </div>
                      <a href="#">Show More</a>
                      <div className="flexy" style={{ marginTop: "20px" }}>
                        <h6 style={{ fontSize: "12px" }}>
                          Recent transactions
                        </h6>
                        <a
                          href="#"
                          className="offset-md-4"
                          style={{ fontSize: "11px", color: "grey" }}
                        >
                          See more
                        </a>
                      </div>
                      {state.list.map((data, index) => (
                        <Transactions data={data} />
                      ))}
                      <div className=" footer">
                        <div className="flexy">
                          <div className="col-md-4">
                            {" "}
                            <img src={HomeIcon} alt="icon" width="30%" />
                            <h6 style={{ color: "#5c2684" }}>Home</h6>
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

                        <div className="dash col-md-5">&nbsp;</div>
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

export default Home;
