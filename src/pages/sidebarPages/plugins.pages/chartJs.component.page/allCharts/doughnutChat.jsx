import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

export default class DoughnutChart extends Component {
  render() {
    const data = {
      labels: ["Creative Tim", "Github", "Bootsnipp", "Dev.to", "Codeinwp"],
      datasets: [
        {
          label: "Projects",
          weight: 9,
          cutout: 60,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: [
            "#2152ff",
            "#3A416F",
            "#f53939",
            "#a8b8d8",
            "#cb0c9f",
          ],
          data: [15, 20, 12, 60, 20],
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
        <Doughnut data={data} options={options} height="300" />
      </>
    );
  }
}
