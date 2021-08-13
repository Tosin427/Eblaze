import React, { useState, useEffect, useCallback } from "react";
import bStyles from "../contents/scss/bootstrap.module.scss";
import InputBase from "./InputBase";

const BuyForm = ({ data }) => {
  const { title, rate } = data;

  const INIT = { amount: 0, converted: 0 };
  const [exchange, setExchange] = useState(INIT);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setExchange({
      ...exchange,
      converted: (Number(exchange.amount) / rate).toFixed(4),
    });
  }, [title]);

  const handleChange = ({ target: { value, name } }) => {
    const val = Number(value.trim());
    const converted = (val / rate).toFixed(4);

    setExchange({
      [name]: val,
      converted,
    });
  };

  const makePurchase = useCallback(
    (e) => {
      e.preventDefault();
      const payload = {
        ...exchange,
        title,
      };
      setTransactions([...transactions, payload]);
    },
    [transactions]
  );

  console.log("exchange", exchange);

  return (
    <form onSubmit={makePurchase} className="form">
      <div className={[bStyles["input-group"], bStyles["mb-3"]].join(" ")}>
        <InputBase name="amount" onChange={handleChange} textLabel="USD" />
        <i className="fas fa-exchange-alt" />
        <InputBase textLabel={title} value={exchange.converted} />
      </div>
      <input
        className={[bStyles["btn"], bStyles["btn-primary"]].join(" ")}
        type="submit"
        value="Purchase"
      />
    </form>
  );
};

export default BuyForm;
