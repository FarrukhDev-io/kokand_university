"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

export type Vacancy = {
  id: string;
  title: string;
  description: string;
  url?: string;
  created_at?: string;
};

interface VacancyCardProps {
  vacancy: Vacancy;
  onSubscribe?: () => void;
}

const VacancyCard = ({ vacancy, onSubscribe }: VacancyCardProps) => {
  const formattedDate = vacancy.created_at
    ? new Date(vacancy.created_at).toLocaleString("uz-UZ", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all duration-300 hover:shadow-lg"
    >
      {/* Asosiy ma’lumot */}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        {/* Sarlavha */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground">
          {vacancy.title}
        </h3>

        {/* Sana (agar mavjud bo‘lsa) */}
        {formattedDate && (
          <p className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 shrink-0" /> {formattedDate}
          </p>
        )}

        {/* Tavsif */}
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-4 leading-relaxed">
          {vacancy.description}
        </p>

        {/* Tugmalar */}
        <div className="mt-4 flex items-center justify-between">
          {vacancy.url && (
            <a
              href={vacancy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-2 text-primary font-medium hover:underline text-sm sm:text-base"
            >
              Batafsil <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {onSubscribe && (
            <button
              onClick={onSubscribe}
              className="ml-auto rounded-xl bg-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all"
            >
              Ro‘yxatdan o‘tish
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default VacancyCard;
