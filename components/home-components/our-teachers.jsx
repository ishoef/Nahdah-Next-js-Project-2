// import React from "react";
// import Section from "../ui/section";
// import Title from "../ui/title";

// const OurTeachers = () => {
//   return (
//     // <Section>
//     //   <Title
//     //     title1={"Meet Our"}
//     //     title2={"Honorable Teachers"}
//     //     subTitle="Learn from the world best and well educated teachers"
//     //   />
//     // </Section>
//   );
// };

// export default OurTeachers;

// TeachersSection.jsx (Next.js component)
// - TailwindCSS responsive grid
// - Gradient background for light/dark themes (no manual toggle)
// - Elegant, respectful teacher profile cards

"use client";

import React, { useState } from "react";
import Title from "../ui/title";

export default function TeachersSection() {
  const demoTeachers = [
    {
      id: 1,
      name: "Dr. Mohammad Imran",
      title: "Associate Professor of Hadith",
      department: "Islamic Studies",
      bio: "20+ years teaching Hadith, Tafsir, and classical Arabic. Passionate about student mentorship and research.",
      subjects: ["Ṣaḥīḥ al-Bukhārī", "Tafsir", "Arabic Grammar"],
      email: "imran@example.edu",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 4.9,
      years: 22,
    },
    {
      id: 2,
      name: "Ustadhah Ayesha Rahman",
      title: "Senior Lecturer — Arabic Language",
      department: "Languages",
      bio: "Specialist in Arabic morphology and pedagogy. Loves designing interactive reading courses for adults.",
      subjects: ["Nahw (Grammar)", "Sarf (Morphology)", "Reading Practice"],
      email: "ayesha@example.edu",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 4.8,
      years: 12,
    },
    {
      id: 3,
      name: "Prof. Khalid Hasan",
      title: "Professor — Fiqh & Usul",
      department: "Jurisprudence",
      bio: "Researcher of comparative fiqh with deep interest in community-led legal education.",
      subjects: ["Fiqh", "Usul al-Fiqh", "Comparative Jurisprudence"],
      email: "khalid@example.edu",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 5.0,
      years: 30,
    },
    {
      id: 4,
      name: "Dr. Noor Fatima",
      title: "Lecturer — Islamic History",
      department: "History",
      bio: "Author and educator focusing on early Islamic civilization and female scholarship.",
      subjects: ["Islamic History", "Biographies", "Research Methods"],
      email: "noor@example.edu",
      image:
        "https://i.postimg.cc/QNFWys2W/vecteezy-profile-icon-design-vector-5544718.jpg",
      rating: 4.7,
      years: 9,
    },
    {
      id: 5,
      name: "Dr. Noor Fatima",
      title: "Lecturer — Islamic History",
      department: "History",
      bio: "Author and educator focusing on early Islamic civilization and female scholarship.",
      subjects: ["Islamic History", "Biographies", "Research Methods"],
      email: "noor@example.edu",
      image:
        "https://images.unsplash.com/photo-1531123414780-fb0d0b3b8b5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 4.7,
      years: 9,
    },
    {
      id: 6,
      name: "Dr. Noor Fatima",
      title: "Lecturer — Islamic History",
      department: "History",
      bio: "Author and educator focusing on early Islamic civilization and female scholarship.",
      subjects: ["Islamic History", "Biographies", "Research Methods"],
      email: "noor@example.edu",
      image:
        "https://images.unsplash.com/photo-1531123414780-fb0d0b3b8b5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=800",
      rating: 4.7,
      years: 9,
    },
  ];

  const [query, setQuery] = useState("");

  const filtered = demoTeachers.filter((t) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      t.name.toLowerCase().includes(q) ||
      t.title.toLowerCase().includes(q) ||
      t.department.toLowerCase().includes(q) ||
      t.subjects.join(" ").toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <Title
          title1={"Meet Our"}
          title2={"Honorable Teachers"}
          subTitle="Learn from the world best and well educated teachers"
        />

        <main>
          <div className="mt-4 sm:mt-0 mx-auto mb-10 relative w-full sm:w-80">
            <input
              type="search"
              placeholder="Search teachers, subjects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filtered.map((t) => (
              <article
                key={t.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />

                <div className="flex flex-col items-center text-center p-6 pt-10">
                  <div className="relative">
                    <img
                      src={
                        "https://i.postimg.cc/QNFWys2W/vecteezy-profile-icon-design-vector-5544718.jpg"
                      }
                      alt={`${t.name} profile`}
                      className="w-38 h-38 rounded-full object-cover shadow-md ring-4 ring-blue-400"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                      {t.rating.toFixed(1)} ★
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.title}
                  </p>

                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    {t.department} • {t.years} yrs experience
                  </div>

                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-200 line-clamp-3">
                    {t.bio}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {t.subjects.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
                    <a
                      href={`mailto:${t.email}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Contact
                    </a>
                    <button className="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                      View Profile
                    </button>
                  </div>
                </div>

                <footer className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-transparent dark:from-gray-800 text-xs text-gray-500 dark:text-gray-400 text-center">
                  <a href={`mailto:${t.email}`} className="underline">
                    {t.email}
                  </a>
                </footer>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
              No teachers match your search.
            </div>
          )}

          {/* See All Button */}
          <div className="mt-12 flex justify-center">
            <button className="cursor-pointer px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              See All Teachers
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
