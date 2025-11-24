// import React from "react";
// import CourseOutline from "@/components/courses-component/course-outline";
// import allData from "../../../../jsons/courses.json";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export function generateStaticParams() {
//   return allData.allCourses.map((course) => ({
//     id: course._id,
//   }));
// }

// export default async function CourseDetails({ params }) {
//   const allCourses = allData.allCourses;
//   // const course = demoCourse;
//   const { id } = await params;
//   const course = allCourses.find((c) => c._id === id);
//   console.log(course);

//   const {
//     title,
//     shortDescription,
//     category,
//     level,
//     thumbnail,
//     price,
//     currency,
//     instructor,
//     lessons,
//   } = course;

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="min-h-screen max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
//         {/* Hero Section */}
//         <section className="relative bg-[#206380] dark:bg-gray-800 text-white py-12 sm:py-20 rounded-b-3xl">
//           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-12">
//             {/* Thumbnail */}
//             <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-white">
//               <img
//                 src={thumbnail}
//                 alt={title}
//                 className="object-cover w-full h-full"
//               />
//             </div>

//             {/* Info */}
//             <div className="md:w-1/2 space-y-4 sm:space-y-5">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg leading-tight">
//                 {title}
//               </h1>
//               <p className="text-blue-100 dark:text-gray-300 text-base sm:text-lg">
//                 {shortDescription}
//               </p>

//               <div className="flex flex-wrap gap-3 sm:gap-4 text-sm font-medium text-blue-100 dark:text-gray-300">
//                 <span className="flex items-center gap-1">📚 {category}</span>
//                 <span>•</span>
//                 <span className="flex items-center gap-1">🎓 {level}</span>
//                 <span>•</span>
//                 <span className="flex items-center gap-1">
//                   🕒 {lessons?.length || 0} Lessons
//                 </span>
//               </div>

//               <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
//                 <Link href={"/checkout"} className="cursor-pointer px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold bg-white text-[#206380] dark:bg-gray-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 transition shadow-md">
//                   Enroll Now
//                 </Link>
//                 {price > 0 ? (
//                   <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200">
//                     ${price} {currency}
//                   </span>
//                 ) : (
//                   <span className="text-lg sm:text-xl font-semibold text-green-300">
//                     Free Course
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Main Content */}
//         <section className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-8 sm:gap-10 px-2 sm:px-0">
//           {/* Left Column */}
//           <div className="md:col-span-2 space-y-8 sm:space-y-10">
//             {/* About */}
//             <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 sm:p-6 md:p-8">
//               <h2 className="text-xl sm:text-2xl font-bold text-[#206380] dark:text-blue-300 mb-3 sm:mb-4">
//                 About this Course
//               </h2>
//               <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
//                 <p>
//                   This <strong>comprehensive beginner course</strong> is
//                   designed to teach you how Arabic words and sentences are
//                   formed. You’ll learn:
//                 </p>
//                 <ul className="list-disc ml-5 mt-2 space-y-1">
//                   <li>
//                     How nouns, verbs, and particles function in a sentence
//                   </li>
//                   <li>The basic structure of Arabic sentences</li>
//                   <li>Essential patterns of Arabic morphology (الصرف)</li>
//                 </ul>
//                 <p className="mt-2">
//                   By the end, you'll be able to read and analyze simple Arabic
//                   sentences from classical texts with confidence.
//                 </p>
//               </div>
//             </div>

//             {/* Course Outline */}
//             <CourseOutline course={course} />
//           </div>

//           {/* Instructor Sidebar */}
//           <aside className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 sm:p-6 md:p-8 sticky top-4 sm:top-22 h-fit">
//             <div className="flex flex-col items-center text-center">
//               <div className="w-24 h-24 sm:w-28 sm:h-28 mb-3 rounded-full overflow-hidden border-2 border-[#206380] dark:border-blue-400">
//                 <img
//                   src={instructor.avatar}
//                   alt={instructor.name}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <h3 className="text-md sm:text-lg font-bold text-[#206380] dark:text-blue-300">
//                 {instructor.name}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-2 text-center">
//                 {instructor.bio}
//               </p>

