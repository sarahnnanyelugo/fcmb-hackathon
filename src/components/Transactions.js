import React from "react";

export const Transactions = ({ data }) => {
  const { Bank, purchase, amount } = data;
  return (
    <div className="transactions">
      <div className="flexy">
        <div className="col-md-2">
          {" "}
          <img src={Bank} alt="icon" width="70%" />
        </div>
        <div className="col-md-5">
          <h6>{purchase}</h6>
          <a href="#">Tap for more details</a>
        </div>
        <div className="col-md-3 offset-md-2">
          <h6>-₦{amount}</h6>
        </div>
      </div>{" "}
    </div>
  );
};
