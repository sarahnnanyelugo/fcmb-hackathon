import React from "react";

export const AccList = ({ data, onClick }) => {
  return (
    <div
      className="flexy"
      onClick={() => {
        onClick(data);
      }}
    >
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
