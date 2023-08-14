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
  Switch,
} from "antd";

// table code start
const originalDataSource = [
  {
    makeId: 1,
    makeNameAr: "تصنيع1",
    makeNameEn: "Make1",
    najmMakeCode: "N123",
    yakeenMakeCode: "Y123",
    giCoreMakeCode: "G123",
    bCareMakeCode: "B123",
    isActive: (
      <Button style={{ width: "5rem" }} type="primary">
        Active
      </Button>
    ),
    createdDate: "23/04/18",
    createdBy: "Admin1",
  },
  {
    makeId: 2,
    makeNameAr: "تصنيع2",
    makeNameEn: "Make2",
    najmMakeCode: "N124",
    yakeenMakeCode: "Y124",
    giCoreMakeCode: "G124",
    bCareMakeCode: "B124",
    isActive: (
      <Button style={{ width: "5rem" }} type="danger">
        InActive
      </Button>
    ),
    createdDate: "24/04/18",
    createdBy: "Admin2",
  },
  {
    makeId: 3,
    makeNameAr: "تصنيع3",
    makeNameEn: "Make3",
    najmMakeCode: "N125",
    yakeenMakeCode: "Y125",
    giCoreMakeCode: "G125",
    bCareMakeCode: "B125",
    isActive: (
      <Button style={{ width: "5rem" }} type="danger">
        InActive
      </Button>
    ),
    createdDate: "25/04/18",
    createdBy: "Admin3",
  },
  {
    makeId: 4,
    makeNameAr: "تصنيع4",
    makeNameEn: "Make4",
    najmMakeCode: "N126",
    yakeenMakeCode: "Y126",
    giCoreMakeCode: "G126",
    bCareMakeCode: "B126",
    isActive: (
      <Button style={{ width: "5rem" }} type="primary">
        Active
      </Button>
    ),
    createdDate: "26/04/18",
    createdBy: "Admin4",
  },
  {
    makeId: 5,
    makeNameAr: "تصنيع5",
    makeNameEn: "Make5",
    najmMakeCode: "N127",
    yakeenMakeCode: "Y127",
    giCoreMakeCode: "G127",
    bCareMakeCode: "B127",
    isActive: (
      <Button style={{ width: "5rem" }} type="primary">
        Active
      </Button>
    ),
    createdDate: "27/04/18",
    createdBy: "Admin5",
  },
  {
    makeId: 6,
    makeNameAr: "تصنيع6",
    makeNameEn: "Make6",
    najmMakeCode: "N128",
    yakeenMakeCode: "Y128",
    giCoreMakeCode: "G128",
    bCareMakeCode: "B128",
    isActive: (
      <Button style={{ width: "5rem" }} type="primary">
        Active
      </Button>
    ),
    createdDate: "28/04/18",
    createdBy: "Admin6",
  },
];

function MakeTable() {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record?.makeId === editingKey;

  const [dataSource, setDataSource] = useState(originalDataSource);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const edit = (record) => {
    form.setFieldsValue({
      bCareMakeCode: "",
      ...record,
    });
    setEditingKey(record?.makeId);
  };
  const onChangeTableFilter = (e) => {
    if (e.target.value === "all") {
      setDataSource(originalDataSource);
    } else if (e.target.value === "active") {
      const activeUsers = originalDataSource.filter(
        (item) => item.isActive.props.children === "Active"
      );
      setDataSource(activeUsers);
    }
  };
  // Function to handle the form submission inside the modal dialog
  const handleOk = () => {
    form.validateFields().then((values) => {
      // Create a new row object using the form values
      const newRow = {
        makeId: dataSource.length + 1, // You can generate a unique ID as needed
        ...values,
        isActive: values.isActive ? (
          <Button style={{ width: "5rem" }} type="primary">
            Active
          </Button>
        ) : (
          <Button style={{ width: "5rem" }} type="danger">
            InActive
          </Button>
        ),
        createdDate: new Date().toLocaleDateString(),
        createdBy: "Admin",
      };

      // Add the new row to the data source
      setDataSource([...dataSource, newRow]);

      // Close the modal dialog
      setIsModalVisible(false);
    });
  };
  // Function to handle the modal dialog cancellation
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSave = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item?.makeId);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataSource(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const cancel = () => {
    setEditingKey("");
  };
  const handleDelete = (key) => {
    console.log(key);
    // Uncomment to send DELETE request to API
    // fetch(`/api/make/${key}`, {
    //   method: 'DELETE',
    // }).then(() => {
    //   const newData = dataSource.filter((item) => item.key !== key);
    //   setDataSource(newData);
    // });

    const newData = dataSource.filter((item) => item.makeId !== key); // Remove this line when uncommenting above
    setDataSource(newData);
  };
  const columns = [
    { title: "ID", dataIndex: "makeId", key: "makeId" },
    { title: "Name Arabic", dataIndex: "makeNameAr", key: "makeNameAr" },
    { title: "Name English", dataIndex: "makeNameEn", key: "makeNameEn" },
    { title: "Najm Code", dataIndex: "najmMakeCode", key: "najmMakeCode" },
    {
      title: "Yakeen Code",
      dataIndex: "yakeenMakeCode",
      key: "yakeenMakeCode",
    },
    {
      title: "GICore Code",
      dataIndex: "giCoreMakeCode",
      key: "giCoreMakeCode",
    },
    { title: "BCare Code", dataIndex: "bCareMakeCode", key: "bCareMakeCode" },
    { title: "Status", dataIndex: "isActive", key: "isActive" },
    { title: "CreatedDate", dataIndex: "createdDate", key: "createdDate" },
    { title: "CreatedBy", dataIndex: "createdBy", key: "createdBy" },
    {
      title: "Delete",
      dataIndex: "Delete",
      render: (_, record) => {
        const editable = isEditing(record);
        return !editable ? (
          dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record?.makeId)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null
        ) : dataSource.length >= 1 ? (
          <Popconfirm title="Can't delete while editing!">
            <a>Delete</a>
          </Popconfirm>
        ) : null;
      },
    },
    {
      title: "Edit",
      dataIndex: "Edit",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => handleSave(record?.makeId)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (
      col.title == "Edit" ||
      col.title == "Delete" ||
      col.title == "CreatedBy" ||
      col.title == "CreatedDate" ||
      col.title == "Status"
    ) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Make Table"
              extra={
                <>
                  <span style={{ marginRight: "20px" }}>
                    <Button type="primary" onClick={showModal}>
                      Add Row
                    </Button>
                    <Modal
                      title="Add New Row"
                      open={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <Form form={form}>
                        <Form.Item
                          name="makeNameAr"
                          label="Name Arabic"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="makeNameEn"
                          label="Name English"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="najmMakeCode"
                          label="Najm Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="yakeenMakeCode"
                          label="Yakeen Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="giCoreMakeCode"
                          label="GICore Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="bCareMakeCode"
                          label="BCare Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="isActive"
                          label="Active"
                          valuePropName="checked"
                        >
                          <Switch />
                        </Form.Item>
                      </Form>
                    </Modal>
                  </span>
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
                <Form form={form} component={false}>
                  <Table
                    columns={mergedColumns}
                    dataSource={dataSource}
                    pagination={false}
                    className="ant-border-space maketable"
                    rowClassName="editable-row"
                    components={{
                      body: {
                        cell: EditableCell,
                      },
                    }}
                  />
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MakeTable;
