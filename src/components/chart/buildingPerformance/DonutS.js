import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Card, Col, Row } from "antd";

class DonutS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          width: 0,
        },
        labels: ["Williams Sonoma", "Office"],
      },
      series: [95, 5],
    };
  }

  render() {
    return (
      <Card style={{ width: 1300, marginTop: 20 }}>
        <Col span={24}>
          <Row>
            <div className="donut">
              <small>Portfollo Comfort Summary</small>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width="390"
              />
            </div>

            <div className="donuttext">
              <p>Name</p>
              <p>Williams Sonoma</p>
            </div>
            <div className="donuttext1">
              <p>Percentage of Time within Comfort Boundary</p>
              <p>96.61</p>
            </div>
          </Row>
        </Col>
      </Card>
    );
  }
}

export default DonutS;
