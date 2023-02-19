import React,{useState,useEffect,useContext} from 'react'
import {Spin, Card, Col, Row, Typography, Button, } from "antd";
import { getCo2eData } from '../../services/DashboardService';
import { AppContext } from '../../App';

function Co2(props) {
  
  const [isLoading,setIsLoading] = useState(false)
   const [co2eData, setCo2eData] = useState();
 const context = useContext(AppContext);
  const getData = async () => {
    setIsLoading(true)
    try {
      const resp = await getCo2eData();
      // console.log("coe2 dta", resp?.co2e);
      setCo2eData(resp?.co2e);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const { Title } = Typography;
  return (
    <Spin spinning={isLoading}>
    <Card bordered={false} className="criclebox ">
      <div className="number">
        <Row align="middle" gutter={[24, 0]}>
          <Col xs={15}>
            <div className="icon-box ">{props.data.icon}</div>
          </Col>
          <Col className="col text-center" xs={24}>
            <span className="dashboardCard">{props.data.today}</span>
            <Title level={2}>
              <span  className="dashboardCardTitle" style={{backgroundColor:context.sidenavColor}}>{co2eData?.title}</span>
              <small className={props.data.bnb}>{props.data.persent}</small>
              <p>{props.data.dec}</p>
            </Title>
          </Col>
        </Row>
      </div>
    </Card>
    </Spin>
  )
}
export default Co2;