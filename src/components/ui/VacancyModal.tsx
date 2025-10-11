"use client";

import { useState } from "react";
import { Vacancy } from "./VacancyCard";

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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5MjJkZTAwLTlmZGMtNGYxNy04ZTQ0LTc1ZTk3YTYzNDdmNiIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDE4NzkwNCwiZXhwIjoxNzYwMTk1MTA0fQ.2b83X8fBZBMUAIhrlASEmTbcEke_Rs8CTWp3Kp0CH-U",
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">
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
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 p-3 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          ))}

          {/* Gender select */}
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
            <div className="cursor-pointer w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 p-3 rounded-lg flex justify-between items-center hover:border-blue-500 transition">
              <span>{file ? file.name : "Rezyume yuklash (faqat PDF)"}</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Yuklash</span>
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition font-medium"
          >
            {loading ? "Yuborilmoqda..." : "Arizani yuborish"}
          </button>
        </form>

        {message && (
          <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-300">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default VacancyModal;
