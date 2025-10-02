import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { studentsByFacultyData, chartOptions } from '@/data/chartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StudentBarChart = () => {
  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: 'Students by Faculty',
        font: {
          size: 18,
          family: "'Inter', sans-serif",
          weight: 'bold' as const
        },
        color: 'hsl(350, 65%, 35%)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 11
          }
        }
      }
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 h-[400px]">
      <Bar data={studentsByFacultyData} options={options} />
    </div>
  );
};

export default StudentBarChart;
