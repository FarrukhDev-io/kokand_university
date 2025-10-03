import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { chartDataByYear, chartOptions } from '@/data/chartData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const GraduationRateChart = () => {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const years = ['2020', '2021', '2022', '2023', '2024'];

  const yearData = chartDataByYear[selectedYear].graduationRate;

  const data = {
    labels: [t.analytics.charts.graduated, t.analytics.charts.studying],
    datasets: [
      {
        label: t.analytics.charts.graduationRate,
        data: [yearData.graduated, yearData.studying],
        backgroundColor: [
          'rgba(139, 36, 50, 0.8)',
          'rgba(59, 130, 246, 0.3)'
        ],
        borderColor: ['rgb(139, 36, 50)', 'rgb(59, 130, 246)'],
        borderWidth: 3,
        hoverOffset: 15
      }
    ]
  };

  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: `${t.analytics.charts.graduationRate} (${selectedYear})`,
        font: {
          size: 18,
          family: "'Inter', sans-serif",
          weight: 'bold' as const
        },
        color: 'hsl(var(--foreground))'
      }
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
        {years.map((year) => (
          <Button
            key={year}
            onClick={() => setSelectedYear(year)}
            variant={selectedYear === year ? "default" : "outline"}
            size="sm"
          >
            {year}
          </Button>
        ))}
      </div>
      <div className="h-[400px] flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default GraduationRateChart;
