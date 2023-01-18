import React from "react";
import { Form, Input, Table } from "antd";
import { Button, Modal } from "antd";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import { InputNumber } from "antd";
import {Select} from "antd";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function Building() {
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
       style={{textAlign:'left'}}
        title="Create New Buildings"
        centered
        visible={open}
        // onOk={() => setOpen(false)}
        // onCancel={() => setOpen(false)}
        width={800}
        footer={null}
      
      >
        <Form
        className="modelForm"
        
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          style={{textAlign:'left'}}
          labelAlign=""
         
        >
          <Form.Item name={["building", "name"]} label="Building Name">
            <Input/>
          </Form.Item>
          <Form.Item name={["building", "project"]} label="Project Name">
          <Select
    showSearch
    style={{
      width: 421,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
            {/* <Input /> */}
          </Form.Item>
          <Form.Item label="Energy Profile">
          <Select
    showSearch
    style={{
      width: 421,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
            {/* <Input /> */}
          </Form.Item>
          <Form.Item
            label="Building Number"
            rules={[
              {
                type: "number",
                min: 0,
                max: 100000,
              },
            ]}
          >
            <InputNumber style={{width:200}} />
          </Form.Item>
          <Form.Item name={"street"} label="Street">
            <Input />
          </Form.Item>
          <Form.Item name={"suburb"} label="Suburb">
            <Input />
          </Form.Item>
          <Form.Item name={"state"} label="State">
            <Input />

          </Form.Item>
          <Form.Item name={"postcode"} label="Postcode">
            <Input />
          </Form.Item> <Form.Item name={"region"} label="Region">
          <Select
    showSearch
    style={{
      width: 421,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
            {/* <Input /> */}
          </Form.Item>
          <Form.Item name={"totalarea"} label="Total Area">
            <Input />
          </Form.Item>{" "}
          <Form.Item name={"totallna"} label="Total LNA">
            <Input />
          </Form.Item>
          <Form.Item name={"totalglar"} label="Total GLAR">
            <Input />
          </Form.Item>
          <Form.Item name={"constructed"} label="Date Consrtucted">
            <Input />
          </Form.Item>
          <Form.Item name={"refurbished"} label="Date Refurbished">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
            style={{float:'right'}}
              onClick={() => setOpen(false)}
              type=""
              htmlType="cancel"
            >
              Cancel
            </Button>
            <Button
            className=""
            style={{float:'right',marginRight:8}}
              onClick={() => setOpen(false)}
              type="primary"
              htmlType="submit"
            >
              Submit
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

export default Building;
