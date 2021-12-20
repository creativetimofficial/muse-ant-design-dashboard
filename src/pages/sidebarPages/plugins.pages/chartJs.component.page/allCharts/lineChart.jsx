import React, { Component } from "react";
import { Line } from "react-chartjs-2";
export default class DemoLine extends Component {
  render() {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Organic Search",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 2,
          pointBackgroundColor: "#1890ff",
          borderColor: "#1890ff",
          borderWidth: 3,

          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 6,
        },
        {
          label: "Referral",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 2,
          pointBackgroundColor: "#3A416F",
          borderColor: "#3A416F",
          borderWidth: 3,

          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          maxBarThickness: 6,
        },
        {
          label: "Direct",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 2,
          pointBackgroundColor: "#b37feb",
          borderColor: "#b37feb",
          borderWidth: 3,

          data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
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
