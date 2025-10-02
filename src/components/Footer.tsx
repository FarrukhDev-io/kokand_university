import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8" />
                <div>
                  <div className="text-lg font-bold">Kokand University</div>
                  <div className="text-sm opacity-80">Qoʻqon Universiteti</div>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Leading non-state higher educational institution in Uzbekistan, 
                established in 2019 to provide world-class education and foster innovation.
              </p>
              <p className="text-xs opacity-80 italic">
                "There is and will be no salvation in the world except through knowledge"
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#programs" className="opacity-90 hover:opacity-100 transition-opacity">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#admissions" className="opacity-90 hover:opacity-100 transition-opacity">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="https://www.kokanduni.uz/en" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                    Official Website
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://ikkinchitalim.kokanduni.uz/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                    Apply Online
                  </a>
                </li>
                <li>
                  <a href="https://library.kokanduni.uz/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                    Library
                  </a>
                </li>
                <li>
                  <a href="https://hemis.kokanduni.uz/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="https://webmail.kokanduni.uz/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                    Webmail
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="opacity-90">
              © 2025 Kokand University. All rights reserved.
            </div>
            <div className="flex gap-6 opacity-90">
              <a href="mailto:info@kokanduni.uz" className="hover:opacity-100 transition-opacity">
                info@kokanduni.uz
              </a>
              <a href="tel:+998735455555" className="hover:opacity-100 transition-opacity">
                +998 73 545-55-55
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
