import React, { useState, useEffect } from "react";
import axios from "axios";
import BuyForm from "../tradeComponents/BuyForm";
import CryptosTile from "../tradeComponents/CryptosTile";
import TradeContainers from "../tradeComponents/TradeContainers";
import bStyles from "./scss/bootstrap.module.scss";
import "./Trade.css";

const Trade = () => {
  const [Drate, setRate] = useState("");
  useEffect(() => {
    axios
      .get(
        `
      https://blockchain.info/ticker`
      )
      .then((response) => setRate(response.data.USD.buy));
  }, []);

  const [ethRate, setEthRate] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR"
      )
      .then((response) => setEthRate(response.data.USD));
  }, []);

  const tiles = [
    {
      id: 1,
      title: "BTC",
      rate: Drate,
      icon: <i class="fab fa-bitcoin" />,
    },
    {
      id: 2,
      title: "ETH",
      rate: ethRate,
      icon: <i class="fab fa-ethereum" />,
    },
    {
      id: 3,
      title: "USDT",
      rate: 1,
      icon: <i className="fas fa-hand-holding-usd" />,
    },
  ];

  const [selectedTile, setSelectedTile] = useState(tiles[0]);
  // console.log("parent", selectedTile);

  return (
    <div className={[bStyles["container"]]}>
      <div className={[bStyles["row"]]}>
        <div className={[bStyles["col-6"]]}>
          <div className={[bStyles["d-flex"]]}>
            {tiles.map((item) => (
              <CryptosTile
                data={item}
                selected={item.id === selectedTile.id}
                tileClicked={(data) => setSelectedTile(data)}
              />
            ))}
          </div>
          <BuyForm data={selectedTile} />
        </div>
        <div className="col-6">
          <div className="d-flex"></div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Trade;
