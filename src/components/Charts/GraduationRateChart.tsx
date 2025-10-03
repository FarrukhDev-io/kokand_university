import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { graduationRateData, chartOptions } from '@/data/chartData';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const GraduationRateChart = () => {
  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: 'Bitiruvchilar ko\'rsatkichi (%)',
        font: {
          size: 18,
          family: "'Inter', sans-serif",
          weight: 'bold' as const
        },
        color: 'hsl(350, 70%, 40%)'
      }
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 h-[400px] flex items-center justify-center">
      <Doughnut data={graduationRateData} options={options} />
    </div>
  );
};

export default GraduationRateChart;
