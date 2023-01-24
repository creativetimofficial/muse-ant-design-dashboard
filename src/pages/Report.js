import React from 'react'
import {  Col, Row,Space,Input } from "antd";
import { CarryOutOutlined, CheckOutlined, FormOutlined} from '@ant-design/icons';
import { Select,  Tree } from 'antd';
import { useState } from 'react';
import Report2 from './Report2';
import Report3 from './Report3';
import TreeSelect, { TreeNode } from 'rc-tree-select';
import { DatePicker} from 'antd';



const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const provinceData = ['select', 'Jiangsu'];
const cityData = {
  select: ['None', 'Meter Name', 'Address','NMI'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};





const treeData = [
  {
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
    },
    {
      title: 'DEXUX _18 LEE STREET',
      key: '0-1',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'NSW Connected Electricity Report',
          key: '0-1-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: '18 LEE STREET _NCC007244 MI (ID 24677)',
              key: '0-1-0-0',
              icon: <CarryOutOutlined />,
            },
            {
              title: 'leaf',
              key: '0-1-0-1',
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
  const arrow = ' >>'
  //  [
  //   <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m6.05 19 5-7-5-7H8.5l5 7-5 7ZM12 19l5-7-5-7h2.45l5 7-5 7Z"/></svg>
    
  //   ]
    const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const handleLeafIconChange = (value) => {
    if (value === 'custom') {
      return setShowLeafIcon(<CheckOutlined />);
    }
    if (value === 'true') {
      return setShowLeafIcon(true);
    }
    return setShowLeafIcon(false);
  };
  return (
    <>
      <div className="site-card-wrapper" >
    <Row>
      <Col
        style={{ border: "2px solid gray",maxHeight: 500, overflow: 'auto' }}
        xs={{
          // span: 5,
          //   offset: 1,
        }}
        lg={{
          span: 8,
          //   offset: 2,
        }}
      >
        <Row style={{backgroundColor: "rgb(28, 136, 178)",paddingLeft:10}} align="middle">
<Col span={8} >
  <h3 style={{color:"white"}}>Meter Tree </h3>
</Col>
<Col span={6} >

</Col>
<Col span={10} >
  <p style={{color:"white"}}>(Drag requested files {arrow} toFavourites or Reporting) </p>



</Col>

        </Row>

        <Row style={{backgroundColor: "rgb(28, 136, 178)",height:80}}  align="middle">

          <Col span={8} style={{display:'inline'}}>

            <label style={{color:'white',marginLeft:8}}>Search Text:</label>
          <Space direction="horizontal">
        <Input style={{height:32 , borderRadius:0, marginLeft:7}}
        placeholder='search text'
        />
    
      </Space>
          </Col>
          <Col span={8} style={{display:'inline'}}>
          <label style={{color:'white',marginLeft:14}}>Filter Text:</label>
          <Space direction="horizontal">
        <Input style={{height:32 ,borderRadius:0 ,marginLeft:14}}
        placeholder='filter text'
        />
        {/* <Button style={{height:24,marginTop:10}}  >
    
        </Button> */}
       
      </Space>
  
          </Col>
          <Col span={8}>
          <label style={{color:'white',marginLeft:20}}>Filter Type:</label>
            
          <Select
        style={{
          width: 114,
          marginLeft:20,
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
        {/* <TreeSelect

          defaultOpen={true}
          treeIcon={<PlusOutlined />}
          showLine={
            showLine
              ? {
                  showLeafIcon,
                }
              : false
          }
          showIcon={showIcon}
          defaultExpandedKeys={['0-0-0']}
          style
        >
          {
            treeData.map((item, index)=>{
                return <TreeNode value={""} title={item.title} key={item.key} >
                        {
                          item.children.map((children, index)=>
                            <TreeNode value={""} title={children.title} key={children.key} />
                          )
                        }
                      </TreeNode>
            })
          }
        </TreeSelect> */}
       <Tree
       style={{marginLeft:10}}
        showLine={
          showLine
            ? {
                showLeafIcon,
              }
            : false
        }
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    
      </Col>
      <Col
        style={{ border: "2px solid gray", height: 500 }}
        lg={{
          span: 8,
        }}
      >
           <Row style={{backgroundColor: "rgb(28, 136, 178)",height:60,}} align="middle">
<Col span={8} >
  <h3 style={{color:"white" , paddingLeft:10}}>Reporting</h3>
</Col>
<Col span={6} >

</Col>
<Col span={10} >
  {/* <p style={{color:"white"}}>(Drag requested files >> toFavourites or Reporting) </p> */}



</Col>

        </Row>
        <Row style={{backgroundColor: "rgb(28, 136, 178)",height:80}}  align="middle">

          <Col span={8} style={{display:'inline',paddingLeft:7}}>

            <label style={{color:'white',marginLeft:8}}>From Date:</label>
            
          <Space direction="horizontal">
          <DatePicker onChange={onChange} />

    
      </Space>
          </Col>
          <Col span={8} style={{display:'inline'}}>
          <label style={{color:'white',marginLeft:14}}>To Date:</label>
          <Space direction="horizontal">
          <DatePicker onChange={onChange} style={{marginLeft:7}} />
        {/* <Button style={{height:24,marginTop:10}}  >
    
        </Button> */}
       
      </Space>
  
          </Col>
          <Col span={8}>
          <label style={{color:'white',marginLeft:20}}>Schedule:</label>
            
          <Select
        style={{
          width: 114,
          marginLeft:20,
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
      
          <Report2/>
      </Col>
      <Col
        style={{ border: "2px solid gray", height: 500 }}
    
        lg={{
          span: 8 ,
    
        }}
      >
        <Row align='middle' style={{backgroundColor:"rgb(28, 136, 178)",color:'white'}}>
          {/* Chart column */}
        </Row>
        <Report3/>
  
      </Col>
    </Row>
  </div>
    </>
  )
}

export default Report