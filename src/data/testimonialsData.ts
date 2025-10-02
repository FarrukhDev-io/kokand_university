export interface Testimonial {
  id: number;
  name: {
    uz: string;
    en: string;
    ru: string;
  };
  role: {
    uz: string;
    en: string;
    ru: string;
  };
  quote: {
    uz: string;
    en: string;
    ru: string;
  };
  avatar: string;
  program: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: {
      uz: "Dilshod Rahimov",
      en: "Dilshod Rahimov",
      ru: "Дильшод Рахимов"
    },
    role: {
      uz: "Iqtisodiyot fakulteti talabasi",
      en: "Economics Faculty Student",
      ru: "Студент факультета экономики"
    },
    quote: {
      uz: "Qo'qon Universitetida o'qish mening hayotimdagi eng yaxshi qarorlardan biri bo'ldi. Professional o'qituvchilar va zamonaviy ta'lim muhiti menga kelajagim uchun mustahkam poydevor yaratishga yordam berdi.",
      en: "Studying at Kokand University was one of the best decisions of my life. Professional teachers and modern educational environment helped me build a solid foundation for my future.",
      ru: "Обучение в Кокандском университете было одним из лучших решений в моей жизни. Профессиональные преподаватели и современная образовательная среда помогли мне создать прочную основу для моего будущего."
    },
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod",
    program: "Business Administration"
  },
  {
    id: 2,
    name: {
      uz: "Madina Yo'ldosheva",
      en: "Madina Yuldasheva",
      ru: "Мадина Юлдашева"
    },
    role: {
      uz: "Muhandislik fakulteti bitiruvchisi",
      en: "Engineering Faculty Graduate",
      ru: "Выпускница инженерного факультета"
    },
    quote: {
      uz: "Universitet menga nafaqat nazariy bilim, balki amaliy ko'nikmalar ham berdi. Xalqaro hamkorlik dasturlari orqali Janubiy Koreyada o'qish imkoniyatiga ega bo'ldim.",
      en: "The university gave me not only theoretical knowledge but also practical skills. Through international partnership programs, I had the opportunity to study in South Korea.",
      ru: "Университет дал мне не только теоретические знания, но и практические навыки. Благодаря программам международного партнерства я получила возможность учиться в Южной Корее."
    },
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Madina",
    program: "Computer Engineering"
  },
  {
    id: 3,
    name: {
      uz: "Bekzod Karimov",
      en: "Bekzod Karimov",
      ru: "Бекзод Каримов"
    },
    role: {
      uz: "Tabiiy fanlar fakulteti magistri",
      en: "Master's Student, Natural Sciences",
      ru: "Магистрант факультета естественных наук"
    },
    quote: {
      uz: "Universitetdagi ilmiy tadqiqot imkoniyatlari va zamonaviy laboratoriyalar mening ilmiy faoliyatim uchun juda muhim. Bu yerda o'z salohiyatimni to'liq ochish imkoniyatiga ega bo'ldim.",
      en: "Research opportunities and modern laboratories at the university are crucial for my scientific work. Here I had the opportunity to fully realize my potential.",
      ru: "Возможности для научных исследований и современные лаборатории университета имеют решающее значение для моей научной работы. Здесь я получил возможность полностью реализовать свой потенциал."
    },
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bekzod",
    program: "Applied Mathematics"
  }
];
