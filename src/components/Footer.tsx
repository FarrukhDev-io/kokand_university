import { Mail, Phone, MapPin, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">{t.footer.about}</h3>
            <p className="text-muted-foreground text-sm">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.analytics || "Ko'rsatkichlar"}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm">
                  Turkiston ko'chasi, Qo'qon, Farg'ona viloyati, O'zbekiston
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+998735455555" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +998 73 545-55-55
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@kokanduni.uz" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@kokanduni.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Qo'qon Universiteti. {t.footer.rights}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                <span>{t.footer.developed}</span>
              </div>
              <a 
                href="mailto:farrukh.front.dev@gmail.com" 
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="h-3 w-3" />
                <span>farrukh.front.dev@gmail.com</span>
                <span className="text-muted-foreground/60">({t.footer.frontend})</span>
              </a>
              <a 
                href="mailto:jaloliddinov009@gmail.com" 
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="h-3 w-3" />
                <span>jaloliddinov009@gmail.com</span>
                <span className="text-muted-foreground/60">({t.footer.backend})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
