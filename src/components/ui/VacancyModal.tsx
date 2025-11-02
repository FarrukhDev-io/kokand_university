"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Vacancy } from "./VacancyCard";

interface VacancyModalProps {
  vacancy: Vacancy;
  onClose: () => void;
}

const VacancyModal = ({ vacancy, onClose }: VacancyModalProps) => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    major: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    switch (name) {
      case "fullName":
        newValue = value.replace(/[^A-Za-zА-Яа-яЁёʻʼ‘’ ]/g, "").slice(0, 50);
        break;

      case "phone":
        newValue = value
          .replace(/[^\d]/g, "")
          .slice(0, 9)
          .replace(/(\d{2})(\d{3})(\d{0,2})(\d{0,2})/, (_, a, b, c, d) =>
            [a, b, c, d].filter(Boolean).join(" ")
          );
        break;

      case "major":
        newValue = value.slice(0, 60);
        break;
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const validateForm = () => {
    if (form.fullName.length < 3) {
      toast({
        title: "❌ Ism juda qisqa",
        description: "Iltimos, to‘liq ismingizni kiriting.",
        variant: "destructive",
      });
      return false;
    }

    if (!/^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(form.phone)) {
      toast({
        title: "❌ Telefon raqam noto‘g‘ri formatda",
        description: "Masalan: 90 123 45 67",
        variant: "destructive",
      });
      return false;
    }

    if (form.major.length < 2) {
      toast({
        title: "❌ Yo‘nalish juda qisqa",
        description: "Iltimos, yo‘nalishingizni kiriting.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const captcha = localStorage.getItem("captcha");
    if (!captcha) {
      toast({
        title: "❌ reCAPTCHA topilmadi",
        description: "Iltimos, sahifani yangilang.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("fullName", form.fullName.trim());
      formData.append("phone", "+998" + form.phone.replace(/\s/g, ""));
      formData.append("major", form.major.trim());
      formData.append("vacansy_id", vacancy.id);
      formData.append("captcha", captcha);

      const res = await fetch(
        "https://univer-production.up.railway.app/subscriptions",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await res.text();
      const data = (() => {
        try {
          return JSON.parse(text);
        } catch {
          return { message: text };
        }
      })();

      if (res.ok) {
        toast({ title: "✅ " + t.vacancy.success });
        setTimeout(onClose, 1500);
      } else {
        toast({
          title: "❌ " + t.vacancy.error,
          description: data.message || "Server xatosi",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("💥 Xatolik:", err);
      toast({
        title: "❌ " + t.vacancy.error,
        description: "Internet yoki server bilan muammo bo‘lishi mumkin.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-8 shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground">
          {t.vacancy.applyTitle} {vacancy.title}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            placeholder={t.vacancy.fullName}
            value={form.fullName}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={50}
            className="w-full rounded-lg border border-border p-3 outline-none transition-all focus:ring-2 focus:ring-green-500"
          />

          <div className="flex items-center overflow-hidden rounded-lg border border-border">
            <span className="select-none bg-muted px-3 text-muted-foreground">
              +998
            </span>
            <input
              name="phone"
              type="tel"
              placeholder="90 123 45 67"
              value={form.phone}
              onChange={handleChange}
              required
              inputMode="numeric"
              className="w-full p-3 outline-none"
            />
          </div>

          <input
            name="major"
            placeholder={t.vacancy.majorPlaceholder}
            value={form.major}
            onChange={handleChange}
            required
            maxLength={60}
            className="w-full rounded-lg border border-border p-3 outline-none transition-all focus:ring-2 focus:ring-green-500"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg bg-red-600 py-4 text-lg font-semibold text-white transition-all hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? t.vacancy.submitting : t.vacancy.submit}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default VacancyModal;
