import React,{useEffect} from 'react'
import * as Highcharts from "highcharts";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);


function EChart() {
  useEffect(() => {
    Highcharts.chart('containerEchart', {
      chart: {
          zoomType: 'xy',
          style: {
            fontFamily: 'Open Sans'
        }
      },
      title: {
          text: 'Consumption Comparsion',
          
      },
      subtitle: {
          text: ''
      },
      xAxis: [{
          categories: ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM'],
          crosshair: true
      }],
      yAxis: [{ // Primary yAxis
          labels: {
              format: '{value}°C',
              style: {
                  color: Highcharts.getOptions().colors[1]
              }
          },
          
          title: {
              text: 'Consumption',
              style: {
                  color: Highcharts.getOptions().colors[1]
              }
          }
      }, { // Secondary yAxis
          title: {
              text: 'Consumption-Pre',
              style: {
                  color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              format: '{value} mm',
              style: {
                  color: Highcharts.getOptions().colors[0]
              }
          },
          opposite: true
      }],
      tooltip: {
          shared: true
      },
      credits: {
        enabled: false,
      },
      legend: {
          align: 'left',
          x: 80,
          verticalAlign: 'top',
          y: 80,
          floating: true,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || // theme
              'rgba(255,255,255,0.25)'
      },
      series: [{
          name: 'Consumption',
          type: 'column',
          yAxis: 1,
          data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
              60.0, 28.6, 32.1],
          tooltip: {
              valueSuffix: ' mm'
          }
  
      }, {
          name: 'Consumption-Pre',
          type: 'spline',
          data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
              -0.7, -11.0, -16.4],
          tooltip: {
              valueSuffix: '°C'
          }
      }]
  });
    return () => {
      
    };
  }, []);
  return (
    <>
    <div id='containerEchart'>

    </div>
    </>
  )
}

export default EChart