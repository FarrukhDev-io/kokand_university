export const studentsByFacultyData = {
  labels: [
    'Economics & Business',
    'Engineering & Tech',
    'Natural Sciences',
    'Social Sciences',
    'Philology',
    'Law'
  ],
  datasets: [
    {
      label: 'Number of Students',
      data: [2500, 2800, 1900, 1600, 1400, 1500],
      backgroundColor: [
        'rgba(139, 36, 50, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)'
      ],
      borderColor: [
        'rgb(139, 36, 50)',
        'rgb(59, 130, 246)',
        'rgb(245, 158, 11)',
        'rgb(16, 185, 129)',
        'rgb(139, 92, 246)',
        'rgb(236, 72, 153)'
      ],
      borderWidth: 2
    }
  ]
};

export const facultyDistributionData = {
  labels: [
    'Economics & Business',
    'Engineering & Tech',
    'Natural Sciences',
    'Social Sciences',
    'Philology',
    'Law'
  ],
  datasets: [
    {
      label: 'Faculty Distribution',
      data: [21, 24, 16, 14, 12, 13],
      backgroundColor: [
        'rgba(139, 36, 50, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)'
      ],
      borderColor: '#fff',
      borderWidth: 2
    }
  ]
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
        }
      }
    }
  }
};
