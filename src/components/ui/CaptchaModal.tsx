"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

const SITE_KEY = "6LdI5PYrAAAAAG12QVrn7j2uaHag0bkoImOgsv71";

interface CaptchaModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const CaptchaModal: React.FC<CaptchaModalProps> = ({ onClose, onSuccess }) => {
  const [verified, setVerified] = useState(false);

  const handleVerify = (token: string | null) => {
    if (token) setVerified(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center"
      >
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Iltimos, odamligingizni tasdiqlang
        </h2>

        <ReCAPTCHA sitekey={SITE_KEY} onChange={handleVerify} />

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
          >
            Bekor qilish
          </button>
          <button
            disabled={!verified}
            onClick={onSuccess}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              verified
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            Davom etish
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaptchaModal;
