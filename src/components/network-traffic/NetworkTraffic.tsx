import { FC } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ComponentHeader from "../shared/component-header/ComponentHeader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface NetworkTrafficData {
  timestamps: string[];
  inbound: number[];
  outbound: number[];
}

interface NetworkTrafficChartProps {
  data: NetworkTrafficData;
}

const NetworkTraffic: FC<NetworkTrafficChartProps> = ({ data }) => {
  const chartData = {
    labels: data.timestamps,
    datasets: [
      {
        label: "Inbound Traffic (Mbps)",
        data: data.inbound,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Outbound Traffic (Mbps)",
        data: data.outbound,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Network Traffic Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Traffic (Mbps)",
        },
      },
    },
  };

  return (
    <div className="card-container">
      <ComponentHeader headerName="Network Traffic" />
      <div>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default NetworkTraffic;
