// components/NetworkStatus.js
"use client";
import { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [status, setStatus] = useState("online");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initial check
    setStatus(navigator.onLine ? "online" : "offline");
    setVisible(!navigator.onLine);

    const handleOnline = () => {
      setStatus("online");
      setVisible(true);

      // Auto-hide after 3s when back online
      setTimeout(() => setVisible(false), 3000);
    };

    const handleOffline = () => {
      setStatus("offline");
      setVisible(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg text-white text-sm shadow-lg transition-all duration-500
    ${status === "offline" ? "bg-red-600" : "bg-green-600"}
  `}
    >
      {status === "offline" ? "🚫 No Internet Connection" : "✅ Back Online"}
    </div>
  );
}
