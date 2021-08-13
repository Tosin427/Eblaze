import React from "react";
import bStyles from "../contents/scss/bootstrap.module.scss";
const CryptosTile = ({ data, selected, tileClicked }) => {
  //   console.log(data);
  const { id, title, rate, icon } = data;

  const handleClick = () => tileClicked(data);

  return (
    <div
      onClick={handleClick}
      className={[
        bStyles["card"],
        "cardStyle",
        `${selected && "selected"}`,
      ].join(" ")}
    >
      <div className={[bStyles["card-body"]]}>
        <div className="coin-icon">{icon}</div>
        <div>{title}</div>
        <div>@ {rate}</div>
      </div>
    </div>
  );
};

export default CryptosTile;
