import React from "react";
import { Card, Col, Row } from "antd";
import DropdownTreeSelect from "react-dropdown-tree-select";
import {
  CarryOutOutlined,
  CheckOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Select, Switch, Tree } from "antd";
import { useState } from "react";


const ReportTreeData = [ {
  title: 'DEXUS _1 BLIGH STREET',
  key: '0-0',
  icon: <CarryOutOutlined />,
  children: [
    {
      title: 'NSW Connected Electricity Report',
      key: '0-0-0',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: '1 BLIGH ST_AC LEVEL 27 (ID 16131)',
            key: '0-0-0-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: (
              <>
                <div>1 BLIGH ST_AC LEVEL 27 (ID 16132)</div>
                
              </>
            ),
            key: '0-0-0-1',
            icon: <CarryOutOutlined />,
          },
          {
            title: '1 BLIGH ST_AC LEVEL 27 (ID 16133)',
            key: '0-0-0-2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'NSW Gas Report',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: '1 BLIGH ST_AC LEVEL 27 (ID 16131)',
            key: '0-0-1-0',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'DEXUX _1 MACQUARIE',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: '1 BLIGH ST_AC LEVEL 27 (ID 16132)',
            key: '0-0-2-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: '1 BLIGH ST_AC LEVEL 27 (ID 16133)',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },]


function Report2() {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
const arrow = [
<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m6.05 19 5-7-5-7H8.5l5 7-5 7ZM12 19l5-7-5-7h2.45l5 7-5 7Z"/></svg>

]

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
      <div className="site-card-wrapper" style={{paddingLeft:10}}>
        {/* <Row> */}
          {/* <Col xs={{ span: 11, offset: 1 }} lg={{ span: 7 }}> */}
            <Tree
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
              treeData={ReportTreeData}
            />
          {/* </Col> */}
        {/* </Row> */}
      </div>
    </>
  );
}


export default Report2;



