import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Admissions", href: "#admissions" },
    { name: "Campus Life", href: "#campus" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="https://www.kokanduni.uz" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 group"
          >
            <GraduationCap className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">Kokand University</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Qoʻqon Universiteti</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="ml-4"
              onClick={() => window.open("https://ikkinchitalim.kokanduni.uz/", "_blank")}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="w-full mt-2"
              onClick={() => {
                window.open("https://ikkinchitalim.kokanduni.uz/", "_blank");
                setIsOpen(false);
              }}
            >
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
