import "bootstrap/dist/css/bootstrap.min.css";
import Top from "../assets/images/top.png";
import Back from "../assets/images/left.png";

import "./style.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loanRecords } from "../TestData.js";
import { Records } from "../components/Records";

function LoanList() {
  const [category, setCategory] = useState("sent");
  const [filteredRecords, setFilteredRecords] = useState(loanRecords);
  const [recs, setRecs] = useState(loanRecords);
  function setCat(cat) {
    setCategory(cat);
  }
  useEffect(() => {
    const records = JSON.parse(localStorage.getItem("records", [])) || [];
    if (records && records.length > 0) {
      setRecs(records);
    } else {
      console.log(localStorage.setItem("records", JSON.stringify(loanRecords)));
    }
  }, []);
  useEffect(() => {
    if (category === "*") {
      setFilteredRecords(recs);
    } else {
      setFilteredRecords(
        recs.filter((prd) => prd.category.indexOf(category) !== -1)
      );
    }
  }, [category]);
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

                      <div className="flexy col-md-12 records-tab offset-md-2">
                        {/* <span
                          className={`btn ${
                            category === "*" ? "prd-active" : ""
                          }`}
                          onClick={() => setCat("*")}
                          style={{ fontSize: "12px" }}
                        >
                          {" "}
                          <h6 style={{ fontSize: "10px" }}>All records</h6>
                        </span> */}
                        <span
                          className={`btn ${
                            category === "sent" ? "prd-active" : ""
                          }`}
                          onClick={() => setCat("sent")}
                          style={{ fontSize: "12px" }}>
                          <h6 style={{ fontSize: "10px" }}>Sent requests</h6>
                        </span>
                        <span
                          className={`btn ${
                            category === "received" ? "prd-active" : ""
                          }`}
                          onClick={() => setCat("received")}>
                          {" "}
                          <h6 style={{ fontSize: "10px" }}>
                            Received requests
                          </h6>
                        </span>
                      </div>
                      <section className="">
                        {filteredRecords.map((data, index) => (
                          <Records data={data} key={data.id} />
                        ))}
                      </section>
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
