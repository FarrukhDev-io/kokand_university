export interface Faculty {
  id: number;
  name: string;
  nameUz: string;
  description: string;
  programs: string[];
}

export const faculties: Faculty[] = [
  {
    id: 1,
    name: "Faculty of Economics and Business",
    nameUz: "Iqtisodiyot va biznes fakulteti",
    description: "Leading programs in economics, finance, and business management with international partnerships including Solbridge Business School.",
    programs: ["Business Administration", "Finance and Banking", "Economics", "International Business"],
  },
  {
    id: 2,
    name: "Faculty of Engineering and Technology",
    nameUz: "Muhandislik va texnologiya fakulteti",
    description: "Cutting-edge technology and engineering programs with partnerships with Transport and Telecommunications Institute.",
    programs: ["Computer Engineering", "Information Technology", "Telecommunications", "Transport Engineering"],
  },
  {
    id: 3,
    name: "Faculty of Natural Sciences",
    nameUz: "Tabiiy fanlar fakulteti",
    description: "Comprehensive programs in mathematics, physics, chemistry, and biology with modern laboratory facilities.",
    programs: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
  {
    id: 4,
    name: "Faculty of Social Sciences",
    nameUz: "Ijtimoiy fanlar fakulteti",
    description: "Programs focused on sociology, psychology, and social work with emphasis on research and community engagement.",
    programs: ["Sociology", "Psychology", "Social Work", "Political Science"],
  },
  {
    id: 5,
    name: "Faculty of Philology",
    nameUz: "Filologiya fakulteti",
    description: "Languages, literature, and linguistics programs with focus on Uzbek, English, and other international languages.",
    programs: ["Uzbek Language and Literature", "English Language", "Translation", "Linguistics"],
  },
  {
    id: 6,
    name: "Faculty of Law",
    nameUz: "Huquqshunoslik fakulteti",
    description: "Comprehensive legal education preparing students for careers in law, justice, and legal services.",
    programs: ["Civil Law", "Criminal Law", "International Law", "Constitutional Law"],
  }
];

export interface UniversityStats {
  label: string;
  value: number;
}

export const universityStats: UniversityStats[] = [
  { label: "Students", value: 11700 },
  { label: "Professors & Teachers", value: 200 },
  { label: "Doctoral Students", value: 79 },
  { label: "Independent Researchers", value: 58 },
  { label: "Classrooms", value: 46 },
  { label: "Educational Fields", value: 14 },
  { label: "Joint Programs", value: 5 },
  { label: "Faculties", value: 2 }
];
