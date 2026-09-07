import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { t } = useLanguage();
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? "/ku-white.png" : "/ku-black.png";

  const navLinks = [
    { name: t.nav.home || "Bosh sahifa", href: "#hero" },
    { name: t.nav.vacancies || "E'lonlar", href: "#vacancies" },
    { name: t.nav.about || "Kelajakka Qadam", href: "#about" },
    { name: t.nav.partners || "Hamkorlar", href: "#partners" },
    { name: t.nav.contact || "Aloqa", href: "#contact" },
  ];

  // Handle Scroll to toggle glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // close menu first
      setIsOpen(false);
      // small delay to allow menu animation to finish before smooth scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 pointer-events-none">
      {/* Floating Pill Container */}
      <motion.nav
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
          isScrolled 
            ? "glass-card shadow-lg bg-background/70 backdrop-blur-xl border-border/50 py-2 px-4 sm:px-6" 
            : "bg-transparent border-transparent py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center space-x-2 group z-50 relative"
          >
            <img
              src={logoSrc}
              alt="Kokand University logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain transition-transform group-hover:scale-105 duration-300"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-primary transition-colors">
                Kokand University
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">
                Qoʻqon Universiteti
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative px-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="relative z-10 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
                {/* Sliding background pill (Framer Motion) */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-4 z-50 relative">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 mt-2 border-t border-border/50 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left px-4 py-3 text-sm font-medium text-foreground bg-primary/5 hover:bg-primary/10 rounded-2xl transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
