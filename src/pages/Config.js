import React from "react";
import Divider from "antd";
// import { Col,Row,Text,Title,Card,Paragraph,RightOutlined } from 'antd'
import Paragraph from "antd/lib/typography/Paragraph";
import { Form, Input, Button, Card, Col, Row, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
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
  const { Title, Text } = Typography;
  return (
    <>
      <Row gutter={[24, 0]}>
              {/* <Button>save</Button> */}
        <Col xs={24} md={12} sm={24} lg={12} xl={10} className="mb-24">
          <Card bordered={false} className="criclebox card-info-2 h-full">
            <div className=" h-full col-content">
              <div className="card-content">
                <Title level={5}>
                  <h2>Application Styling</h2>
                </Title>
                <p>
                  <p>
                    {" "}
                    Here you  can adjust the styling and logo used in your application.
                  </p>
                  <strong>Important:</strong>Changes are not persisted until save is clicked.
                  opportunity first.
                </p>
              </div>
              <div className="card-footer">
                <a className="icon-move-right" href="#pablo">
                  <Button>Disabled</Button>
                  {/* <RightOutlined /> */}
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12} sm={24} lg={12} xl={14} className="mb-24">
          <Card bordered={false} className="">
            <Row gutter>
              <Col
                xs={24}
                md={12}
                sm={24}
                lg={12}
                xl={14}
                className="mobile-24"
              >
                <div className="h-full col-content p-20">
                  <Text>LOGO</Text>
                  <div className="ant-muse">
                    <Upload {...props}>
                      <Button
                        style={{ width: "300px" }}
                        icon={<UploadOutlined />}
                      >
                        Click to Upload
                      </Button>
                    </Upload>
                  </div>

                  <div className="card-footer">
                    <Form.Item
                      style={{
                        marginTop: 15,
                      }}
                      name="hight"
                      label=""
                    >
                      HEIGHT
                      <Input
                        style={{ width: "120%" }}
                        placeholder="eg 40 (optional)"
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      style={{
                        marginTop: "",
                      }}
                      name="hight"
                      label=""
                    >
                      APP ICON
                      <Input
                        style={{ width: "120%" }}
                        value="{{app.application builder}}"
                      />
                    </Form.Item>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} sm={24} lg={12} xl={10} className="col-img">
                <div className="ant-cret text-right">
                  <img src={""} alt="" className="border10" />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="middle">
        <Col xs={24} md={24} lg={24}>
          <Card>
            <div className="themes">
              <small>Themes</small>
            </div>

          
            <Button className="btnMiddle">Geg</Button>
            <Button className="btnMiddle">Red</Button>
            <Button className="btnMiddle">Green</Button>
            <Button className="btnMiddle">Salmon</Button>
          </Card>
        </Col>
      </Row>

      <Card>
      <div className="colors">
              
              <h2>
                Colors
              </h2>
            </div>
        <Row>
          <Col xl={11} xs = {24} sm={24} md={11}>
           
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
              <Input style={{ width: "100%" }} placeholder="eg salmon (optional)" />
            </Form.Item>
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
              ACTIVE
              <Input style={{ width: "100%" }} placeholder="eg salmon (optional)" />
            </Form.Item>
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
             TEXT
              <Input style={{ width: "100%" }} placeholder="eg salmon (optional)" />
            </Form.Item>
          </Col>

          <Col xl={12} xs = {24} sm={24} md={11} style={{
            marginLeft:40
          }}>
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
          
          
              TEXT ON PRIMARY
              <Input style={{ width: "100%" }} placeholder="eg salmon (optional)" />
            </Form.Item>
            <Form.Item
              style={{
                marginTop: 15,
              }}
              name="hight"
              label=""
            >
              TEXT ON ACTIVE
              <Input style={{ width: "100%" }} placeholder="eg salmon (optional)" />
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Config;
