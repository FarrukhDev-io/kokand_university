"use client";

import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FooterBottom = () => {
  const [showImage, setShowImage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openTelegram = () => {
    window.open("https://t.me/launch21uz", "_blank");
  };

  return (
    <motion.footer
      className="relative mt-20 pt-10 pb-12 border-t border-border text-center text-muted-foreground bg-background overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* © Text */}
      <p className="text-sm mb-8 tracking-wide">
        © 2025 Qo‘qon Universiteti. Barcha huquqlar himoyalangan.
      </p>

      {/* Ishlab chiqilgan section */}
      <div className="relative flex items-center justify-center">
        <motion.div
          onMouseEnter={() => !isMobile && setShowImage(true)}
          onMouseLeave={() => !isMobile && setShowImage(false)}
          onClick={() => isMobile && setShowImage((prev) => !prev)}
          whileHover={!isMobile ? { scale: 1.08 } : {}}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 cursor-pointer select-none group relative"
          role="button"
          aria-label="Telegram sahifasiga o‘tish"
        >
          <Code2 className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary/80" />
          <motion.span
            className="text-sm font-medium transition-colors duration-300 group-hover:text-primary"
            animate={{ scale: showImage ? 1.1 : 1 }}
            transition={{ duration: 0.25 }}
          >
            Ishlab chiqilgan
          </motion.span>

          {/* Glowing background */}
          <AnimatePresence>
            {showImage && (
              <motion.div
                key="glow"
                className="absolute -z-10 right-[-80px] w-24 h-24 rounded-full bg-primary/30 blur-2xl opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>

          {/* Animated image */}
          <AnimatePresence>
            {showImage && (
              <motion.img
                key="logo"
                src="/L21.PNG"
                alt="Launch21 logotipi"
                onClick={(e) => {
                  e.stopPropagation();
                  openTelegram();
                }}
                className="absolute right-[-80px] w-16 sm:w-20 h-auto rounded-lg shadow-lg object-contain cursor-pointer"
                initial={{ opacity: 0, x: 20, y: 10, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                exit={{ opacity: 0, x: 20, scale: 0.9, transition: { duration: 0.3 } }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile adjustments */}
      <div className="sm:hidden mt-4 text-xs text-muted-foreground/80">
        {showImage && (
          <p className="text-[11px]">Rasmni bosing — Telegram sahifasiga o‘tadi</p>
        )}
      </div>
    </motion.footer>
  );
};

export default FooterBottom;
