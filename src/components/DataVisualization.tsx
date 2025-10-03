import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StudentBarChart from "./Charts/StudentBarChart";
import FacultyPieChart from "./Charts/FacultyPieChart";
import EnrollmentLineChart from "./Charts/EnrollmentLineChart";
import GraduationRateChart from "./Charts/GraduationRateChart";
import { useLanguage } from "@/contexts/LanguageContext";

const DataVisualization = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();
  
  return (
    <section id="analytics" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gradient">{t.analytics.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.analytics.subtitle}
            </p>
          </motion.div>

          {/* Main Charts Grid with 3D effect */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="chart-container"
            >
              <div className="chart-3d">
                <StudentBarChart />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="chart-container"
            >
              <div className="chart-3d">
                <FacultyPieChart />
              </div>
            </motion.div>
          </div>

          {/* Additional Charts */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="chart-container"
            >
              <div className="chart-3d">
                <EnrollmentLineChart />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="chart-container"
            >
              <div className="chart-3d">
                <GraduationRateChart />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;
