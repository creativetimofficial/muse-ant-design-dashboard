import React, { Component } from "react";
import { Line } from "react-chartjs-2";
export default class LineChartWithGradient extends Component {
  render() {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Mobile apps",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 0,
          borderColor: "#1890ff",
          borderWidth: 3,
          backgroundColor: "rgb(24 144 255 / 20%)",
          fill: true,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 6,
        },
        {
          label: "Websites",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 0,
          borderColor: "#3A416F",
          borderWidth: 3,
          backgroundColor: "rgba(20,23,39,0.2)",
          fill: true,
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          maxBarThickness: 6,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#b2b9bf",
            font: {
              size: 11,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#b2b9bf",
            padding: 10,
            font: {
              size: 11,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    };
    return (
      <>
        <Line data={data} options={options} height={300} />
      </>
    );
  }
}
