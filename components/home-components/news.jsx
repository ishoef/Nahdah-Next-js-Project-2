"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Title from "../ui/title";

export default function NewsSection() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "New Seerah Course Launched",
      description:
        "We are excited to announce the launch of our new Seerah course that takes a deep dive into the life of the Prophet ﷺ, exploring his teachings and practical applications in today’s world.",
      image:
        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      slug: "new-seerah-course-launched",
    },
    {
      id: 2,
      title: "Ramadan Special Lectures",
      description:
        "Join our exclusive Ramadan lecture series where scholars will cover spiritual, ethical, and practical aspects of fasting, prayer, and Quranic reflection.",
      image:
        "https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      slug: "ramadan-special-lectures",
    },
    {
      id: 3,
      title: "Student Achievement Spotlight",
      description:
        "Celebrating the success of our dedicated students who have completed multiple certificate programs this month. Their commitment inspires the entire community.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      slug: "student-achievement-spotlight",
    },
    {
      id: 4,
      title: "Arabic Grammar Workshop",
      description:
        "Our new workshop focuses on essential Arabic grammar to help students understand Quranic Arabic better. Perfect for both beginners and intermediate learners.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=60",
      slug: "arabic-grammar-workshop",
    },
    {
      id: 5,
      title: "Quran Memorization Drive",
      description:
        "We have launched a global campaign encouraging students to memorize at least one new surah every month. Collective progress will be shared at the end of Ramadan.",
      image:
        "https://images.unsplash.com/photo-1743427046062-a17c1d48bf3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFF1cmFuJTIwTWVtb3JpemF0aW9uJTIwRHJpdmV8ZW58MHx8MHx8fDA%3D",
      slug: "quran-memorization-drive",
    },
    {
      id: 6,
      title: "Scholar Interview Series",
      description:
        "Our new video series brings inspiring stories from scholars across the globe, highlighting their educational journeys and advice for the next generation.",
      image:
        "https://plus.unsplash.com/premium_photo-1736961713945-963797f1f9af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2Nob2xhciUyMEludGVydmlldyUyMFNlcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      slug: "scholar-interview-series",
    },
    {
      id: 7,
      title: "Online Debate Competition",
      description:
        "Students from different countries are participating in a debate competition on ethics, culture, and Islamic values. Winners will be featured in our magazine.",
      image:
        "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T25saW5lJTIwRGViYXRlJTIwQ29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D",
      slug: "online-debate-competition",
    },
    {
      id: 8,
      title: "Charity Project Collaboration",
      description:
        "An-Nahdah has partnered with local charities to provide free books and study material to underprivileged students worldwide.",
      image:
        "https://plus.unsplash.com/premium_photo-1683134050449-080429c850a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fENoYXJpdHklMjBQcm9qZWN0JTIwQ29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      slug: "charity-project-collaboration",
    },
    {
      id: 9,
      title: "New Mobile App Update",
      description:
        "Our learning platform app now comes with offline mode, night reading, and progress tracking to make Islamic learning easier and accessible anywhere.",
      image:
        "https://plus.unsplash.com/premium_photo-1718747305165-32c4012b2962?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fE5ldyUyME1vYmlsZSUyMEFwcCUyMFVwZGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      slug: "new-mobile-app-update",
    },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        // Change this URL to your real API endpoint
        const res = await fetch("/api/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-center">
        <p className="text-gray-600 dark:text-gray-300">Loading news...</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <Title
          title1={"Latest"}
          title2={"News"}
          subTitle={"Stay updated with the latest updates from An-Nahdah"}
        />

        {/* News Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.length > 0 ? (
            news.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                )}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base flex-1 line-clamp-3">
                    {item.description}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="mt-4 inline-block font-medium hover:underline bg-gradient-to-r from-blue-600 to-blue-400 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
              No news available right now.
            </p>
          )}
        </div>

        {/* View All News Button */}
        {news.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/news"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 dark:from-gray-700 dark:to-gray-600 transition-all"
            >
              View All News
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
