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
    gender: "male",
    phone: "",
    email: "",
    major: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setMessage("Iltimos, rezyumeni yuklang!");

    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      formData.append("vacansy_id", vacancy.id); // API nomi shunday
      formData.append("file", file);

      const res = await fetch("https://univer-xrec.onrender.com/subscriptions", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Muvaffaqiyatli yuborildi ✅");
      } else {
        setMessage("Xatolik: " + data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("Xatolik yuz berdi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{vacancy.title} uchun ariza</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="fullName" placeholder="To‘liq ism" required onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="text" name="age" placeholder="Yosh" required onChange={handleChange} className="w-full border p-2 rounded" />
          <select name="gender" onChange={handleChange} className="w-full border p-2 rounded">
            <option value="male">Erkak</option>
            <option value="female">Ayol</option>
          </select>
          <input type="text" name="phone" placeholder="Telefon raqam" required onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="text" name="major" placeholder="Yo‘nalish (masalan: Frontend, Backend)" required onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="file" accept=".pdf,.doc,.docx" required onChange={e => setFile(e.target.files?.[0] || null)} className="w-full border p-2 rounded" />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Yuborilmoqda..." : "Arizani yuborish"}
          </button>
        </form>

        {message && <p className="mt-3 text-center text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
};

export default VacancyModal;
