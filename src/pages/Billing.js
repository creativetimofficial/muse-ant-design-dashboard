import React from "react";
import { Form, Input, Table } from "antd";
import { Button, Modal } from "antd";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import { InputNumber } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function Billing() {
  // const [open, setOpen] = useState(false);
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
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
    // <div className="">
    //   <Button type="primary" onClick={() => setOpen(true)}>
    //     <Popup
    //       title=""
    //       centered
    //       open={open}
    //       onCancel={() => setOpen(false)}
    //       width={100}
    //       closeOnDocumentClick={true}
    //     >
    //       <Form className="createBuildingForm">
    //         <Form.Item
    //           label="Building Name"
    //           name="buildingName"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your username!",
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           label="Project"
    //           name="project"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your project!",
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           label="Energy Profile"
    //           name="energyProfile"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your energyProfile!",
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           label="Building Name"
    //           name="buildingName"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your username!",
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Button
    //           type="primary"
    //           htmlType="submit"
    //           onClick={() => setOpen(false)}
    //           className="ms-5"
    //         >
    //           Save
    //         </Button>
    //         <Button onClick={() => setOpen(false)}>Cancel</Button>
    //       </Form>
    //     </Popup>
    //     Create New
    //   </Button>
    // <div className="mb-5"></div>
    <>
      {" "}
      <Button className="mb-5" type="primary" onClick={() => setOpen(true)}>
        Create New
      </Button>
      <Modal
        title="Create New Buildings"
        centered
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
       <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['building', 'name']}
        label="Building Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['building', 'project']}
        label="Project Name"
        rules={[
          {
            type: '',
          },
        ]}
      >
        
        <Input />
        
      </Form.Item>
      <Form.Item
        label="Energy Profile"
        rules={[
          {
            type: '',
          },
        ]}
      >
        
        <Input />
        
      </Form.Item>
      
      <Form.Item
        label="Building Number"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 100000,
          },
        ]}
      >
        <InputNumber />
        
      </Form.Item>
      <Form.Item name={ 'suburb'} label="SubURB">
        <Input />
      </Form.Item>
      <Form.Item name={ 'totalarea'} label="Total Area">
        <Input />
      </Form.Item> <Form.Item name={ 'totallna'} label="Total LNA">
        <Input />
      </Form.Item>
      
      <Form.Item name={ 'totalglar'} label="Total GLAR">
        <Input />
      </Form.Item><Form.Item name={ 'constructed'} label="Date Consrtucted">
        <Input />
      </Form.Item><Form.Item name={ 'refurbished'} label="Date Refurbished">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
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

export default Billing;
