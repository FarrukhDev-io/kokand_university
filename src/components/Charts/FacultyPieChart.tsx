import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { facultyDistributionData, chartOptions } from '@/data/chartData';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const FacultyPieChart = () => {
  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: 'Faculty Distribution (%)',
        font: {
          size: 18,
          family: "'Inter', sans-serif",
          weight: 'bold' as const
        },
        color: 'hsl(350, 65%, 35%)'
      }
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 h-[400px] flex items-center justify-center">
      <Pie data={facultyDistributionData} options={options} />
    </div>
  );
};

export default FacultyPieChart;
