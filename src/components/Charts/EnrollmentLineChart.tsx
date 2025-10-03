import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { enrollmentTrendData, chartOptions } from '@/data/chartData';
import { useLanguage } from '@/contexts/LanguageContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const EnrollmentLineChart = () => {
  const { t } = useLanguage();

  const data = {
    labels: enrollmentTrendData.labels,
    datasets: [
      {
        label: t.analytics.charts.students,
        data: enrollmentTrendData.datasets[0].data,
        borderColor: 'rgba(139, 36, 50, 1)',
        backgroundColor: 'rgba(139, 36, 50, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgba(139, 36, 50, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: t.analytics.charts.enrollmentTrend,
        font: {
          size: 18,
          family: "'Inter', sans-serif",
          weight: 'bold' as const
        },
        color: 'hsl(var(--foreground))'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: 12 },
          color: 'hsl(var(--muted-foreground))'
        },
        grid: {
          color: 'hsl(var(--border))'
        }
      },
      x: {
        ticks: {
          font: { size: 12 },
          color: 'hsl(var(--muted-foreground))'
        },
        grid: {
          color: 'hsl(var(--border))'
        }
      }
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 h-[450px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default EnrollmentLineChart;
