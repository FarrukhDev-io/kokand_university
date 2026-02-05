"use client";

import { useState, useEffect } from "react";
import { Code2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FooterBottom = () => {
  const [showTelegram, setShowTelegram] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openTelegram = () => window.open("https://t.me/ku_Karyera", "_blank");

  const handleAction = () => {
    if (isMobile) {
      if (showTelegram) openTelegram();
      else setShowTelegram(true);
    } else {
      openTelegram();
    }
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

      {/* Ishlab chiqilgan */}
      <div className="flex items-center justify-center">
        <motion.div
          onClick={handleAction}
          onMouseEnter={() => !isMobile && setShowTelegram(true)}
          onMouseLeave={() => !isMobile && setShowTelegram(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-2 cursor-pointer select-none group"
          role="button"
          aria-label="Telegram sahifasiga o‘tish"
        >
          <Code2 className="h-5 w-5 text-primary transition-all duration-300 group-hover:text-primary/80" />

          <div className="relative flex items-center justify-center w-[130px] h-[26px]">
  <AnimatePresence mode="wait">
    <motion.span
      key="text"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary"
    >
      Aloqa uchun...
      <Send className="w-5 h-5 text-primary" />
    </motion.span>
  </AnimatePresence>
</div>

        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterBottom;
