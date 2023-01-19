import React from "react";
import { Select, Form, Input, Table } from "antd";
import { Button, Modal } from "antd";
import "reactjs-popup/dist/index.css";
import { useState } from "react";

const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
function Sites() {
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const [open, setOpen] = useState(false);
  console.log(open);

  const onFinish = (values) => {
    console.log(values);
  };

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
  const onChange = (e)=>{
    console.log('chnage',e.target.value)
  }
  return (
    <>
      <Button className="mb-5" type="primary" onClick={() => setOpen(true)}>
        Create New
      </Button>
      <Modal
        style={{ textAlign: "left" }}
        title="Create New"
        centered
        visible={open}
        // onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={800}
        footer={null}
      >
        <Form
          className="modelForm"
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          // style={{textAlign:'left'}}
          labelAlign=""
        >
          <Form.Item name={["project", "name"]} label="Project Type">
            <Select
              showSearch
              style={{
                width: 421,
              }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
            {/* <Input/> */}
          </Form.Item>

          <Form.Item label="Project Name">
            <Input />
          </Form.Item>
          <Form.Item label="Client Contact">
          <TextArea  showCount maxLength={100} placeholder={'Click to pick'} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Agent Contact">
          <TextArea  showCount maxLength={100} placeholder={'Click to pick'} onChange={onChange} />
          </Form.Item>
          
          <Form.Item>
            <Button
              style={{ float: "right" }}
              onClick={() => setOpen(false)}
              type=""
              htmlType="cancel"
            >
              Cancel
            </Button>
            <Button
              className=""
              style={{ float: "right", marginRight: 18 }}
              onClick={() => setOpen(false)}
              type="primary"
              htmlType="submit"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1300,
        }}
      />
    </>
  );
}

export default Sites;
