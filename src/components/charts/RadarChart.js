import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function RadarChart({ data }) {
  const userData = {
    labels: data.map((item) => item.name),
    datasets: [{
      label: 'Occurrences',
      data: data.map((item) => item.value),
      backgroundColor: 'rgba(127, 176, 168, .5)',
      brderColor: 'rgb(127, 176, 168)',
      pointRadius: 7,
      pointBackgroundColor: data.map((item) => item.color),
      pointBorderColor: data.map((item) => item.color),

    }],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Radar data={userData} otions={options} />
    </>
  );
}
