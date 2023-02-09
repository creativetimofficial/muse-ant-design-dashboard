import React, { useEffect } from "react";
import Highcharts from "highcharts";

function WaterChart() {
    const data =[
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
        [187.3, 1158],
        [187.4, 1158],
        [187.5, 1158],
        [187.6, 1161],
        [187.7, 1167],
      ];
  useEffect(() => {
    Highcharts.chart("water-chart", {
      chart: {
        type: "area",
        zoomType: "x",
        panning: true,
        panKey: "shift",
        // scrollablePlotArea: {
        //   minWidth: 600,
        // },
      },

      caption: {
        text: "..",
      },

      title: {
        text: "Portfolio-wide Water Consumption",
        align: "left",
      },

      accessibility: {
        description:
          "This line chart uses es the 8th stage of the 2017 Tour de France cycling race from the start point in Dole to the finish line at Station des Rousses. Altitude is plotted on the Y-axis, and distance is plotted on the X-axis. The line graph is interactive, and the user can trace the altitude level along the stage. The graph is shaded below the data line to visualize the mountainous altitudes encountered on the 187.5-kilometre stage. The three largest climbs are highlighted at Col de la Joux, Côte de Viry and the final 11.7-kilometer, 6.4% gradient climb to Montée de la Combe de Laisia Les Molunes which peaks at 1200 meters above sea level. The stage passes through the villages of Arbois, Montrond, Bonlieu, Chassal and Saint-Claude along the route.",
        landmarkVerbosity: "one",
      },

      lang: {
        accessibility: {
          screenReaderSection: {
            annotations: {
              descriptionNoPoints:
                "{annotationText}, at distance {annotation.options.point.x}km, elevation {annotation.options.point.y} meters.",
            },
          },
        },
      },

      credits: {
        enabled: false,
      },

      annotations: [
        {
          draggable: "",
          labelOptions: {
            backgroundColor: "rgba(255,255,255,0.5)",
            verticalAlign: "top",
            y: 15,
          },
          labels: [
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 27.98,
                y: 255,
              },
              text: "Arbois",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 45.5,
                y: 611,
              },
              text: "Montrond",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 63,
                y: 651,
              },
              text: "Mont-sur-Monnet",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 84,
                y: 789,
              },
              x: -10,
              text: "Bonlieu",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 129.5,
                y: 382,
              },
              text: "Chassal",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 159,
                y: 443,
              },
              text: "Saint-Claude",
            },
          ],
        },
        {
          draggable: "",
          labels: [
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 101.44,
                y: 1026,
              },
              x: -30,
              text: "Col de la Joux",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 138.5,
                y: 748,
              },
              text: "Côte de Viry",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 176.4,
                y: 1202,
              },
              text: "Montée de la Combe <br>de Laisia Les Molunes",
            },
          ],
        },
        {
          draggable: "",
          labelOptions: {
            shape: "connector",
            align: "right",
            justify: false,
            crop: true,
            style: {
              fontSize: "0.8em",
              textOutline: "1px white",
            },
          },
          labels: [
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 96.2,
                y: 783,
              },
              text: "6.1 km climb <br>4.6% on avg.",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 134.5,
                y: 540,
              },
              text: "7.6 km climb <br>5.2% on avg.",
            },
            {
              point: {
                xAxis: 0,
                yAxis: 0,
                x: 172.2,
                y: 925,
              },
              text: "11.7 km climb <br>6.4% on avg.",
            },
          ],
        },
      ],

      xAxis: {
        labels: {
          format: "{value} km",
        },
        minRange: 5,
        title: {
          text: "Distance",
        },
        accessibility: {
          rangeDescription: "Range: 0 to 187.8km.",
        },
      },

      yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.35,
        title: {
          text: null,
        },
        labels: {
          format: "{value} m",
        },
        accessibility: {
          description: "Elevation",
          rangeDescription: "Range: 0 to 1,553 meters",
        },
      },

      tooltip: {
        headerFormat: "Distance: {point.x:.1f} km<br>",
        pointFormat: "{point.y} m a. s. l.",
        shared: true,
      },

      legend: {
        enabled: false,
      },

      series: [
        {
          data: data,
          lineColor: Highcharts.getOptions().colors[1],
          color: Highcharts.getOptions().colors[0],
          fillOpacity: 0.5,
          name: "Elevation",
          marker: {
            enabled: false,
          },
          
          threshold: null,
        },
        {
          type: "line",
          name: "kWh",
          data: data ,
          },
      ],
    });
    return () => {};
  },);
  return <div id="water-chart"></div>;
}

export default WaterChart;
