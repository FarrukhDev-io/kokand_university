"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Upload } from "lucide-react";
import { Vacancy } from "./VacancyCard";
import { useAuth } from "./AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

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
  const { token } = useAuth();
  const { t } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let numericValue = value.replace(/\D/g, "");
      if (numericValue.length > 9) numericValue = numericValue.slice(0, 9);
      setForm({ ...form, phone: numericValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "❌ " + t.vacancy.uploadResume,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );
      formData.append("vacancy_id", vacancy.id);
      formData.append("file", file);
      formData.set("phone", "+998" + form.phone);

      const res = await fetch("https://univer-production.up.railway.app/subscriptions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "✅ " + t.vacancy.success,
        });
        setTimeout(() => onClose(), 1500);
      } else {
        toast({
          title: "❌ " + t.vacancy.error,
          description: data.message || t.vacancy.error,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "❌ " + t.vacancy.error,
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
            type="text"
            name="fullName"
            value={form.fullName}
            placeholder={t.vacancy.fullName}
            required
            onChange={handleChange}
            className="w-full border border-border bg-background text-foreground p-3 rounded-lg placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <input
            type="number"
            name="age"
            value={form.age}
            placeholder={t.vacancy.age}
            required
            onChange={handleChange}
            className="w-full border border-border bg-background text-foreground p-3 rounded-lg placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <input
            type="tel"
            name="phone"
            value={"+998" + form.phone}
            placeholder={t.vacancy.phonePlaceholder}
            required
            pattern="^\+998\d{9}$"
            title={t.vacancy.phonePattern}
            onChange={handleChange}
            className="w-full border border-border bg-background text-foreground p-3 rounded-lg placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder={t.vacancy.email}
            required
            onChange={handleChange}
            className="w-full border border-border bg-background text-foreground p-3 rounded-lg placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <input
            type="text"
            name="major"
            value={form.major}
            placeholder={t.vacancy.majorPlaceholder}
            required
            onChange={handleChange}
            className="w-full border border-border bg-background text-foreground p-3 rounded-lg placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border border-border bg-background text-foreground p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
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
            <div className="cursor-pointer w-full border-2 border-dashed border-border bg-muted hover:bg-muted/80 p-6 rounded-lg flex flex-col items-center gap-2 hover:border-primary transition-all">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm text-foreground font-medium">
                {file ? file.name : t.vacancy.resume}
              </span>
              {!file && (
                <span className="text-xs text-muted-foreground">
                  {t.vacancy.resumePlaceholder}
                </span>
              )}
            </div>
          </label>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg disabled:opacity-50"
          >
            {loading ? t.vacancy.submitting : t.vacancy.submit}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default VacancyModal;
