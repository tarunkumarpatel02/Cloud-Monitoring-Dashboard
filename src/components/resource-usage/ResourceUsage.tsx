import { useState, useEffect, FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import Card from "../common/Card";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ResourceUsage: FC = () => {
  const [cpuData, setCpuData] = useState<ChartData<"line">>({
    labels: ["12:00", "12:15", "12:30", "12:45", "1:00"],
    datasets: [
      {
        label: "CPU Usage (%)",
        data: [40, 45, 50, 65, 60],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.3, // Optional animation (smooth line)
      },
      {
        label: "Memory Usage (GB)",
        data: [2.5, 3.0, 3.5, 4.0, 4.5],
        fill: false,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        tension: 0.3, // Optional animation (smooth line)
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuData((prevData) => {
        const newCpuData = [...prevData.datasets[0].data];
        const newMemoryData = [...prevData.datasets[1].data];

        newCpuData.shift();
        newMemoryData.shift();

        newCpuData.push(Math.floor(Math.random() * 100));
        newMemoryData.push(Number((Math.random() * 8).toFixed(1)));

        return {
          ...prevData,
          datasets: [
            { ...prevData.datasets[0], data: newCpuData },
            { ...prevData.datasets[1], data: newMemoryData },
          ],
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const options: ChartOptions<"line"> = {
    animation: {
      duration: 1000, // Optional: Animation duration
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="card-container">
      <Card
        headerName="Resource Usage"
        content={<Line data={cpuData} options={options} />}
      />
    </div>
  );
};

export default ResourceUsage;
