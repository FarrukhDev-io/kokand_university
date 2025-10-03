import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* Two Cards Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Welcome Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-3xl p-8 space-y-6"
            >
              <div className="inline-block p-4 rounded-2xl bg-primary/10">
                <GraduationCap className="h-16 w-16 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                {t.hero.welcomeCard.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.hero.welcomeCard.description}
              </p>
              <a
                href="https://www.kokanduni.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                {t.hero.welcomeCard.cta}
                <ExternalLink className="h-5 w-5" />
              </a>
            </motion.div>

            {/* University Image Card with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
              style={{ perspective: '1500px' }}
            >
              <div 
                className="glass-card rounded-3xl overflow-hidden h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease',
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
                }}
              >
                <img
                  src="https://www.kokanduni.uz/build/assets/hero-bg-CFIvlFTq.webp"
                  alt="Kokand University"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-8">
                  <h3 className="text-3xl font-bold text-foreground">{t.hero.title}</h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all">
              <GraduationCap className="h-12 w-12 mx-auto mb-3 text-primary" />
              <div className="text-4xl font-bold text-foreground">11,700+</div>
              <div className="text-sm text-muted-foreground mt-2">{t.hero.stats.students}</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all">
              <Users className="h-12 w-12 mx-auto mb-3 text-secondary" />
              <div className="text-4xl font-bold text-foreground">850+</div>
              <div className="text-sm text-muted-foreground mt-2">{t.hero.stats.faculty}</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all">
              <BookOpen className="h-12 w-12 mx-auto mb-3 text-accent" />
              <div className="text-4xl font-bold text-foreground">6</div>
              <div className="text-sm text-muted-foreground mt-2">{t.hero.stats.programs}</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all">
              <Award className="h-12 w-12 mx-auto mb-3 text-chart-4" />
              <div className="text-4xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground mt-2">{t.hero.stats.partners}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
