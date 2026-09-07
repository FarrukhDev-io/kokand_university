import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import uzTranslations from "@/locales/uz.json";

export type Language = "uz" | "ru" | "en";
export type Translations = typeof uzTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = {
  uz: uzTranslations,
  ru: uzTranslations, // Fallback until ru.json is created
  en: uzTranslations, // Fallback until en.json is created
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language;
    return ["uz", "ru", "en"].includes(saved) ? saved : "uz";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
