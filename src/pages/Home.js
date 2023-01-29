import { useState } from "react";
import { Select, DatePicker, Space } from "antd";
import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Radio,
} from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";

import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";

import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava4 from "../assets/images/logo-spotify.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
const { RangePicker } = DatePicker;

function Home() {
  const { Title } = Typography;

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

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

  const list = [
    {
      img: ava1,
      Title: "Soft UI Shopify Version",
      bud: "$14,000",
      progress: <Progress percent={60} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Jessica Doe">
            <img className="tootip-img" src={team4} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava2,
      Title: "Progress Track",
      bud: "$3,000",
      progress: <Progress percent={10} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava3,
      Title: "Fix Platform Errors",
      bud: "Not Set",
      progress: <Progress percent={100} size="small" status="active" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava4,
      Title: "Launch new Mobile App",
      bud: "$20,600",
      progress: <Progress percent={100} size="small" status="active" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
    {
      img: ava5,
      Title: "Add the New Landing Page",
      bud: "$4,000",
      progress: <Progress percent={80} size="small" />,
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Alexander Smith">
            <img className="tootip-img" src={team3} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Jessica Doe">
            <img className="tootip-img" src={team4} alt="" />
          </Tooltip>
        </div>
      ),
    },

    {
      img: ava6,
      Title: "Redesign Online Store",
      bud: "$2,000",
      progress: (
        <Progress
          percent={100}
          size="small"
          status="exception"
          format={() => "Cancel"}
        />
      ),
      member: (
        <div className="avatar-group mt-2">
          <Tooltip placement="bottom" title="Ryan Tompson">
            <img className="tootip-img" src={team1} alt="" />
          </Tooltip>
          <Tooltip placement="bottom" title="Romina Hadid">
            <img className="tootip-img" src={team2} alt="" />
          </Tooltip>
        </div>
      ),
    },
  ];

  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
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
    <>
      <Row>
        <Col>
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
        </Col>
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
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={15}>
                      <div className="icon-box ">{c.icon}</div>
                    </Col>

                    <Col className="col text-center" xs={24}>
                      <span className="consumption">{c.today}</span>
                      <Title level={2}>
                        <span className="consumptionTitle">{c.title}</span>

                        <small className={c.bnb}>{c.persent}</small>
                        <p>{c.dec}</p>
                      </Title>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
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
                  className="mb-24"
                >
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

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
            <Card bordered={false} className="criclebox cardbody h-full">
              <div className="project-ant">
                <div>
                  <Title level={5}>Projects</Title>
                  <Paragraph className="lastweek">
                    done this month<span className="blue">40%</span>
                  </Paragraph>
                </div>
                <div className="ant-filtertabs">
                  <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value="a">ALL</Radio.Button>
                      <Radio.Button value="b">ONLINE</Radio.Button>
                      <Radio.Button value="c">STORES</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className="ant-list-box table-responsive">
                <table className="width-100">
                  <thead>
                    <tr>
                      <th>COMPANIES</th>
                      <th>MEMBERS</th>
                      <th>BUDGET</th>
                      <th>COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />{" "}
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.bud}{" "}
                          </span>
                        </td>
                        <td>
                          <div className="percent-progress">{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="uploadfile shadow-none">
                <Upload {...uploadProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    <span className="click">Click to Upload</span>
                  </Button>
                </Upload>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;







