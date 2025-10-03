import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background with parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070')",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 hero-gradient opacity-92" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* University Logo & Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block glass-card rounded-3xl p-8 mb-6">
              <GraduationCap className="h-24 w-24 mx-auto text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-3xl text-white/95 font-light max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* Quick Stats with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all" style={{ transform: 'perspective(1000px) rotateY(0deg)' }}>
              <GraduationCap className="h-12 w-12 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold text-white">11,700+</div>
              <div className="text-sm text-white/90 mt-2">{t.hero.stats.students}</div>
            </div>
            <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all" style={{ transform: 'perspective(1000px) rotateY(0deg)' }}>
              <BookOpen className="h-12 w-12 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold text-white">6</div>
              <div className="text-sm text-white/90 mt-2">{t.hero.stats.programs}</div>
            </div>
            <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all" style={{ transform: 'perspective(1000px) rotateY(0deg)' }}>
              <Users className="h-12 w-12 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold text-white">850+</div>
              <div className="text-sm text-white/90 mt-2">{t.hero.stats.faculty}</div>
            </div>
            <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all" style={{ transform: 'perspective(1000px) rotateY(0deg)' }}>
              <Award className="h-12 w-12 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold text-white">4</div>
              <div className="text-sm text-white/90 mt-2">{t.hero.stats.partners || "Xalqaro hamkorlar"}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
