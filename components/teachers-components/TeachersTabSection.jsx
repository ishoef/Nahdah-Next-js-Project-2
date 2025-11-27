"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

export const TeachersTabSection = ({ instructor }) => {
  const [activeTab, setActiveTab] = useState("about");
  const tabs = ["about", "courses", "reviews", "credentials"];
  return (
    <>
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
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30" />
                  </div>

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
    </>
  );
};
