"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function CourseOutline({ course }) {
  const [openMilestone, setOpenMilestone] = useState(null);

  const toggleMilestone = (index) => {
    setOpenMilestone(openMilestone === index ? null : index);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-[#206380] dark:text-blue-300 mb-2">
        Course Outline
      </h2>

      {course.outline?.map((section, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-900 shadow rounded-xl overflow-hidden border-l-4 border-[#206380] dark:border-blue-400 py-4 sm:py-3"
        >
          {/* Milestone Header */}
          <button
            className="w-full text-left px-4 sm:px-5 py-3 flex justify-between items-center focus:outline-none cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            onClick={() => toggleMilestone(index)}
          >
            <span className=" text-md sm:text-lg font-semibold text-[#1f789b] dark:text-blue-400">
              {section.title}
            </span>
            <span
              className={`text-[#206380] dark:text-blue-400 text-xl font-bold transform transition-transform duration-300 ${
                openMilestone === index ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>

          {/* Lessons */}
          <div
            className={`px-4 sm:px-6 transition-all duration-300 ease-in-out overflow-hidden ${
              openMilestone === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="mt-2 sm:mt-3 list-disc ml-4 sm:ml-0 text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-5">
              {section.lessons?.map((lessonId) => {
                const lesson = course.curriculum.find((l) => l.id === lessonId);
                if (!lesson) return null; // skip if lesson not found
                return (
                  <li
                    key={lesson.id}
                    className="flex justify-between items-center border p-4 rounded "
                  >
                    <Link href={`/courses/${course._id}/lessons/${lesson.id}`}>{lesson.title}</Link>
                    {lesson.freePreview && (
                      <span className="text-xs sm:text-sm text-green-600 font-medium">
                        (Free Preview)
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
