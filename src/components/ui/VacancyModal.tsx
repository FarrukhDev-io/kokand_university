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
    email: "",
    major: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    // ✅ Smart validation per field
    switch (name) {
      case "fullName":
        newValue = value.replace(/[^A-Za-zА-Яа-яЁёʻʼ‘’ ]/g, "").slice(0, 50); // only letters + space
        break;

      case "phone":
        newValue = value
          .replace(/[^\d]/g, "")
          .slice(0, 9) // only 9 digits after +998
          .replace(/(\d{2})(\d{3})(\d{0,2})(\d{0,2})/, (_, a, b, c, d) =>
            [a, b, c, d].filter(Boolean).join(" ")
          );
        break;

      case "email":
        newValue = value.trim().slice(0, 60);
        break;

      case "major":
        newValue = value.slice(0, 60);
        break;
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const validateForm = () => {
    if (!form.fullName || form.fullName.length < 3) {
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

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
    ) {
      toast({
        title: "❌ Email noto‘g‘ri formatda",
        description: "Masalan: example@mail.com",
        variant: "destructive",
      });
      return false;
    }

    if (form.major.length < 2) {
      toast({
        title: "❌ Yo‘nalish juda qisqa",
        description: "Yo'nalish",
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
      formData.append("email", form.email.trim());
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
      let data: any;
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-foreground leading-tight">
          {t.vacancy.applyTitle} {vacancy.title}
        </h2>

        {/* ✅ Optimized Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            placeholder={t.vacancy.fullName}
            value={form.fullName}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={50}
            className="w-full border border-border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
          />

          <div className="flex items-center border border-border rounded-lg overflow-hidden">
            <span className="bg-muted px-3 text-muted-foreground select-none">
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
            name="email"
            type="email"
            placeholder={t.vacancy.email}
            value={form.email}
            onChange={handleChange}
            required
            maxLength={60}
            className="w-full border border-border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
          />

          <input
            name="major"
            placeholder={t.vacancy.majorPlaceholder}
            value={form.major}
            onChange={handleChange}
            required
            maxLength={60}
            className="w-full border border-border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all disabled:opacity-50"
          >
            {loading ? t.vacancy.submitting : t.vacancy.submit}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default VacancyModal;
