"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const phoneNumber = "8801711958378"; // 🔸 Replace with your number

  const handleSend = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setMessage("");
    setOpen(false);
  };

  if (!pathname.includes("login") && !pathname.includes("register")) {
    return (
      <>
        {/* Floating Button */}
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
        >
          <FaWhatsapp size={28} />
        </button>

        {/* Chat Modal */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 flex justify-end items-end sm:items-center sm:justify-end z-50"
            onClick={() => setOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-80 sm:w-96 rounded-2xl shadow-lg m-5 p-4"
            >
              <div className="flex justify-between items-center mb-3 border-b pb-2">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-500" size={22} />
                  <h2 className="font-semibold text-gray-700">Chat with us</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  rows={3}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none resize-none"
                />
                <button
                  onClick={handleSend}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-all"
                >
                  Send on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return null;
  }
}
