import React, { useState, useEffect } from "react";
import axios from "axios";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Table } from "antd";

const Transactions = () => {
  const columns = [
    {
      title: "Date",
      width: 100,
      dataIndex: "date",
      key: "date",
      fixed: "left",
    },
    {
      title: "Type",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Currency",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Mode",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Sent",
      dataIndex: "sent",
      key: "3",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "address",
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

  const [getData, setGetData] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.blockcypher.com/v1/btc/main/addrs/1HqUb1yWNgdbuvpbijz6FxRXzkGdQnmuZj`
      )
      .then((response) => setGetData(response.data.txrefs));
  }, []);

  console.log(getData);

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      // key: i,
      // date: getData[i].confirmed,
      // sent: getData[i].value / 100000000,
      // details: getData[1].tx_hash,
      // age: 32,
      // address: `London Park no. ${i}`,
    });
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500 }}
        summary={(pageData) => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={2}>
                Fix Left
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} colSpan={8}>
                Scroll Context
              </Table.Summary.Cell>
              <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
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
