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

function Lender() {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(
    localStorage.getItem("lender_balance", "200000") || 200000.45
  );
  const [requestAmount, setRequestAmount] = useState(
    parseFloat(localStorage.getItem("amount", "0"))
  );
  const [requestor, setRequestor] = useState(
    JSON.parse(localStorage.getItem("requestorData", {})) || null
  );
  const [loanData, setLoanData] = useState(
    JSON.parse(localStorage.getItem("request_from", {})) || null
  );
  const [recs, setRecs] = useState(recentTransactions);

  useEffect(() => {
    const records =
      JSON.parse(localStorage.getItem("recent_transactions", [])) || [];
    if (records && records.length > 0) {
      setRecs(records);
    } else {
      console.log(
        localStorage.setItem(
          "recent_transactions",
          JSON.stringify(recentTransactions)
        )
      );
    }
  }, []);

  const filteredTransactions = (
    JSON.parse(localStorage.getItem("recent_transactions", [])) || []
  ).filter((transaction) => transaction.beneficiary_id === 2);
  const sortedTransactions = filteredTransactions
    .slice(0)
    .sort((a, b) => b.id - a.id);
  console.log(sortedTransactions);

  const [state, setState] = useState({
    query: "",
    list: sortedTransactions,
  });
  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };
  useEffect(() => {
    localStorage.setItem("lender_balance", balance);
  });

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
                          <a>
                            Welcome{" "}
                            <strong className="text-success">
                              {loanData?.accName}
                            </strong>
                          </a>
                          <div className="flexy">
                            <small className="col-md-8"> Your Balance </small>
                            <span
                              onClick={toggleShowBalance}
                              className="col-md-4">
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
                      <Link to="/loan-list">Show More</Link>
                      <br />
                      <h6 style={{ float: "left", fontSize: "10px" }}>
                        P2P lending
                      </h6>{" "}
                      {loanData && loanData.status === "Pending" ? (
                        <>
                          <br />
                          <div className="col-md-12 alarm-box flexy">
                            <p>
                              {requestor.accName} is requesting{" "}
                              <span>{curr(loanData.amount)}</span> from you.
                            </p>
                            <Link
                              to={"/loan-details"}
                              style={{ fontSize: "10px" }}>
                              Open
                            </Link>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <div className="flexy" style={{ marginTop: "20px" }}>
                        <h6 style={{ fontSize: "12px" }}>
                          Recent transactions
                        </h6>
                        <a
                          href="#"
                          className="offset-md-4"
                          style={{ fontSize: "11px", color: "grey" }}>
                          See more
                        </a>
                      </div>
                      {state.list.map((data, index) => (
                        <Transactions data={data} key={index} />
                      ))}
                      <div className=" footer">
                        <div className="flexy">
                          <Link to={"/"} className="col-md-4">
                            {" "}
                            <img src={HomeIcon} alt="icon" width="30%" />
                            <h6 style={{ color: "#5c2684" }}>Home</h6>
                          </Link>
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

export default Lender;
