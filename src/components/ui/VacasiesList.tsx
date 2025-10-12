import { useEffect, useState } from "react";
import VacancyCard, { Vacancy } from "./VacancyCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ITEMS_PER_PAGE = 6;

interface VacanciesListProps {
  onSubscribe?: (vacancy: Vacancy) => void;
}

const VacanciesList = ({ onSubscribe }: VacanciesListProps) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { t } = useLanguage();

  useEffect(() => {
    const loadVacancies = async () => {
      try {
        const res = await fetch("https://univer-xrec.onrender.com/vacancies");
        const json = await res.json();
        const sortedVacancies = (json.data || []).sort((a: Vacancy, b: Vacancy) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setVacancies(sortedVacancies);
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
        {t.vacancies.loading}
      </p>
    );

  if (vacancies.length === 0)
    return (
      <p className="text-center text-muted-foreground py-8">
        {t.vacancies.notFound}
      </p>
    );

  const totalPages = Math.ceil(vacancies.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedVacancies = vacancies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {paginatedVacancies.map((v) => (
          <VacancyCard
            key={v.id}
            vacancy={v}
            onSubscribe={() => onSubscribe?.(v)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            {t.vacancies.previous}
          </Button>

          <div className="text-sm text-muted-foreground">
            {page} / {totalPages}
          </div>

          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            {t.vacancies.next}
          </Button>
        </div>
      )}
    </div>
  );
};

export default VacanciesList;
