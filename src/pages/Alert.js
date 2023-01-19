import React from 'react';
import { Table } from 'antd';
const columns = [
    {
      title: "No",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Client Agent Name",
      dataIndex: "clientAgentName",
      key: "clientAgentName",
    },
    {
      title: "PTL",
      dataIndex: "ptl",
      key: "ptl",
    },
    {
      title: "Project Group",
      dataIndex: "projectGroup",
      key: "projectGroup",
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
    },
  ];
  const data = [
    {
      key: "1",
      number: 23533,
      name: "24 Amour st Revesby - morgen carbon It consulting",
      type: "GBS",
      clientName: "Austen gen",
      clientAgentName: "suman",
      ptl: "mount st.",
      projectGroup: "NSW",
      delete: "",
    },
    {
      key: "2",
      number: 23533,
      name: "24 Amour st Revesby - morgen carbon It consulting",
      type: "GBS",
      clientName: "Austen gen",
      clientAgentName: "suman",
      ptl: "mount st.",
      projectGroup: "NSW",
      delete: "",
    },
    {
      key: "3",
      number: 23533,
      name: "24 Amour st Revesby - morgen carbon It consulting",
      type: "GBS",
      clientName: "Austen gen",
      clientAgentName: "suman",
      ptl: "mount st.",
      projectGroup: "NSW",
      delete: "",
    },
  ];

function Alert() {
  return (
    <>
     <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1300,
        }}
      />
    </>
  )
}

export default Alert;