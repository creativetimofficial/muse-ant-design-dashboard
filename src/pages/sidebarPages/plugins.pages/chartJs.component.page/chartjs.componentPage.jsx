import React, { useState } from "react";
import DemoLine from "./allCharts/lineChart";
import { Anchor } from "antd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import LineChartWithGradient from "./allCharts/lineChartWithGradient";
import BarChart from "./allCharts/barChart";
import HorizontalBarChart from "./allCharts/horizontalBarChart";
import MixedChart from "./allCharts/mixedChart";
import BubbleChart from "./allCharts/bubbleChart";
import DoughnutChat from "./allCharts/doughnutChat";
import PieChart from "./allCharts/pieChart";
import RadarChart from "./allCharts/radarChat";
import PolarChart from "./allCharts/polarChart";
import CopyClipboard from "../../../../utils/copyClipboard";
import AlertOnClick from "../../../../utils/alertOnClick";

const { Link } = Anchor;

const code = `
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
export default class ChartLine2 extends Component {
  render() {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Organic Search",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 2,
          pointBackgroundColor: "#1890ff",
          borderColor: "#1890ff",
          borderWidth: 3,

          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 6,
        },
        {
          label: "Referral",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 2,
          pointBackgroundColor: "#3A416F",
          borderColor: "#3A416F",
          borderWidth: 3,

          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          maxBarThickness: 6,
        },
        {
          label: "Direct",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 2,
          pointBackgroundColor: "#b37feb",
          borderColor: "#b37feb",
          borderWidth: 3,

          data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
          maxBarThickness: 6,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#b2b9bf",
            font: {
              size: 11,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#b2b9bf",
            padding: 10,
            font: {
              size: 11,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    };
    return (
      <>
        <Line data={data} options={options} height={300} />
      </>
    );
  }
}`;
const markdown = `

~~~jsx
${code}
~~~
`;

const code2 = `
import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

const DemoArea: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
    annotations: [
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'red',
          lineDash: [2, 2],
        },
      },
    ],
  };
  return <Area {...config} />;
};

export default DemoArea;`;
const markdown2 = `

~~~jsx
${code2}
~~~
`;

