import React, { useEffect } from "react";
import * as Highcharts from "highcharts";

function LineChart() {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "spline",
        style: {
          fontFamily: "Open Sans",
        },
      },
      title: {
        text: "Portfolio-wide Electricity Consumption",
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
        accessibility: {
          description: "Months of the year",
        },
      },
      yAxis: {
        title: {
          text: "kWh",
        },
        labels: {
          formatter: function () {
            return this.value;
          },
        },
      },
      tooltip: {
        crosshairs: true,
        shared: true,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: "#666666",
            // lineWidth: 1,
          },
        },
      },
      series: [
        {
          name: "Daily(Current)",
          marker: {
            // symbol: "square",
          },
          data: [
            5.2,
            5.7,
            8.7,
            13.9,
            18.2,
            21.4,
            25.0,
            {
              y: 26.4,
              marker: {
                symbol:
                  '// "url(https://www.highcharts.com/samples/graphics/sun.png)",',
              },
              accessibility: {
                description:
                  "Sunny symbol, this is the warmest point in the chart.",
              },
            },
            22.8,
            17.5,
            12.1,
            7.6,
          ],
        },
        {
          name: "Daily(Baseline)",
          marker: {
            // symbol: "diamond",
          },
          data: [
            {
              y: 1.5,
              marker: {
                symbol:
                  ' // "url(https://www.highcharts.com/samples/graphics/snow.png)"',
              },
              accessibility: {
                description:
                  "Snowy symbol, this is the coldest point in the chart.",
              },
            },
            1.6,
            3.3,
            5.9,
            10.5,
            13.5,
            14.5,
            14.4,
            11.5,
            8.7,
            4.7,
            2.6,
          ],
        },
      ],
    });
  }, []);
  return (
    <>
      <div id="container"></div>
    </>
  );
}

export default LineChart;
