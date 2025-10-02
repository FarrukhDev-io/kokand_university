import { GraduationCap, Users, BookOpen, Search, Building, Library, Globe, School } from "lucide-react";
import { universityStats } from "@/data/facultiesData";

const iconMap: { [key: string]: any } = {
  GraduationCap,
  Users,
  BookOpen,
  Search,
  Building,
  Library,
  Globe,
  School
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">About Kokand University</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover Your Dreams With Us
            </p>
          </div>

          {/* Description */}
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <p className="text-lg leading-relaxed text-foreground">
              Kokand University operates as a <strong>non-state higher educational institution</strong> in accordance with 
              the <strong>Resolution No. 683 of the Cabinet of Ministers of the Republic of Uzbekistan</strong> dated 
              August 17, 2019, 'On the establishment of Kokand University'. We are committed to providing world-class 
              education and fostering innovation, research, and international collaboration.
            </p>
            <p className="text-lg leading-relaxed text-foreground mt-4">
              Located in <strong>Turkiston Street, Kokand, Fergana Region</strong>, our university combines modern 
              facilities with traditional values, creating an ideal environment for academic excellence and personal growth.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {universityStats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer group"
                >
                  <Icon className="h-10 w-10 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* International Partnerships */}
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              International Partnerships
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  Solbridge Business School
                </h4>
                <p className="text-muted-foreground">Joint educational programs in business and management</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  Woosong University
                </h4>
                <p className="text-muted-foreground">Collaboration in hospitality and technology programs</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  Joongbu University
                </h4>
                <p className="text-muted-foreground">Partnership in engineering and applied sciences</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  Transport & Telecommunications Institute
                </h4>
                <p className="text-muted-foreground">Advanced programs in transport and ICT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
