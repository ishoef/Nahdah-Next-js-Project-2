"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Student, Malaysia",
    text: "The Tafsir courses have deepened my understanding of the Quran. The offline feature lets me learn during my commute. Alhamdulillah!",
  },
  {
    name: "Omar Abdullah",
    role: "Entrepreneur, UAE",
    text: "I completed the digital marketing course and launched my halal business online. The instructors are knowledgeable and supportive.",
  },
  {
    name: "Zainab Ahmed",
    role: "Teacher, UK",
    text: "An-Nahdah combines authentic Islamic knowledge with practical skills. The Arabic grammar course helped me teach my students better.",
  },
  ...Array.from({ length: 20 }).map((_, i) => ({
    name: `Student ${i + 1}`,
    role: `Learner, Country ${i + 1}`,
    text: `This is a sample testimonial message number ${
      i + 1
    }, sharing their success story.`,
  })),
];

function MarqueeRow({ reverse }) {
  const duration = 60;

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        className="flex gap-6 whitespace-nowrap py-4"
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-lg p-6 flex flex-col justify-between border border-blue-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            {/* ⭐⭐⭐⭐⭐ Star Rating */}
            <div className="flex space-x-1 mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="text-blue-500 dark:text-yellow-400 text-lg"
                >
                  ★
                </span>
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed break-words whitespace-normal">
              "{t.text}"
            </p>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSlider() {
  return (
    <section className="py-20 relative bg-gradient-to-r from-[#b1e5f0] via-[#d5f2f8] to-[#b1e5f0] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153151] dark:text-white">
            Students{" "}
            <span className="text-[#206380] dark:text-blue-400">
              Success Story
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Hear from our community of learners
          </p>
        </div>
      </div>

      <div className="space-y-10 px-4 sm:px-6 lg:px-8">
        <MarqueeRow reverse={false} /> {/* left → right */}
        <MarqueeRow reverse={true} /> {/* right → left */}
      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-32 bg-gradient-to-r from-blue-200 dark:from-gray-900 to-transparent" />
        <div className="w-32 bg-gradient-to-l from-blue-200 dark:from-gray-900 to-transparent" />
      </div>
    </section>
  );
}
