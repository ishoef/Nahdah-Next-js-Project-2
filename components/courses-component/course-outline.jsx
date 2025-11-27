"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function CourseOutline({ course }) {
  const [openMilestone, setOpenMilestone] = useState(null);
  const primary = "#206380";

  const toggleMilestone = (index) => {
    setOpenMilestone(openMilestone === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold" style={{ color: primary }}>
        Course Outline
      </h2>

      {course.outline?.map((section, index) => {
        const isOpen = openMilestone === index;
        const regionId = `milestone-${index}`;

        return (
          <section
            key={index}
            className="bg-white dark:bg-slate-900 rounded-xl border-l-4 border-[#206380] dark:border-blue-400 shadow-sm overflow-hidden"
          >
            {/* Header */}
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={regionId}
              onClick={() => toggleMilestone(index)}
              className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#206380]/30"
            >
              <div>
                <div className="text-md sm:text-lg font-semibold text-[#1f789b] dark:text-blue-300">
                  {section.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {section.lessons?.length ?? 0} lessons
                </div>
              </div>

              <div className="ml-4 flex items-center gap-3">
                <div
                  className={`text-[#206380] dark:text-blue-300 transform transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  {/* plus icon (rotates to become an x-ish) */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {/* Collapsible content */}
            <div
              id={regionId}
              className={`px-4 sm:px-6 pb-4 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="mt-3 grid gap-3">
                {section.lessons?.map((lessonId) => {
                  const lesson = course.curriculum?.find(
                    (l) => l.id === lessonId
                  );
                  if (!lesson) return null;

                  return (
                    <li key={lesson.id} className="rounded-lg overflow-hidden">
                      <Link
                        href={`/courses/${course._id}/lessons/${lesson.id}`}
                        className="block w-full bg-white dark:bg-slate-900 border hover:shadow-md transition-shadow p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#206380]/25"
                        aria-label={`Open lesson ${lesson.title}`}
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          {/* Left: title & meta */}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 truncate">
                              {lesson.title}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {Math.floor((lesson.durationSeconds || 0) / 60)}{" "}
                              min
                            </div>
                          </div>

                          {/* Right: badges */}
                          <div className="flex items-center gap-3">
                            {lesson.freePreview && (
                              <span className="text-xs sm:text-sm bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                                Free Preview
                              </span>
                            )}
                            <span
                              className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                              style={{
                                background: "rgba(32,99,128,0.08)",
                                color: primary,
                              }}
                            >
                              ▶
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
