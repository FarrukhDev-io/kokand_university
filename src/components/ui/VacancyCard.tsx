"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export type Vacancy = {
  id: string;
  title: string;
  location: string;
  experience: string;
  description: string;
  image?: string;
  url?: string;
};

interface VacancyCardProps {
  vacancy: Vacancy;
  onSubscribe?: () => void; // ✅ optional bo‘lishi kerak
}

const VacancyCard = ({ vacancy, onSubscribe }: VacancyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative glass-card rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
    >
      {vacancy.image && (
        <img
          src={`https://univer-xrec.onrender.com/${vacancy.image}`}
          alt={vacancy.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
      )}

      <h3 className="text-xl font-bold text-foreground mb-2">
        {vacancy.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-1">
        <strong>Location:</strong> {vacancy.location}
      </p>
      <p className="text-sm text-muted-foreground mb-2">
        <strong>Experience:</strong> {vacancy.experience}
      </p>
      <p className="text-sm text-muted-foreground mb-4">
        {vacancy.description}
      </p>
      <div className="flex items-center gap-4">
        {vacancy.url && (
          <a
            href={vacancy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            Apply <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {onSubscribe && (
          <button
            onClick={onSubscribe}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default VacancyCard;
