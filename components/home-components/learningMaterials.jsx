import React from "react";
import {
  FaVideo,
  FaFolderOpen,
  FaClipboardList,
  FaCode,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

const features = [
  {
    icon: <FaVideo className="text-[#1f789b] text-2xl" />,
    title: "Live Classes & Video Lessons",
    desc: "Attend interactive live classes and access high-quality video lessons for a complete learning experience.",
  },
  {
    icon: <FaFolderOpen className="text-[#1f789b] text-2xl" />,
    title: "Recorded Content & Videos for Every Lesson",
    desc: "All lessons are recorded and available for download so you can learn at your own pace, anytime and anywhere.",
  },
  {
    icon: <FaClipboardList className="text-[#1f789b] text-2xl" />,
    title: "Quizzes",
    desc: "Test your understanding with quizzes after each lesson and track your progress effectively.",
  },
  {
    icon: <FaCode className="text-[#1f789b] text-2xl" />,
    title: "Assignments",
    desc: "Practice hands-on assignments with every module to strengthen your learning and apply concepts in real scenarios.",
  },
  {
    icon: <FaUsers className="text-[#1f789b] text-2xl" />,
    title: "Support Sessions",
    desc: "Join live support sessions to ask questions and get guidance on any course topic from our experts.",
  },
  {
    icon: <FaTasks className="text-[#1f789b] text-2xl" />,
    title: "World’s Best Teachers",
    desc: "Learn from top educators and work on real projects to build practical skills and a strong portfolio.",
  },
];

export default function CourseFeatures() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102b3c] dark:text-white">
            Our Course{" "}
            <span className="text-[#206380] dark:text-blue-400">
              Learning Materials
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Here’s everything included in our courses to help you learn better
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-10 lg:p-14">
            {features.map((item, idx) => {
              // Mobile: only the last item should not have a border-b
              const isLastMobile = idx === features.length - 1;

              // Desktop (3 cols): check rows/cols
              const isLastRowDesktop = idx >= features.length - 3;
              const isLastColDesktop = (idx + 1) % 3 === 0;

              return (
                <div
                  key={idx}
                  className={`p-6 flex flex-col items-center text-center space-y-3 
                    border-gray-200 dark:border-gray-700
                    ${!isLastMobile ? "border-b md:border-0" : ""} 
                    ${!isLastColDesktop ? "md:border-r" : ""} 
                    ${!isLastRowDesktop ? "md:border-b" : ""}`}
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
