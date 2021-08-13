import React from "react";

const CryptosTile = ({ data }) => {
  const { id, title, rate, icon } = data;
  return (
    <div className="card">
      <div className="card-body">
        <div className="coin-icon">{icon}</div>
        <div>{title}</div>
        <div>@ {rate}</div>
      </div>
    </div>
  );
};

export default CryptosTile;
