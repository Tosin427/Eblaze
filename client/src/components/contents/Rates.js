import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Table } from "antd";

const Rates = () => {
  const columns = [
    // {
    //   title: "Date",
    //   width: 100,
    //   dataIndex: "date",
    //   key: "date",
    //   fixed: "left",
    // },
    {
      title: "Symbols",
      dataIndex: "symbol",
      key: "1",
      width: 150,
    },
    {
      title: "Price Last 24hrs",
      dataIndex: "price24h",
      key: "2",
      width: 150,
    },
    {
      title: "Volume Last 24hrs",
      dataIndex: "vol24h",
      key: "2",
      width: 150,
    },
    {
      title: "Last Trade Price",
      dataIndex: "lastp24",
      key: "2",
      width: 150,
    },
    // {
    //   title: "Sent (-1) ",
    //   dataIndex: "sent",
    //   key: "3",
    //   width: 150,
    // },
    // {
    //   title: "Recieved (-1)",
    //   dataIndex: "recieved",
    //   key: "4",
    //   width: 150,
    // },
    // {
    //   title: "Details",
    //   dataIndex: "details",
    //   key: "5",
    //   width: 150,
    // },
  ];

  const [getCryptPrices, setCryptPrices] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.blockchain.com/v3/exchange/tickers")
      .then((response) => setCryptPrices(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Crypto Currency Rates</h2>
      <Table
        columns={columns}
        dataSource={getCryptPrices.map((data, index) => ({
          key: index,
          symbol: data.symbol,
          price24h: data.price_24h,
          vol24h: data.volume_24h,
          lastp24: data.last_trade_price,
        }))}
        // scroll={{ x: 1500 }}
        summary={(pageData) => (
          <Table.Summary fixed>
            <Table.Summary.Row></Table.Summary.Row>
          </Table.Summary>
        )}
        sticky
      />
      ,
    </div>
  );
};

export default Rates;
