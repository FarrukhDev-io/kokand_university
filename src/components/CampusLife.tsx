import { useState } from "react";

const CampusLife = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      url: "https://www.kokanduni.uz/storage/blogs/7g2LHwdEe92zKFMq2hggYYJM3eeV7MYiAaDNWAbm.jpg",
      caption: "Student Activities",
      description: "Vibrant campus life with diverse student organizations"
    },
    {
      url: "https://www.kokanduni.uz/storage/blogs/xMvMcbvF2F6mEzcH1WF5pNE4wXoVJOD2u2OoOElU.jpg",
      caption: "Modern Facilities",
      description: "State-of-the-art classrooms and learning spaces"
    },
    {
      url: "https://www.kokanduni.uz/storage/blogs/fkXbWQltPrvH4iPti6GTIaVAZj26rLiZ1uQSHhjd.jpg",
      caption: "Campus Events",
      description: "Regular cultural and academic events throughout the year"
    },
    {
      url: "https://www.kokanduni.uz/storage/blogs/u5whha5IJbcUnEHJCjiaZLJCt8RalaFNRWlF7Pw1.jpg",
      caption: "Student Life",
      description: "A welcoming community for all students"
    },
    {
      url: "https://www.kokanduni.uz/storage/blogs/DcIl10pauu98u2eCbQ1ktPskwwSh5w2yFd7ouA2P.jpg",
      caption: "Campus Activities",
      description: "Sports, clubs, and recreational activities"
    },
    {
      url: "https://www.kokanduni.uz/storage/blogs/RjXhzC6SQW1tPKrjqIwtJilGyoA86vdqQCrtgOQt.jpg",
      caption: "University Events",
      description: "Celebrating achievements and milestones together"
    }
  ];

  return (
    <section id="campus" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Campus Life & Gallery</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the vibrant community and beautiful campus of Kokand University
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300"
                    style={{
                      transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <h3 className="text-xl font-bold mb-2">{image.caption}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Campus Features */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Academic Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Rigorous programs with experienced faculty
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Global Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                International partnerships and exchange programs
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Student Success</h4>
              <p className="text-sm text-muted-foreground">
                Support services for career and personal development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
