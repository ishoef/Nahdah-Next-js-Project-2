"use client";
import { useState } from "react";

export default function LanguageToggle() {
  const languages = [
    { code: "en", label: "English", text: "Hello, welcome to our website!" },
    { code: "bn", label: "বাংলা", text: "হ্যালো, আমাদের ওয়েবসাইটে স্বাগতম!" },
    { code: "ar", label: "العربية", text: "مرحباً، أهلاً بك في موقعنا!" },
  ];

  const [index, setIndex] = useState(0);

  const handleToggle = () => {
    setIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };

  return (
    <>
      {/* <div className="text-xl font-semibold transition-all duration-300">
        {languages[index].text}
      </div> */}
      <button
        onClick={handleToggle}
        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
      >
        {languages[(index + 1) % languages.length].label}
      </button>
    </>
  );
}
