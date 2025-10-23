"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  ExternalLink,
} from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import VacanciesList from "@/components/ui/VacasiesList";
import VacancyModal from "@/components/ui/VacancyModal";
import OTPModal from "@/components/ui/OTPModal";
import { Vacancy } from "@/components/ui/VacancyCard";
import { useAuth } from "@/components/ui/AuthContext";

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { token } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [modalVacancy, setModalVacancy] = useState<Vacancy | null>(null);
  const [showOTP, setShowOTP] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const logoSrc = theme === "dark" ? "/ku-white.png" : "/ku-black.png";

  // 🔹 Prompt olib tashlandi, faqat OTPModal orqali email kiritiladi
  const handleSubscribe = (vacancy: Vacancy) => {
    if (!token) {
      setModalVacancy(vacancy);
      setShowOTP(true); // OTPModal ochiladi
    } else {
      setModalVacancy(vacancy); // Token bor bo‘lsa — to‘g‘ridan VacancyModal
    }
  };

  const closeModal = () => {
    setModalVacancy(null);
    setShowOTP(false);
  };

  const stats = [
    {
      icon: <FaUserGraduate className="h-12 w-12 mx-auto mb-3 text-primary" />,
      value: "11,700+",
      label: t.hero.stats.students,
    },
    {
      icon: <GraduationCap className="h-12 w-12 mx-auto mb-3 text-secondary" />,
      value: "850+",
      label: t.hero.stats.faculty,
    },
    {
      icon: <BookOpen className="h-12 w-12 mx-auto mb-3 text-accent" />,
      value: "500+",
      label: t.hero.stats.programs,
    },
    {
      icon: <Award className="h-12 w-12 mx-auto mb-3 text-chart-4" />,
      value: "200+",
      label: t.hero.stats.partners,
    },
  ];

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-all duration-500"
      >
        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Hero Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4"
            >
              <h1 className="flex justify-center items-center gap-4 text-5xl md:text-7xl font-bold drop-shadow-lg">
                <img
                  key={logoSrc}
                  src={logoSrc}
                  alt="Kokand University logo"
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full object-contain transition-all duration-500"
                />
                <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
              </h1>
            </motion.div>

            {/* Welcome Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative glass-card rounded-3xl p-8 overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <img
  src="https://www.kokanduni.uz/build/assets/hero-bg-CFIvlFTq.webp"
  alt="Background"
  className="
    absolute inset-0 w-full h-full
    object-cover object-top
    opacity-30
    blur-[0.5px]                /* juda yengil blur */
    will-change-transform        /* GPU optimizatsiya */
    [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
    [image-rendering:auto]       /* mozaikalashni yo‘qotadi */
  "
/>


              <div className="relative z-10 space-y-6">
  {/* Sarlavha */}
  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
    {t.hero.welcomeCard.title}
  </h2>

  {/* Tavsif */}
  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
    {t.hero.welcomeCard.description}
  </p>

  {/* Tugma */}
  <a
    href="https://www.kokanduni.uz"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 hover:shadow-md transition-all duration-300"
  >
    {t.hero.welcomeCard.cta}
    <ExternalLink className="h-5 w-5" />
  </a>
</div>

            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all"
                >
                  {stat.icon}
                  <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Vacancies Section */}
            <section className="mt-20">
              <h2 className="flex justify-center text-3xl font-bold mb-6">
                E'lonlar
              </h2>
              <VacanciesList onSubscribe={handleSubscribe} />
            </section>
          </div>
        </div>
      </section>

     {/* OTP Modal */}
{showOTP && modalVacancy && (
  <OTPModal
    onClose={() => setShowOTP(false)}
    onSuccess={() => {
      setShowOTP(false);
      setModalVacancy(null);
    }}
  />
)}


      {/* Vacancy Modal */}
      {modalVacancy && !showOTP && token && (
        <VacancyModal vacancy={modalVacancy} onClose={closeModal} />
      )}
    </>
  );
};

export default Hero;
