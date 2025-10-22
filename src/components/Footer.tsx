import { useState } from "react";
import { Code2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FooterBottom = () => {
  const [showDevelopers, setShowDevelopers] = useState(false);

  return (
    <motion.footer
      className="mt-16 pt-6 pb-6 border-t border-border relative text-center text-muted-foreground overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* © yozuvi */}
      <p className="text-sm mb-3">
        © 2025 Qo‘qon Universiteti. Barcha huquqlar himoyalangan.
      </p>

      {/* Markazda ishlab chiqilgan yozuvi + developerlar */}
      <div className="relative flex flex-col items-center justify-center sm:flex-row sm:gap-10">
        {/* Chap va o‘ng tomondagi developerlar */}
        <AnimatePresence>
          {showDevelopers && (
            <>
              {/* Frontend developer */}
              <motion.a
                href="mailto:farrukh.front.dev@gmail.com"
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -20, y: 10 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-xs hover:text-primary transition-colors whitespace-nowrap mb-2 sm:mb-0 sm:absolute sm:left-[10%]"
              >
                <Mail className="h-3 w-3 text-primary/70" />
                <span>farrukh.front.dev@gmail.com</span>
                <span className="text-muted-foreground/60">(Frontend)</span>
              </motion.a>

              {/* Backend developer */}
              <motion.a
                href="mailto:jaloliddinov009@gmail.com"
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: 10 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-xs hover:text-primary transition-colors whitespace-nowrap sm:absolute sm:right-[10%]"
              >
                <Mail className="h-3 w-3 text-primary/70" />
                <span>jaloliddinov009@gmail.com</span>
                <span className="text-muted-foreground/60">(Backend)</span>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Markazdagi ishlab chiqilgan yozuvi */}
        <div
          onMouseEnter={() => setShowDevelopers(true)}
          onMouseLeave={() => setShowDevelopers(false)}
          onClick={() => setShowDevelopers((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <Code2
              className={`h-5 w-5 text-primary transition-transform duration-300 ${
                showDevelopers ? "rotate-180" : ""
              }`}
            />
            <span className="text-sm hover:text-primary transition-colors">
              Ishlab chiqilgan
            </span>
          </motion.div>
        </div>
      </div>

      {/* Pastdagi pulsatsiyali chiziq */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.footer>
  );
};

export default FooterBottom;
