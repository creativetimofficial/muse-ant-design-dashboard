import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Input, Button, message, Card, Row, Col, Checkbox, Space } from "antd";

import { createRole, getRoleDetails, updateRole } from "../../apis/role";

const permissionOptions = [
    { label: 'Edit', value: 'canEdit' },
    { label: 'Delete', value: 'canDelete' },
    { label: 'Add', value: 'canAdd' },
    { label: 'View', value: 'canView' }
];

function AddRole({ isEditable = false }) {
    const [form] = Form.useForm();
    const history = useHistory();
    const { applicationRoleId } = useParams();

    useEffect(() => {
        if (isEditable && applicationRoleId) {
            getRoleDetails(applicationRoleId).then(response => {
                console.log(response.data);
                // Convert the applicationRolePermissions to the form's permissions format
                const permissions = response.data.applicationRolePermissions.map(perm => ({
                    permissionName: perm.permissionName,
                    permissionId: perm.permissionId,
                    permissions: [
                        ...(perm.canEdit ? ['canEdit'] : []),
                        ...(perm.canDelete ? ['canDelete'] : []),
                        ...(perm.canAdd ? ['canAdd'] : []),
                        ...(perm.canView ? ['canView'] : [])
                    ]
                }));
                

                // Set form values
                form.setFieldsValue({
                    applicationRoleId: response.data.applicationRoleId,
                    roleName: response.data.roleName,
                    permissions: permissions
                });
            }).catch(err => {
                message.error("Failed to fetch role details");
            });
        }
    }, [isEditable, applicationRoleId, form]);


    const handleOk = () => {
        form.validateFields().then((values) => {
            // Convert permissions array back to booleans
        values.permissions = values.permissions.map(perm => ({
            ...perm,
            canEdit: perm.permissions.includes('canEdit'),
            canDelete: perm.permissions.includes('canDelete'),
            canAdd: perm.permissions.includes('canAdd'),
            canView: perm.permissions.includes('canView'),
        }));

        // Remove the 'permissions' array from each item
        values.permissions.forEach(perm => {
            delete perm.permissions;
        });
        if (isEditable) {
            updateRole(applicationRoleId, values).then((response) => {
                if (!response.error) {
                    message.success("Role updated successfully");
                    history.push("/roles");
                } else {
                    message.error(response.data);
                }
            });
        } else{
            createRole(values).then((response) => {
                if (!response.error) {
                    message.success("Role added successfully");
                    history.push("/roles");
                } else {
                    message.error(response.data);
                }
            });
        }
            
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <Card style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center' }}>Add New Role</h2>
                <Form form={form} onFinish={handleOk} layout="vertical">
                    <Row gutter={16}>
                        <Col xs={24} sm={24}>
                            <Form.Item
                                name="roleName"
                                label="Role Name"
                                rules={[{ required: true, message: 'Role name is required!' }]}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        {/* <Col xs={24} sm={12}>
                            <Form.Item
                                name="applicationRoleId"
                                label="Application Role ID"
                                rules={[
                                    { required: true, message: 'Application Role ID is required!' },
                                    { pattern: /^[0-9]+$/, message: 'Application Role ID must be numerical!' }
                                ]}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col> */}
                    </Row>

                    <Form.List name="permissions">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(field => (
                                    <Row key={field.key} gutter={16} align="middle">
                                        <Col xs={24} sm={6}>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'permissionName']}
                                                fieldKey={[field.fieldKey, 'permissionName']}
                                                label="Permission Name"
                                                rules={[{ required: true, message: 'Permission name is required!' }]}
                                            >
                                                <Input style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={6}>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'permissionId']}
                                                fieldKey={[field.fieldKey, 'permissionId']}
                                                label="Permission ID"
                                                rules={[
                                                    { required: true, message: 'Permission ID is required!' },
                                                    { pattern: /^[0-9]+$/, message: 'Permission ID must be numerical!' }
                                                ]}
                                            >
                                                <Input style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={9}>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'permissions']}
                                                fieldKey={[field.fieldKey, 'permissions']}
                                            >
                                                <Checkbox.Group
                                                    options={permissionOptions}
                                                    defaultValue={Object.keys(field).filter(key => field[key] === true)}
                                                />
                                            </Form.Item>
                                        </Col>

                                        <Col xs={24} sm={3}>
                                            <Button type="dashed" onClick={() => remove(field.name)} style={{ width: '100%' }}>
                                                Remove
                                            </Button>
                                        </Col>
                                    </Row>
                                ))}

                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} style={{ width: '100%' }}>
                                        Add Permission
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

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

export default AddRole;
