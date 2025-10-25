import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./AuthContext";
import { X, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

interface OTPModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const OTPModal = ({ onClose, onSuccess }: OTPModalProps) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const { setToken } = useAuth();
  const { t } = useLanguage();

  const handleSendOTP = async () => {
    if (!email) {
      toast({
        title: "❗️" + t.otp.error,
        description: t.otp.enterEmail,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://univer-production.up.railway.app/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        toast({
          title: "✅ " + t.otp.otpSent,
          description: email,
        });
      } else {
        toast({
          title: "❌ " + t.otp.error,
          description: data.message || t.otp.error,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "❌ " + t.otp.error,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!email || !otp) return;
    setLoading(true);
    try {
      const res = await fetch("https://univer-production.up.railway.app/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.access_token);
        toast({
          title: "✅ " + t.otp.otpVerified,
        });
        setTimeout(() => {
          onSuccess();
          onClose();
        }, 500);
      } else {
        toast({
          title: "❌ " + t.otp.error,
          description: data.message || t.otp.error,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "❌ " + t.otp.error,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-card border border-border p-8 rounded-2xl max-w-md w-full shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 relative">
          <h2 className="text-2xl font-bold text-foreground">{t.otp.title}</h2>

          <div className="flex items-center gap-3">
            {/* Help button */}
            <button
              onClick={() => setShowHelp((prev) => !prev)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <HelpCircle className="h-6 w-6" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Help popup */}
          <AnimatePresence>
            {showHelp && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-10 top-10 bg-background border border-border rounded-lg shadow-lg p-4 w-72 text-sm text-muted-foreground z-50"
              >
                <p className="font-medium text-foreground mb-2">🔐 OTP nima?</p>
                <p>
                  OTP — bu sizning emailingizga yuboriladigan 6 xonali maxfiy kod. 
                  Uni shu joyga kiriting, shunda sizning emailingiz tasdiqlanadi va tizimga kirasiz.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Kod kelmasa, “Qayta yuborish” tugmasini bosing.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          {/* Email input */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              {t.otp.email}
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground"
            />
          </div>

          <button
            onClick={handleSendOTP}
            disabled={loading || !email}
            className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? t.otp.sending : t.otp.sendOTP}
          </button>

          {/* OTP input */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              {t.otp.otpCode}
            </label>
            <input
              type="text"
              placeholder="000000"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-center text-2xl tracking-widest"
              maxLength={6}
            />
          </div>

          <button
            onClick={handleVerify}
            disabled={loading || otp.length !== 6}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? t.otp.verifying : t.otp.verify}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OTPModal;
