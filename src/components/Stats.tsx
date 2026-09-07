import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <FaUserGraduate className="h-12 w-12 mx-auto mb-3 text-primary" />,
      value: "11,700+",
      label: t.hero.stats.students,
    },
    {
      icon: <GraduationCap className="h-12 w-12 mx-auto mb-3 text-secondary" />,
      value: "3500+",
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
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all"
            >
              {stat.icon}
              <div className="text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
