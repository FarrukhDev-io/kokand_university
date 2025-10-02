import { MapPin, Phone, Mail, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for any inquiries or information
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Turkiston Street<br />
                      Kokand City, Fergana Region<br />
                      Uzbekistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+998735455555" className="hover:text-secondary transition-colors">
                        +998 73 545-55-55
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@kokanduni.uz" className="hover:text-secondary transition-colors">
                        info@kokanduni.uz
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12"
                    onClick={() => window.open("https://www.facebook.com/kokanduniversity/", "_blank")}
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12"
                    onClick={() => window.open("https://t.me/s/kokanduniversity", "_blank")}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card rounded-xl overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.3926147395557!2d70.93826397625625!3d40.53021907141065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba8f2c5c4b4b4b%3A0x5c4b4b4b4b4b4b4b!2sTurkiston%20Street%2C%20Kokand%2C%20Fergana%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kokand University Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
