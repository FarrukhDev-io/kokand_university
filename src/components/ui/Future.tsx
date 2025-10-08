"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button"; // agar shadcn button ishlatyapsan

const Future = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="future">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
        >
          {t.future.title}
        </motion.h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t.future.subtitle}
        </p>

        {/* Tugma */}
        <Button
          variant="outline"
          onClick={() => setOpen(!open)}
          className="mt-6 flex items-center gap-2 mx-auto"
        >
          {open ? t.future.hideButton || "Yopish" : t.future.showButton || "Ko‘rish"}
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {/* Ichki kontent animatsiya bilan ochiladi */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="future-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-2xl mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t.future.decree.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.future.decree.date}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {t.future.decree.intro}
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {t.future.program.title}
                    </h4>
                    <p className="text-foreground/80 mb-4">{t.future.program.description}</p>

                    <div className="space-y-3">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="font-medium mb-2">{t.future.program.point1.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {t.future.program.point1.description}
                        </p>
                      </div>

                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="font-medium mb-2">{t.future.program.point2.title}</p>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                          <li>{t.future.program.point2.item1}</li>
                          <li>{t.future.program.point2.item2}</li>
                          <li>{t.future.program.point2.item3}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      {t.future.implementation.title}
                    </h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{t.future.implementation.point1}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{t.future.implementation.point2}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">{t.future.funding.title}</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{t.future.funding.amount1}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{t.future.funding.amount2}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-right text-sm text-muted-foreground border-t pt-4">
                    <p className="font-semibold">{t.future.decree.president}</p>
                    <p>{t.future.decree.location}</p>
                    <p>{t.future.decree.number}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Future;
