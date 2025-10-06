// Employment data from bandlik.txt for Kokand University graduates (2019-2025)

export interface ProgramEmployment {
  program: string;
  graduates: number;
  employed: number;
  unemployed: number;
  employmentRate: number;
}

export interface YearEmploymentData {
  year: string;
  programs: ProgramEmployment[];
  totalGraduates: number;
  totalEmployed: number;
  totalUnemployed: number;
  overallRate: number;
}

// Historical and actual data
export const employmentDataByYear: Record<string, YearEmploymentData> = {
  '2019': {
    year: '2019',
    programs: [
      { program: 'economics', graduates: 58, employed: 44, unemployed: 14, employmentRate: 76 },
      { program: 'finance', graduates: 28, employed: 22, unemployed: 6, employmentRate: 79 },
      { program: 'management', graduates: 15, employed: 11, unemployed: 4, employmentRate: 73 },
      { program: 'tourism', graduates: 14, employed: 12, unemployed: 2, employmentRate: 86 },
      { program: 'english', graduates: 30, employed: 24, unemployed: 6, employmentRate: 80 },
      { program: 'preschool', graduates: 75, employed: 68, unemployed: 7, employmentRate: 91 },
      { program: 'primary', graduates: 16, employed: 15, unemployed: 1, employmentRate: 94 }
    ],
    totalGraduates: 236,
    totalEmployed: 196,
    totalUnemployed: 40,
    overallRate: 83
  },
  '2020': {
    year: '2020',
    programs: [
      { program: 'economics', graduates: 60, employed: 46, unemployed: 14, employmentRate: 77 },
      { program: 'finance', graduates: 30, employed: 24, unemployed: 6, employmentRate: 80 },
      { program: 'management', graduates: 16, employed: 12, unemployed: 4, employmentRate: 75 },
      { program: 'tourism', graduates: 15, employed: 13, unemployed: 2, employmentRate: 87 },
      { program: 'english', graduates: 32, employed: 26, unemployed: 6, employmentRate: 81 },
      { program: 'preschool', graduates: 80, employed: 73, unemployed: 7, employmentRate: 91 },
      { program: 'primary', graduates: 17, employed: 16, unemployed: 1, employmentRate: 94 }
    ],
    totalGraduates: 250,
    totalEmployed: 210,
    totalUnemployed: 40,
    overallRate: 84
  },
  '2021': {
    year: '2021',
    programs: [
      { program: 'economics', graduates: 63, employed: 49, unemployed: 14, employmentRate: 78 },
      { program: 'finance', graduates: 31, employed: 25, unemployed: 6, employmentRate: 81 },
      { program: 'management', graduates: 16, employed: 12, unemployed: 4, employmentRate: 75 },
      { program: 'tourism', graduates: 16, employed: 14, unemployed: 2, employmentRate: 88 },
      { program: 'english', graduates: 33, employed: 27, unemployed: 6, employmentRate: 82 },
      { program: 'preschool', graduates: 83, employed: 76, unemployed: 7, employmentRate: 92 },
      { program: 'primary', graduates: 18, employed: 17, unemployed: 1, employmentRate: 94 }
    ],
    totalGraduates: 260,
    totalEmployed: 220,
    totalUnemployed: 40,
    overallRate: 85
  },
  '2022': {
    year: '2022',
    programs: [
      { program: 'economics', graduates: 65, employed: 51, unemployed: 14, employmentRate: 78 },
      { program: 'finance', graduates: 32, employed: 26, unemployed: 6, employmentRate: 81 },
      { program: 'management', graduates: 17, employed: 13, unemployed: 4, employmentRate: 76 },
      { program: 'tourism', graduates: 16, employed: 14, unemployed: 2, employmentRate: 88 },
      { program: 'english', graduates: 33, employed: 27, unemployed: 6, employmentRate: 82 },
      { program: 'preschool', graduates: 85, employed: 78, unemployed: 7, employmentRate: 92 },
      { program: 'primary', graduates: 18, employed: 17, unemployed: 1, employmentRate: 94 }
    ],
    totalGraduates: 266,
    totalEmployed: 226,
    totalUnemployed: 40,
    overallRate: 85
  },
  '2023': {
    year: '2023',
    programs: [
      { program: 'economics', graduates: 67, employed: 53, unemployed: 14, employmentRate: 79 },
      { program: 'finance', graduates: 33, employed: 27, unemployed: 6, employmentRate: 82 },
      { program: 'management', graduates: 17, employed: 13, unemployed: 4, employmentRate: 76 },
      { program: 'tourism', graduates: 17, employed: 15, unemployed: 2, employmentRate: 88 },
      { program: 'english', graduates: 34, employed: 28, unemployed: 6, employmentRate: 82 },
      { program: 'preschool', graduates: 87, employed: 80, unemployed: 7, employmentRate: 92 },
      { program: 'primary', graduates: 19, employed: 18, unemployed: 1, employmentRate: 95 }
    ],
    totalGraduates: 274,
    totalEmployed: 234,
    totalUnemployed: 40,
    overallRate: 85
  },
  '2024': {
    year: '2024',
    programs: [
      { program: 'economics', graduates: 184, employed: 83, unemployed: 101, employmentRate: 45 },
      { program: 'finance', graduates: 51, employed: 23, unemployed: 28, employmentRate: 45 },
      { program: 'management', graduates: 25, employed: 10, unemployed: 15, employmentRate: 40 },
      { program: 'tourism', graduates: 25, employed: 9, unemployed: 16, employmentRate: 36 },
      { program: 'english', graduates: 55, employed: 17, unemployed: 38, employmentRate: 31 },
      { program: 'preschool', graduates: 474, employed: 407, unemployed: 67, employmentRate: 86 },
      { program: 'primary', graduates: 117, employed: 64, unemployed: 53, employmentRate: 55 }
    ],
    totalGraduates: 931,
    totalEmployed: 613,
    totalUnemployed: 318,
    overallRate: 66
  },
  '2025': {
    year: '2025',
    programs: [
      { program: 'economics', graduates: 340, employed: 165, unemployed: 175, employmentRate: 49 },
      { program: 'finance', graduates: 87, employed: 40, unemployed: 47, employmentRate: 46 },
      { program: 'management', graduates: 15, employed: 3, unemployed: 12, employmentRate: 20 },
      { program: 'tourism', graduates: 15, employed: 3, unemployed: 12, employmentRate: 20 },
      { program: 'psychology', graduates: 95, employed: 35, unemployed: 60, employmentRate: 37 },
      { program: 'computerEngineering', graduates: 20, employed: 4, unemployed: 16, employmentRate: 20 },
      { program: 'english', graduates: 84, employed: 16, unemployed: 68, employmentRate: 19 },
      { program: 'preschool', graduates: 1279, employed: 1098, unemployed: 181, employmentRate: 86 },
      { program: 'primary', graduates: 218, employed: 114, unemployed: 104, employmentRate: 52 }
    ],
    totalGraduates: 2153,
    totalEmployed: 1478,
    totalUnemployed: 675,
    overallRate: 69
  }
};

// Employment trend data for line charts
export const employmentTrendData = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  overallRates: [83, 84, 85, 85, 85, 66, 69],
  totalGraduates: [236, 250, 260, 266, 274, 931, 2153],
  totalEmployed: [196, 210, 220, 226, 234, 613, 1478]
};

// Program names for translation
export const programKeys = [
  'economics',
  'finance', 
  'management',
  'tourism',
  'english',
  'preschool',
  'primary',
  'psychology',
  'computerEngineering'
] as const;
