import { useState } from 'react';
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
import { employmentDataByYear } from '@/data/employmentData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmploymentByProgramChart = () => {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('2025');
  const years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  const yearData = employmentDataByYear[selectedYear];
  
  const data = {
    labels: yearData.programs.map(p => t.employment.programs[p.program]),
    datasets: [
      {
        label: t.employment.charts.employed,
        data: yearData.programs.map(p => p.employed),
        backgroundColor: 'rgba(139, 36, 50, 0.8)',
        borderColor: 'rgb(139, 36, 50)',
        borderWidth: 2
      },
      {
        label: t.employment.charts.unemployed,
        data: yearData.programs.map(p => p.unemployed),
        backgroundColor: 'rgba(220, 38, 38, 0.5)',
        borderColor: 'rgb(220, 38, 38)',
        borderWidth: 2
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
        text: `${t.employment.charts.employmentByProgram} (${selectedYear})`,
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
          font: { size: 11 },
          color: 'hsl(var(--muted-foreground))'
        },
        grid: {
          color: 'hsl(var(--border))'
        }
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
      <div className="h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default EmploymentByProgramChart;
