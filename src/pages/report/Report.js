import React from "react";
import { Card, Col, Row, Space, Input } from "antd";
import { Container, Draggable } from 'react-smooth-dnd';
import {
  CarryOutOutlined,
  CheckOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Select, Tree } from "antd";
import { useState } from "react";
import { DatePicker } from "antd";
import Reporting from "./Reporting";
import ReportChart from "./ReportChart";
// import CustomTreeNode from "../../components/TreeComponent/CustomTreeNode";
const { TreeNode } = Tree;


// import { DndProvider } from "react-dnd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const provinceData = ["select", "Jiangsu"];
const cityData = {
  select: ["None", "Meter Name", "Address", "NMI"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};

const treeData = [
  {
    title: "DEXUS _1 BLIGH STREET",
    key: "0-0",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "NSW Connected Electricity Report",
        key: "0-0-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "1 BLIGH ST_AC LEVEL 27 (ID 16131)",
            key: "0-0-0-0",
            icon: <CarryOutOutlined />
          },
          {
            title: (
              <>
                <div>1 BLIGH ST_AC LEVEL 27 (ID 16132)</div>
              </>
            ),
            key: "0-0-0-1",
            icon: <CarryOutOutlined />,
          },
          {
            title: "1 BLIGH ST_AC LEVEL 27 (ID 16133)",
            key: "0-0-0-2",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: "NSW Gas Report",
        key: "0-0-1",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "1 BLIGH ST_AC LEVEL 27 (ID 16131)",
            key: "0-0-1-0",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: "DEXUX _1 MACQUARIE",
        key: "0-0-2",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "1 BLIGH ST_AC LEVEL 27 (ID 16132)",
            key: "0-0-2-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "1 BLIGH ST_AC LEVEL 27 (ID 16133)",
            key: "0-0-2-1",
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: "DEXUX _18 LEE STREET",
    key: "0-1",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "NSW Connected Electricity Report",
        key: "0-1-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "18 LEE STREET _NCC007244 MI (ID 24677)",
            key: "0-1-0-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "leaf",
            key: "0-1-0-1",
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];

function Report() {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const arrow = " >>";

  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const handleLeafIconChange = (value) => {
    if (value === "custom") {
      return setShowLeafIcon(<CheckOutlined />);
    }
    if (value === "true") {
      return setShowLeafIcon(true);
    }
    return setShowLeafIcon(false);
  };
  return (
    <>
      <Row>
        <Col span={12}>
          <Card
            style={{ backgroundColor: "rgb(28, 136, 178)", paddingLeft: 10 }}
          >
            {/* meter tree row start */}
            <Row>
              <Col span={""}>
                <h3 style={{ color: "white" }}>Meter Tree </h3>
              </Col>
              <Col span={6}></Col>
              <Col span={14}>
                <p style={{ color: "white" }}>
                  (Drag requested files {arrow} toFavourites or Reporting){" "}
                </p>
              </Col>
            </Row>
            {/* meter tree row end */}
            <Row>
              {/* inpput row start */}
              <Row style={{ height: 105, marginTop: 6 }} align="middle">
                <Col span={8}>
                  <label style={{ color: "white", marginLeft: 8 }}>
                    Search Text:
                  </label>

                  <Input
                    style={{ height: 32, borderRadius: 0, marginLeft: 7 }}
                    placeholder="search text"
                  />
                </Col>
                <Col span={8} style={{ display: "inline" }}>
                  <label style={{ color: "white", marginLeft: 14 }}>
                    Filter Text:
                  </label>
                  <Space direction="horizontal">
                    <Input
                      style={{ height: 32, borderRadius: 0, marginLeft: 14 }}
                      placeholder="filter text"
                    />
                  </Space>
                </Col>
                <Col span={8}>
                  <label style={{ color: "white", marginLeft: 20 }}>
                    Filter Type:
                  </label>

                  <Select
                    style={{
                      width: 114,
                      marginLeft: 20,
                    }}
                    value={secondCity}
                    onChange={onSecondCityChange}
                    options={cities.map((city) => ({
                      label: city,
                      value: city,
                    }))}
                  />
                </Col>
              </Row>
            </Row>
            {/* inpput row end */}

            <Row style={{ width: 580, backgroundColor: "white" }}>
              {/* tree row s */}
              <Container>
              {/* <Draggable key={1} children={Draggable}> */}
              <Tree
                style={{ marginLeft: 10, height: 428, marginTop: 20 }}
                showLine={
                  showLine
                    ? {
                        showLeafIcon,
                      }
                    : false
                }
                showIcon={showIcon}
                defaultExpandedKeys={["0-0-0"]}
                onSelect={onSelect}
                
                // treeData={()=>
                 
                // }

              >
                {
                   treeData.map((parent, parentKey)=>
                    <TreeNode  key={parent.key} title={parent.title}>
                      <Draggable key={parentKey}>
                        {
                          parent.children.map((children, childrenKey)=>
                          // <Draggable key={childrenKey}>
                            <TreeNode  
                              key={children.key} 
                              title={children.title}
                              // data={<Draggable key={childrenKey}><h1>{children.title}</h1> </Draggable> }
                            />
                          // 
                          )
                        }
                      </Draggable>
                    </TreeNode>  
                  )  
                }
                </Tree>
{/* </Draggable> */}
</Container>
              {/* tree row e */}
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          {/* second main column */}
          <Card
            style={{ backgroundColor: "rgb(28, 136, 178)", paddingLeft: 10 }}
          >
            <h3 style={{ color: "white", paddingLeft: 10 }}>Reporting</h3>
            <Row style={{ marginTop: "", height: 35 }}>
              <Col span={""}></Col>
              <Col span={6}></Col>
              <Col span={10}></Col>
            </Row>
            <Row style={{ paddingBottom: 7 }}>
              <Col span={8} style={{ paddingLeft: 7 }}>
                <label style={{ color: "white", marginLeft: 8 }}>
                  From Date:
                </label>

                <DatePicker onChange={onChange} />
              </Col>
              <Col span={8}>
                <label style={{ color: "white", marginLeft: 14 }}>
                  To Date:
                </label>

                <DatePicker onChange={onChange} style={{ marginLeft: 7 }} />
              </Col>
              <Col span={8}>
                <label style={{ color: "white", marginLeft: 20 }}>
                  Schedule:
                </label>

                <Select
                  style={{
                    width: 114,
                    marginLeft: 20,
                  }}
                  value={secondCity}
                  onChange={onSecondCityChange}
                  options={cities.map((city) => ({
                    label: city,
                    value: city,
                  }))}
                />
              </Col>
            </Row>
            <Reporting />
          </Card>

          {/* second main column end */}
        </Col>
      </Row>

      <Card style={{ marginTop: 50 }}>
        <ReportChart />
      </Card>
    </>
  );
}

export default Report;
