"use client";
import Image from "next/image";
import Link from "next/link";
import Title from "../ui/title";

export default function CourseShowcase() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500"></div>

      {/* Dotted overlay */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          color: "#3b82f6",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
        {/* Title */}
        <Title title1={"Your Learning Journey Starts"} title2={"Here"} />

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Card */}
          <div className="bg-gradient-to-bl from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-blue-500 text-sm text-white font-semibold px-4 py-1 rounded-full">
                Islamic Knowledge Courses
              </span>
            </div>

            <h3 className="text-xl font-semibold text-center mb-8">
              Enroll Now for All 2025 Online Batch Courses!
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { title: "Class 6,7,8", img: "/icons/icon-192x192.png" },
                { title: "Class 9,10", img: "/icons/icon-192x192.png" },
                { title: "HSC 25,26", img: "/icons/icon-192x192.png" },
                { title: "HSC 27", img: "/icons/icon-192x192.png" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 hover:bg-blue-400/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="block text-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline transition"
            >
              🎯 Book Your Free Class Now →
            </Link>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-blue-500 text-sm font-semibold px-4 py-1 rounded-full text-white">
                Skill Development Courses
              </span>
            </div>

            <h3 className="text-xl font-semibold text-center mb-8">
              Master Practical Skills, Improve Yourself
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { title: "Spoken English", img: "/images/hero.png" },
                { title: "IELTS", img: "/images/hero.png" },
                { title: "IELTS Live", img: "/images/hero.png" },
                { title: "English Grammar", img: "/images/hero.png" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-gray-200/40 dark:bg-gray-700/40 rounded-xl p-4 hover:bg-blue-100 dark:hover:bg-gray-600/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="object-contain rounded"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="block text-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline transition"
            >
              📘 Explore Free Courses →
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Quranic Studies & Tafsir",
              desc: "Enrollment Open",
              color: "from-blue-600 to-blue-700",
            },
            {
              title: "Hadith Sciences & Fiqh",
              desc: "Batch Enrollment Open",
              color: "from-purple-600 to-purple-700",
            },
            {
              title: "Arabic Language & Grammar",
              desc: "Enroll Now",
              color: "from-indigo-600 to-indigo-700",
            },
            {
              title: "Islamic History & Aqeedah",
              desc: "Book Free Consultation",
              color: "from-purple-600 to-purple-700",
            },
            {
              title: "Digital Skills & Coding",
              desc: "Book Free Consultation",
              color: "from-purple-600 to-purple-700",
            },
            {
              title: "Graphic Design & Marketing",
              desc: "Enroll Now",
              color: "from-indigo-600 to-indigo-700",
            },
            {
              title: "Leadership & Communication",
              desc: "Batch Enrollment Open",
              color: "from-purple-600 to-purple-700",
            },
            {
              title: "Entrepreneurship & Business",
              desc: "Enrollment Open",
              color: "from-blue-600 to-blue-700",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href="#"
              className={`rounded-2xl p-5 text-white bg-gradient-to-r ${item.color} hover:opacity-90 transition-all duration-300`}
            >
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-sm mt-1 opacity-90">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
