import React, { useState, useEffect } from "react";
import axios from "axios";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Table } from "antd";
// import { contextsKey } from "express-validator/src/base";

const Transactions = () => {
  // console.log(getData);
  const columns = [
    {
      title: "Date",
      width: 100,
      dataIndex: "date",
      key: "date",
      fixed: "left",
    },
    // {
    //   title: "Type",
    //   width: 100,
    //   dataIndex: "type",
    //   key: "type",
    //   fixed: "left",
    // },
    {
      title: "Coin",
      dataIndex: "coin",
      key: "1",
      width: 150,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "2",
      width: 150,
    },
    {
      title: "Sent (-1) ",
      dataIndex: "sent",
      key: "3",
      width: 150,
    },
    {
      title: "Recieved (-1)",
      dataIndex: "recieved",
      key: "4",
      width: 150,
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "5",
      width: 150,
    },
  ];

  // console.log(getData);

  // console.log(getData.data.txrefs[0]);

  // for (let i = 0; i < 5; i++) {
  //   data.push({
  //     key: i,
  // date: getData[i].value,
  // sent: getData[i].value / 100000000,
  // details: getData.data.txrefs[i].tx_hash,
  // age: 32,
  // address: `London Park no. ${i}`,
  //   });
  // }

  // buildData(getData);

  // const data = [];

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.blockcypher.com/v1/btc/main/addrs/1Dp2swkZnaTCCAAnicxg6s7q1gAFK24yXg"
      )
      .then((response) => setGetData(response.data.txrefs))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>BTC Transactions</h2>
      <Table
        columns={columns}
        dataSource={getData.map((data, index) => ({
          key: index,
          date: data.confirmed,
          details: data.tx_hash,
          sent: data.tx_input_n,
          value: data.value / 100000000,
          coin: "BTC",
          recieved: data.tx_output_n,

          // type: "BTC",
          // currency: "BTC",
          // details: data.tx_hash,
        }))}
        scroll={{ x: 1500 }}
        summary={(pageData) => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              {/* <Table.Summary.Cell index={0} colSpan={2}>
                Fix Left
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} colSpan={8}>
                Scroll Context
              </Table.Summary.Cell> */}
              {/* <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell> */}
            </Table.Summary.Row>
          </Table.Summary>
        )}
        sticky
      />
      ,
    </div>
  );
};

export default Transactions;
