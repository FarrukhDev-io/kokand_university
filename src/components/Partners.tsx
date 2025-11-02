import { motion, useMotionValue, animate } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const Partners = () => {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const animationRef = useRef<any>(null);

  const partners = [
    { name: "Ishonch", img: "/partners/logo_ishonch.png", lightLogo: true },
    { name: "Mehrigiyo", img: "/partners/logo_mehrigiyo.png" },
    { name: "Domstroy", img: "/partners/domstroy_png.png" },
    { name: "EPA", img: "/partners/epa.png" },
    { name: "Lochin Mould", img: "/partners/lochin.png" },
    { name: "Timsoll", img: "/partners/timsoll_logo.png" },
    { name: "Europrint", img: "/partners/europrint_logo_2.png" },
  ];

  const duplicated = [...partners, ...partners, ...partners];
  const itemWidth = 220;
  const totalWidth = partners.length * itemWidth;

  // Avtomatik harakat
  useEffect(() => {
    if (!isDragging) {
      const controls = animate(x, x.get() - totalWidth, {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        onUpdate: (latest) => {
          if (latest <= -totalWidth * 2) x.set(latest + totalWidth);
        },
      });
      animationRef.current = controls;
      return () => controls.stop();
    }
  }, [isDragging, totalWidth, x]);

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-b from-background via-muted/10 to-background rounded-2xl overflow-hidden relative">
      {/* Sarlavha */}
      <div className="container mx-auto px-4 text-center mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t.about.partnerships || "Bizning hamkorlarimiz"}
          </h2>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            {t.about.partnersSubtitle || "Yetakchi kompaniyalar bizga ishonadi"}
          </p>
        </motion.div>
      </div>

      {/* Logotiplar */}
      <div className="relative cursor-grab active:cursor-grabbing" ref={constraintsRef}>
        <motion.div
          className="flex gap-10 sm:gap-14 w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -totalWidth * 2, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => {
            setIsDragging(true);
            animationRef.current?.stop();
          }}
          onDragEnd={() => setIsDragging(false)}
        >
          {duplicated.map((p, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center min-w-[160px] sm:min-w-[200px] group select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div
                className={`rounded-2xl p-5 sm:p-6 flex items-center justify-center border transition-all shadow-sm hover:shadow-md duration-300
                ${p.lightLogo
                  ? "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                  : "bg-white/90 dark:bg-neutral-900/90 border-neutral-200/60 dark:border-neutral-800/60"}
                `}
                style={{ width: "170px", height: "100px" }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  draggable={false}
                  className={`max-h-full max-w-full object-contain transition-all duration-300 group-hover:brightness-110 ${
                    p.lightLogo ? "dark:invert dark:brightness-150" : ""
                  }`}
                />
              </div>
              <p className="text-sm sm:text-base mt-3 text-muted-foreground font-semibold text-center group-hover:text-primary transition-colors">
                {p.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient fade */}
        <div className="absolute left-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-l from-background via-background/70 to-transparent pointer-events-none"></div>
      </div>

      {/* Blur bezaklar (kichikroq qilib qo‘yilgan) */}
      <div className="absolute top-1/3 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Partners;
