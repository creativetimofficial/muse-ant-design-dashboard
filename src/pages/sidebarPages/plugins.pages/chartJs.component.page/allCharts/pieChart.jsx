import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class PieChart extends Component {
  render() {
    const data = {
      labels: ["Facebook", "Direct", "Organic", "Referral"],
      datasets: [
        {
          label: "Projects",
          weight: 9,
          cutout: 0,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: ["#17c1e8", "#cb0c9f", "#3A416F", "#1890ff"],
          data: [15, 20, 12, 60],
          fill: false,
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
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    };
    return (
      <>
        <Pie data={data} options={options} height={300} />
      </>
    );
  }
}
