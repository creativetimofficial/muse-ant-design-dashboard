import React from "react";
// import Divider from "antd";
// import { Col,Row,Text,Title,Card,Paragraph,RightOutlined } from 'antd'
// import Paragraph from "antd/lib/typography/Paragraph";
import {
  Select,
  Modal,
  Table,
  Form,
  Input,
  Button,
  Card,
  Col,
  Row,
} from "antd";
import { useState } from "react";
import { message } from "antd";
import { Collapse } from "antd";
const { Panel } = Collapse;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {};

const onFinish = (values) => {
  console.log(values);
};

const columns = [
  {
    title: "Master Type",
    dataIndex: "masterType",
    key: "masterType",
  },
  {
    title: "Energy Type",
    dataIndex: "eneryType",
    key: "eneryType",
  },
  {
    title: "Measurments",
    dataIndex: "measurments",
    key: "measurments",
  },
  {
    title: "Edit",
    dataIndex: "edit",
    key: "edit",
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
    masterType: "Water",
    eneryType: "CT Water",
    measurments: "1.Kilo Liters-kL",
    edit: "",
    delete: "",
  },
  {
    key: "2",
    masterType: "Electricity",
    eneryType: "Electricity kVAh",
    measurments: "1.kWh-kWh",
    edit: "",
    delete: "",
  },
  {
    key: "3",
    masterType: "Electricity",
    eneryType: "Electricity-Kitchen",
    measurments: "1.Kilo Liters-kL",
    edit: "",
    delete: "",
  },
  {
    key: "4",
    masterType: "Electricity",
    eneryType: "CT Water",
    measurments: "1.Electricity-MCC1",
    edit: "",
    delete: "",
  },
];
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
function Config() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card>
        <div className="colors">
          <h2>Colors</h2>
        </div>
        <Row>
          <Col xl={11} xs={24} sm={24} md={11}>
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
              {/* <p>Colors can be entered as any valid CSS color (salmon, #fff, #ffffff, rgb(255, 255, 255))
</p> */}
              PRIMARY
              <Input
                style={{ width: "100%" }}
                placeholder="eg salmon (optional)"
              />
            </Form.Item>
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
              ACTIVE
              <Input
                style={{ width: "100%" }}
                placeholder="eg salmon (optional)"
              />
            </Form.Item>
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
              TEXT
              <Input
                style={{ width: "100%" }}
                placeholder="eg salmon (optional)"
              />
            </Form.Item>
          </Col>

          <Col
            xl={12}
            xs={24}
            sm={24}
            md={11}
            style={{
              marginLeft: 40,
            }}
          >
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
              TEXT ON PRIMARY
              <Input
                style={{ width: "100%" }}
                placeholder="eg salmon (optional)"
              />
            </Form.Item>
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
              TEXT ON ACTIVE
              <Input
                style={{ width: "100%" }}
                placeholder="eg salmon (optional)"
              />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      <Row className="colors">{/* <h2>Constent Energy </h2> */}</Row>
      <Row className="">
        <Col xl={24} xs={24} sm={24} md={24}>
          <Card direction="vertical" style={{ width: 1280, marginTop: 20 }}>
            <Collapse collapsible="icon" bordered={false}>
              <Panel header="Energy Constant Table" key="1">
                <>
                  <Button
                    className="mb-4"
                    type="primary"
                    onClick={() => setOpen(true)}
                  >
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
                      <Form.Item
                        name={"energyMasterType"}
                        label="Energy Master Type"
                      >
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
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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

                      <Form.Item label="Energy Type">
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Mesure"
                        style={
                          {
                            // width: 688,
                            // display: "inline-block",
                          }
                        }
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Unit"
                        // style={{
                        //   width: 158,
                        //   marginLeft:150,
                        // }}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item>
                        <Button
                          style={{ float: "right", marginTop: 30 }}
                          onClick={() => setOpen(false)}
                          type=""
                          htmlType="cancel"
                        >
                          Cancel
                        </Button>
                        <Button
                          className=""
                          style={{
                            float: "right",
                            marginRight: 18,
                            marginTop: 30,
                          }}
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
                    bordered
                    columns={columns}
                    dataSource={data}
                    scroll={{
                      x: 1000,
                    }}
                  />
                </>
              </Panel>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Config;
