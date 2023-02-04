import React from "react";
import { Card, Col, Row, Typography, } from "antd";


function Consumption(props) {
  const { Title } = Typography;
  return (
    <Card bordered={false} className="criclebox ">
      <div className="number">
        <Row align="middle" gutter={[24, 0]}>
          <Col xs={15}>
            <div className="icon-box ">{props.data.icon}</div>
          </Col>
          <Col className="col text-center" xs={24}>
            <span className="dashboardCard">{props.data.today}</span>
            <Title level={2}>
              <span className="dashboardCardTitle">{props.data.title}</span>
              <small className={props.data.bnb}>{props.data.persent}</small>
              <p>{props.data.dec}</p>
            </Title>
          </Col>
        </Row>
      </div>
    </Card>
  )
}
export default Consumption;