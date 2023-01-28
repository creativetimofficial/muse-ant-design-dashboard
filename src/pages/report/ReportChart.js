import React, { useState } from "react";
import { useEffect } from "react";
import Highcharts from "highcharts";
import { Button, Radio } from "antd";


let chartType = "column";
function ReportChart() {
  const [activeBtn, setActiveBtn] = useState("");


  useEffect(() => {
    const chart = Highcharts.chart("container", {
      title: {
        text: "   Report Chart",
      },
      subtitle: {
        text: "",
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: chartType,
          //   color: 'blue',
          //   colorByPoint: true,
          data: [
            111.9, 107.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
            194.1, 95.6, 54.4,
          ],
          showInLegend: false,
        },
        {
          type: chartType,
          // colorByPoint: true,
          data: [
            19.9, 71.5, 109.4, 129.2, 134.0, 176.0, 175.6, 148.5, 216.4, 194.1,
            195.6, 84.4,
          ],
          showInLegend: false,
        },
      ],
    });

    document.getElementById("plain").addEventListener("click", () => {
      chartType = "column";
      let ser = chart.series.map(() => ({ type: chartType }));
      chart.update({
        series: ser,
        subtitle: {
          text: "",
        },
      });
    });

    document.getElementById("line").addEventListener("click", () => {
      chartType = "line";
      let ser = chart.series.map(() => ({ type: chartType }));
      chart.update({
        series: ser,
        subtitle: {
          text: "",
        },
      });
    });
    document.getElementById("area").addEventListener("click", () => {
      chartType = "area";
      let ser = chart.series.map(() => ({ type: chartType }));
      chart.update({
        series: ser,
        subtitle: {
          text: "",
        },
        plotOptions: {
          area: {
            stacking: undefined,
          },
        },
      });
    });
    document.getElementById("stacked").addEventListener("click", () => {
      chartType = "area";
      let ser = chart.series.map(() => ({ type: chartType }));
      chart.update({
        series: ser,
        plotOptions: {
          series: {
            pointStart: 2012,
          },
          area: {
            stacking: "stream",
            lineColor: "#666666",
            lineWidth: 1,
            marker: {
              lineWidth: 1,
              lineColor: "#666666",
            },
          },
        },
        subtitle: {
          text: "",
        },
      });
    });

    return () => {};
  }, []);
  return (
    <>
      <div id="container"></div>
      <Button 
      onClick={()=> setActiveBtn('plain')}
      className={activeBtn === 'plain' ? 'active' : '' } 
        style={{ width: 75, marginLeft: 75, height: 40 }}
        id="plain"
        key={1}
      >
        Bar
      </Button>
      <Button
      className={activeBtn === "line"}
        id="line"
        key={2}
        style={{ width: 75, marginLeft: 5, height: 40 }}
      >
        line
      </Button>
      <Button
      
        id="area"
        key={3}
        style={{ width: 75, marginLeft: 5, height: 40 }}
      >
        Area
      </Button>
      <Button
        id="stacked"
        key={4}
        style={{ width: 75, marginLeft: 5, height: 40 }}
      >
        Stacked
      </Button>
    </>
  );
}

export default ReportChart;





