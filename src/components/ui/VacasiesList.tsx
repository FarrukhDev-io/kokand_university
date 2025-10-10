"use client";

import { useEffect, useState } from "react";
import VacancyCard, { Vacancy } from "./VacancyCard";

interface VacanciesListProps {
  onSubscribe: (vacancy: Vacancy) => void;
}

const VacanciesList = ({ onSubscribe }: VacanciesListProps) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/vacancies") // API endpoint
      .then(res => res.json())
      .then(data => setVacancies(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center text-muted-foreground">Loading vacancies...</p>;
  if (vacancies.length === 0)
    return <p className="text-center text-muted-foreground">No vacancies found.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {vacancies.map(v => (
        <VacancyCard
          key={v.id}
          vacancy={v}
          onSubscribe={() => onSubscribe(v)}
        />
      ))}
    </div>
  );
};

export default VacanciesList;
