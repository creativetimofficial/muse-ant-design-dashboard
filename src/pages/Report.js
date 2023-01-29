import React, { useRef } from 'react'
import { Col, Row, Space, Input, Card } from "antd";
import { Select } from 'antd';
import { useState } from 'react';
import { DatePicker } from 'antd';

import TreeView from 'devextreme-react/tree-view';
import Sortable from 'devextreme-react/sortable';
import LeftTreeView from '../components/TreeComponent/LeftTreeView';



const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const provinceData = ['select', 'Jiangsu'];
const cityData = {
  select: ['None', 'Meter Name', 'Address', 'NMI'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

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



  return (
    <>
      <div className="site-card-wrapper" >
        <Row>
          <Col style={{ border: "2px solid gray", maxHeight: 500, overflow: 'auto' }} span={8}>
            <Row style={{ backgroundColor: "rgb(28, 136, 178)", paddingLeft: 10 }} align="middle">
              <Col span={12} >
                <h3 style={{ color: "white" }}>Meter Tree </h3>
              </Col>
              <Col span={12} >
                <p style={{ color: "white" }}>(Drag requested files {arrow} toFavourites or Reporting) </p>
              </Col>
            </Row>
            <Row style={{ backgroundColor: "rgb(28, 136, 178)", height: 80 }} align="middle">
              <Col span={8} style={{ display: 'inline' }}>
                <label style={{ color: 'white', marginLeft: 8 }}>Search Text:</label>
                <Space direction="horizontal">
                  <Input style={{ height: 32, borderRadius: 0, marginLeft: 7 }}
                    placeholder='search text'
                  />
                </Space>
              </Col>
              <Col span={8} style={{ display: 'inline' }}>
                <label style={{ color: 'white', marginLeft: 14 }}>Filter Text:</label>
                <Input style={{ height: 32, borderRadius: 0, marginLeft: 14 }}
                  placeholder='filter text'
                />
              </Col>
              <Col span={8}>
                <label style={{ color: 'white', marginLeft: 20 }}>Filter Type:</label>
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
                  
          </Col>
          <Col
            style={{ border: "2px solid gray", height: 500 }}
            lg={{
              span: 8,
            }}
          >
            <Row style={{ backgroundColor: "rgb(28, 136, 178)", height: 60, }} align="middle">
              <Col span={8} >
                <h3 style={{ color: "white", paddingLeft: 10 }}>Reporting</h3>
              </Col>
            </Row>
            <Row style={{ backgroundColor: "rgb(28, 136, 178)", height: 80 }} align="middle">
              <Col span={8} style={{ display: 'inline', paddingLeft: 7 }}>
                <label style={{ color: 'white', marginLeft: 8 }}>From Date:</label>
                <Space direction="horizontal">
                  <DatePicker onChange={onChange} />
                </Space>
              </Col>
              <Col span={8} style={{ display: 'inline' }}>
                <label style={{ color: 'white', marginLeft: 14 }}>To Date:</label>
                <Space direction="horizontal">
                  <DatePicker onChange={onChange} style={{ marginLeft: 7 }} />
                </Space>
              </Col>
              <Col span={8}>
                <label style={{ color: 'white', marginLeft: 20 }}>Schedule:</label>
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
          </Col>
          <Col
            style={{ border: "2px solid gray", height: 500 }}
            lg={{
              span: 8,

            }}
          >
            <Row align='middle' style={{ backgroundColor: "rgb(28, 136, 178)", color: 'white' }}>
              {/* Chart column */}
            </Row>
            <Report3 />

          </Col>
        </Row>
      </div>
    </>
  )
}

export default Report