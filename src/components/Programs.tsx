import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Cpu, Atom, Users, BookOpen, Scale } from "lucide-react";
import { faculties } from "@/data/facultiesData";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Programs = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const iconComponents = [TrendingUp, Cpu, Atom, Users, BookOpen, Scale];

  return (
    <section id="programs" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{t.programs.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.programs.subtitle}
            </p>
          </motion.div>

          {/* Faculties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties.map((faculty, index) => {
              const Icon = iconComponents[index];
              return (
                <motion.div
                  key={faculty.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-primary/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {faculty.id}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {faculty.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground italic mb-3">
                    {faculty.nameUz}
                  </p>
                  
                  <p className="text-sm text-foreground mb-4">
                    {faculty.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Programs:</p>
                    <ul className="space-y-1">
                      {faculty.programs.slice(0, 3).map((program, idx) => (
                        <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary"></div>
                          {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open("https://www.kokanduni.uz/en", "_blank")}
                  >
                    {t.programs.learnMore}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center pt-8"
          >
            <Button 
              size="lg" 
              onClick={() => window.open("https://www.kokanduni.uz/en", "_blank")}
            >
              {t.programs.viewAll}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
