"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroTitle = () => {
  const { t } = useLanguage();
  const [logoSrc, setLogoSrc] = useState("/ku-black.png"); // default light

  useEffect(() => {
    // Sistemadagi dark mode ni tekshir
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateLogo = () => {
      setLogoSrc(darkModeQuery.matches ? "/ku-white.png" : "/ku-black.png");
    };

    // Dastlabki holatni o‘rnat
    updateLogo();

    // Dark mode o‘zgarganda ham yangilansin
    darkModeQuery.addEventListener("change", updateLogo);

    return () => {
      darkModeQuery.removeEventListener("change", updateLogo);
    };
  }, []);

  return (
    <h1 className="flex justify-center items-center gap-4 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 drop-shadow-lg">
      <img
        src={logoSrc}
        alt="Kokand University logo"
        className="w-16 h-16 md:w-24 md:h-24 rounded-full object-contain transition-all duration-300"
      />
      <span>{t.hero.title}</span>
    </h1>
  );
};

export default HeroTitle;
