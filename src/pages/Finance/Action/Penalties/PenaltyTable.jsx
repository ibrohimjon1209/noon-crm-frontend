import React from "react";
import { Table } from "antd";

const PenaltyTable = ({ penalties }) => {
  const columns = [
    { title: "№", dataIndex: "id", key: "id" },
    { title: "To'liq Ismi", dataIndex: "fullName", key: "fullName" },
    { title: "Miqdori", dataIndex: "amount", key: "amount" },
    { title: "Izoh", dataIndex: "note", key: "note" },
    { title: "Yaratilgan Sanasi", dataIndex: "createdAt", key: "createdAt" },
  ];

  return <Table dataSource={penalties} columns={columns} rowKey="id" />;
};

export default PenaltyTable;
