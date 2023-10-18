import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, Button, message, Card, Row, Col } from "antd";
import { createMake, updateMake, getMakeDetails } from "../../apis/make";

function AddMake({ isEditable = false }) {
    const [form] = Form.useForm();
    const history = useHistory();
    const { makeId } = useParams();

    useEffect(() => {
        if (isEditable && makeId) {
            getMakeDetails(makeId).then(response => {
                form.setFieldsValue(response.data);
            }).catch(err => {
                message.error("Failed to fetch make details");
            });
        }
    }, [isEditable, makeId, form]);

    const handleOk = () => {
        form.validateFields().then((values) => {
            isEditable ?
                updateMake(makeId, values).then((response) => {
                    if (!response.error) {
                        message.success("Make updated successfully");
                        history.push("/makes");
                    } else {
                        message.error(response.data);
                    }
                }) :
                createMake(values).then((response) => {
                    if (!response.error) {
                        message.success("Make added successfully");
                        history.push("/makes");
                    } else {
                        message.error(response.data);
                    }
                });
        });
    };

    return (
            <Card>
                <h2 style={{ textAlign: 'center', fontWeight:"bolder" }}>{isEditable? "Edit Make": "Add New Make"}</h2>
                <Form
                    form={form}
                    onFinish={handleOk}
                    layout="vertical"
                >
                    <Row gutter={16}>
                        {['makeNameAr', 'makeNameEn', 'najmMakeCode', 'yakeenMakeCode', 'giCoreMakeCode', 'bCareMakeCode'].map(field => (
                            <Col xs={24} sm={12} key={field}>
                                <Form.Item
                                    name={field}
                                    label={field}
                                    rules={[{ required: true }]}
                                >
                                    <Input style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Form.Item style={{ textAlign: "end", paddingTop:"2rem" }}>
                        <Button style={{width: "40%"}} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
    );
}

export default AddMake;
