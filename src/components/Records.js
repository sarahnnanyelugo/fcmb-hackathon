import React from "react";

export const Records = ({ data }) => {
  const { color, Bank, accName, amount, date, status, category } = data;
  return (
    <div className={`records  flexy ${category}`} style={{ textAlign: "left" }}>
      <div className="col-md-2">
        <img
          src={Bank}
          alt="icon"
          width="80%"
          style={{ borderRadius: "100%" }}
        />
      </div>
      <div className="col-md-6">
        <h6 style={{ fontSize: "12px" }}>{accName}</h6>
        <p>{date}</p>
      </div>
      <div className="offset-md-2 col-md-2">
        <h6 style={{ fontSize: "12px" }}>{amount}</h6>
        <p style={{ color }}>{status}</p>
      </div>
    </div>
  );
};
