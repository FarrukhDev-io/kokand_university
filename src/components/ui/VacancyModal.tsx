"use client";

import { motion } from "framer-motion";
import { Vacancy } from "./VacancyCard";

interface VacancyModalProps {
  vacancy: Vacancy;
  onClose: () => void;
}

const VacancyModal = ({ vacancy, onClose }: VacancyModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-md w-full relative"
      >
        <h3 className="text-xl font-bold mb-4">{vacancy.title}</h3>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscription submitted!");
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
};

export default VacancyModal;
