import { useEffect, useState } from "react";
import { X } from "lucide-react";
import VacancyCard, { linkify } from "./VacancyCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { fetchVacancies, Vacancy } from "@/lib/api-client";

const ITEMS_PER_PAGE = 6;

interface VacanciesListProps {
  onSubscribe?: (vacancy: Vacancy) => void;
}

const VacanciesList = ({ onSubscribe }: VacanciesListProps) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [detailVacancy, setDetailVacancy] = useState<Vacancy | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const loadVacancies = async () => {
      try {
        const sortedVacancies = await fetchVacancies();
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
        {t.vacancies?.loading || "Yuklanmoqda..."}
      </p>
    );

  if (vacancies.length === 0)
    return (
      <p className="text-center text-muted-foreground py-8">
        {t.vacancies?.notFound || "Hech qanday vakansiya topilmadi."}
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
            onViewDetails={() => setDetailVacancy(v)}
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
            {t.vacancies?.previous || "Oldingi"}
          </Button>

          <div className="text-sm text-muted-foreground">
            {page} / {totalPages}
          </div>

          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            {t.vacancies?.next || "Keyingi"}
          </Button>
        </div>
      )}

      <Dialog open={!!detailVacancy} onOpenChange={(open) => !open && setDetailVacancy(null)}>
        {detailVacancy && (
          <DialogContent className="max-w-lg">
            <DialogHeader className="flex justify-between items-center">
              <DialogTitle>{detailVacancy.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-2 text-sm sm:text-base text-foreground space-y-2 break-words max-h-[60vh] overflow-y-auto pr-2">
              {linkify(detailVacancy.description).map((line, i) => (
                <span key={i} className="block break-words">
                  {line}
                </span>
              ))}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default VacanciesList;
