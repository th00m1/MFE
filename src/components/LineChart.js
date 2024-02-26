import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

function LineChart({ labels, data }) {
  const canva = useRef(null);
  const chart = useRef(null);

  useEffect(
    function onInit() {
      if (chart.current) {
        chart.current.destroy();
        createChart(labels, data);
      } else {
        createChart(labels, data);
      }
    },
    [labels, data]
  );

  function createChart(labels, data) {
    const ctx = canva.current.getContext("2d");
    const config = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: data,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    };
    chart.current = new Chart(ctx, config);
  }

  return (
    <div>
      <canvas ref={canva} id="line-chart"></canvas>
    </div>
  );
}

export default LineChart;
