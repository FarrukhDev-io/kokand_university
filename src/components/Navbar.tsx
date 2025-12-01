"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? "/ku-white.png" : "/ku-black.png";

  const navLinks = [
    { name: t.hero.title, href: "#hero" },
    { name: t.nav.about, href: "#about" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b backdrop-blur-xl bg-background/80 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 group"
          >
            <img
              src={logoSrc}
              alt="Kokand University logo"
              className="h-10 w-10 rounded-full object-contain transition-transform group-hover:scale-110 duration-300"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                Kokand University
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Qoʻqon Universiteti
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
