import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";

function LineChart() {
  const { Title } = Typography;

  return (
    <>
      <div style={{marginTop:10}} className="linechart">
        <div className="changeFamily">
          <Title level={5}> Portfolio-wide Electricity Consumption</Title>
          {/* <Paragraph className="lastweek">
            than last week <span className="bnb2">+30%</span>
          </Paragraph> */}
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Daily(Current)</li>
            <li>{<MinusOutlined />} Daily(Baseline)</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default LineChart;
