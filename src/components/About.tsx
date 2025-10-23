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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg leading-relaxed text-foreground">{t.about.description1}</p>
            <p className="text-lg leading-relaxed text-foreground mt-4">{t.about.description2}</p>
          </motion.div>

          {/* ✅ Partners Section Component */}
          <PartnersSection />

        </div>
      </div>
    </section>
  );
};

export default About;
