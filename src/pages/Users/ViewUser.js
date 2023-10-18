import React, { useEffect, useState, useContext } from "react";
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

import { getAllUsers, createUser, updateUser } from "../../apis/user";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

const originalDataSource1 = [{
  applicationUserId: 4,
  userName: "admin",
  email: "admin1@yopmail.com",
  phoneNumber: "111223344",
  isActive: true,
},
{
  applicationUserId: 5,
  userName: "admin2",
  email: "admin2@yopmail.com",
  phoneNumber: "111223344",
  isActive: true,
},
{
  applicationUserId: 6,
  userName: "testUser",
  email: "testuser@yopail.com",
  phoneNumber: "1122887766",
  isActive: false,
},]

const permissionsProblem = {
  canEdit: true,
  canDelete: true,
  canAdd: true,
  canView: true,
}

function ViewUser({permissions = permissionsProblem}) {
  console.log("permissions", permissions);
  
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record?.applicationUserId === editingKey;
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const [originalDataSource, setOriginalDataSource] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  // const { permission } = useContext(UserContext);

  const error = (e) => {
    messageApi.open({
      type: 'error',
      content: e,
    });
  };
  const success = (e) => {
    messageApi.open({
      type: 'success',
      content: e,
    });
  };
  const FetchData = async () => {
    setLoading(true)
    getAllUsers().then((response) => {
      console.log(response);
      if (!response.error) {
        console.log(response);
        setDataSource(response.data);
        setOriginalDataSource(response.data);
      } else {
        error(response.data);
      }
      setLoading(false)
    });
  }
  // const FetchData = () => {
  //   setLoading(true)
  //   setDataSource(originalDataSource1);
  //   setOriginalDataSource(originalDataSource1);
  //   console.log("useEffect called");
  //   setLoading(false)
  // }
  useEffect(() => {
    // Fetch data from the API when the component mounts
    FetchData();
  }, []);


  const edit = (record) => {
    history.push(`/edit-user/${record.applicationUserId}`);
  };

  const onChangeTableFilter = (e) => {
    if (e.target.value === "all") {
      setDataSource(originalDataSource);
    } else if (e.target.value === "active") {
      const activeUsers = originalDataSource.filter(
        (item) => item.isActive
      );
      setDataSource(activeUsers);
    }
  };

  // const handleOk = () => {
  //   form.validateFields().then((values) => {
  //     const roleIds = values.roleIds.map(roleId => parseInt(roleId, 10));
  //     // Ensure all values are valid integers (filter out any NaN values)
  //     const validRoleIds = roleIds.filter(roleId => !isNaN(roleId));

  //     // Now use validRoleIds...
  //     const updatedUserData = { ...values, roleIds: validRoleIds };
  //     createUser(updatedUserData).then((response) => {
  //       console.log(response);
  //       if (!response.error) {
  //         console.log(response);
  //         FetchData();
  //         setIsModalVisible(false);
  //         success("User added successfully");
  //       } else {
  //         error(response.data);
  //       }
  //       setLoading(false)
  //     });

  //   });
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  // const handleSave = async (key) => {
  //   try {
  //     const userData = await form.validateFields();
  //     setLoading(true);
  //     const response = await updateUser(userData);
  //     if (!response.error) {
  //       FetchData().then(() => {
  //         success("User updated successfully");
  //         setEditingKey("");
  //       }
  //       )
  //       // Reload user data from API
  //     } else {
  //       error(response.data);
  //     }
  //     setLoading(false);
  //   } catch (errInfo) {
  //     console.log("Validate Failed:", errInfo);
  //     setLoading(false);
  //   }

  // };

  // const cancel = () => {
  //   setEditingKey("");
  // };

  // const handleDelete = (key) => {
  //   const newData = dataSource.filter((item) => item.applicationUserId !== key);
  //   setDataSource(newData);
  // };

  const columns = [
    { title: "User ID", dataIndex: "applicationUserId", key: "applicationUserId" },
    { title: "Username", dataIndex: "userName", key: "userName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },

    {
      title: "Active", dataIndex: "isActive", key: "isActive", render: (isActive) => isActive ? <Button style={{ width: "5rem" }} type="primary">
        Active
      </Button> : <Button style={{ width: "5rem" }} type="danger">
        InActive
      </Button>
    },

    permissions?.canEdit &&
    {
      title: "Edit",
      dataIndex: "Edit",
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    }, 
    // permissions.canDelete &&
    // {
    //   title: "Delete",
    //   dataIndex: "Delete",
    //   render: (_, record) => {
    //     const editable = isEditing(record);
    //     return !editable ? (
    //       dataSource.length >= 1 ? (
    //         <Popconfirm
    //           title="Sure to delete?"
    //           onConfirm={() => handleDelete(record?.applicationUserId)}
    //         >
    //           <a>Delete</a>
    //         </Popconfirm>
    //       ) : null
    //     ) : dataSource.length >= 1 ? (
    //       <Popconfirm title="Can't delete while editing!">
    //         <a>Delete</a>
    //       </Popconfirm>
    //     ) : null;
    //   },
    // },
  ].filter(Boolean);

  const handleAddUser = () => {
    history.push('/add-users'); // Redirects to /adduser
  };


  return (
    <>
      {contextHolder}
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="User Table"
              extra={
                <>
                  {permissions?.canAdd && <span style={{ marginRight: "20px" }}>
                    <Button type="primary" onClick={handleAddUser}>
                      Add User
                    </Button>
                  </span>}
                  <Radio.Group
                    onChange={onChangeTableFilter}
                    defaultValue="all"
                  >
                    <Radio.Button value="all">All</Radio.Button>
                    <Radio.Button value="active">ACTIVE</Radio.Button>
                  </Radio.Group>
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
                      dataSource={dataSource}
                      pagination={false}
                      className="ant-border-space usertable"
                      rowClassName="editable-row"
                    />
                  </Form>)
                }
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ViewUser;
