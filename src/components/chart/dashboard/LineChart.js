import React, { useEffect ,useState} from "react";
import * as Highcharts from "highcharts";
import { getPortfolioChartData } from "../../../services/dashChartService";

function LineChart() {
  
  const [chartData, setChartData] = useState([
       
  ]);
  // let data = []
  const getChartData = async () => {
    try {
      const resp = await getPortfolioChartData();
      console.log("chartData",resp?.portFolioChart);
      setChartData(resp?.portFolioChart);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getChartData()
  },[])
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
      series: chartData,
    });
  }, [chartData]);
  return (
    <>
      <div id="container"></div>
    </>
  );
}

export default LineChart;
