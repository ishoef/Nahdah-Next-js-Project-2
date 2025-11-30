"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors duration-200 font-medium text-sm"
      aria-label="Go back"
    >
      <ChevronLeft size={20} />
      <span>Back</span>
    </button>
  );
}
