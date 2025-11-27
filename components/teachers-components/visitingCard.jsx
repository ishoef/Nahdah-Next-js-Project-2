"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

export default function VisitingCard({ instructor }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const downloadCard = async () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) {
        console.log("[v0] Canvas reference not found");
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = 1400;
      const height = 700;
      canvas.width = width;
      canvas.height = height;

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "#206380");
      gradient.addColorStop(1, "#1a4d66");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Load and draw profile image
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        // Draw profile image with border
        const imgSize = 200;
        const imgX = 50;
        const imgY = (height - imgSize) / 2;

        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(
          imgX + imgSize / 2,
          imgY + imgSize / 2,
          imgSize / 2 + 8,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.arc(
          imgX + imgSize / 2,
          imgY + imgSize / 2,
          imgSize / 2,
          0,
          Math.PI * 2
        );
        ctx.clip();
        ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
        ctx.restore();

        // Draw text content
        const textX = imgX + imgSize + 60;

        // Name
        ctx.fillStyle = "white";
        ctx.font = "bold 48px 'Arial', sans-serif";
        ctx.fillText(instructor.name, textX, 140);

        // Title
        ctx.fillStyle = "#a5d8ff";
        ctx.font = "28px 'Arial', sans-serif";
        ctx.fillText(instructor.title, textX, 200);

        // Tagline
        ctx.fillStyle = "#d0e3f1";
        ctx.font = "18px 'Arial', sans-serif";
        ctx.fillText(instructor.tagline, textX, 240);

        // Divider line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(textX, 270);
        ctx.lineTo(width - 50, 270);
        ctx.stroke();

        // Contact info
        ctx.fillStyle = "#d0e3f1";
        ctx.font = "16px 'Arial', sans-serif";
        ctx.fillText(`✉ ${instructor.email}`, textX, 330);
        ctx.fillText(`☎ ${instructor.phone}`, textX, 370);

        // Trigger download
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png", 0.95);
        link.download = `${instructor.name.replace(
          /\s+/g,
          "-"
        )}-visiting-card.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      img.onerror = () => {
        console.error("[v0] Failed to load image");
        alert("Failed to load profile image. Please try again.");
      };

      img.src = instructor.profileImage;
    } catch (error) {
      console.error("[v0] Error downloading card:", error);
      alert("Failed to download card. Please try again.");
    }
  };
  return (
    <>
      {/* Visiting Card */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Professional Visiting Card
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card Preview */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Desktop / Tablet layout (md+) */}
              <div
                ref={containerRef}
                className="hidden md:block relative w-full aspect-[16/9]"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#206380] to-[#1a4d66] dark:from-[#0f3a4d] dark:to-[#0a2a3a]"></div>

                {/* Profile Image (desktop) */}
                <div className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-xl overflow-hidden ring-4 ring-white/30 shadow-xl">
                  <Image
                    src={
                      instructor.profileImage ||
                      "/placeholder.svg?height=160&width=160&query=instructor profile"
                    }
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content (desktop) */}
                <div className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 left-[180px] sm:left-[220px] md:left-[260px] space-y-2">
                  <div>
                    <h3 className="text-lg sm:text-3xl md:text-4xl font-semibold sm:font-bold text-white mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-sm sm:text-lg sm:font-semibold text-blue-200 dark:text-cyan-300">
                      {instructor.title}
                    </p>
                    <p className="text-xs sm:text-sm text-blue-100 dark:text-gray-300 mt-1">
                      {instructor.tagline}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-6 space-y-1 text-xs sm:text-sm text-blue-100 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <FaEnvelope size={14} className="text-white" />
                      <span className="truncate max-w-[320px]">
                        {instructor.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone size={14} className="text-white" />
                      <span>{instructor.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile layout (sm and below) - stacked, accessible */}
              <div className="block md:hidden bg-gradient-to-r from-[#206380] to-[#1a4d66] dark:from-[#0f3a4d] dark:to-[#0a2a3a] p-4 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden ring-4 ring-white/20 shadow-lg flex-shrink-0">
                    <Image
                      src={
                        instructor.profileImage ||
                        "/placeholder.svg?height=160&width=160&query=instructor profile"
                      }
                      alt={instructor.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white line-clamp-2">
                      {instructor.name}
                    </h3>
                    <p className="text-xs text-blue-100 mt-1">
                      {instructor.title}
                    </p>
                    <p className="text-xs text-blue-100/90 mt-1 line-clamp-2">
                      {instructor.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 border-t border-white/20 pt-3 text-xs text-blue-100/90 space-y-2">
                  <div className="flex items-center gap-2">
                    <FaEnvelope size={14} className="text-white" />
                    <span className="truncate">{instructor.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone size={14} className="text-white" />
                    <span>{instructor.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="flex flex-col justify-center gap-4">
            <button
              onClick={downloadCard}
              className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-[#206380] dark:bg-cyan-600 text-white font-semibold rounded-xl hover:bg-[#1a4d66] dark:hover:bg-cyan-500 transition-all duration-300 shadow-md hover:shadow-lg w-full"
            >
              <FaDownload size={16} />
              Download Card
            </button>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              Download as PNG image
            </p>

            <div className="mt-4 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 border border-blue-200 dark:border-cyan-800/50 rounded-lg">
              <h4 className="font-semibold text-[#206380] dark:text-cyan-400 mb-2">
                Card Includes
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Profile picture</li>
                <li>Full name & title</li>
                <li>Email & phone</li>
                <li>Professional design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
}
