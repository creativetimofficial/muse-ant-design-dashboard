/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Row, Col, Typography } from 'antd';
const { Title, Paragraph } = Typography;
export default class Echart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Sales',
          data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
          color: '#fff',
        },
      ],

      options: {
        chart: {
          type: 'bar',
          width: '100%',
          height: 'auto',

          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent'],
        },
        grid: {
          show: true,
          borderColor: '#ccc',
          strokeDashArray: 2,
        },
        xaxis: {
          categories: [
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
          ],
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
              colors: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
              ],
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
              colors: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
              ],
            },
          },
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands';
            },
          },
        },
      },
    };
  }
  render() {
    const visitor = [
      {
        Title: '3,6K',
        user: 'Users',
      },
      {
        Title: '2m',
        user: 'Clicks',
      },
      {
        Title: '$772',
        user: 'Sales',
      },
      {
        Title: '82',
        user: 'Items',
      },
    ];
    return (
      <>
        <div id="chart">
          <ReactApexChart
            className="bar-chart"
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={220}
          />
        </div>
        <div className="chart-vistior">
          <Title level={5}>Active Users</Title>
          <Paragraph className="lastweek">
            than last week <span className="bnb2">+30%</span>
          </Paragraph>
          <Paragraph className="lastweek">
            We have created multiple options for you to put together and
            customise into pixel perfect pages.
          </Paragraph>
          <Row gutter>
            {visitor.map((v, index) => (
              <Col xs={6} xl={6} sm={6} md={6} key={index}>
                <div className="chart-visitor-count">
                  <Title level={4}>{v.Title}</Title>
                  <span>{v.user}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}
