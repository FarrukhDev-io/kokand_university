import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
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

const FacultyPieChart = () => {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const years = ['2020', '2021', '2022', '2023', '2024'];

  const data = {
    labels: [
      t.analytics.faculties.economics,
      t.analytics.faculties.engineering,
      t.analytics.faculties.sciences,
      t.analytics.faculties.social,
      t.analytics.faculties.philology,
      t.analytics.faculties.law
    ],
    datasets: [
      {
        label: t.analytics.charts.facultyDistribution,
        data: chartDataByYear[selectedYear].facultyDistribution,
        backgroundColor: [
          'rgba(139, 36, 50, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)'
        ],
        borderColor: 'hsl(var(--card))',
        borderWidth: 2
      }
    ]
  };

  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: `${t.analytics.charts.facultyDistribution} (${selectedYear})`,
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
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default FacultyPieChart;
