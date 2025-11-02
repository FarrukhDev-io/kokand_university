"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FooterBottom = () => {
  const [step, setStep] = useState<"hidden" | "first" | "joined">("hidden");

  const openTelegram = () => {
    if (step === "joined") window.open("https://t.me/launch21uz", "_blank");
  };

  return (
    <motion.footer
      className="relative mt-20 pt-10 pb-12 border-t border-border overflow-hidden text-center text-muted-foreground bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* © matn */}
      <p className="text-sm mb-8 tracking-wide z-10 relative">
        © 2025 Qo‘qon Universiteti. Barcha huquqlar himoyalangan.
      </p>

      {/* Asosiy blok */}
      <div className="relative flex flex-col items-center justify-center z-10">
        {/* 1-bosqich: Ishlab chiqilgan */}
        {step === "hidden" && (
          <motion.div
            onClick={() => setStep("first")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer select-none group 
                       sm:absolute sm:right-[8%] sm:top-2 transition-all"
            role="button"
            aria-label="Ishlab chiqilgan"
          >
            <Code2 className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
            <span className="text-sm group-hover:text-primary transition-colors duration-300">
              Ishlab chiqilgan
            </span>
          </motion.div>
        )}

        {/* 2-bosqich: Animatsiyali rasm bloki */}
        <AnimatePresence>
          {step !== "hidden" && (
            <motion.div
              className="relative sm:absolute sm:right-[8%] flex flex-col items-center 
                         cursor-pointer transition-all duration-500 overflow-visible"
              style={{
                width: "clamp(120px, 30vw, 160px)",
                height: "clamp(160px, 35vw, 200px)",
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onMouseEnter={() => step === "first" && setStep("joined")}
              onMouseLeave={() => step === "joined" && setStep("first")}
              onClick={openTelegram}
              role="button"
              aria-label="Telegram sahifasiga o‘tish"
            >
              {/* Birinchi rasm */}
              <motion.img
                src="/L21.jpg"
                alt="L21 logotipi"
                className="w-full h-auto object-contain rounded-t-2xl shadow-md"
                initial={{ x: 150, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: step === "joined" ? 1.03 : 1,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />

              {/* Ikkinchi rasm */}
              <motion.img
                src="/Launch.jpg"
                alt="Launch logotipi"
                className="w-full h-auto object-contain rounded-b-2xl shadow-md"
                animate={{
                  y: step === "joined" ? -6 : 50,
                  opacity: step === "joined" ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />

              {/* Hover effekti */}
              <motion.div
                className="absolute inset-0 bg-primary/10 blur-2xl rounded-2xl pointer-events-none"
                animate={{ opacity: step === "joined" ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Responsive qo‘shimcha styling */}
      <style>{`
        @media (max-width: 640px) {
          footer {
            text-align: center;
          }
          .sm\\:absolute {
            position: static !important;
          }
          .sm\\:right-\\[8%\\] {
            right: 0 !important;
          }
        }

        @media (max-width: 480px) {
          footer p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </motion.footer>
  );
};

export default FooterBottom;
