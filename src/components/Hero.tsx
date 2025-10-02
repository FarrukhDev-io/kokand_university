import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.kokanduni.uz/build/assets/hero-bg-CFIvlFTq.webp"
          alt="Kokand University Campus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome to Kokand University
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light">
            Shaping Future Leaders in Uzbekistan
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            "There is and will be no salvation in the world except through knowledge"
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
              onClick={() => window.open("https://ikkinchitalim.kokanduni.uz/", "_blank")}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={() => {
                const element = document.querySelector("#about");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { value: "11,700+", label: "Students" },
              { value: "200+", label: "Professors" },
              { value: "14", label: "Fields" },
              { value: "5", label: "Joint Programs" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass-card p-4 rounded-lg border-white/20 hover:scale-105 transition-transform"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
