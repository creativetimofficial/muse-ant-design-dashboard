// ViewRole.js
import React, { useEffect, useState } from "react";
import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Button,
    Typography,
    Popconfirm,
    Form,
    Input,
    Modal,
    message,
    Select,
    Spin
  } from "antd";
import { Link, useHistory } from "react-router-dom";
import { getAllRoles } from "../../apis/role";

function ViewRole({permissions}) {
    permissions = {
        canEdit: true,
        canDelete: true,
        canCreate: true,
        canView: true,
      }
  const [form] = Form.useForm();
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => { 
        fetchRoles();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'applicationRoleId',
            key: 'applicationRoleId',
        },
        {
            title: 'Role Name',
            dataIndex: 'roleName',
            key: 'roleName',
        },

        permissions?.canEdit &&
        {
          title: "Edit",
          dataIndex: "Edit",
          render: (_, record) => {
            return (
              <Typography.Link
                onClick={() => edit(record)}
              >
                Edit
              </Typography.Link>
            );
          },
        }, 
    ].filter(Boolean);
    const fetchRoles = () => {
        setLoading(true);
        getAllRoles().then(response => {
            if (!response.error) {
                setRoles(response.data);
            } else {
                message.error(response.data);
            }
            setLoading(false);
        });
    };
    const handleAddUser = () => {
        history.push('/Addrole'); // Redirects to /adduser
      };
    
    const edit = (record) => {
        history.push(`/Editrole/${record.applicationUserId}`);
      };

    

    return (
        <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Role Table"
              extra={
                <>
                  {permissions?.canCreate && <span style={{ marginRight: "20px" }}>
                    <Button type="primary" onClick={handleAddUser}>
                      Add Role
                    </Button>
                  </span>}
                </>
              }
            >
              <div className="table-responsive">
                {loading ? (
                  <div style={{ textAlign: 'center', padding: '50px' }}>
                    <Spin size="large" />
                  </div>
                ) : (
                  <Form form={form} component={false}>
                    <Table
                      columns={columns}
                      dataSource={roles}
                      pagination={false}
                      className="ant-border-space usertable"
                      />
                      </Form>
                  )
                }
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    );
}

export default ViewRole;
