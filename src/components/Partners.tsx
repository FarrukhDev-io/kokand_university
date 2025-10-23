import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const Partners = () => {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const animationRef = useRef(null);

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
  const itemWidth = 220; // gap bilan birga
  const totalWidth = partners.length * itemWidth;

  // Avtomatik scroll animatsiyasi
  useEffect(() => {
    if (!isDragging) {
      const controls = animate(x, x.get() - totalWidth, {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        onUpdate: (latest) => {
          // Loop yaratish uchun
          if (latest <= -totalWidth * 2) {
            x.set(latest + totalWidth);
          }
        },
      });
      animationRef.current = controls;
      return () => controls.stop();
    }
  }, [isDragging, totalWidth, x]);

  return (
    <section className="py-24 bg-gradient-to-b rounded-2xl from-background via-muted/20 to-background overflow-hidden relative">
      {/* Sarlavha */}
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t.about.partnerships || "Bizning hamkorlarimiz"}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            {t.about.partnersSubtitle || "Yetakchi kompaniyalar bizga ishonadi"}
          </p>
        </motion.div>
      </div>

      {/* Drag/Swipe qilinadigan logotiplar */}
      <div className="relative cursor-grab active:cursor-grabbing" ref={constraintsRef}>
        <motion.div
          className="flex gap-12 md:gap-16 w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -totalWidth * 2, right: 0 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          onDragStart={() => {
            setIsDragging(true);
            if (animationRef.current) animationRef.current.stop();
          }}
          onDragEnd={() => {
            setIsDragging(false);
          }}
        >
          {duplicated.map((partner, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center min-w-[160px] sm:min-w-[200px] md:min-w-[220px] group select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo konteyner */}
              <div
                className={`rounded-2xl p-5 sm:p-6 flex items-center justify-center 
                  transition-all duration-300 shadow-lg hover:shadow-xl
                  ${partner.lightLogo
                    ? "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                    : "bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/50 dark:border-neutral-800/50"}
                  group-hover:border-primary/30
                `}
                style={{ width: "180px", height: "110px" }}
              >
                <img
                  src={partner.img}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  draggable={false}
                  className={`max-h-full max-w-full object-contain 
                    transition-all duration-300 filter group-hover:brightness-110
                    ${partner.lightLogo ? "dark:invert dark:brightness-150" : ""}
                  `}
                />
              </div>

              {/* Hamkor nomi */}
              <p className="text-sm sm:text-base text-muted-foreground mt-4 font-semibold text-center 
                group-hover:text-primary transition-colors duration-300">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chap gradient fade */}
        <div className="absolute left-0 top-0 w-32 md:w-48 h-full 
          bg-gradient-to-r from-background via-background/80 to-transparent 
          pointer-events-none z-10"></div>

        {/* O'ng gradient fade */}
        <div className="absolute right-0 top-0 w-32 md:w-48 h-full 
          bg-gradient-to-l from-background via-background/80 to-transparent 
          pointer-events-none z-10"></div>
      </div>

      {/* Ko'rsatma teksti */}
      <motion.div 
        className="text-center mt-8 text-sm text-muted-foreground/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {/* <p className="hidden md:block">🖱️ Sichqoncha bilan sudrab o'tkizing</p> */}
        {/* <p className="md:hidden">👆 Barmoq bilan sudrab o'tkizing</p> */}
      </motion.div>

      {/* Dekorativ elementlar */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Partners;