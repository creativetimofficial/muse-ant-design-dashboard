import { useState } from "react";
import { useContext } from "react";
import { Select, DatePicker, Space, Card, Col, Row } from "antd";
import Echart from "../components/chart/dashboard/EChart";
import LineChart from "../components/chart/dashboard/LineChart";
import Consumption from "./dashboard/Consumption";
import EnergyCost from "./dashboard/EnergyCost";
import Co2 from "./dashboard/Co2";
import WeatherInfo from "./dashboard/WeatherInfo";
import ColumnChart from "../components/chart/dashboard/ColumnChart";
import { AppContext } from "../App";

const { RangePicker } = DatePicker;
function Home(props) {
  const context = useContext(AppContext);
  const consumption = [
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" key={0}>
      <path d="M23.25 26.5v7.8q0 .6.575.75.575.15.825-.4l5.8-12.05q.2-.4-.025-.75t-.625-.35h-4.75v-7.9q0-.6-.575-.75-.575-.15-.825.4L17.5 25.4q-.2.4.025.75t.625.35ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24t1.575-7.75q1.575-3.65 4.3-6.375 2.725-2.725 6.375-4.3Q19.9 4 24 4t7.75 1.575q3.65 1.575 6.375 4.3 2.725 2.725 4.3 6.375Q44 19.9 44 24t-1.575 7.75q-1.575 3.65-4.3 6.375-2.725 2.725-6.375 4.3Q28.1 44 24 44Zm0-20Zm0 17q7 0 12-5t5-12q0-7-5-12T24 7q-7 0-12 5T7 24q0 7 5 12t12 5Z" />
    </svg>,
  ];
  const energy = [
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" key={1}>
      <path d="M24 44q-1.35 0-2.375-.65t-1.325-1.8h-.7q-1.2 0-2.1-.9-.9-.9-.9-2.1V31.4q-3.3-2.15-5.2-5.5-1.9-3.35-1.9-7.4 0-6.05 4.225-10.275Q17.95 4 24 4q6.05 0 10.275 4.225Q38.5 12.45 38.5 18.5q0 4.05-1.9 7.4-1.9 3.35-5.2 5.5v7.15q0 1.2-.9 2.1-.9.9-2.1.9h-.7q-.3 1.15-1.325 1.8Q25.35 44 24 44Zm-4.4-5.45h8.8v-2.2h-8.8Zm0-4.2h8.8v-2h-8.8Zm-.45-5h3.7V22.5l-4.6-4.6 1.55-1.55 4.2 4.2 4.2-4.2 1.55 1.55-4.6 4.6v6.85h3.7q3-1.4 4.825-4.35 1.825-2.95 1.825-6.5 0-4.85-3.325-8.175Q28.85 7 24 7q-4.85 0-8.175 3.325Q12.5 13.65 12.5 18.5q0 3.55 1.825 6.5t4.825 4.35Zm4.85-8.8Zm0-2.4Z" />
    </svg>,
  ];
  const co2 = [
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" key={2}>
      <path d="M12.55 40q-4.4 0-7.475-3.075Q2 33.85 2 29.45q0-4.05 2.525-6.875t6.325-3.525q.9-4.7 4.625-7.875T24.05 8q5.55 0 9.45 4.075 3.9 4.075 3.9 9.825v1.2q3.75 0 6.175 2.425T46 31.55q0 3.45-2.5 5.95T37.55 40Zm0-3h25q2.25 0 3.85-1.6t1.6-3.85q0-2.25-1.6-3.85t-3.85-1.6H34.4v-4.2q0-4.4-2.975-7.65T24.05 11q-3.5 0-6.45 2.175T13.75 19q4 .55 6.6 3.2 2.6 2.65 2.6 6.8h-3q0-3.15-2.2-5.125T12.4 21.9q-3.15 0-5.275 2.2Q5 26.3 5 29.45q0 3.15 2.2 5.35Q9.4 37 12.55 37Z" />
    </svg>,
  ];

  const clearNight = [
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" key={6}>
      <path d="M26.2 46q-4.2 0-7.875-1.6t-6.4-4.325Q9.2 37.35 7.6 33.675 6 30 6 25.8q0-7.3 4.65-12.875T22.5 6q-.9 4.9.55 9.625 1.45 4.725 5 8.275 3.55 3.55 8.275 5.025Q41.05 30.4 46 29.5q-1.3 7.2-6.9 11.85Q33.5 46 26.2 46Zm0-3q5 0 9.1-2.85t6.6-7.25q-4.5-.4-8.65-2.075Q29.1 29.15 25.95 26q-3.2-3.15-4.85-7.275-1.65-4.125-2.05-8.575-4.4 2.4-7.225 6.525Q9 20.8 9 25.8q0 7.15 5.025 12.175T26.2 43Zm-.3-17Z" />
    </svg>,
  ];
  const count = [
    {
      today: "Consumption",
      title: "8087.3kWh",
      dec: "Energy in kwh, that has been consumed ",
      icon: consumption,
      bnb: "bnb2",
    },
    {
      today: "Energy Cost",
      title: "$1374.6",
      dec: "Usage cost only",
      icon: energy,
      bnb: "bnb2",
    },
    {
      today: "CO2e",
      title: "63Kg",
      dec: "Tree seedlings equivalent to 10 years",
      icon: co2,
      bnb: "redtext",
    },
  ];

  const count1 = [
    {
      today: "31.6°C",
      title: "Perth",
      dec: "Clear",
      icon: <span className="iconText"> {clearNight} 21&#8451;</span>,
      bnb: "bnb2",
      Pressure: "1014.6",
      Humidity: "10%",
      Wind: "6.3m/s",
    },
  ];

  const provinceData = ["site", ""];
  const cityData = {
    site: ["select", "all site", "site A", "site B"],
    // gav: ["Nanjing", "Suzhou", "Zhenjiang"],
  };
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  
  return (
    <div style={{color:'red'}}>
      <Row>
        <Col span={16}>
          <Select
            style={{
              width: 160,
              marginBottom: 15,
              marginRight: 25,
            }}
            value={secondCity}
            onChange={onSecondCityChange}
            options={cities.map((city) => ({
              label: city,
              value: city,
            }))}
          />
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
          <Select
            style={{
              width: 100,
              marginBottom: 25,
              marginLeft: 25,
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

      <Row align="middle" gutter={24}>
        <Col span={6} xs={24} sm={24} md={12} lg={5} xl={5}>
          <Consumption data={count[0]} />
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={5} xl={5}>
          <EnergyCost data={count[1]} />
        </Col>
        <Col span={6} xs={24} sm={24} md={12} lg={5} xl={5}>
          <Co2 data={count[2]} />
        </Col>

        <WeatherInfo />
      </Row>

      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={5}
              xl={5}
              className="mb-16"
            ></Col>
          ))}

          <Col xs={24} sm={24} md={12} lg={12} xl={9} className="mb-24">
            <Row className="" gutter={[24, 0]}>
              {count1.map((d, index) => (
                <Col
                  key={index}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  className="mb-16"
                ></Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Echart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ColumnChart />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
