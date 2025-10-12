import { useState } from "react";
import { useAuth } from "./AuthContext";

interface OTPModalProps {
  email: string;
  onClose: () => void;
  onSuccess: () => void; // token olinganda subscription modal ochish uchun
}

const OTPModal = ({ email, onClose, onSuccess }: OTPModalProps) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { setToken } = useAuth();

  const handleVerify = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:3001/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.access_token);
        setMessage("✅ Token olindi");
        onSuccess();
        onClose();
      } else {
        setMessage("❌ " + (data.message || "Xatolik"));
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">OTP kiritish</h2>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {loading ? "Tekshirilmoqda..." : "Tasdiqlash"}
        </button>
        {message && <p className="mt-2 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default OTPModal;