//               <Button className="mt-5 bg-[#1f789b] hover:bg-[#206380] dark:bg-blue-400  dark:text-white cursor-pointer">
//                 View Profile
//               </Button>
//             </div>
//           </aside>
//         </section>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { Star, Users, Clock, Languages } from "lucide-react";

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* HERO */}
      <section className="bg-[#206380] dark:bg-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center ">
          {/* Left Content */}
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Quran & Tafsir
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Intermediate
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Offline Available
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Tafsir Al-Quran: Surah Al-Baqarah
            </h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-white/90">
              Dive deep into the meanings and wisdom of Surah Al-Baqarah — a
              comprehensive course covering classical tafsir from Ibn Kathir,
              Al-Tabari, and contemporary scholars with contextual and practical
              applications.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span className="font-bold">4.9</span>
                  <span className="text-white/70">(342)</span>
                </div>

                {/* Students */}
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>2,450 students</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 weeks</span>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  <span>English & Arabic</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-2xl shadow-sm w-fit mt-5 bg-white dark:bg-slate-900 hover:shadow-md transition">
              <div className="flex items-center gap-4">
                {/* Instructor Image */}
                <div className="w-16 h-16 rounded-full border overflow-hidden flex items-center justify-center bg-[#effbfc] dark:bg-slate-100">
                  <span className="text-2xl font-semibold text-gray-600">
                    IN
                  </span>
                </div>

                {/* Instructor Info */}
                <div>
                  <h1 className="text-lg text-[#102b3c] dark:text-white font-semibold">
                    Ustaz Ismail Nayef
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Islamic Studies & Arabic Language
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD - enroll */}
          <aside className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg md:sticky md:top-6">
            <img
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVyYW58ZW58MHx8MHx8fDA%3D"
              alt="course cover"
              className="w-full h-58 object-cover rounded-md mb-4"
            />
            <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Free
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Full lifetime access
            </div>

            <button className="cursor-pointer mt-4 w-full inline-flex items-center justify-center rounded-lg py-2 bg-[#206380] text-white hover:bg-[#225168]">
              Enroll Now
            </button>
            <button className="cursor-pointer text-[#102b3c] hover:bg-[#1f789b] hover:text-white dark:text-white mt-2 w-full inline-flex items-center justify-center rounded-lg py-2 border dark:border-slate-700">
              Add to Wishlist
            </button>

            <ul className="mt-4 text-sm space-y-2 text-slate-600 dark:text-slate-300">
              <li>Lifetime access</li>
              <li>Certificate of completion</li>
              <li>Offline download</li>
              <li>Discussion forum access</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm">
              <nav
                className="grid grid-cols-3 gap-3 border p-1 bg-slate-200 dark:bg-slate-900 rounded-xl"
                aria-label="Course sections"
              >
                {[
                  { id: "overview", label: "Overview" },
                  { id: "curriculum", label: "Curriculum" },
                  { id: "instructor", label: "Instructor" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`px-3 py-2 rounded-md text-sm ${
                      activeTab === t.id
                        ? "bg-white dark:bg-slate-700 font-semibold"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </nav>

              <div className="mt-4">
                {activeTab === "overview" && (
                  <section className="space-y-6">
                    <div className="rounded-lg border dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
                      <h3 className="font-semibold">What You'll Learn</h3>
                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>
                          Detailed verse-by-verse explanation of Surah
                          Al-Baqarah
                        </li>
                        <li>Classical and contemporary tafsir perspectives</li>
                        <li>
                          Arabic language insights and linguistic analysis
                        </li>
                        <li>
                          Historical context and reasons for revelation (Asbab
                          al-Nuzul)
                        </li>
                        <li>Practical applications of Quranic teachings</li>
                        <li>
                          Connection between verses and Islamic jurisprudence
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
                      <h3 className="font-semibold">Requirements</h3>
                      <ul className="mt-2 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                        <li>
                          Basic understanding of Islam and Quranic Arabic
                          (helpful but not required)
                        </li>
                        <li>Commitment to weekly lessons and assignments</li>
                        <li>Access to a Quran (physical or digital)</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
                      <h3 className="font-semibold">Course Features</h3>
                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>12 weeks of structured learning</li>
                        <li>40+ video lectures with subtitles</li>
                        <li>Downloadable PDF notes and resources</li>
                        <li>Weekly quizzes and assignments</li>
                        <li>Discussion forum with instructor</li>
                        <li>Certificate of completion</li>
                      </ul>
                    </div>
                  </section>
                )}

                {activeTab === "curriculum" && (
                  <section className="space-y-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <details
                        key={i}
                        className="rounded-lg border dark:border-slate-700 p-4 bg-white dark:bg-slate-900"
                      >
                        <summary className="font-semibold cursor-pointer">
                          Week {i + 1}: Topic title here
                        </summary>
                        <ul className="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                          <li>Lecture 1 — 10m</li>
                          <li>Lecture 2 — 25m</li>
                          <li>Reading / PDF — 1 resource</li>
                        </ul>
                      </details>
                    ))}
                  </section>
                )}

                {activeTab === "instructor" && (
                  <section className="space-y-4">
                    <div className="flex items-start gap-4 bg-white dark:bg-slate-900 p-4 rounded-lg border dark:border-slate-700">
                      <img
                        src="/mnt/data/An-Nahdah-Online-Institute-Islamic-Knowledge-Skill-Development-11-24-2025_12_15_PM.png"
                        alt="instructor"
                        className="w-20 h-20 rounded-md object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">Dr. A. Instructor</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Senior Tafsir scholar with 15+ years of teaching
                          experience. Focuses on contextual understanding and
                          practical application.
                        </p>
                        <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                          Courses: Tafsir Al-Quran · Arabic Grammar
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-4 border dark:border-slate-700">
              <h3 className="font-semibold">Student Reviews</h3>
              <div className="mt-3 space-y-3">
                <div className="p-3 rounded-md bg-slate-50 dark:bg-slate-900 border dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Excellent course</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        By Ahmed · 5 stars
                      </div>
                    </div>
                    <div className="text-sm">⭐ 5.0</div>
                  </div>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    Great explanations and practical examples. Highly
                    recommended for serious students.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR ON LARGE SCREENS */}
          <aside className="hidden lg:block">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border dark:border-slate-700">
              <h4 className="font-semibold">Course Info</h4>
              <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex justify-between">
                  <span>Level</span>
                  <span className="font-medium">Intermediate</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Duration</span>
                  <span className="font-medium">12 weeks</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Language</span>
                  <span className="font-medium">English & Arabic</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Last Updated</span>
                  <span className="font-medium">January 2025</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Students</span>
                  <span className="font-medium">2,450</span>
                </div>
              </div>

              <div className="mt-4">
                <button className="cursor-pointer w-full py-2 rounded-md bg-[#206380] hover:bg-[#1f789b] text-white">
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700">
              <h4 className="font-semibold">Share This Course</h4>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 py-2 rounded-md border hover:bg-[#1877f2] hover:text-white cursor-pointer transition-all ">
                  Facebook
                </button>
                <button className="flex-1 py-2 rounded-md border hover:bg-[#0088cc] hover:text-white cursor-pointer transition-all ">
                  Telegram
                </button>
              </div>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 py-2 rounded-md border hover:bg-[#25d366] hover:text-white cursor-pointer transition-all ">
                  Whatsapp
                </button>
                <button className="flex-1 py-2 rounded-md border hover:bg-[#0a66c2] hover:text-white cursor-pointer transition-all ">
                  Linkedin
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