const code3 = `
import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
export default class ChartBar2 extends Component {
  render() {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sales by age",
          weight: 5,
          borderWidth: 0,
          borderRadius: 4,
          backgroundColor: "#3A416F",
          data: [15, 20, 12, 60, 20, 15],
          fill: false,
          maxBarThickness: 35,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#9ca2b7",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            display: true,
            color: "#9ca2b7",
            padding: 10,
          },
        },
      },
    };

    return (
      <>
        <Bar data={data} height={300} options={options} />
      </>
    );
  }
}`;
const markdown3 = `

~~~jsx
${code3}
~~~
`;
const code4 = `
import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
export default class HorizontalBarChart extends Component {
  render() {
    const data = {
      labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
      datasets: [
        {
          label: "Sales by age",
          weight: 5,
          borderWidth: 0,
          borderRadius: 4,
          backgroundColor: "#3A416F",
          data: [15, 20, 12, 60, 20, 15],
          fill: false,
        },
      ],
    };
    const options = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#9ca2b7",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            display: true,
            color: "#9ca2b7",
            padding: 10,
          },
        },
      },
    };
    return (
      <>
        <Bar data={data} options={options} height={300} />
      </>
    );
  }
}`;
const markdown4 = `

~~~jsx
${code4}
~~~
`;
const code5 = `
import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
export default class ChartMixed extends Component {
  render() {
	  
    const data = {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          type: "bar",
          label: "Organic Search",
          weight: 5,
          tension: 0.4,
          borderWidth: 0,
          pointBackgroundColor: "#3A416F",
          borderColor: "#3A416F",
          backgroundColor: "#3A416F",
          borderRadius: 4,
          borderSkipped: false,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 10,
        },
        {
          type: "line",
          label: "Referral",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 0,
          pointBackgroundColor: "#1890ff",
          borderColor: "#1890ff",
          borderWidth: 3,
          backgroundColor: "rgb(24 144 255 / 20%)",
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          fill: true,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#b2b9bf",
            font: {
              size: 11,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#b2b9bf",
            padding: 10,
            font: {
              size: 11,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    };

	
    return (
      <>
        <Bar data={data} options={options} height={300} />
      </>
    );
  }
}`;
const markdown5 = `

~~~jsx
${code5}
~~~
`;
const code6 = `
import React, { Component } from "react";
import { Bubble } from "react-chartjs-2";
export default class BubbleChart extends Component {
  render() {
    const data = {
      labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
      datasets: [
        {
          label: "Dataset 1",
          data: [
            {
              x: 100,
              y: 0,
              r: 10,
            },
            {
              x: 60,
              y: 30,
              r: 20,
            },
            {
              x: 40,
              y: 350,
              r: 10,
            },
            {
              x: 80,
              y: 80,
              r: 10,
            },
            {
              x: 20,
              y: 30,
              r: 15,
            },
            {
              x: 0,
              y: 100,
              r: 5,
            },
          ],
          backgroundColor: "#1890ff",
        },
        {
          label: "Dataset 2",
          data: [
            {
              x: 70,
              y: 40,
              r: 10,
            },
            {
              x: 30,
              y: 60,
              r: 20,
            },
            {
              x: 10,
              y: 300,
              r: 25,
            },
            {
              x: 60,
              y: 200,
              r: 10,
            },
            {
              x: 50,
              y: 300,
              r: 15,
            },
            {
              x: 20,
              y: 350,
              r: 5,
            },
          ],
          backgroundColor: "#3A416F",
        },
      ],
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#b2b9bf",
            font: {
              size: 11,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#b2b9bf",
            padding: 10,
            font: {
              size: 11,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    };

    return (
      <>
        <Bubble data={data} options={options} />
      </>
    );
  }
}`;
const markdown6 = `

~~~jsx
${code6}
~~~
`;
const code7 = `
import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

export default class ChartDoughnut extends Component {
  render() {
    const data = {
      labels: ["Creative Tim", "Github", "Bootsnipp", "Dev.to", "Codeinwp"],
      datasets: [
        {
          label: "Projects",
          weight: 9,
          cutout: 60,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: [
            "#2152ff",
            "#3A416F",
            "#f53939",
            "#a8b8d8",
            "#cb0c9f",
          ],
          data: [15, 20, 12, 60, 20],
          fill: false,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    };
    return (
      <>
        <Doughnut data={data} options={options} height="300" />
      </>
    );
  }
}`;
const markdown7 = `

~~~jsx
${code7}
~~~
`;
const code8 = `
import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class ChartPie extends Component {
  render() {
    const data = {
      labels: ["Facebook", "Direct", "Organic", "Referral"],
      datasets: [
        {
          label: "Projects",
          weight: 9,
          cutout: 0,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: ["#17c1e8", "#cb0c9f", "#3A416F", "#1890ff"],
          data: [15, 20, 12, 60],
          fill: false,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    };
    return (
      <>
        <Pie data={data} options={options} height={300} />
      </>
    );
  }
}
`;
const markdown8 = `

~~~jsx
${code8}
~~~
`;
const code9 = `
import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class ChartPie extends Component {
  render() {
    const data = {
      labels: ["Facebook", "Direct", "Organic", "Referral"],
      datasets: [
        {
          label: "Projects",
          weight: 9,
          cutout: 0,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: ["#17c1e8", "#cb0c9f", "#3A416F", "#1890ff"],
          data: [15, 20, 12, 60],
          fill: false,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    };
    return (
      <>
        <Pie data={data} options={options} height={300} />
      </>
    );
  }
}
`;
const markdown9 = `

~~~jsx
${code9}
~~~
`;
const code10 = `
import React, { Component } from "react";
import { PolarArea } from "react-chartjs-2";
export default class ChartPolar extends Component {
  render() {
    const data = {
      labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      datasets: [
        {
          label: "My First Dataset",
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            "#17c1e8",
            "#cb0c9f",
            "#3A416F",
            "#a8b8d8",
            "#82d616",
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    return (
      <div>
        <PolarArea data={data} options={options} height={300} />
      </div>
    );
  }
}`;
const markdown10 = `

~~~jsx
${code10}
~~~
`;

