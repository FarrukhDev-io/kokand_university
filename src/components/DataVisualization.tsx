import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StudentBarChart from "./Charts/StudentBarChart";
import FacultyPieChart from "./Charts/FacultyPieChart";
import { useLanguage } from "@/contexts/LanguageContext";

const DataVisualization = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{t.analytics.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.analytics.subtitle}
            </p>
          </motion.div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <StudentBarChart />
            <FacultyPieChart />
          </div>

          {/* Additional Info */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-lg text-muted-foreground">
              Our data-driven approach ensures that we maintain balanced enrollment across all faculties, 
              providing optimal learning environments and resources for every student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;
