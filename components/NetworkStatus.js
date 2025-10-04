"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function NetworkStatus() {
  const [status, setStatus] = useState("online");
  const [visible, setVisible] = useState(false);
  const [manuallyHidden, setManuallyHidden] = useState(false);

  useEffect(() => {
    let offlineTimeout;

    const showOffline = () => {
      // Delay to prevent flicker on brief network blips (300ms)
      offlineTimeout = setTimeout(() => {
        setStatus("offline");
        setVisible(true);
        setManuallyHidden(false);
      }, 300);
    };

    const handleOnline = () => {
      clearTimeout(offlineTimeout);
      setStatus("online");
      setVisible(true);
      setManuallyHidden(false);

      // Auto-hide after 3s when back online
      setTimeout(() => setVisible(false), 3000);
    };

    const handleOffline = () => {
      showOffline();
    };

    // Initial check
    if (!navigator.onLine) showOffline();

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearTimeout(offlineTimeout);
    };
  }, []);

  if (!visible || manuallyHidden) return null;

  return (
    <div
      className={`
        w-full flex items-center justify-between px-4 py-2
        font-medium text-sm sm:text-base text-white shadow-lg
         transition-opacity duration-500 ease-in-out text-center
        ${
          status === "offline"
            ? "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
            : "bg-gradient-to-r from-green-600 via-green-500 to-green-600"
        }
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <span>
        {status === "offline"
          ? "🚫 No Internet Connection – Please check your connection"
          : "✅ Back Online"}
      </span>

      <button
        onClick={() => setManuallyHidden(true)}
        className="ml-4 p-1 hover:bg-white/20 rounded transition"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
