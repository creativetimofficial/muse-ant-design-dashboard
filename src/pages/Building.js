import React, { useState } from "react";
import { DatePicker, Divider, Select } from "antd";
import { Form, Input, Table } from "antd";
import { Button, Row, Col, Modal } from "antd";
import "reactjs-popup/dist/index.css";
import { useEffect } from "react";

import { addBuilding, deleteBuilding, editBuilding, getBuildingList } from '../services/buildingService'

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
  const [form] = Form.useForm()
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

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

  const onCancelModal = () => {
    setOpen(false);
    setBuildingId()
    form.resetFields();
  }

  const columns = [
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "1",
    },
    {
      title: "Project Type",
      dataIndex: "projectType",
      key: "2",
    },
    {
      title: "Project No.",
      dataIndex: "projectNo",
      key: "3",
    },
    {
      title: "Building Name",
      dataIndex: "buildingName",
      key: "4",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "5",
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "6",
    },
    {
      title: "PostCode",
      dataIndex: "postcode",
      key: "7",
    },
    {
      title: "Zone",
      dataIndex: "zone",
      key: "8",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "9",
    },
    {
      title: "Holidays",
      dataIndex: "holidays",
      key: "10",
    },
    {
      title: "Target",
      dataIndex: "target",
      key: "11",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "12",
    },
    {
      title: "Alert",
      dataIndex: "alert",
      key: "13",
    },
    {
      title: "Actions",
      dataIndex: "delete",
      key: "14",
      render: (text, record, index) => (
        <>
          <a onClick={()=>{onEdit(record)}}>EDIT</a>
          <Divider type="vertical"/>
          <a onClick={()=>{onDelete(record.id)}}>DELETE</a>
        </>
      )
    }
  ];

  const [post, setPost] = useState({});
  const [loading, setloading] = useState(true);
  const [buildingId, setBuildingId] = useState();

  let data = [];
  const getData = async () => {
    try {
      const resp = await getBuildingList();
      console.log(resp)
      setPost(resp)
      setloading(false)

    } catch (error) {
    }
  };
  const setData = async (formData) => {
    try {
      if(buildingId){
        const resp = await editBuilding(buildingId, formData);
      }else{
        const resp = await addBuilding(formData);
      }
      onCancelModal()
      getData() 
    } catch (error) {
      console.log(error)
    }
  };

  const onDelete = async (id) => {
    try {
      const resp = await deleteBuilding(id);
      getData()
    } catch (error) {
    }
  };

  const onEdit = async (record) => {
    form.setFieldsValue(record);
    setBuildingId(record.id)
    setOpen(true)
  };

  data = loading
    ? []
    : post
 
  useEffect(() => {
    getData()
  }, []);

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
        open={open}
        onCancel={() => onCancelModal()}
        width={1000}
        footer={null}
        maskClosable={false}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={setData}
          style={{ maxWidth: 1000 }}
          form={form}
          validateMessages={validateMessages}
        >
          <Row justify={'center'} gutter={[30, 30]}>
            <Col span={24}>
              <Form.Item
                name={"projectName"}
                label="Project Name"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify={'center'} gutter={[30, 30]}>
            <Col span={24}>
              <Form.Item
                name={"projectType"}
                label="Project Types"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
              >
                <Select
                  placeholder="Select Project"
                  value={selectedItems}
                  onChange={setSelectedItems}
                  size='large'
                  style={{ width: "100%" }}

                  options={filteredOptions.map((item, index) => ({
                    value: item,
                    label: item,
                    key: index
                  }))}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row justify={'center'} gutter={[30, 30]}>
            <Col span={24}>
              <Form.Item
                name={"projectNo"}
                label="Project No"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify={'center'} gutter={[30, 30]} >
            <Col span={11}>
              <Form.Item
                name={"buildingName"}
                label="Building Name"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={"area"}
                label="Area"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}

              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify={'center'} gutter={[30, 30]}>
            <Col span={11}>
              <Form.Item
                name={"street"}
                label="Street"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={"postcode"}
                label="Postcode"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify={'center'} gutter={[30, 30]}>
            <Col span={11}>
              <Form.Item
                name={"zone"}
                label="Zone"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={"region"}
                label="Region"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify={'center'} gutter={[30, 30]}>
            <Col span={11}>
              <Form.Item
                name={"holidays"}
                label="Holidays"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={"target"}
                label="Target"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
              // rules={[{ required: "" }]}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify={'center'} gutter={[30, 30]}>
            <Col span={11}>
              <Form.Item
                name={"rating"}
                label="Rating"
                // rules={[{ required: "" }]}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={"alert"}
                label="Alert"
                // rules={[{ required: "" }]}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
              >
                <Input className="form_input" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            wrapperCol={{
              offset: 11,
              span: 16,
            }}
          >
            <Row >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button type="" style={{ marginLeft: 10 }} htmlType="" onClick={() => onCancelModal()} >
                Cancel
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        scroll={{
          x: 1000,
        }}
      />
    </>
  );
}

export default Building;
