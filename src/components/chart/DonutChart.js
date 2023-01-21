import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Card, Col, Row } from "antd";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          width: 0,
        },
        labels: ["Williams Sonoma"],
      },
      series: [100],
    };

    this.state1 = {
      options1: {
        stroke: {
          width: 0,
        },
        labels: ["Rainwater", "Potable"],
      },
      series1: [70.1, 29.9],
    };
    this.state2 = {
      options2: {
        stroke: {
          width: 0,
        },
        labels: ["Office", "Unmetered", "Dock"],
      },
      series2: [42.2, 32.1, 25.7],
    };
  }

  render() {
    return (
      <Col span={24}>
        <Row justify="space-between"  gutter={[16, 16]} >
          <Card className="donutcard">
            <small>Portfollo Source Water Type Consumption Split</small>
            <Col span={8}>
              <div className="donut">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="donut"
                  width="390"
                />
              </div>
            </Col>
          </Card>

          <Card className="donutcardSecond">
            <small>Portfollo Source Water Type Consumption Split</small>
            <Col span={8}>
              <div className="donut">
                <Chart
                  options={this.state1.options1}
                  series={this.state1.series1}
                  type="donut"
                  width="360"
                />
              </div>
            </Col>
          </Card>
          <Card className="donutcardThird">
            <small>Portfollo Downstream Water Type Consumption Split</small>
            <Col span={8}>
              <div className="donut">
                <Chart
                  options={this.state2.options2}
                  series={this.state2.series2}
                  type="donut"
                  width="360"
                />
              </div>
            </Col>
          </Card>
        </Row>
      </Col>
    );
  }
}

export default Donut;
