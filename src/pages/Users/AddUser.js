import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, Button, Select, message, Card, Row, Col } from "antd";
import { createUser, updateUser, getUserDetails } from "../../apis/user";

function AddUser({ isEditable = false }) {
    const [form] = Form.useForm();

    const history = useHistory();
    const { applicationUserId } = useParams();
    useEffect(() => {
        console.log("applicationUserId", applicationUserId)
        if (isEditable && applicationUserId) {
            // Fetch the user details from the API
            getUserDetails(applicationUserId).then(response => {
                console.log("data", response)
                const roleIdsString = response.data.applicationUserRoleViewModel.map(role => role.applicationRoleId).join(',');
                form.setFieldsValue({
                    ...response.data,
                    roleIds: roleIdsString
                });
            }).catch(err => {
                message.error("Failed to fetch user details");
            });
        }
    }, [isEditable, applicationUserId, form]);
    const handleOk = () => {// Get the user id from the URL params
        form.validateFields().then((values) => {
            const roleIds = values.roleIds.split(',').map(roleId => parseInt(roleId.trim(), 10));
            const validRoleIds = roleIds.filter(roleId => !isNaN(roleId));
            const updatedUserData = { ...values, roleIds: validRoleIds };

            isEditable ?
                updateUser(applicationUserId, updatedUserData).then((response) => {
                    if (!response.error) {
                        message.success("User updated successfully");
                        // Redirect back to viewUser
                        history.push("/users");
                    } else {
                        message.error(response.data);
                    }
                }) :
                createUser(updatedUserData).then((response) => {
                    if (!response.error) {
                        message.success("User added successfully");
                        // Redirect back to viewUser
                        history.push("/users");
                    } else {
                        message.error(response.data);
                    }
                });
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <Card style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center' }}>Add New User</h2>
                <Form
                    form={form}
                    onFinish={handleOk}
                    layout="vertical"
                >
                    <Row gutter={16}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                name="userName"
                                label="Username"
                                rules={[{ required: true }]}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true }]}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                name="phoneNumber"
                                label="Phone Number"
                                rules={[{ required: true }]}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                name="roleIds"
                                label="Role Ids"
                                rules={[
                                    { required: true, message: 'Please enter at least one role!' },
                                    {
                                        pattern: /^(\d+[,]?)*$/,
                                        message: 'Please enter valid integer values separated by commas!',
                                    },
                                ]}
                            >
                                <Input style={{ width: '100%' }} placeholder="Enter comma-separated role IDs" />
                            </Form.Item>
                        </Col>

                    </Row>
                    {/* ... [continue with the rest of your Form.Items in a similar manner] */}
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default AddUser;
