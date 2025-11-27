"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaStar,
  FaDownload,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import instructors from "../../../../jsons/teachers.json";
import { useParams } from "next/navigation";

// const instructorss = instructors.map(instructor);
// const instructor = {
//   name: "Dr. Sarah Ahmed",
//   title: "Senior Islamic Studies Instructor",
//   tagline: "Empowering minds, shaping the future",
//   profileImage:
//     "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//   email: "sarah@example.com",
//   phone: "+1 (555) 123-4567",
//   stats: { students: 1200, courses: 8, experience: 10 },
//   about: `Dr. Sarah Ahmed is a passionate educator with over 10 years of experience in teaching Islamic Studies. She has trained thousands of students worldwide and believes in interactive, practical learning methods that empower students to excel in both academic and spiritual knowledge.

// Her teaching approach is holistic, combining classical methods with modern educational techniques to ensure every student grasps the material effectively.`,
//   philosophy: {
//     title: "Tech Engineering Philosophy",
//     content: `I believe that education technology should bridge tradition with innovation. My approach combines:

// • Accessibility First: Making premium education available to everyone, regardless of background
// • Practical Application: Focusing on real-world implementation and hands-on learning
// • Continuous Innovation: Staying updated with latest educational methodologies and technologies
// • Student-Centric Design: Every tool and course is built around student success and engagement`,
//   },
//   specialties: ["Arabic Grammar", "Quranic Studies", "Islamic History"],
//   credentials: [
//     { title: "PhD in Islamic Studies", institute: "Al-Azhar University" },
//     { title: "Certified Online Instructor", institute: "Udemy" },
//     { title: "Award: Best Educator 2022", institute: "Global Education Forum" },
//   ],
//   courses: [
//     {
//       title: "Arabic Grammar Mastery",
//       rating: 4.8,
//       students: 400,
//       image:
//         "https://images.unsplash.com/photo-1581092334110-fd14b03f09b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     },
//     {
//       title: "Quranic Studies 101",
//       rating: 4.9,
//       students: 600,
//       image:
//         "https://images.unsplash.com/photo-1554774853-bd4856d53d51?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     },
//   ],
//   reviews: [
//     {
//       name: "Ali H.",
//       rating: 5,
//       comment: "Excellent instructor, very clear and engaging!",
//     },
//     {
//       name: "Fatima S.",
//       rating: 4.9,
//       comment: "Learned so much, highly recommended.",
//     },
//   ],
//   social: {
//     linkedin: "#",
//     twitter: "#",
//     website: "#",
//   },
// };

export default function SingleInstructorPage() {
  const parmas = useParams();
  console.log(parmas.id);
  const instructor = instructors.find((instruc) => instruc.id === parmas.id);
  console.log(instructor);
  const [activeTab, setActiveTab] = useState("about");
  const tabs = ["about", "courses", "reviews", "credentials"];
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
    <div className="min-h-screen bg-gradient-to-br from-[#f5f9fc] via-white to-[#f0f7fb] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-gray-100 transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Light overlay unchanged | Dark: deep gray */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#206380] via-[#1a4d66] to-[#0f3a4d] opacity-95 dark:from-gray-900 dark:via-gray-800 dark:to-black"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white dark:bg-gray-800 rounded-full opacity-5 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-white dark:bg-gray-800 rounded-full opacity-5 translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <img
                  src={instructor.profileImage || "/placeholder.svg"}
                  alt={instructor.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#206380]/30 via-transparent to-transparent dark:from-black/60"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-white text-center lg:text-left max-w-3xl">
              <p className="text-xs sm:text-sm font-semibold text-blue-200 uppercase tracking-widest mb-2">
                Premium Educator
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                {instructor.name}
              </h1>
              <p className="text-sm sm:text-lg text-blue-100 mb-3 font-medium">
                {instructor.title}
              </p>
              <p className="text-sm sm:text-base text-blue-50 mb-6 sm:mb-8 leading-relaxed">
                {instructor.tagline}
              </p>

              <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 bg-white text-[#206380] dark:bg-gray-200 dark:text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Follow
                </button>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 dark:bg-gray-800/50 dark:border-gray-600 dark:hover:bg-gray-700/50 transition-all duration-200 rounded-lg font-semibold">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 lg:-mt-16 mb-8 z-10">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {Object.entries(instructor.stats).map(([key, value]) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#206380] dark:text-gray-100 mb-1">
                {value.toLocaleString()}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-medium capitalize text-sm sm:text-base">
                {key === "students"
                  ? "Students"
                  : key === "courses"
                  ? "Courses"
                  : "Years Exp."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
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

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex gap-2 border-b-2 border-gray-200 dark:border-gray-700 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-3 font-semibold text-sm sm:text-base whitespace-nowrap border-b-2 -mb-[2px] transition-colors ${
                  activeTab === tab
                    ? "text-[#206380] dark:text-gray-100 border-[#206380] dark:border-gray-100"
                    : "text-gray-500 dark:text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - All text now adapts to dark mode */}
        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          {/* About */}
          {activeTab === "about" && (
            <>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  About
                </h3>
                <p className="leading-relaxed text-sm sm:text-base">
                  {instructor.about}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-2xl p-4 sm:p-6 border border-blue-200 dark:border-cyan-800/50">
                <h3 className="text-lg sm:text-2xl font-bold text-[#206380] dark:text-cyan-400 mb-2">
                  {instructor.philosophy.title}
                </h3>
                <p className="leading-relaxed whitespace-pre-line text-sm sm:text-base mt-3">
                  {instructor.philosophy.content}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-3">
                  {instructor.specialties.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#206380] dark:bg-gray-700 text-white rounded-full text-xs sm:text-sm font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Courses */}
          {activeTab === "courses" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {instructor.courses.map((c, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      {c.title}
                    </h3>
                    <div className="flex gap-3 my-3 text-sm">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" /> {c.rating}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {c.students.toLocaleString()} students
                      </span>
                    </div>
                    <button className="cursor-pointer w-full py-2 bg-[#206380] dark:bg-gray-700 text-white rounded-lg hover:bg-[#1a4d66] dark:hover:bg-gray-600 font-semibold transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reviews */}
          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {instructor.reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <h4 className="font-bold text-gray-900 dark:text-gray-100">
                    {r.name}
                  </h4>
                  <div className="flex gap-1 my-2">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={
                          idx < r.rating
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }
                      />
                    ))}
                  </div>
                  <p className="italic">"{r.comment}"</p>
                </div>
              ))}
            </div>
          )}

          {/* Credentials */}
          {activeTab === "credentials" && (
            <div className="space-y-4">
              {instructor.credentials.map((c, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-[#206380] dark:border-gray-500"
                >
                  <p className="font-bold text-gray-900 dark:text-gray-100">
                    {c.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {c.institute}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-8 sm:mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 font-semibold mb-4 text-center md:text-left">
            Connect with the instructor
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href={instructor.social.linkedin}
              className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-[#206380] dark:text-cyan-400 hover:bg-[#206380] dark:hover:bg-cyan-600 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={instructor.social.twitter}
              className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-[#206380] dark:text-cyan-400 hover:bg-[#206380] dark:hover:bg-cyan-600 hover:text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href={instructor.social.website}
              className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-[#206380] dark:text-cyan-400 hover:bg-[#206380] dark:hover:bg-cyan-600 hover:text-white transition-all duration-300"
              aria-label="Website"
            >
              <FaGlobe size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
