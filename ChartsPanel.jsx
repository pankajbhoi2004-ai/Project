import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ChartsPanel({ repos }) {
  if (!repos.length) return null;

  const data = {
    labels: repos.map(r => r.name.slice(0, 12)),
    datasets: [
      {
        label: "Stars",
        data: repos.map(r => r.stargazers_count),
      },
      {
        label: "Forks",
        data: repos.map(r => r.forks_count),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-8">
      <h2 className="text-lg font-semibold mb-3">Repository Stats</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
