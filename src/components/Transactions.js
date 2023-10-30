import React from "react";
import curr from "./Utilities";

export const Transactions = ({ data }) => {
  const { Bank, purchase, amount, date } = data;
  return (
    <div className="transactions">
      <div className="flexy">
        <div className="col-md-2">
          {" "}
          <img src={Bank} alt="icon" width="70%" />
        </div>
        <div className="col-md-6">
          <h6>{purchase}</h6>
          <a href="#">Tap for more details</a>
        </div>
        <div className="col-md-3 offset-md-1">
          <h6 className={amount < 0 ? "text-danger" : "text-success"}>
            {" "}
            {curr(amount)}
          </h6>
          <a href="#">{date}</a>
        </div>
      </div>{" "}
    </div>
  );
};
