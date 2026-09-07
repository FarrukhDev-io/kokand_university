import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <FaUserGraduate className="h-16 w-16 mb-4 md:mb-6 text-primary drop-shadow-md" />,
      value: "11,700+",
      label: t.hero.stats.students,
      className: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 via-background/60 to-background/60",
      valueSize: "text-5xl md:text-7xl",
      isRow: false,
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-secondary drop-shadow-md" />,
      value: "3500+",
      label: t.hero.stats.faculty,
      className: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1 bg-background/40",
      valueSize: "text-4xl md:text-5xl",
      isRow: true,
    },
    {
      icon: <BookOpen className="h-12 w-12 mb-3 text-accent drop-shadow-md" />,
      value: "500+",
      label: t.hero.stats.programs,
      className: "col-span-1 md:col-span-1 bg-background/40",
      valueSize: "text-3xl lg:text-4xl",
      isRow: false,
      centerText: true,
    },
    {
      icon: <Award className="h-12 w-12 mb-3 text-chart-4 drop-shadow-md" />,
      value: "200+",
      label: t.hero.stats.partners,
      className: "col-span-1 md:col-span-1 bg-background/40",
      valueSize: "text-3xl lg:text-4xl",
      isRow: false,
      centerText: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    },
  };

  return (
    <section className="bg-transparent py-16 relative z-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 auto-rows-[minmax(160px,auto)] md:auto-rows-[180px]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden glass-card rounded-3xl p-6 flex shadow-xl hover:shadow-2xl border border-white/20 dark:border-white/5 transition-all duration-300 ${stat.className}`}
              style={{
                boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 15px 35px -10px rgba(0,0,0,0.1)",
              }}
            >
              {/* Subtle inner reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent dark:from-white/10 opacity-50 pointer-events-none rounded-3xl"></div>
              
              <div className="relative z-10 w-full h-full">
                {stat.isRow ? (
                  <div className="flex flex-row items-center gap-6 w-full h-full justify-center md:justify-start px-4">
                    {stat.icon}
                    <div className="text-left">
                      <div className={`${stat.valueSize} font-extrabold text-foreground tracking-tight`}>
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base font-medium text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`flex flex-col w-full h-full justify-center ${stat.centerText ? 'items-center text-center' : 'items-center md:items-start text-center md:text-left'} px-2 md:px-4`}>
                    {stat.icon}
                    <div>
                      <div className={`${stat.valueSize} font-extrabold text-foreground tracking-tight`}>
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base font-medium text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
