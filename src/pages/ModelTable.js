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

const originalDataSource = [
  {
    ModelId: 1,
    MakeId: 1,
    ModelNameAr: "نموذج1",
    ModelNameEn: "Model1",
    NajmModelCode: "N123",
    YakeenModelCode: "Y123",
    GICoreModelCode: "G123",
    BCareModelCode: "B123",
    NationalityId: 1,
    SeatingCapacity: 5,
    Weight: 1500,
    IsActive: (
      <Button style={{ width: "5rem" }} type="primary">
        Active
      </Button>
    ),
    CreatedDate: "23/04/18",
    CreatedBy: "Admin1",
    ModelCategoryId: 1,
    VehicleGroupCode: "V123",
  },
  {
    ModelId: 2,
    MakeId: 2,
    ModelNameAr: "نموذج2",
    ModelNameEn: "Model2",
    NajmModelCode: "N124",
    YakeenModelCode: "Y124",
    GICoreModelCode: "G124",
    BCareModelCode: "B124",
    NationalityId: 2,
    SeatingCapacity: 4,
    Weight: 1600,
    IsActive: (
      <Button style={{ width: "5rem" }} type="danger">
        InActive
      </Button>
    ),
    CreatedDate: "24/04/18",
    CreatedBy: "Admin2",
    ModelCategoryId: 2,
    VehicleGroupCode: "V124",
  },
  {
    ModelId: 3,
    MakeId: 3,
    ModelNameAr: "نموذج3",
    ModelNameEn: "Model3",
    NajmModelCode: "N125",
    YakeenModelCode: "Y125",
    GICoreModelCode: "G125",
    BCareModelCode: "B125",
    NationalityId: 3,
    SeatingCapacity: 6,
    Weight: 1700,
    IsActive: (
      <Button style={{ width: "5rem" }} type="primary">
        Active
      </Button>
    ),
    CreatedDate: "25/04/18",
    CreatedBy: "Admin3",
    ModelCategoryId: 3,
    VehicleGroupCode: "V125",
  },
  {
    ModelId: 4,
    MakeId: 4,
    ModelNameAr: "نموذج4",
    ModelNameEn: "Model4",
    NajmModelCode: "N126",
    YakeenModelCode: "Y126",
    GICoreModelCode: "G126",
    BCareModelCode: "B126",
    NationalityId: 4,
    SeatingCapacity: 4,
    Weight: 1800,
    IsActive: (
      <Button style={{ width: "5rem" }} type="danger">
        InActive
      </Button>
    ),
    CreatedDate: "26/04/18",
    CreatedBy: "Admin4",
    ModelCategoryId: 4,
    VehicleGroupCode: "V126",
  },
  {
    ModelId: 5,
    MakeId: 5,
    ModelNameAr: "نموذج5",
    ModelNameEn: "Model5",
    NajmModelCode: "N127",
    YakeenModelCode: "Y127",
    GICoreModelCode: "G127",
    BCareModelCode: "B127",
    NationalityId: 5,
    SeatingCapacity: 5,
    Weight: 1900,
    IsActive: (
      <Button style={{ width: "5rem" }} type="primary">
        Active
      </Button>
    ),
    CreatedDate: "27/04/18",
    CreatedBy: "Admin5",
    ModelCategoryId: 5,
    VehicleGroupCode: "V127",
  },
];


function ModelTable() {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record?.ModelId === editingKey;

  const [dataSource, setDataSource] = useState(originalDataSource);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const edit = (record) => {
    form.setFieldsValue({
      BCareModelCode: "",
      ...record,
    });
    setEditingKey(record?.ModelId);
  };

  const onChangeTableFilter = (e) => {
    if (e.target.value === "all") {
      setDataSource(originalDataSource);
    } else if (e.target.value === "active") {
      const activeUsers = originalDataSource.filter(
        (item) => item.IsActive.props.children === "Active"
      );
      setDataSource(activeUsers);
    }
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newRow = {
        ModelId: dataSource.length + 1,
        ...values,
        IsActive: values.IsActive ? (
          <Button style={{ width: "5rem" }} type="primary">
            Active
          </Button>
        ) : (
          <Button style={{ width: "5rem" }} type="danger">
            InActive
          </Button>
        ),
        CreatedDate: new Date().toLocaleDateString(),
        CreatedBy: "Admin",
      };
      setDataSource([...dataSource, newRow]);
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSave = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item?.ModelId);
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
    const newData = dataSource.filter((item) => item.ModelId !== key);
    setDataSource(newData);
  };

  const columns = [
    { title: "Model ID", dataIndex: "ModelId", key: "ModelId" },
    { title: "Make ID", dataIndex: "MakeId", key: "MakeId" },
    { title: "Name Arabic", dataIndex: "ModelNameAr", key: "ModelNameAr" },
    { title: "Name English", dataIndex: "ModelNameEn", key: "ModelNameEn" },
    { title: "Najm Code", dataIndex: "NajmModelCode", key: "NajmModelCode" },
    { title: "Yakeen Code", dataIndex: "YakeenModelCode", key: "YakeenModelCode" },
    { title: "GICore Code", dataIndex: "GICoreModelCode", key: "GICoreModelCode" },
    { title: "BCare Code", dataIndex: "BCareModelCode", key: "BCareModelCode" },
    { title: "Nationality ID", dataIndex: "NationalityId", key: "NationalityId" },
    { title: "Seating Capacity", dataIndex: "SeatingCapacity", key: "SeatingCapacity" },
    { title: "Weight", dataIndex: "Weight", key: "Weight" },
    { title: "Model Category ID", dataIndex: "ModelCategoryId", key: "ModelCategoryId" },
    { title: "Vehicle Group Code", dataIndex: "VehicleGroupCode", key: "VehicleGroupCode" },
    { title: "Status", dataIndex: "IsActive", key: "IsActive" },
    { title: "Created Date", dataIndex: "CreatedDate", key: "CreatedDate" },
    { title: "Created By", dataIndex: "CreatedBy", key: "CreatedBy" },
    {
      title: "Delete",
      dataIndex: "Delete",
      render: (_, record) => {
        const editable = isEditing(record);
        return !editable ? (
          dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record?.ModelId)}
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
              onClick={() => handleSave(record?.ModelId)}
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
      col.title === "Edit" ||
      col.title === "Delete" ||
      col.title === "Created By" ||
      col.title === "Created Date" ||
      col.title === "Status"
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
              title="Model Table"
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
                          name="MakeId"
                          label="Make ID"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="ModelNameAr"
                          label="Name Arabic"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="ModelNameEn"
                          label="Name English"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="NajmModelCode"
                          label="Najm Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="YakeenModelCode"
                          label="Yakeen Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="GICoreModelCode"
                          label="GICore Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="BCareModelCode"
                          label="BCare Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="NationalityId"
                          label="Nationality ID"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="SeatingCapacity"
                          label="Seating Capacity"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="Weight"
                          label="Weight"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="IsActive"
                          label="Active"
                          valuePropName="checked"
                        >
                          <Switch />
                        </Form.Item>
                        <Form.Item
                          name="ModelCategoryId"
                          label="Model Category ID"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="VehicleGroupCode"
                          label="Vehicle Group Code"
                          rules={[{ required: true }]}
                        >
                          <Input />
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

export default ModelTable;
