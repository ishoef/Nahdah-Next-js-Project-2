import React from "react";
import { courses } from "@/components/home-components/featured-courses";
import CourseOutline from "@/components/courses-component/course-outline";

export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

export default function CourseDetails({ params }) {
  const course = demoCourse;

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="min-h-screen max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative bg-[#206380] dark:bg-gray-800 text-white py-12 sm:py-20 rounded-b-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-12">
            {/* Thumbnail */}
            <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-96 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Info */}
            <div className="md:w-1/2 space-y-4 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg leading-tight">
                {course.title}
              </h1>
              <p className="text-blue-100 dark:text-gray-300 text-base sm:text-lg">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 text-sm font-medium text-blue-100 dark:text-gray-300">
                <span className="flex items-center gap-1">
                  📚 {course.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  🎓 {course.level}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  🕒 {course.lessons?.length || 0} Lessons
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold bg-white text-[#206380] dark:bg-gray-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 transition shadow-md">
                  Enroll Now
                </button>
                {course.price > 0 ? (
                  <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200">
                    ${course.price} {course.currency}
                  </span>
                ) : (
                  <span className="text-lg sm:text-xl font-semibold text-green-300">
                    Free Course
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-8 sm:gap-10 px-2 sm:px-0">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8 sm:space-y-10">
            {/* About */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#206380] dark:text-blue-300 mb-3 sm:mb-4">
                About this Course
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  This <strong>comprehensive beginner course</strong> is
                  designed to teach you how Arabic words and sentences are
                  formed. You’ll learn:
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>
                    How nouns, verbs, and particles function in a sentence
                  </li>
                  <li>The basic structure of Arabic sentences</li>
                  <li>Essential patterns of Arabic morphology (الصرف)</li>
                </ul>
                <p className="mt-2">
                  By the end, you'll be able to read and analyze simple Arabic
                  sentences from classical texts with confidence.
                </p>
              </div>
            </div>

            {/* Course Outline */}
            <CourseOutline course={course} />
          </div>

          {/* Instructor Sidebar */}
          <aside className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 sm:p-6 md:p-8 sticky top-4 sm:top-10 h-fit">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-3 rounded-full overflow-hidden border-2 border-[#206380] dark:border-blue-400">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-md sm:text-lg font-bold text-[#206380] dark:text-blue-300">
                {course.instructor.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-2 text-center">
                {course.instructor.bio}
              </p>
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}

/* ----------------------------
   DEMO DATA
-------------------------------- */
const demoCourse = {
  _id: "demo123",
  slug: "intro-to-arabic-grammar",
  title: "Intro to Arabic Grammar",
  shortDescription:
    "Master the foundations of Arabic syntax and morphology — the key to understanding Qur’anic Arabic confidently.",
  fullDescription: `
    <p>This <strong>comprehensive beginner course</strong> is designed to teach you how Arabic words and sentences are formed. You’ll learn:</p>
    <ul>
      <li>How nouns, verbs, and particles function in a sentence</li>
      <li>The basic structure of Arabic sentences</li>
      <li>Essential patterns of Arabic morphology (الصرف)</li>
    </ul>
    <p>By the end, you'll be able to read and analyze simple Arabic sentences from classical texts with confidence.</p>
  `,
  category: "Arabic Language",
  level: "Beginner",
  language: "Arabic",
  thumbnail:
    "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1200&auto=format&fit=crop",
  price: 0,
  currency: "USD",
  instructor: {
    name: "Dr. Ahmad Al-Azhari",
    bio: "Senior Arabic linguist at Al-Azhar University with 15+ years of teaching experience.",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=500&auto=format&fit=crop",
  },
  lessons: [
    {
      id: "l-1",
      title: "Course Introduction",
      durationSeconds: 300,
      freePreview: true,
    },
    {
      id: "l-2",
      title: "Why Learn Arabic?",
      durationSeconds: 420,
      freePreview: true,
    },
    {
      id: "l-3",
      title: "Course Structure Overview",
      durationSeconds: 360,
      freePreview: true,
    },

    {
      id: "l-4",
      title: "Arabic Alphabet Part 1",
      durationSeconds: 480,
      freePreview: true,
    },
    {
      id: "l-5",
      title: "Arabic Alphabet Part 2",
      durationSeconds: 450,
      freePreview: true,
    },
    {
      id: "l-6",
      title: "Pronunciation Tips",
      durationSeconds: 400,
      freePreview: true,
    },

    {
      id: "l-7",
      title: "Introduction to Nouns",
      durationSeconds: 500,
      freePreview: true,
    },
    {
      id: "l-8",
      title: "Personal Pronouns",
      durationSeconds: 420,
      freePreview: true,
    },
    {
      id: "l-9",
      title: "Demonstrative & Relative Pronouns",
      durationSeconds: 480,
      freePreview: false,
    },

    {
      id: "l-10",
      title: "Verb Forms Overview",
      durationSeconds: 450,
      freePreview: true,
    },
    {
      id: "l-11",
      title: "Present Tense Conjugation",
      durationSeconds: 520,
      freePreview: false,
    },
    {
      id: "l-12",
      title: "Past Tense Conjugation",
      durationSeconds: 540,
      freePreview: false,
    },

    {
      id: "l-13",
      title: "Simple Sentence Structure",
      durationSeconds: 480,
      freePreview: true,
    },
    {
      id: "l-14",
      title: "Negation & Questions",
      durationSeconds: 500,
      freePreview: false,
    },
    {
      id: "l-15",
      title: "Basic Prepositions",
      durationSeconds: 450,
      freePreview: false,
    },

    {
      id: "l-16",
      title: "Roots & Patterns",
      durationSeconds: 520,
      freePreview: false,
    },
    {
      id: "l-17",
      title: "Deriving Words from Roots",
      durationSeconds: 540,
      freePreview: false,
    },
    {
      id: "l-18",
      title: "Plural Forms",
      durationSeconds: 500,
      freePreview: false,
    },

    {
      id: "l-19",
      title: "Subject & Predicate",
      durationSeconds: 480,
      freePreview: false,
    },
    {
      id: "l-20",
      title: "Nominal & Verbal Sentences",
      durationSeconds: 520,
      freePreview: false,
    },
    {
      id: "l-21",
      title: "Case Endings",
      durationSeconds: 500,
      freePreview: false,
    },

    {
      id: "l-22",
      title: "Intermediate Noun Usage",
      durationSeconds: 540,
      freePreview: false,
    },
    {
      id: "l-23",
      title: "Intermediate Verb Usage",
      durationSeconds: 560,
      freePreview: false,
    },
    {
      id: "l-24",
      title: "Sentence Types & Patterns",
      durationSeconds: 500,
      freePreview: false,
    },

    {
      id: "l-25",
      title: "Advanced Verb Patterns",
      durationSeconds: 600,
      freePreview: false,
    },
    {
      id: "l-26",
      title: "Advanced Nominal Structures",
      durationSeconds: 580,
      freePreview: false,
    },
    {
      id: "l-27",
      title: "Complex Sentence Construction",
      durationSeconds: 620,
      freePreview: false,
    },

    {
      id: "l-28",
      title: "Reading Short Texts Part 1",
      durationSeconds: 480,
      freePreview: true,
    },
    {
      id: "l-29",
      title: "Reading Short Texts Part 2",
      durationSeconds: 500,
      freePreview: false,
    },
    {
      id: "l-30",
      title: "Reading Comprehension Exercises",
      durationSeconds: 520,
      freePreview: false,
    },

    {
      id: "l-31",
      title: "Writing Simple Sentences",
      durationSeconds: 480,
      freePreview: true,
    },
    {
      id: "l-32",
      title: "Writing Paragraphs",
      durationSeconds: 540,
      freePreview: false,
    },
    {
      id: "l-33",
      title: "Writing Exercises & Feedback",
      durationSeconds: 560,
      freePreview: false,
    },

    {
      id: "l-34",
      title: "Review Nouns & Pronouns",
      durationSeconds: 500,
      freePreview: true,
    },
    {
      id: "l-35",
      title: "Review Verbs & Sentence Patterns",
      durationSeconds: 520,
      freePreview: true,
    },
    {
      id: "l-36",
      title: "Final Assessment & Wrap-Up",
      durationSeconds: 600,
      freePreview: false,
    },
  ],

  outline: [
    {
      title: "Milestone 1: Introduction to Arabic",
      lessons: ["l-1", "l-2", "l-3"],
    },
    {
      title: "Milestone 2: Arabic Alphabets & Pronunciation",
      lessons: ["l-4", "l-5", "l-6"],
    },
    { title: "Milestone 3: Nouns & Pronouns", lessons: ["l-7", "l-8", "l-9"] },
    {
      title: "Milestone 4: Verbs & Conjugation Basics",
      lessons: ["l-10", "l-11", "l-12"],
    },
    {
      title: "Milestone 5: Basic Sentence Structure",
      lessons: ["l-13", "l-14", "l-15"],
    },
    {
      title: "Milestone 6: Morphology Patterns (الصرف)",
      lessons: ["l-16", "l-17", "l-18"],
    },
    {
      title: "Milestone 7: Syntax Rules (النحو)",
      lessons: ["l-19", "l-20", "l-21"],
    },
    {
      title: "Milestone 8: Intermediate Sentences",
      lessons: ["l-22", "l-23", "l-24"],
    },
    {
      title: "Milestone 9: Advanced Grammar Concepts",
      lessons: ["l-25", "l-26", "l-27"],
    },
    {
      title: "Milestone 10: Reading Short Texts",
      lessons: ["l-28", "l-29", "l-30"],
    },
    {
      title: "Milestone 11: Writing Practice",
      lessons: ["l-31", "l-32", "l-33"],
    },
    {
      title: "Milestone 12: Comprehensive Review",
      lessons: ["l-34", "l-35", "l-36"],
    },
  ],
};
