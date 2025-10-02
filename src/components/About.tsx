import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Users, BookOpen, Search, Building, Library, Globe, School } from "lucide-react";
import { universityStats } from "@/data/facultiesData";
import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";

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
    School
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg leading-relaxed text-foreground">
              {t.about.description1}
            </p>
            <p className="text-lg leading-relaxed text-foreground mt-4">
              {t.about.description2}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {universityStats.map((stat, index) => {
              const Icon = iconComponents[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer group"
                >
                  <Icon className="h-10 w-10 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.value >= 1000 ? "+" : ""} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t.about.stats[stat.label.toLowerCase().replace(/\s+/g, '').replace('&', '')] || stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* International Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              {t.about.partnerships}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  Solbridge Business School
                </h4>
                <p className="text-muted-foreground">Joint educational programs in business and management</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  Woosong University
                </h4>
                <p className="text-muted-foreground">Collaboration in hospitality and technology programs</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  Joongbu University
                </h4>
                <p className="text-muted-foreground">Partnership in engineering and applied sciences</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  Transport & Telecommunications Institute
                </h4>
                <p className="text-muted-foreground">Advanced programs in transport and ICT</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
