import { Code2, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const FooterBottom = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="mt-12 pt-8 border-t border-border relative overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center space-y-4">
        <p className="text-muted-foreground text-sm">
          © 2025 Qo‘qon Universiteti. {t.footer.rights}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-muted-foreground">
          
          {/* Dev label */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Code2 className="h-4 w-4 text-primary group-hover:text-primary/80 transition-all duration-300 group-hover:rotate-6" />
            <span className="group-hover:text-primary transition-all duration-300">
              {t.footer.developed}
            </span>
          </motion.div>

          {/* Frontend email */}
          <motion.a
            href="mailto:farrukh.front.dev@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.93 }}
            className="hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Mail className="h-3 w-3 text-primary/70 group-hover:text-primary transition-colors" />
            <span>farrukh.front.dev@gmail.com</span>
            <span className="text-muted-foreground/60">
              ({t.footer.frontend})
            </span>
          </motion.a>

          {/* Backend email */}
          <motion.a
            href="mailto:jaloliddinov009@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.93 }}
            className="hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Mail className="h-3 w-3 text-primary/70 group-hover:text-primary transition-colors" />
            <span>jaloliddinov009@gmail.com</span>
            <span className="text-muted-foreground/60">
              ({t.footer.backend})
            </span>
          </motion.a>
        </div>
      </div>

      {/* Dekorativ pulsatsiya chizig‘i */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default FooterBottom;
