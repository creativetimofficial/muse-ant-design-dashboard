import React ,{useState,useEffect,useContext}from "react";
import {Spin, Card, Col, Row, Typography, } from "antd";
import { getEnergyCostData } from "../../services/DashboardService";
import { AppContext } from "../../App";


function EnergyCost(props) {
  const [energyData, setEnergyData] = useState();
  const [isLoading , setIsLoading] = useState(false)
const context = useContext(AppContext)
  const getData = async () => {
    setIsLoading(true)
    try {
      const resp = await getEnergyCostData();
      // console.log("consuData", resp?.energyCost);
      setEnergyData(resp?.energyCost);
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
              <span style={{backgroundColor:context.sidenavColor}} className="dashboardCardTitle">{energyData?.title}</span>
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

export default EnergyCost