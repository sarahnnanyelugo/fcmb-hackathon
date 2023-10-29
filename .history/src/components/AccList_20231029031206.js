import React from "react";

export const AccList = ({ data }) => {
  return (
    <div className="flexy">
      {" "}
      <div className="col-md-2">
        {" "}
        <img src={data.bank} alt="icon" width="80%" />
      </div>
      <div>
        <h6>{data.bankName}</h6>
        <p>{data.accName}</p>
      </div>
    </div>
  );
};
