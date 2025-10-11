"use client";

import { useEffect, useState } from "react";
import VacancyCard, { Vacancy } from "./VacancyCard";

interface VacanciesListProps {
  onSubscribe?: (vacancy: Vacancy) => void; // ✅ BU QATOR MUHIM
}

const VacanciesList = ({ onSubscribe }: VacanciesListProps) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVacancies = async () => {
      try {
        const res = await fetch("https://univer-xrec.onrender.com/vacancies");
        const json = await res.json();
        setVacancies(json.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadVacancies();
  }, []);

  if (loading)
    return (
      <p className="text-center text-muted-foreground">Loading vacancies...</p>
    );
  if (vacancies.length === 0)
    return (
      <p className="text-center text-muted-foreground">No vacancies found.</p>
    );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {vacancies.map((v) => (
        <VacancyCard
          key={v.id}
          vacancy={v}
          onSubscribe={() => onSubscribe?.(v)} // ✅ Optional chaining bilan
        />
      ))}
    </div>
  );
};

export default VacanciesList;
