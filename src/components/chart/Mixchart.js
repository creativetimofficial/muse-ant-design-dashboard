import React, { useEffect } from "react";
import Highcharts from "highcharts";

function Mixchart() {
  useEffect(() => {
    const lineData = [
         
      [183.1, 1116],
        [183.2, 1119],
        [183.3, 1119],
        [183.4, 1129],
        [183.5, 1129],
        [183.6, 1139],
        [183.7, 1139],
        [183.8, 1149],
        [183.9, 1149],
        [184.0, 1139],
        [184.1, 1139],
        [184.2, 1139],
        [184.3, 1129],
        [184.4, 1139],
        [184.5, 1139],
        [184.6, 1149],
        [184.7, 1149],
        [184.8, 1159],
        [184.9, 1169],
        [185.0, 1169],
        [185.1, 1179],
        [185.2, 1179],
        [185.3, 1169],
        [185.4, 1159],
        [185.5, 1159],
        [185.6, 1159],
        [185.7, 1149],
        [185.8, 1149],
        [185.9, 1149],
        [186.0, 1149],
        [186.1, 1149],
        [186.2, 1149],
        [186.3, 1149],
        [186.4, 1159],
        [186.5, 1159],
        [186.6, 1159],
        [186.7, 1159],
        [186.8, 1159],
        [186.9, 1159],
        [187.0, 1159],
        [187.1, 1159],
        [187.2, 1159],
        [187.3, 1159]]

    
    const data = [
    
      
      [183.1, 1116],
        [183.2, 1113],
        [183.3, 1116],
        [183.4, 1122],
        [183.5, 1125],
        [183.6, 1133],
        [183.7, 1138],
        [183.8, 1146],
        [183.9, 1140],
        [184.0, 1135],
        [184.1, 1134],
        [184.2, 1131],
        [184.3, 1129],
        [184.4, 1137],
        [184.5, 1139],
        [184.6, 1144],
        [184.7, 1149],
        [184.8, 1155],
        [184.9, 1163],
        [185.0, 1164],
        [185.1, 1173],
        [185.2, 1170],
        [185.3, 1165],
        [185.4, 1157],
        [185.5, 1153],
        [185.6, 1150],
        [185.7, 1142],
        [185.8, 1141],
        [185.9, 1142],
        [186.0, 1142],
        [186.1, 1142],
        [186.2, 1142],
        [186.3, 1145],
        [186.4, 1151],
        [186.5, 1154],
        [186.6, 1155],
        [186.7, 1152],
        [186.8, 1154],
        [186.9, 1154],
        [187.0, 1155],
        [187.1, 1158],
        [187.2, 1159],
        [187.3, 1158]]

    Highcharts.chart("mix-container", {
      chart: {
        zoomType: "x",
      },
      title: {
        text: "Portfolio-wide Electricity Consumption ",
        align: "left",
      },
      subtitle: {
        text:
          document.ontouchstart === undefined
            ? "Click and drag in the plot area to zoom in"
            : "Pinch the chart to zoom in",
        align: "left",
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "kWh",
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get("rgba"),
              ],
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },

      series: [
        {
          type: "area",
          name: "kWh",
          data: data,
        },
		{
			type: "line",
			name: "kWh",
			data: lineData ,
		  },
      ],
    });

    return () => {};
  }, []);
  return <div id="mix-container"></div>;
}

export default Mixchart;
