import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { employmentDataByYear } from '@/data/employmentData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const EmploymentRateChart = () => {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('2025');
  const years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  const yearData = employmentDataByYear[selectedYear];

  const data = {
    labels: [t.employment.charts.employed, t.employment.charts.unemployed],
    datasets: [
      {
        label: t.employment.charts.employmentRate,
        data: [yearData.totalEmployed, yearData.totalUnemployed],
        backgroundColor: [
          'rgba(139, 36, 50, 0.8)',
          'rgba(220, 38, 38, 0.5)'
        ],
        borderColor: ['rgb(139, 36, 50)', 'rgb(220, 38, 38)'],
        borderWidth: 3,
        hoverOffset: 15
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          usePointStyle: true
        }
      },
      title: {
        display: true,
        text: `${t.employment.charts.overallEmployment} (${selectedYear}) - ${yearData.overallRate}%`,
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

export default EmploymentRateChart;
