import React, { useState } from "react";
import { Spin, Divider, Select } from "antd";
import { Form, Input, Table } from "antd";
import { Button, Row, Col, Modal } from "antd";
import "reactjs-popup/dist/index.css";
import { useEffect } from "react";
import { addAlerts, deleteAlerts, editAlerts, getAlertsList } from '../services/alertsService'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];
function Alerts() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading , setIsLoading] = useState(false);
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
    setAlertsId()
    form.resetFields();
  }
  const columns = [
    {
      title: "Project No",
      dataIndex: "projectno",
      key: "1",
    },
    {
      title: "Project Name",
      dataIndex: "projectname",
      key: "2",
    },
    {
      title: "Project Type",
      dataIndex: "projecttype",
      key: "3",
    },
    {
      title: "Client Name",
      dataIndex: "clientname",
      key: "4",
    },
    {
      title: "Client Agent Name",
      dataIndex: "clientagentname",
      key: "5",
    },
    {
      title: "PTL",
      dataIndex: "ptl",
      key: "6",
    },
    {
      title: "Project Group",
      dataIndex: "projectgroup",
      key: "7",
    },
    {
      title: "Actions",
      dataIndex: "delete",
      key: "8",
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
  const [AlertsId, setAlertsId] = useState();

  let data = [];
  const getData = async () => {
    setIsLoading(true)
    try {
      const resp = await getAlertsList();
      console.log(resp)
      setPost(resp)
      setloading(false)
      setIsLoading(false)

    } catch (error) {
    }
  };

  const setData = async (formData) => {
    try {
      if(AlertsId){
        const resp = await editAlerts(AlertsId, formData);
      }else{
        const resp = await addAlerts(formData);
      }
      onCancelModal()
      getData() 
    } catch (error) {
      console.log(error)
    }
  };

  const onDelete = async (id) => {
    try {
      const resp = await deleteAlerts(id);
      getData()
    } catch (error) {
    }
  };

  const onEdit = async (record) => {
    form.setFieldsValue(record);
    setAlertsId(record.id)
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
        title="Create New Alerts"
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
                name={"projectno"}
                label="Project No"
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
                name={"projectname"}
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
                name={"projecttype"}
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
                name={"clientname"}
                label="Client Name"
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
                name={"clientagentname"}
                label="Client Agent Name"
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
                name={"ptl"}
                label="PTL"
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
                name={"projectgroup"}
                label="Project Group"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 18 }}
              // rules={[{ required: "" }]}
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
      <Spin spinning={isLoading}>

      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        scroll={{
          x: 1000,
        }}
        />
        </Spin>
    </>
  );
}

export default Alerts;
