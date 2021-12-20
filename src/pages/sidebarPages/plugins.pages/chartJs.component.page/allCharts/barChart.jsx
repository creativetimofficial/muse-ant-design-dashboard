import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
export default class BarChart extends Component {
  render() {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sales by age",
          weight: 5,
          borderWidth: 0,
          borderRadius: 4,
          backgroundColor: "#3A416F",
          data: [15, 20, 12, 60, 20, 15],
          fill: false,
          maxBarThickness: 35,
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
            color: "#9ca2b7",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            display: true,
            color: "#9ca2b7",
            padding: 10,
          },
        },
      },
    };

    return (
      <>
        <Bar data={data} height={300} options={options} />
      </>
    );
  }
}
