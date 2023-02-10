import React, { useEffect, useState } from "react";
import * as Highcharts from "highcharts";
import { getColumnChartData } from "../../../services/dashChartService";
import { createGlobalStyle } from "styled-components";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);

function ColumnChart() {
  const [chartData, setChartData] = useState([
    // {
    //   name: "Bill Usage",
    //   data: [
    //     49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
    //     95.6, 54.4,
    //   ],
    // },
    // {
    //   name: "Bill Spend",
    //   data: [
    //     83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,
    //     92.3,
    //   ],
    // },
  ]);
  // let data = []
  const getChartData = async () => {
    try {
      const resp = await getColumnChartData();
      console.log("chartData",resp?.dashboardColumnChart);
      setChartData(resp?.dashboardColumnChart);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChartData();
  }, []);
  useEffect(() => {
    Highcharts.chart("dashboardColumnChart", {
      chart: {
        type: "column",
        style: {
          fontFamily: "Open Sans",
        },
      },
      title: {
        text: "Electricity",
      },
      subtitle: {
        text: "",
      },
      xAxis: {
        categories: [
          "Jan2023",
          "Feb2023",
          "Mar2023",
          "Apr2023",
          "May2023",
          "Jun2023",
          "Jul2023",
          "Aug2023",
          "Sep2023",
          "Oct2023",
          "Nov2023",
          "Dec2023",
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Usage (kWh)",
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:10px">{}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      exporting: {
        buttons: {
          contextButton: {
            menuItems: [
              // "viewFullscreen",
              // "separator",
              "downloadPNG",
              "downloadSVG",
              "downloadPDF",
              // "separator",
              // "downloadXLS",
            ],
          },
        },
        enabled: true,
      },
      navigation: {
        buttonOptions: {
          align: "right",
          verticalAlign: "top",
          y: 0,
        },
      },
      series: chartData,
    });
  }, [chartData]);
  // console.log('chartData',chartData)
  return (
    <>
      <div id="dashboardColumnChart"></div>
    </>
  );
}

export default ColumnChart;
