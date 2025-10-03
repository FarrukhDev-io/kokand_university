export interface YearData {
  studentsByFaculty: number[];
  facultyDistribution: number[];
  enrollmentTotal: number;
  graduationRate: { graduated: number; studying: number };
}

export const chartDataByYear: Record<string, YearData> = {
  '2020': {
    studentsByFaculty: [1800, 2100, 1500, 1200, 1100, 1200],
    facultyDistribution: [20, 23, 17, 13, 12, 15],
    enrollmentTotal: 8900,
    graduationRate: { graduated: 89, studying: 11 }
  },
  '2021': {
    studentsByFaculty: [2000, 2300, 1600, 1300, 1200, 1300],
    facultyDistribution: [20, 24, 16, 13, 12, 15],
    enrollmentTotal: 9700,
    graduationRate: { graduated: 90, studying: 10 }
  },
  '2022': {
    studentsByFaculty: [2200, 2500, 1700, 1400, 1300, 1400],
    facultyDistribution: [21, 24, 16, 13, 12, 14],
    enrollmentTotal: 10500,
    graduationRate: { graduated: 91, studying: 9 }
  },
  '2023': {
    studentsByFaculty: [2350, 2650, 1800, 1500, 1350, 1450],
    facultyDistribution: [21, 24, 16, 14, 12, 13],
    enrollmentTotal: 11100,
    graduationRate: { graduated: 92, studying: 8 }
  },
  '2024': {
    studentsByFaculty: [2500, 2800, 1900, 1600, 1400, 1500],
    facultyDistribution: [21, 24, 16, 14, 12, 13],
    enrollmentTotal: 11700,
    graduationRate: { graduated: 92, studying: 8 }
  }
};

export const enrollmentTrendData = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [{
    data: [8500, 8900, 9700, 10500, 11100, 11700],
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
  }]
};

export const chartOptions = {
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
    }
  }
};
