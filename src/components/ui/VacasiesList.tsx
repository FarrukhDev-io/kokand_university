import { useEffect, useState } from "react";
import VacancyCard, { Vacancy } from "./VacancyCard";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 6;

interface VacanciesListProps {
  onSubscribe?: (vacancy: Vacancy) => void;
}

const VacanciesList = ({ onSubscribe }: VacanciesListProps) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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
      <p className="text-center text-muted-foreground py-8">
        Vakansiyalar yuklanmoqda...
      </p>
    );

  if (vacancies.length === 0)
    return (
      <p className="text-center text-muted-foreground py-8">
        Hech qanday vakansiya topilmadi.
      </p>
    );

  // ✅ Pagination hisoblash
  const totalPages = Math.ceil(vacancies.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedVacancies = vacancies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-8">
      {/* Vakansiyalar */}
      <div
        className="
          grid 
          grid-cols-2       /* 🟢 Mobil: 2 ta ustun */
          sm:grid-cols-2    /* Sm ekranlar uchun ham 2 ta */
          md:grid-cols-2    /* Tablet: 2 ta */
          lg:grid-cols-3    /* Katta ekran: 3 ta */
          gap-6 
          mt-8
        "
      >
        {paginatedVacancies.map((v) => (
          <VacancyCard
            key={v.id}
            vacancy={v}
            onSubscribe={() => onSubscribe?.(v)}
          />
        ))}
      </div>

      {/* Pagination tugmalari */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Oldingi
          </Button>

          <div className="text-sm text-muted-foreground">
            {page} / {totalPages}
          </div>

          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Keyingi
          </Button>
        </div>
      )}
    </div>
  );
};

export default VacanciesList;
