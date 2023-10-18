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

import { getAllMakes } from "../../apis/make";
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

// const permissions = {
//   canEdit: true,
//   canDelete: true,
//   canCreate: true,
//   canView: true,
// }
const permissionsProblem = {
  canEdit: true,
  canDelete: true,
  canAdd: true,
  canView: true,
}

function ViewMake({permissions = permissionsProblem}) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [editingKey, setEditingKey] = useState("");
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
    getAllMakes().then((response) => {
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
  useEffect(() => {
    // Fetch data from the API when the component mounts
    FetchData();
  }, []);


  const edit = (record) => {
    history.push(`/edit-make/${record.makeId}`);
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

  const columns = [
    { title: "Make ID", dataIndex: "makeId", key: "makeId" },
    { title: "Name Ar", dataIndex: "makeNameAr", key: "makeNameAr" },
    { title: "Name En", dataIndex: "makeNameEn", key: "makeNameEn" },
    { title: "najm Make Code", dataIndex: "najmMakeCode", key: "najmMakeCode" },
    { title: "yakeen Make Code", dataIndex: "yakeenMakeCode", key: "yakeenMakeCode" },
    { title: "giCore Make Code", dataIndex: "giCoreMakeCode", key: "giCoreMakeCode" },
    { title: "bCare Make Code", dataIndex: "bCareMakeCode", key: "bCareMakeCode" },
    permissions?.canEdit && {
      title: "Edit",
      dataIndex: "Edit",
      render: (_, record) => {
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
  ].filter(Boolean);

  const handleAddUser = () => {
    history.push('/add-make'); // Redirects to /adduser
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
              title="Make Table"
              extra={
                <>
                  {permissions?.canAdd && <span style={{ marginRight: "20px" }}>
                    <Button type="primary" onClick={handleAddUser}>
                      Add Make
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

export default ViewMake;
