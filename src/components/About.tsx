
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import PartnersSection from "./Partners";

const ExpandableText = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  if (!isMobile) {
    return <div className="space-y-4 text-lg leading-relaxed">{children}</div>;
  }

  return (
    <div className="relative">
      <motion.div
        animate={{ maxHeight: expanded ? 2000 : 170 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden space-y-4 text-lg leading-relaxed text-foreground"
      >
        {children}
      </motion.div>

      {!expanded && (
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-muted/40 rounded-lg to-transparent pointer-events-none" />
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-primary font-semibold mt-4 md:hidden"
      >
        {expanded ? t.about.close : t.about.more}
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
    </div>
  );
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-transparent" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 md:p-12 space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">{t.about.title}</h2>
            <p className="text-muted-foreground text-lg">{t.about.date}</p>

            <ExpandableText>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
            </ExpandableText>

            <div className="flex justify-center pt-4">
              <a href="https://kelajakkaqadammarkazi.uz/?from=qr" target="_blank" rel="noopener noreferrer">
                <img
                  src="/kuQR.jpg"
                  alt="Kelajakka Qadam QR"
                  className="w-40 h-40 md:w-48 md:h-48 object-contain"
                />
              </a>
            </div>
          </motion.div>

          <PartnersSection />
        </div>
      </div>
    </section>
  );
};

export default About;
