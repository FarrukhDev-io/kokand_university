import { useState } from "react";
import VacancyCard, { Vacancy } from "./VacancyCard";
import OTPModal from "./OTPModal";
import VacancyModal from "./VacancyModal";
import { useAuth } from "./AuthContext";

interface VacancyCardWrapperProps {
  vacancy: Vacancy;
  email: string; // foydalanuvchi emaili
}

const VacancyCardWrapper = ({ vacancy, email }: VacancyCardWrapperProps) => {
  const { token } = useAuth();
  const [showOTP, setShowOTP] = useState(false);
  const [showVacancyModal, setShowVacancyModal] = useState(false);

  const handleSubscribe = () => {
    if (!token) {
      // token yo‘q → authorization qilinsin
      setShowOTP(true);
    } else {
      // token bor → subscription modal ochilsin
      setShowVacancyModal(true);
    }
  };

  return (
    <>
      <VacancyCard vacancy={vacancy} onSubscribe={handleSubscribe} />

      {/* OTP modal */}
      {showOTP && (
        <OTPModal
          email={email}
          onClose={() => setShowOTP(false)}
          onSuccess={() => setShowVacancyModal(true)} // token olgandan keyin subscription modal
        />
      )}

      {/* Subscription modal */}
      {showVacancyModal && (
        <VacancyModal
          vacancy={vacancy}
          onClose={() => setShowVacancyModal(false)}
        />
      )}
    </>
  );
};

export default VacancyCardWrapper;
