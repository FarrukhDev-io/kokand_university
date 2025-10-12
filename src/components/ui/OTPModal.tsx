import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "./AuthContext";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

interface OTPModalProps {
  email: string;
  onClose: () => void;
  onSuccess: () => void; // token olinganda subscription modal ochish uchun
}

const OTPModal = ({ email, onClose, onSuccess }: OTPModalProps) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuth();
  const { t } = useLanguage();

  const handleSendOTP = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://univer-xrec.onrender.com/auth/send-otp", {
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
    setLoading(true);
    try {
      const res = await fetch("https://univer-xrec.onrender.com/auth/verify-otp", {
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
        className="bg-card border border-border p-8 rounded-2xl max-w-md w-full shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">{t.otp.title}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              {t.otp.email}
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground"
            />
          </div>

          <button
            onClick={handleSendOTP}
            disabled={loading}
            className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? t.otp.sending : t.otp.sendOTP}
          </button>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              {t.otp.otpCode}
            </label>
            <input
              type="text"
              placeholder="000000"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
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
