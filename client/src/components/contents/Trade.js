import React from "react";
import CryptosTile from "../tradeComponents/CryptosTile";
import TradeContainers from "../tradeComponents/TradeContainers";
import  bStyles  from "./scss/bootstrap.module.scss";

console.log(bStyles)

const Trade = () => {
  const tiles = [
    {
      id: 1,
      title: "BTC",
      rate: 33834,
      icon: <i class="fab fa-bitcoin" />,
    },
    {
      id: 2,
      title: "ETH",
      rate: 5000,
      icon: <i class="fab fa-ethereum" />,
    },
    { id: 3, title: "CDR", rate: 334, icon: <i class="fas fa-code" /> },
  ];
  return (
    <div>
      <div className={[bStyles['bg-danger'], bStyles['text-white'], bStyles['p-4']].join(' ') }>
        <div className="col-6">
          <div className="d-flex">
            {tiles.map((item) => (
              <CryptosTile data={item} />
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex">Check it out</div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Trade;