export const ChartjsComponentPage = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <div className="main-content">
        <div>
          <div className="page-row">
            <div className="page-content">
              <section className="mb-24">
                <AlertOnClick state={alert} />

                <h1>Chart.js</h1>
                <p className="text-dark">
                  Simple yet flexible JavaScript charting for designers &amp;
                  developers
                </p>
              </section>
              <div
                role="separator"
                className="ant-divider ant-divider-horizontal"
              ></div>
              <h2>Examples</h2>
              <section id="Line-chart" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Line chart</span>
                </div>
                <div className="showcase">
                  <div>
                    <DemoLine />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Line-chart-with-gradient" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">
                    Line chart with gradient
                  </span>
                </div>
                <div className="showcase">
                  <LineChartWithGradient />
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code2}
                    state={alert}
                    setState={setAlert}
                  />

                  <ReactMarkdown
                    children={markdown2}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Bar-chart" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Bar chart</span>
                </div>
                <div className="showcase">
                  <div>
                    <BarChart />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code3}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown3}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Bar-chart-horizontal" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">
                    Bar chart horizontal
                  </span>
                </div>
                <div className="showcase">
                  <HorizontalBarChart />
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code4}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown4}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Mixed-chart" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Mixed chart</span>
                </div>
                <div className="showcase">
                  <div>
                    <MixedChart />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code5}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown5}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Bubble-chart" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Bubble chart</span>
                </div>
                <div className="showcase">
                  <div>
                    <BubbleChart />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code6}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown6}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Doughnut-chart" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Doughnut chart</span>
                </div>
                <div className="showcase">
                  <div>
                    <DoughnutChat />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code7}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown7}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Pie-chart" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Pie chart</span>
                </div>
                <div className="showcase">
                  <div>
                    <PieChart />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code8}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown8}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Radar-chart" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Radar chart</span>
                </div>
                <div className="showcase">
                  <div>
                    <RadarChart />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code9}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown9}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <section id="Polar-chart" className="mb-24">
                <div
                  role="separator"
                  className="
              ant-divider ant-divider-horizontal ant-divider-with-text-left
            "
                >
                  <span className="ant-divider-inner-text">Polar chart</span>
                </div>
                <div className="showcase">
                  <div>
                    <PolarChart />
                  </div>
                </div>
                <section className="highlight-section">
                  <CopyClipboard
                    text={code10}
                    state={alert}
                    setState={setAlert}
                  />
                  <ReactMarkdown
                    children={markdown10}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            className="codetext"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  {/*---------------------------code table------------------------*/}
                </section>
              </section>
              <p className="text-right font-semibold mb-24">
                Looking for more Charts? Please check the
                <a
                  target="_blank"
                  href="https://pro.ant.design/docs/graph/#chart-type"
                  rel="noreferrer"
                >
                  official docs
                </a>
                .
              </p>
            </div>
            <div className="page-anchor">
              <div>
                <div className="">
                  <div
                    className="ant-anchor-wrapper"
                    style={{ maxHeight: "calc(100vh - 85px)" }}
                  >
                    <div className="ant-anchor">
                      <Anchor affix={true} offsetTop={85}>
                        <Link href="#Line-chart" title="Line Chart" />
                        <Link
                          href="#Line-chart-with-gradient"
                          title="Line chart with gradient"
                        />
                        <Link href="#Bar-chart" title="Bar chart" />
                        <Link
                          href="#Bar-chart-horizontal"
                          title="Bar chart horizontal"
                        />
                        <Link href="#Mixed-chart" title="Mixed chart" />
                        <Link href="#Bubble-chart" title="Bubble chart" />
                        <Link href="#Doughnut-chart" title="Doughnut chart" />
                        <Link href="#Pie-chart" title="Pie chart" />
                        <Link href="#Radar-chart" title="Radar chart" />
                        <Link href="#Polar-chart" title="Polar chart" />
                      </Anchor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
