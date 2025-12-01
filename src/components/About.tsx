"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PartnersSection from "./Partners";

const ExpandableText = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) {
    return <div className="space-y-4 text-lg leading-relaxed">{children}</div>;
  }

  return (
    <div className="relative">
      <motion.div
        animate={{ maxHeight: expanded ? 2000 : 170 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden space-y-4 text-lg leading-relaxed text-foreground"
      >
        {children}
      </motion.div>

      {!expanded && (
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-muted/40 rounded-lg to-transparent pointer-events-none" />
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-primary font-semibold mt-4 md:hidden"
      >
        {expanded ? "Yopish" : "Davomi"}
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              {t.about.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>

          {/* KELAJAKKA QADAM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 md:p-12 space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary">Kelajakka qadam</h3>
            <p className="text-muted-foreground text-lg">6-Noyabr 2025</p>

            {/* MATN FAQAT SHU YERDA COLLAPSE BO'LADI */}
            <ExpandableText>
              <p>
                2025-yil 14-fevral kuni davlatimiz rahbari mamlakatimiz yoshlari bilan
                muloqoti chog‘ida yoshlar tadbirkorligida mutlaqo yangi davrni boshlab
                beradigan uchta muhim qaror qabul qilganini ta’kidlagan edilar.
              </p>

              <p>
                Ushbu qarorlar ijrosini ta’minlash maqsadida Qo‘qon universitetida
                "Kelajakka qadam" markazi ochildi. Markaz bitiruvchi yoshlarning
                kasbiy rivojlanishini qo‘llab-quvvatlash va mehnat bozori talablariga
                mos ko‘nikma berishga qaratilgan.
              </p>

              <p>
                Bitiruvchi talabalar "Start up" loyihalarini markaz orqali
                qo‘llab-quvvatlashlari mumkin.
              </p>

              <p>
                Dastur ijtimoiy tarmoqlari sahifalariga quyidagi QR kod orqali o‘tish mumkin:
              </p>
            </ExpandableText>

            {/* QR KOD HAR DOIM KO‘RINADI */}
            <div className="flex justify-center pt-4">
              <img
                src="/kuQR.jpg"
                alt="Kelajakka Qadam QR"
                className="w-40 h-40 md:w-48 md:h-48 object-contain"
              />
            </div>
          </motion.div>

          {/* PARTNERS */}
          <PartnersSection />
        </div>
      </div>
    </section>
  );
};

export default About;
