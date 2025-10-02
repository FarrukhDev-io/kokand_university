import { FileText, Upload, UserCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Fill Application",
      description: "Complete the online application form with your personal and academic information"
    },
    {
      icon: Upload,
      title: "Submit Documents",
      description: "Upload required documents including transcripts, certificates, and ID copies"
    },
    {
      icon: UserCheck,
      title: "Interview",
      description: "Participate in an interview with our admissions committee"
    },
    {
      icon: CheckCircle2,
      title: "Decision",
      description: "Receive your admission decision and enrollment instructions"
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Admissions</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              2025/2026 Academic Year Admissions Now Open
            </p>
          </div>

          {/* Banner */}
          <div className="hero-gradient rounded-2xl p-8 md:p-12 text-center text-white space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Become a Student at One of Uzbekistan's Leading Universities!
            </h3>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Join thousands of students pursuing excellence in education. Applications for the 2025/2026 academic year are now being accepted.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://ikkinchitalim.kokanduni.uz/", "_blank")}
            >
              Start Your Application
            </Button>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 text-center relative hover:scale-105 transition-transform"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  <Icon className="h-12 w-12 mx-auto mb-4 mt-4 text-primary" />
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Need Help with Your Application?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Contact Center</p>
                <p className="text-muted-foreground">
                  Phone: <a href="tel:+998735455555" className="text-secondary hover:underline">+998 73 545-55-55</a>
                </p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:info@kokanduni.uz" className="text-secondary hover:underline">info@kokanduni.uz</a>
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Location</p>
                <p className="text-muted-foreground">
                  Turkiston Street<br />
                  Kokand City, Fergana Region<br />
                  Uzbekistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
