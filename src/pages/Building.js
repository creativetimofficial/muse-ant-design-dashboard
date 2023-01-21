import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import { Form, Input, Table } from "antd";
import { Button, Modal } from "antd";
import "reactjs-popup/dist/index.css";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

function Building() {
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  // const [open, setOpen] = useState(false);
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
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Project Type",
      dataIndex: "projectType",
      key: "projectType",
    },
    {
      title: "Project No.",
      dataIndex: "projectNo",
      key: "projectNo",
    },
    {
      title: "Building Name",
      dataIndex: "buildingName",
      key: "1",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "2",
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "3",
    },
    {
      title: "PostCode",
      dataIndex: "postcode",
      key: "4",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "5",
    },
    {
      title: "Zones",
      dataIndex: "zones",
      key: "6",
    },
    {
      title: "Holidays",
      dataIndex: "holidays",
      key: "7",
    },
    {
      title: "Target",
      dataIndex: "target",
      key: "8",
    },
    {
      title: "Ratings",
      key: "rating",
      dataIndex: "ratings",
    },
    {
      title: "Alert",
      dataIndex: "alert",
      key: "9",
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "10",
    },
  ];
  const data = [
    {
      key: "1",
      projectNo: 23533,
      projectName: "24,mount street,North sydeny",
      projectType: "GBS",
      buildingName: "d04,megacenter",
      area: "hadpsar",
      street: "mount st.",
      state: "NSW",
      postcode: 2160,
      region: "north",
      zones: "south",
      holidays: "18",
      target: "none",
      ratings: "",
      alert: "",
      delete: "",
    },
    {
      key: "2",
      projectNo: 12333,
      projectName: "12,mount street,North sydeny",
      projectType: "GBS",
      buildingName: "f604,megacenter",
      area: "hadpsar",
      street: "mount st.",
      state: "NSW",
      postcode: 2060,
      region: "north",
      zones: "south",
      holidays: "18",
      target: "none",
      ratings: "",
      alert: "",
      delete: "",
    },
    {
      key: "3",
      projectNo: 92333,
      projectName: "10,mount street,North sydeny",
      projectType: "GBS",
      buildingName: "f604,megacenter",
      area: "hadpsar",
      street: "mount st.",
      state: "NSW",
      postcode: 4060,
      region: "north",
      zones: "south",
      holidays: "18",
      target: "none",
      ratings: "",
      alert: "",
      delete: "",
    },
  ];
  return (
    <>
      {" "}
      <Button className="mb-5" type="primary" onClick={() => setOpen(true)}>
        Create New
      </Button>
      <Modal
        style={{ textAlign: "left" }}
        title="Create New Buildings"
        centered
        visible={open}
        // onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1300}
        footer={null}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 1000 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"buildingName"}
            label="Building Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"project"}
            label="Project"
            rules={[{ required: true }]}
          >
            <Select
              mode="multiple"
              placeholder="Select Project"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: "100%" }}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />
          </Form.Item>
          <Form.Item
            name={"energyProfile"}
            label="Energy Profile"
            rules={[{ required: "" }]}
          >
            <Select
              mode="multiple"
              placeholder="Select Type"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: "100%" }}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />
          </Form.Item>
          <Form.Item
            name={"buildingNumber"}
            label="Building Number"
            rules={[{ required: "" }]}
          >
            <Input style={{ width: "50%" }} /> <lebel> Street :</lebel>{" "}
            <Input style={{ width: "41.5%" }} />
          </Form.Item>
          <Form.Item name={"suburb"} label="Suburb" rules={[{ required: "" }]}>
            <Input style={{ width: "50%" }} /> <lebel> State :</lebel>{" "}
            <Input style={{ width: "41.5%" }} />
          </Form.Item>
          <Form.Item
            name={"postcode"}
            label="Postcode"
            rules={[{ required: true }]}
          >
            <Input style={{ width: "50%" }} /> <lebel> Region :</lebel>{" "}
            <Select
              mode="multiple"
              placeholder="Select Type"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: "40%" }}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />
          </Form.Item>
          <Form.Item
            name={"totalArea"}
            label="Total Area"
            rules={[{ required: "" }]}
          >
            <Input style={{ width: "50%" }} />
          </Form.Item>
          <Form.Item
            name={"totalLNA"}
            label="Total LNA"
            rules={[{ required: "" }]}
          >
            <Input style={{ width: "50%" }} />
          </Form.Item>
          <Form.Item
            name={"totalGLAR"}
            label="Total GLAR"
            rules={[{ required: "" }]}
          >
            <Input style={{ width: "50%" }} />
          </Form.Item>
          <Form.Item
            name={"constructed"}
            label="Date Constructed"
            rules={[{ required: "" }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name={"refurbished"}
            label="Date Refurbished"
            rules={[{ required: "" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="" style={{ marginLeft: 10 }} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1400,
        }}
      />
    </>
  );
}

export default Building;
