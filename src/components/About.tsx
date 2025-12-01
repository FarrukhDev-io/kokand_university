import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Users, BookOpen, Search, Building, Library, Globe, School } from "lucide-react";
import { universityStats } from "@/data/facultiesData";
import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";
import PartnersSection from "./Partners"; // ✅ yangi komponent import

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const iconComponents = [
    GraduationCap,
    Users,
    BookOpen,
    Search,
    Building,
    Library,
    Globe,
    School,
  ];

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{t.about.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          {/* Kelajakka Qadam Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="glass-card rounded-2xl p-8 md:p-12 space-y-6"
>
  <h3 className="text-3xl font-bold text-primary">Kelajakka qadam</h3>
  <p className="text-muted-foreground text-lg">6-Noyabr 2025</p>

  <p className="text-lg leading-relaxed text-foreground">
    2025-yil 14-fevral kuni davlatimiz rahbari mamlakatimiz yoshlari bilan muloqoti 
    chog‘ida yoshlar tadbirkorligida mutlaqo yangi davrni boshlab beradigan uchta 
    muhim qaror qabul qilganini ta’kidlab, jumladan, ta’lim muassasalarini 
    bitirayotgan yoshlar bandligini ta’minlash bo‘yicha yangi tizim yaratilishini 
    ma’lum qilgan edilar.
  </p>

  <p className="text-lg leading-relaxed text-foreground">
    Ushbu qarorlar ijrosini ta’minlash maqsadida Qo‘qon universitetida 
    "Kelajakka qadam" markazi ochildi. "Kelajakka qadam" markazi bitiruvchi 
    yoshlarning kasbiy rivojlanishini qo‘llab-quvvatlash, ularni zamonaviy mehnat 
    bozori talablariga mos malaka va ko‘nikmalar bilan ta’minlash, shuningdek, 
    amaliy tajriba orttirish, stajirovka, talabalar amaliyot o‘tash, kelgusida o‘z 
    kasbiy faoliyatini boshlash uchun zarur shart-sharoitlar yaratish va ish bilan 
    ta’minlashga qaratilgan.
  </p>

  <p className="text-lg leading-relaxed text-foreground">
    Bitiruvchi talabalarining "Start up" loyihalari Qo‘qon universitetidagi 
    “Kelajakka qadam” markazi orqali qo‘llab-quvvatlanadi.
  </p>

  <p className="text-lg leading-relaxed text-foreground">
    "Kelajakka qadam" dasturining rasmiy ijtimoiy tarmoqlari sahifalariga 
    quyidagi QR-kod orqali o‘tish mumkin:
  </p>

  <div className="flex justify-center pt-4">
    <img
      src="/kuQR.jpg"
      alt="Kelajakka Qadam QR"
      className="w-48 h-48 object-contain"
    />
  </div>
</motion.div>


          {/* ✅ Partners Section Component */}
          <PartnersSection />

        </div>
      </div>
    </section>
  );
};

export default About;
