import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsData } from "@/data/newsData";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t, language } = useLanguage();

  return (
    <section id="news" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{t.news.title}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.news.subtitle}
            </p>
          </motion.div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {newsData.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(news.link, "_blank")}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={news.date}>
                      {new Date(news.date).toLocaleDateString(language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US", {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {news.title[language]}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {news.excerpt[language]}
                  </p>
                  
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    {t.news.readMore}
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-8"
          >
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open("https://www.kokanduni.uz/en/blog", "_blank")}
            >
              {t.news.viewAll}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default News;
