import React,{useEffect,useState} from 'react'
import * as Highcharts from "highcharts";
import { getConsumptionChartData } from '../../../services/dashChartService';
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);
require("highcharts/modules/annotations")(Highcharts);


function EChart() {

    const [chartData, setChartData] = useState([
       
      ]);
      // let data = []
      const getChartData = async () => {
        try {
          const resp = await getConsumptionChartData();
          console.log("chartData",resp?.consumptionChart);
          setChartData(resp?.consumptionChart);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(()=>{
        getChartData()
      },[])
  useEffect(() => {
    Highcharts.chart('containerEchart', {
      chart: {
          zoomType: 'xy',
          style: {
            fontFamily: 'Open Sans'
        },
     
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
        //   align: 'left',
          x: 0,
          verticalAlign: 'bottom',
          y: 0,
        //   floating: true,
        //   backgroundColor:
        //       Highcharts.defaultOptions.legend.backgroundColor || // theme
        //       'rgba(255,255,255,0.25)'
      },
      
      series: chartData
  });
    return () => {
      
    };
  }, [chartData]);
  return (
    <>
    <div id='containerEchart'>

    </div>
    </>
  )
}

export default EChart