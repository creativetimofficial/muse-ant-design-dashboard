import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
export default class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Mobile apps",
          data: [350, 40, 300, 220, 500, 250, 400, 230, 500],
          offsetY: 0,
        },
        {
          name: "Websites",
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          offsetY: 0,
        },
      ],

      options: {
        chart: {
          width: "100%",
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },

        legend: {
          show: false,
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },

        yaxis: {
          labels: {
            style: {
              fontSize: "14px",
              fontWeight: 600,
              colors: ["#8c8c8c"],
            },
          },
        },

        xaxis: {
          labels: {
            style: {
              fontSize: "14px",
              fontWeight: 600,
              colors: [
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
                "#8c8c8c",
              ],
            },
          },
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <>
        <div className="linechart">
          <div>
            <Title level={5}>Active Users</Title>
            <Paragraph className="lastweek">
              than last week <span className="bnb2">+30%</span>
            </Paragraph>
          </div>
          <div className="sales">
            <ul>
              <li>{<MinusOutlined />} Traffic</li>
              <li>{<MinusOutlined />} Sales</li>
            </ul>
          </div>
        </div>

        <ReactApexChart
          className="full-width"
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
          width={"100%"}
        />
      </>
    );
  }
}
