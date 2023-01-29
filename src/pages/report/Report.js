import React, { useRef } from "react";
import { Card, Col, Row, Space, Input } from "antd";
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
import LeftTreeView from "../../components/TreeComponent/LeftTreeView";
import RightTreeView from "../../components/TreeComponent/RightTreeView";
import TreeDataItems from "../../assets/data/TreeDataItems";
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

  // new changes for tree and drag drop functionality //

  const leftTreeViewRef = useRef(null);
  const rightTreeViewRef = useRef(null);

  const [leftTreeItems, setLeftTreeItems] = useState([...TreeDataItems])
  const [rightTreeItems, setRightTreeItems] = useState([])

  const getLeftTreeView = () => {
    return leftTreeViewRef.current.instance;
  }

  const getRightTreeView = () => {
    return rightTreeViewRef.current.instance;
  }

  const onDragChange = (e) => {
    if (e.fromComponent === e.toComponent) {
      const fromNode = findNode(getTreeView(e.fromData), e.fromIndex);
      const toNode = findNode(getTreeView(e.toData), calculateToIndex(e));
      if (toNode !== null && isChildNode(fromNode, toNode)) {
        e.cancel = true;
      }
    }
  }

  const onDragEnd = (e) => {
    if (e.fromComponent === e.toComponent && e.fromIndex === e.toIndex) {
      return;
    }

    const fromTreeView = getTreeView(e.fromData);
    const toTreeView = getTreeView(e.toData);

    const fromNode = findNode(fromTreeView, e.fromIndex);
    const toNode = findNode(toTreeView, calculateToIndex(e));

    if (e.dropInsideItem && toNode !== null && !toNode.itemData.isDirectory) {
      return;
    }

    const fromTopVisibleNode = getTopVisibleNode(e.fromComponent)
    const toTopVisibleNode = getTopVisibleNode(e.toComponent)

    const fromItems = e.fromData === "leftTree" ? leftTreeItems : rightTreeItems
    const toItems = e.toData === "leftTree" ? leftTreeItems : rightTreeItems
    
    
    if(toItems?.findIndex(item => item.id === fromNode?.itemData?.id) !== -1) {
      return;
    }
    moveNode(fromNode, toNode, fromItems, toItems, e.dropInsideItem)
    // if (e.formData === "leftTree") {
    //   setLeftTreeItems([...fromItems])
    // } else {
    //   setRightTreeItems([...fromItems])
    // }

    // if (e.toData === "leftTree") {
    //   setLeftTreeItems([...toItems])
    // } else {
    //   se.tRightTreeItems([...toItems])
    // }
    if(e.fromData === "rightTree"){
      setRightTreeItems([...fromItems])
    }
    if(e.toData === "rightTree"){
      setRightTreeItems([...toItems])
    }

    fromTreeView.scrollToItem(fromTopVisibleNode);
    toTreeView.scrollToItem(toTopVisibleNode);
  }

  const getTreeView = (treeName) => {
    return treeName === 'leftTree'
      ? getLeftTreeView()
      : getRightTreeView()
  }



  const calculateToIndex = (e) => {
    if (e.fromComponent !== e.toComponent || e.dropInsideItem) {
      return e.toIndex;
    }

    return e.fromIndex >= e.toIndex
      ? e.toIndex
      : e.toIndex + 1;
  }

  const findNode = (treeView, index) => {
    const nodeElement = treeView.element().querySelectorAll('.dx-treeview-node')[index];
    if (nodeElement) {
      return findNodeById(treeView.getNodes(), nodeElement.getAttribute('data-item-id'));
    }
    return null;
  }

  const findNodeById = (nodes, id) => {
    for (let i = 0; i < nodes.length; i += 1) {
      if (nodes[i].itemData.id === id) {
        return nodes[i];
      }
      if (nodes[i].children) {
        const node = findNodeById(nodes[i].children, id);
        if (node != null) {
          return node;
        }
      }
    }
    return null;
  }

  const moveNode = (fromNode, toNode, fromItems, toItems, isDropInsideItem) => {
    const fromIndex = fromItems.findIndex((item) => item.id === fromNode.itemData.id);
    fromItems.splice(fromIndex, 1);

    const toIndex = toNode === null || isDropInsideItem
      ? toItems.length
      : toItems.findIndex((item) => item.id === toNode.itemData.id);
    toItems.splice(toIndex, 0, fromNode.itemData);

    moveChildren(fromNode, fromItems, toItems);
    if (isDropInsideItem) {
      fromNode.itemData.parentId = toNode.itemData.id;
    } else {
      fromNode.itemData.parentId = toNode != null
        ? toNode.itemData.parentId
        : undefined;
    }
  }

  const moveChildren = (node, fromDataSource, toDataSource) => {
    
    if (!node.itemData.isDirectory) {
      return;
    }

    node.children.forEach((child) => {
      if (child.itemData.isDirectory) {
        moveChildren(child, fromDataSource, toDataSource);
      }

      const fromIndex = fromDataSource.findIndex((item) => item.id === child.itemData.id);
      fromDataSource.splice(fromIndex, 1);
      toDataSource.splice(toDataSource.length, 0, child.itemData);
    });
  }

  const isChildNode = (parentNode, childNode) => {
    let { parent } = childNode;
    while (parent !== null) {
      if (parent.itemData.id === parentNode.itemData.id) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  const getTopVisibleNode = (component) => {
    const treeViewElement = component.element();
    const treeViewTopPosition = treeViewElement.getBoundingClientRect().top;
    const nodes = treeViewElement.querySelectorAll('.dx-treeview-node');
    for (let i = 0; i < nodes.length; i += 1) {
      const nodeTopPosition = nodes[i].getBoundingClientRect().top;
      if (nodeTopPosition >= treeViewTopPosition) {
        return nodes[i];
      }
    }

    return null;
  }


  return (
    <>
      <Row>
        <Col span={8} >
          <Card style={{ backgroundColor: "rgb(28, 136, 178)", height: 500 }}>
            <Row>
              <Col span={12}>
                <h3 style={{ color: "white" }}>Meter Tree </h3>
              </Col>
              <Col span={12}>
                <p style={{ color: "white", textAlign: 'end' }}>
                  (Drag requested files {arrow} toFavourites or Reporting){" "}
                </p>
              </Col>
            </Row>
            <Row gutter={[10, 10]} style={{ height: 60 }}>
              <Col span={8}>
                <label style={{ color: "white" }}>
                  Search Text:
                </label>
                <Input
                  style={{
                    width: "100%",
                    height: 32,
                    borderRadius: 0
                  }}
                  placeholder="search text"
                />
              </Col>
              <Col span={8}>
                <label style={{ color: "white" }}>
                  Filter Text:
                </label>
                <Input
                  style={{
                    width: "100%",
                    height: 32,
                    borderRadius: 0
                  }}
                  placeholder="filter text"
                />
              </Col>
              <Col span={8}>
                <label style={{ color: "white" }}>
                  Filter Type:
                </label>
                <Select
                  style={{
                    width: "100%",
                    height: 32,
                    borderRadius: 0
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
            <Row>
              <Card style={{ width: "100%" }}>
                <LeftTreeView
                  onDragChange={onDragChange}
                  onDragEnd={onDragEnd} 
                  leftTreeViewRef={leftTreeViewRef}
                  leftTreeItems={leftTreeItems}
                />
              </Card>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ backgroundColor: "rgb(28, 136, 178)", height: 500 }}>
            <Row style={{ height: 60 }}>
              <Col span={24}>
                <h3 style={{ color: "white", paddingLeft: 10 }}>Reporting</h3>
              </Col>
            </Row>
            <Row gutter={[10, 10]} style={{ height: 60 }}>
              <Col span={8}>
                <label style={{ color: "white" }}>
                  From Date:
                </label>
                <DatePicker
                  style={{
                    width: "100%",
                    borderRadius: 0,
                    height: 32
                  }}
                  onChange={onChange}
                />
              </Col>
              <Col span={8}>
                <label style={{ color: "white" }}>
                  To Date:
                </label>
                <DatePicker
                  style={{
                    width: "100%",
                    borderRadius: 0,
                    height: 32
                  }}
                  onChange={onChange}
                />
              </Col>
              <Col span={8}>
                <label style={{ color: "white" }}>
                  Schedule:
                </label>
                <Select
                  style={{
                    width: "100%",
                    borderRadius: 0,
                    height: 32
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
            <Row>
              <Card style={{ width: "100%" }}>
                <RightTreeView
                  onDragChange={onDragChange}
                  onDragEnd={onDragEnd}
                  rightTreeViewRef={rightTreeViewRef}
                  rightTreeItems={rightTreeItems}
                />
              </Card>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ height: 500 }}>
            <ReportChart />
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Report;
