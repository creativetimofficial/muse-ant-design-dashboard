import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
export default class MixedChart extends Component {
  render() {
    const data = {
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          type: "bar",
          label: "Organic Search",
          weight: 5,
          tension: 0.4,
          borderWidth: 0,
          pointBackgroundColor: "#3A416F",
          borderColor: "#3A416F",
          backgroundColor: "#3A416F",
          borderRadius: 4,
          borderSkipped: false,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          maxBarThickness: 10,
        },
        {
          type: "line",
          label: "Referral",
          tension: 0.4,
          borderWidth: 0,
          pointRadius: 0,
          pointBackgroundColor: "#1890ff",
          borderColor: "#1890ff",
          borderWidth: 3,
          backgroundColor: "rgb(24 144 255 / 20%)",
          data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          fill: true,
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
        <Bar data={data} options={options} height={300} />
      </>
    );
  }
}
