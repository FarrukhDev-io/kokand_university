export interface NewsItem {
  id: number;
  title: {
    uz: string;
    en: string;
    ru: string;
  };
  date: string;
  image: string;
  excerpt: {
    uz: string;
    en: string;
    ru: string;
  };
  link: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: {
      uz: "Xalqaro hamkorlik loyihalari kengaymoqda",
      en: "International Partnership Projects Expanding",
      ru: "Проекты международного партнерства расширяются"
    },
    date: "2025-01-15",
    image: "https://www.kokanduni.uz/storage/blogs/7g2LHwdEe92zKFMq2hggYYJM3eeV7MYiAaDNWAbm.jpg",
    excerpt: {
      uz: "Universitet Janubiy Koreya va Turkiya universitetlari bilan yangi hamkorlik shartnomalari imzoladi.",
      en: "The university has signed new partnership agreements with South Korean and Turkish universities.",
      ru: "Университет подписал новые соглашения о партнерстве с университетами Южной Кореи и Турции."
    },
    link: "https://www.kokanduni.uz/en/blog"
  },
  {
    id: 2,
    title: {
      uz: "2025/2026 o'quv yili uchun qabul boshlandi",
      en: "Admissions Open for 2025/2026 Academic Year",
      ru: "Начался прием на 2025/2026 учебный год"
    },
    date: "2025-01-10",
    image: "https://www.kokanduni.uz/storage/blogs/xMvMcbvF2F6mEzcH1WF5pNE4wXoVJOD2u2OoOElU.jpg",
    excerpt: {
      uz: "Yangi o'quv yili uchun barcha yo'nalishlar bo'yicha qabul jarayoni boshlandi.",
      en: "Admission process has started for all programs for the new academic year.",
      ru: "Начался процесс приема по всем направлениям на новый учебный год."
    },
    link: "https://ikkinchitalim.kokanduni.uz/"
  },
  {
    id: 3,
    title: {
      uz: "Talabalar xalqaro olimpiadada g'olib bo'ldi",
      en: "Students Win International Olympiad",
      ru: "Студенты победили на международной олимпиаде"
    },
    date: "2025-01-05",
    image: "https://www.kokanduni.uz/storage/blogs/fkXbWQltPrvH4iPti6GTIaVAZj26rLiZ1uQSHhjd.jpg",
    excerpt: {
      uz: "Universitetimiz talabalari xalqaro matematika olimpiadasida yuqori natijalar ko'rsatdi.",
      en: "Our university students achieved high results at the international mathematics olympiad.",
      ru: "Студенты нашего университета достигли высоких результатов на международной математической олимпиаде."
    },
    link: "https://www.kokanduni.uz/en/blog"
  },
  {
    id: 4,
    title: {
      uz: "Yangi laboratoriyalar ochildi",
      en: "New Laboratories Opened",
      ru: "Открылись новые лаборатории"
    },
    date: "2024-12-20",
    image: "https://www.kokanduni.uz/storage/blogs/u5whha5IJbcUnEHJCjiaZLJCt8RalaFNRWlF7Pw1.jpg",
    excerpt: {
      uz: "Zamonaviy texnologiyalar bilan jihozlangan yangi ilmiy laboratoriyalar ishga tushirildi.",
      en: "New scientific laboratories equipped with modern technology have been launched.",
      ru: "Запущены новые научные лаборатории, оснащенные современными технологиями."
    },
    link: "https://www.kokanduni.uz/en/blog"
  }
];
