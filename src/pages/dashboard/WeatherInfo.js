import React, { useState, useEffect } from "react";
import { Card, Col, Row, Typography } from "antd";
import { getWeatherInfoData } from "../../services/DashboardService";
import { Item } from "devextreme-react/accordion";

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState({});

  const getData = async () => {
    try {
      const resp = await getWeatherInfoData();
      // console.log('weatherData',resp?.weatherInfo)
    let weatherdata =   resp?.weatherInfo;
      setWeatherData(resp?.weatherInfo);
    } catch (error) {}
  };
  // const wData = { ...weatherData };
  // console.log(wData);
  useEffect(() => {
    getData();
  }, []);
  const { Title } = Typography;
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const sun = [
    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" key={3}>
      <path d="M18.958 8.5V2.542h2.084V8.5Zm9.917 4.083-1.458-1.416 4.166-4.292 1.5 1.5Zm2.625 8.459v-2.084h5.958v2.084ZM18.958 37.458v-5.916h2.084v5.916Zm-7.833-24.916-4.25-4.125 1.542-1.5 4.208 4.208Zm20.5 20.583-4.208-4.292 1.416-1.375 4.25 4.084ZM2.542 21.042v-2.084H8.5v2.084Zm5.875 12.083-1.5-1.542 4.166-4.125.75.709.792.708ZM20 29.167q-3.833 0-6.5-2.667T10.833 20q0-3.833 2.667-6.5t6.5-2.667q3.833 0 6.5 2.667t2.667 6.5q0 3.833-2.667 6.5T20 29.167Zm0-2.084q2.917 0 5-2.062 2.083-2.063 2.083-5.021 0-2.917-2.062-5-2.063-2.083-5.021-2.083-2.917 0-5 2.062-2.083 2.063-2.083 5.021 0 2.917 2.062 5 2.063 2.083 5.021 2.083ZM20 20Z" />
    </svg>,
  ];

  const air = [
    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" key={4}>
      <path d="M19.292 32.708q-1.875 0-3.104-1.062-1.23-1.063-1.396-2.938h2.291q.125.917.688 1.417.562.5 1.521.5 1.041 0 1.646-.604.604-.604.604-1.729t-.604-1.771q-.605-.646-1.646-.646H3.75v-2.083h15.542q1.958 0 3.166 1.187 1.209 1.188 1.209 3.313 0 2.041-1.209 3.229-1.208 1.187-3.166 1.187ZM3.75 16.292v-2.084H26q1.458 0 2.292-.854.833-.854.833-2.396 0-1.583-.833-2.416-.834-.834-2.292-.834-1.375 0-2.188.771-.812.771-.895 1.979h-2.125q.125-2.125 1.541-3.479Q23.75 5.625 26 5.625q2.333 0 3.792 1.458 1.458 1.459 1.458 3.875 0 2.375-1.458 3.855-1.459 1.479-3.792 1.479ZM31.5 29.583v-2.125q1.25-.125 1.958-.958.709-.833.709-2.208 0-1.5-.875-2.334-.875-.833-2.292-.833H3.75v-2.083H31q2.333 0 3.792 1.458 1.458 1.458 1.458 3.792 0 2.25-1.271 3.708-1.271 1.458-3.479 1.583Z" />
    </svg>,
  ];
  const thunderStrome = [
    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" key={5}>
      <path d="m20.417 39.583 3.75-4.25-3.334-1.666 4.292-4.917h2.792L24.167 33l3.333 1.667-4.292 4.916Zm-10 0 3.75-4.25-3.334-1.666 4.292-4.917h2.792L14.167 33l3.333 1.667-4.292 4.916Zm1.875-13.75q-3.542 0-6.042-2.5t-2.5-6.041q0-3.25 2.271-5.729 2.271-2.48 5.646-2.771 1.291-2.334 3.458-3.688Q17.292 3.75 20 3.75q3.667 0 6.25 2.396t3.083 5.937q3.209.167 5.063 2.167 1.854 2 1.854 4.708 0 2.875-2 4.875t-4.875 2Zm0-2.083h17.083q2 0 3.396-1.417 1.396-1.416 1.396-3.375 0-2-1.396-3.395-1.396-1.396-3.396-1.396h-2.083v-1.042q0-3-2.125-5.146T20 5.833q-2.208 0-4.021 1.188-1.812 1.187-2.687 3.187l-.25.625h-.834q-2.625.084-4.5 1.959t-1.875 4.5q0 2.666 1.896 4.562 1.896 1.896 4.563 1.896ZM20 14.792Z" />
    </svg>,
  ];

  const clearNight = [
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" key={6}>
      <path d="M26.2 46q-4.2 0-7.875-1.6t-6.4-4.325Q9.2 37.35 7.6 33.675 6 30 6 25.8q0-7.3 4.65-12.875T22.5 6q-.9 4.9.55 9.625 1.45 4.725 5 8.275 3.55 3.55 8.275 5.025Q41.05 30.4 46 29.5q-1.3 7.2-6.9 11.85Q33.5 46 26.2 46Zm0-3q5 0 9.1-2.85t6.6-7.25q-4.5-.4-8.65-2.075Q29.1 29.15 25.95 26q-3.2-3.15-4.85-7.275-1.65-4.125-2.05-8.575-4.4 2.4-7.225 6.525Q9 20.8 9 25.8q0 7.15 5.025 12.175T26.2 43Zm-.3-17Z" />
    </svg>,
  ];

  // {
  //   {Object.keys(wData).map((key, i) => console.log(wData[key]));}
  // }
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
  const day = [
    {
      day: "Sat",
      icon: air,
      temp: "12-33°",
    },
    {
      day: "Sun",
      icon: sun,
      temp: "12-33°",
    },
    {
      day: "Mon",
      icon: thunderStrome,
      temp: "29-44°",
    },
    {
      day: "Tue",
      icon: air,
      temp: "29-30°",
    },
    {
      day: "Wed",
      icon: sun,
      temp: "19-44°",
    },
    {
      day: "Thu",
      icon: sun,
      temp: "29-34°",
    },
    {
      day: "Fri",
      icon: thunderStrome,
      temp: "29-44°",
    },
    {
      day: "Sat",
      icon: air,
      temp: "09-14°",
    },
  ];

  return (
    <Col span={6} xs={24} sm={24} md={12} lg={12} xl={9}>
      <Row className="" gutter={[24, 0]}>
        {count1.map((d, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={24} xl={24}>
            <Card bordered={false} className="criclebox ">
              <div className="number">
                <Row>
                  <Col xs={12}>
                    <span className=""> {d.title} </span>
                    <div>
                      <h4>{d.dec}</h4>
                    </div>

                    <span className="weatherIcon">{d.icon}</span>
                    {/* <small>{c.today}</small> */}
                  </Col>
                  <Col xs={12}>
                    <h4>
                      Pressure: {d.Pressure}
                      <br />{" "}
                    </h4>
                    <h4>
                      Humidity: {d.Humidity}
                      <br />
                    </h4>
                    <h4>Wind: {d.Wind}</h4>
                  </Col>
                </Row>

                <Row>
                  {day.map((d, index) => (
                    <Col className="days" xs={3} key={index}>
                      <Row justify="center">
                        <div className="iconText"> {d.day} </div>
                      </Row>
                      <div className="iconText">
                        <Row justify="center">
                          <s>{d.icon}</s>
                        </Row>
                        <Row justify="center">{d.temp}</Row>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default WeatherInfo;
