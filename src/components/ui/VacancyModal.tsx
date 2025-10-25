"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Upload } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Vacancy } from "./VacancyCard";
FormData
interface VacancyModalProps {
  vacancy: Vacancy;
  onClose: () => void;
}

const VacancyModal = ({ vacancy, onClose }: VacancyModalProps) => {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    phone: "",
    gender: "male",
    email: "",
    major: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const captcha = localStorage.getItem("captcha");
    console.log("🧩 Captcha token:", captcha);
    console.log("📦 Current form:", form);

    if (!file) {
      toast({
        title: "❌ " + t.vacancy.uploadResume,
        variant: "destructive",
      });
      return;
    }

    if (!captcha) {
      toast({
        title: "❌ reCAPTCHA token topilmadi",
        description: "Iltimos, sahifani yangilab qayta urinib ko‘ring.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("fullName", form.fullName);
      formData.append("age", form.age);
      formData.append("phone", "+998" + form.phone);
      formData.append("gender", form.gender);
      formData.append("email", form.email);
      formData.append("major", form.major);
      formData.append("vacansy_id", vacancy.id);
      formData.append("file", file);
      formData.append("captcha", captcha);

      console.log("📤 Sending FormData:");
      for (const [key, val] of formData.entries()) {
        console.log(`${key}:`, val);
      }

      const res = await fetch(
        "https://univer-production.up.railway.app/subscriptions",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("📡 Response status:", res.status);

      const text = await res.text();
      console.log("📩 Raw server response:", text);

      let data;
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
          description: data.message || "Serverdan xato javob qaytdi",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("💥 Xatolik:", err);
      toast({
        title: "❌ " + t.vacancy.error,
        description: "Tarmoq yoki server bilan muammo bo‘lishi mumkin.",
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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-foreground">
          {t.vacancy.applyTitle} {vacancy.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="fullName"
            placeholder={t.vacancy.fullName}
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full border border-border p-3 rounded-lg"
          />
          <input
            name="age"
            type="number"
            placeholder={t.vacancy.age}
            value={form.age}
            onChange={handleChange}
            required
            className="w-full border border-border p-3 rounded-lg"
          />
          <input
            name="phone"
            type="tel"
            placeholder="90 123 45 67"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-border p-3 rounded-lg"
          />
          <input
            name="email"
            type="email"
            placeholder={t.vacancy.email}
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-border p-3 rounded-lg"
          />
          <input
            name="major"
            placeholder={t.vacancy.majorPlaceholder}
            value={form.major}
            onChange={handleChange}
            required
            className="w-full border border-border p-3 rounded-lg"
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border border-border p-3 rounded-lg"
          >
            <option value="male">{t.vacancy.male}</option>
            <option value="female">{t.vacancy.female}</option>
          </select>

          <label className="block w-full">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
            />
            <div className="cursor-pointer w-full border-2 border-dashed border-border bg-muted p-6 rounded-lg text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p>{file ? file.name : t.vacancy.resume}</p>
            </div>
          </label>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg disabled:opacity-50"
          >
            {loading ? t.vacancy.submitting : t.vacancy.submit}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default VacancyModal;
