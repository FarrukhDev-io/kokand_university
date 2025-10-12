"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Upload } from "lucide-react";
import { Vacancy } from "./VacancyCard";
import { useAuth } from "./AuthContext";

interface VacancyModalProps {
  vacancy: Vacancy;
  onClose: () => void;
}

const VacancyModal = ({ vacancy, onClose }: VacancyModalProps) => {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    phone: "", // faqat 9 raqam saqlanadi, +998 avvaldan qo‘shiladi
    gender: "male",
    email: "",
    major: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { token } = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // faqat raqam qabul qilamiz va maksimal 9 ta raqam
      let numericValue = value.replace(/\D/g, "");
      if (numericValue.length > 9) numericValue = numericValue.slice(0, 9);
      setForm({ ...form, phone: numericValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setMessage("Iltimos, rezyumeni yuklang!");

    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );
      formData.append("vacancy_id", vacancy.id);
      formData.append("file", file);

      // Telefonni +998 bilan birga yuboramiz
      formData.set("phone", "+998" + form.phone);

      const res = await fetch("https://univer-xrec.onrender.com/subscriptions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Muvaffaqiyatli yuborildi!");
        console.log("Yangi subscription:", data);
        // xohlasangiz modalni yopish mumkin:
        // onClose();
      } else {
        setMessage("❌ Xatolik: " + (data.message || "Noma’lum xato"));
        console.error("Server xatosi:", data);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Xatolik yuz berdi");
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
          {vacancy.title} uchun ariza
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Common Inputs */}
          {["fullName", "age", "phone", "email", "major"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              value={
                field === "phone" ? "+998" + form.phone : (form as any)[field]
              }
              placeholder={
                field === "fullName"
                  ? "To‘liq ism"
                  : field === "age"
                  ? "Yosh"
                  : field === "phone"
                  ? "+998 ___ ___ __ __"
                  : field === "email"
                  ? "Email"
                  : "Yo‘nalish (masalan: Frontend, Backend)"
              }
              required
              pattern={field === "phone" ? "^\\+998\\d{9}$" : undefined}
              title={
                field === "phone"
                  ? "Telefon raqam +998XXXXXXXXX formatida bo‘lishi kerak"
                  : undefined
              }
              onChange={handleChange}
              className="w-full border border-border bg-background text-foreground p-3 rounded-lg placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          ))}

          {/* Gender select */}
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border border-border bg-background text-foreground p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="male">Erkak</option>
            <option value="female">Ayol</option>
          </select>

          {/* Custom File Input */}
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
                {file ? file.name : "Rezyume yuklash (PDF, DOC, DOCX)"}
              </span>
              {!file && (
                <span className="text-xs text-muted-foreground">
                  Faylni tanlash uchun bosing
                </span>
              )}
            </div>
          </label>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg disabled:opacity-50"
          >
            {loading ? "Yuborilmoqda..." : "Arizani yuborish"}
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm text-foreground font-medium"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default VacancyModal;
