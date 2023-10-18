import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, Button, Select, message, Card, Row, Col } from "antd";
import { createUser, updateUser, getUserDetails } from "../../apis/user";
import { getAllRoles } from "../../apis/role";

function AddUser({ isEditable = false }) {
    const [form] = Form.useForm();

    const history = useHistory();
    const { applicationUserId } = useParams();
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        console.log("applicationUserId", applicationUserId)
        console.log("isEditable", isEditable  )
        getAllRoles().then(response => {
            setRoles(response.data);
        }).catch(err => {
            message.error("Failed to fetch roles");
        });
        if (isEditable && applicationUserId) {
            // Fetch the user details from the API
            getUserDetails(applicationUserId).then(response => {
                const userRoleNames = response.data.applicationUserRoleViewModel.map(userRole => userRole.roleName);
                form.setFieldsValue({
                    ...response.data,
                    roleNames: userRoleNames
                });
            }).catch(err => {
                message.error("Failed to fetch user details");
            });
        }
    }, [isEditable, applicationUserId, form]);
    const handleOk = () => {// Get the user id from the URL params
        form.validateFields().then((values) => {
            // const roleIds = values.roleIds.split(',').map(roleId => parseInt(roleId.trim(), 10));
            // const validRoleIds = roleIds.filter(roleId => !isNaN(roleId));
            const roleIdsForUser = values.roleNames.map(roleName => {
                const matchedRole = roles.find(role => role.roleName === roleName);
                return matchedRole ? matchedRole.applicationRoleId : null;
            }).filter(Boolean);
            const updatedUserData = { ...values, roleIds: roleIdsForUser };

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
            <Card >
                <h2 style={{ textAlign: 'center', fontWeight:"bolder" }}>{isEditable? "Edit User": "Add New User"}</h2>
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
                                name="roleNames"
                                label="Roles"
                                rules={[{ required: true, message: 'Please select at least one role!' }]}
                            >
                                <Select mode="multiple" style={{ width: '100%' }} placeholder="Select roles">
                                    {roles.map(role => (
                                        <Select.Option key={role.applicationRoleId} value={role.roleName}>
                                            {role.roleName}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>

                    </Row>
                    {/* ... [continue with the rest of your Form.Items in a similar manner] */}
                    <Form.Item style={{ textAlign: "end", paddingTop:"2rem" }}>
                        <Button style={{width: "40%"}} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

    );
}

export default AddUser;
