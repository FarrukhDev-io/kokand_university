"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

// 🔹 Linklarni avtomatik aniqlash
const linkify = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
  key={i}
  href={part}
  target="_blank"
  rel="noopener noreferrer"
  className="underline px-1 rounded-sm text-blue-500 break-keep whitespace-pre-wrap"
>
  {part}
</a>

      );
    }
    return part;
  });
};

const VacancyCard = ({ vacancy, onSubscribe }: VacancyCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedDate = vacancy.created_at
    ? new Date(vacancy.created_at).toLocaleString("uz-UZ", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  const isLongDescription = vacancy.description.length > 200;

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="p-5 flex flex-col gap-3">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground">{vacancy.title}</h3>

          {/* Date */}
          {formattedDate && (
            <p className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 shrink-0" /> {formattedDate}
            </p>
          )}

          {/* Description preview */}
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-4 leading-relaxed break-words">
            {linkify(vacancy.description)}
          </p>

          {/* Batafsil tugmasi */}
          {isLongDescription && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-1 text-blue-600 font-medium hover:underline text-sm flex items-center gap-1"
            >
              Batafsil <ExternalLink className="w-4 h-4" />
            </button>
          )}

          {/* Actions */}
          <div className="mt-3 flex items-center justify-between">
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

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader className="flex justify-between items-center">
            <DialogTitle>{vacancy.title}</DialogTitle>
            <button onClick={() => setIsModalOpen(false)} className="ml-auto p-1">
              <X className="w-5 h-5" />
            </button>
          </DialogHeader>
          <div className="mt-2 text-sm sm:text-base text-foreground space-y-2 break-words">
            {linkify(vacancy.description).map((line, i) => (
              <span key={i} className="block break-words">
                {line}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VacancyCard;
