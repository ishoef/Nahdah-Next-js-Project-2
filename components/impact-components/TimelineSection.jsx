"use client";

import { useState, useEffect } from "react";
import { Award, Users, TrendingUp, BookOpen, Globe } from "lucide-react";

const timelineEvents = [
  {
    year: "2020",
    milestone: "Founded An-Nahdah Academy",
    description:
      "Started with vision to democratize Islamic education globally",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
    stats: "1 Initiative",
  },
  {
    year: "2021",
    milestone: "First 100 Scholarships",
    description: "Supported first batch of Quranic scholars",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
    stats: "100 Scholars",
  },
  {
    year: "2022",
    milestone: "Women's Wing Launched",
    description: "Empowered 500+ Muslim women in Islamic sciences",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    stats: "500+ Women",
  },
  {
    year: "2023",
    milestone: "$1M+ Raised",
    description: "Reached international donor network",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    stats: "$1M+",
  },
  {
    year: "2024",
    milestone: "15,000+ Lives Impacted",
    description: "Expanded to 89 countries and communities",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    stats: "89 Countries",
  },
];

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fps = 60;
    const totalFrames = duration * fps;
    const increment = value / totalFrames;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current += increment;
      if (frame >= totalFrames) {
        setCount(Math.round(value));
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function TimelineSection() {
  return (
    <section
      id="story"
      className="py-24 px-4 sm:px-6 lg:px-6 my-8 rounded-2xl shadow bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#206380]/10 text-[#206380] text-sm font-semibold mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Building a Global Islamic Education Movement
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From a small vision to a transformative global movement, we&apos;ve
            grown to serve thousands of students across continents.
          </p>
        </div>

        <div className="relative">
          {/* Gradient line - hidden on mobile */}
          <div
            className="hidden sm:block absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 rounded-full sm:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, #206380 0%, rgba(16,124,129,0.6) 50%, #206380 100%)",
            }}
          />

          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((event, idx) => {
              const IconComponent = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  // mobile: stacked column; sm+: alternating left/right
                  className={`flex flex-col sm:flex-row gap-6 sm:gap-0 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 px-0 sm:px-4 ${
                      isEven ? "sm:text-right" : ""
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-102 border border-slate-100 dark:border-slate-700">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${event.color} p-2 shadow-md flex items-center justify-center`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div
                          className={`flex-1 ${isEven ? "sm:text-right" : ""}`}
                        >
                          <p className="text-[#206380] font-semibold text-lg sm:text-xl mb-1">
                            {event.year}
                          </p>
                          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                            {event.milestone}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            {event.description}
                          </p>
                          <span className="inline-block px-3 py-1 rounded-full bg-[#206380]/10 text-[#206380] text-xs sm:text-sm font-semibold">
                            {event.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center marker & animated ring - hidden on mobile */}
                  <div className="hidden sm:flex flex-col items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-5 h-5 bg-gradient-to-br ${event.color} rounded-full border-4 border-white dark:border-slate-800 shadow-md z-10`}
                      />
                      {/* animated dashed ring - only visible on sm+ */}
                      <div
                        className="absolute w-8 h-8 rounded-full border-2 border-dashed border-[#206380]/30 animate-spin"
                        style={{ animationDuration: "3s" }}
                      />
                    </div>
                  </div>

                  {/* Empty spacer for alignment on larger screens; hidden on mobile */}
                  <div className="hidden sm:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Impact by Numbers */}
        <div className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Our Impact by Numbers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Students Trained", value: 15000 },
              { label: "Countries Reached", value: 89 },
              { label: "Scholarships Awarded", value: 2500 },
              { label: "Teachers & Scholars", value: 150 },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#206380]/6 to-cyan-500/6 border border-[#206380]/20 hover:border-[#206380]/40 transition-all"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#206380] mb-2">
                  <AnimatedCounter value={stat.value} />
                  {stat.label.includes("Countries") ||
                  stat.label.includes("Teachers")
                    ? ""
                    : "+"}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Be part of our growing movement in Islamic education
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-[#206380] to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
            Join Our Mission
          </button>
        </div>
      </div>
    </section>
  );
}
