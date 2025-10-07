"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  ExternalLink,
  CalendarDays,
  Megaphone,
  BookMarked,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mounted flag to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logoSrc = theme === "dark" ? "/ku-white.png" : "/ku-black.png";

  // Card ranglari light/dark mode uchun
  const cardOverlay = theme === "dark"
    ? "from-black/90 via-black/60 to-transparent"
    : "from-white/70 via-white/50 to-transparent";

  const newsBoardBg = theme === "dark"
    ? "bg-black/60 text-gray-200"
    : "bg-white/50 text-gray-800";

  const newsBoardBorder = theme === "dark" ? "border-white/10" : "border-black/10";

  const newsItemHoverBg = theme === "dark" ? "hover:bg-white/5" : "hover:bg-black/5";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-all duration-500">
      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* 🌟 Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="flex justify-center items-center gap-4 text-5xl md:text-7xl font-bold text-red-600 drop-shadow-lg">
              <img
                key={logoSrc}
                src={logoSrc}
                alt="Kokand University logo"
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-contain transition-all duration-500"
              />
              <span>{t.hero.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* 🎓 Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Welcome Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative glass-card rounded-3xl p-8 overflow-hidden shadow-2xl border ${newsBoardBorder}`}
            >
              <img
                src="https://www.kokanduni.uz/build/assets/hero-bg-CFIvlFTq.webp"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[2px]"
              />
              <div className="relative z-10 space-y-6">
                <div className="inline-block p-4 rounded-2xl bg-primary/10 backdrop-blur-sm">
                  <GraduationCap className="h-16 w-16 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t.hero.welcomeCard.title}</h2>
                <p className="text-lg text-muted-foreground">{t.hero.welcomeCard.description}</p>
                <a
                  href="https://www.kokanduni.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  {t.hero.welcomeCard.cta}
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* 🗞️ News & Announcements Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`relative glass-card rounded-3xl overflow-hidden shadow-2xl border ${newsBoardBorder}`}
            >
              <img
                src="https://www.kokanduni.uz/build/assets/hero-bg-CFIvlFTq.webp"
                alt="Kokand University"
                className="w-full h-full object-cover opacity-40"
                style={{ minHeight: "420px" }}
              />

              <div className={`absolute inset-0 bg-gradient-to-t ${cardOverlay}`} />

              <div className={`absolute bottom-0 left-0 right-0 ${newsBoardBg} backdrop-blur-md p-8 rounded-b-3xl border-t ${newsBoardBorder}`}>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 drop-shadow-md">
                  <Megaphone className="w-7 h-7 text-yellow-400 animate-pulse" />
                  E’lonlar va yangiliklar
                </h3>

                <ul className="space-y-5">
                  <li className={`flex items-start gap-4 group ${newsItemHoverBg} p-3 rounded-xl transition-all duration-200`}>
                    <div className="p-2 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20">
                      <CalendarDays className="w-6 h-6 text-blue-400" />
                    </div>
                    <span>
                      <strong>Yangi o‘quv yili</strong> uchun hujjatlar qabul qilinmoqda — <span className="font-semibold">2025/2026</span>.
                    </span>
                  </li>

                  <li className={`flex items-start gap-4 group ${newsItemHoverBg} p-3 rounded-xl transition-all duration-200`}>
                    <div className="p-2 rounded-xl bg-green-500/10 group-hover:bg-green-500/20">
                      <BookMarked className="w-6 h-6 text-green-400" />
                    </div>
                    <span>
                      <strong>Ingliz tili olimpiadasi</strong> <span className="font-semibold">12-oktabr</span> kuni universitet binosida o‘tkaziladi.
                    </span>
                  </li>

                  <li className={`flex items-start gap-4 group ${newsItemHoverBg} p-3 rounded-xl transition-all duration-200`}>
                    <div className="p-2 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20">
                      <Globe className="w-6 h-6 text-orange-400" />
                    </div>
                    <span>
                      <strong>IT Bootcamp 2025</strong> uchun ro‘yxatdan o‘tish boshlandi. <span className="font-semibold">Joylar soni cheklangan!</span>
                    </span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-white/10 pt-3 text-sm italic flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  Yangilangan: 7-oktabr, 2025
                </div>
              </div>
            </motion.div>
            
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { icon: <GraduationCap className="h-12 w-12 mx-auto mb-3 text-primary" />, value: "11,700+", label: t.hero.stats.students },
              { icon: <Users className="h-12 w-12 mx-auto mb-3 text-secondary" />, value: "850+", label: t.hero.stats.faculty },
              { icon: <BookOpen className="h-12 w-12 mx-auto mb-3 text-accent" />, value: "6", label: t.hero.stats.programs },
              { icon: <Award className="h-12 w-12 mx-auto mb-3 text-chart-4" />, value: "4", label: t.hero.stats.partners },
            ].map((stat, i) => (
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
