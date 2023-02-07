import React, { useState, useEffect } from "react";
import { Button } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ReportChart = (props) => {
  const { series } = props;
  const [chartType, setChartType] = useState("column");
  // const [updatedChart, setUpdatedChart] = useState({});

  const changeChartType = (type) => {
    setChartType(type);
  };

 
 

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: chartType,
          },
          credits: {
            enabled: false,
          },
          title: "Report Chart",
          series: series
        }}
      />
      <Button style={{ width: 300, }} onClick={() => changeChartType("line")}>
        Line
      </Button>
      <Button style={{ width: 300 ,marginLeft:47}} onClick={() => changeChartType("column")}>
        Column
      </Button>
      <Button style={{ width: 300 ,marginLeft:47}} onClick={() => changeChartType("area")}>
        Area
      </Button>
      <Button style={{ width: 300 ,marginLeft:47}} onClick={() => changeChartType("bar")}>
        Bar{" "}
      </Button>
    </div>
  );
};

export default ReportChart;
