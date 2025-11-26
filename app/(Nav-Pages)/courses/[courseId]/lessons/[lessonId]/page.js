"use client";
import React, { useState, useRef, useEffect } from "react";
import allData from "@/jsons/courses.json";
import { useParams } from "next/navigation";

export default function LessonPage() {
  const params = useParams();
  const courseId = params?.courseId;
  const lessonId = params?.lessonId;
  const allCourses = allData.allCourses;
  const singleCourse = allCourses.find((crs) => crs._id === courseId);

  const singleLesson = singleCourse.curriculum.find((l) => l.id === lessonId);

  const videoURL = singleLesson?.videoUrl;
  console.log(videoURL);

  // CourseData Destructure

  const {
    slug,
    title,
    shortDescription,
    fullDescription,
    category,
    subcategory,
    level,
    language,
    thumbnail,
    price,
    currency,
    students,
    rating,
    duration,
    instructor,
    lastUpdated,
    whatYouLearn,
    requirements,
    extraValues,
    features,
    curriculum,
  } = singleCourse;
  // primary color
  const primary = "#206380";

  const [isTranscriptOpen, setTranscriptOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(
    curriculum.length ? curriculum[0].id : 1
  );
  const [progress, setProgress] = useState(0);
  const [comments, setComments] = useState([
    { id: 1, user: "Fatima", text: "Great explanation!", time: "2h ago" },
  ]);
  const [commentText, setCommentText] = useState("");
  const [isDark, setIsDark] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // read saved theme
    const saved =
      typeof window !== "undefined" && localStorage.getItem("lesson_theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // only attach to real <video> elements (not iframe/YT)
  useEffect(() => {
    const v = videoRef.current;
    if (!v || v.tagName !== "VIDEO") return;
    function onTimeUpdate() {
      const p = Math.floor((v.currentTime / (v.duration || 1)) * 100) || 0;
      setProgress(p);
    }
    v.addEventListener("timeupdate", onTimeUpdate);
    return () => v.removeEventListener("timeupdate", onTimeUpdate);
  }, [videoRef]);

  function submitComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments((c) => [
      {
        id: Date.now(),
        user: "You",
        text: commentText.trim(),
        time: "just now",
      },
      ...c,
    ]);
    setCommentText("");
  }

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("lesson_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("lesson_theme", "light");
    }
  }

  const isYoutube = /youtube\.com|youtu\.be/.test(videoURL);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
              {singleLesson.title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border dark:border-gray-700 text-sm bg-white dark:bg-gray-800 shadow-sm"
            >
              <span className="hidden sm:inline text-xs text-gray-700 dark:text-gray-200">
                {isDark ? "Dark" : "Light"}
              </span>
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                {isDark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 5.47a1 1 0 011.4 0l.71.7a1 1 0 11-1.41 1.41l-.7-.71a1 1 0 010-1.4zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 7a1 1 0 011-1v-1a1 1 0 10-2 0v1a1 1 0 011 1zM15.07 6.58a1 1 0 010 1.41l-.7.7a1 1 0 11-1.41-1.41l.7-.7a1 1 0 011.41 0zM17 9a1 1 0 100 2h1a1 1 0 100-2h-1zM5.64 14.36a1 1 0 011.41 0l.7.7a1 1 0 11-1.41 1.41l-.7-.7a1 1 0 010-1.41zM14.36 14.36a1 1 0 011.41 0l.7.7a1 1 0 11-1.41 1.41l-.7-.7a1 1 0 010-1.41z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 116.707 2.707 8 8 0 0017.293 13.293z" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <main className="lg:col-span-3">
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 md:p-6">
              <div className="relative w-full rounded-lg overflow-hidden bg-black">
                {/* responsive 16:9 */}

                {/* Video Frame */}
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  {isYoutube ? (
                    <iframe
                      title="lesson-video"
                      src={videoURL}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{ border: "none" }}
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      src={videoURL}
                      poster={thumbnail}
                      controls
                      playsInline
                      className="absolute inset-0 w-full h-full bg-black"
                    />
                  )}
                </div>

                {/* <div className="absolute left-4 top-4 bg-white/10 text-white text-xs rounded-full px-3 py-1 backdrop-blur">
                  <span className="text-xs font-medium">
                    {singleLesson.title}
                  </span>
                </div> */}
              </div>

              {/*  */}
              <div className="mt-6 md:flex md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                    {instructor.name} • {duration}
                  </p>
                </div>

                <div className="mt-3 md:mt-0 flex flex-wrap items-center gap-2">
                  <button
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm bg-transparent"
                    style={{ borderColor: "rgba(32,99,128,0.12)" }}
                  >
                    Previous
                  </button>

                  <button
                    className="px-4 py-2 rounded-md text-white text-sm"
                    style={{ backgroundColor: primary }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 md:p-6 mt-4">
              {/* progress */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${progress}%`, background: primary }}
                  />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                  Progress: {progress}%
                </div>
              </div>

              {/* Lesson Details */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      Lesson details
                    </h3>
                    <button
                      onClick={() => setTranscriptOpen((s) => !s)}
                      className="text-sm px-3 py-1 border rounded bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    >
                      {isTranscriptOpen ? "Hide" : "Show"} Transcript
                    </button>
                  </div>

                  <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                    <p>
                      In this lesson we cover the basic sentence structure, verb
                      conjugations, and common vocabulary. Follow the transcript
                      if you want to read along.
                    </p>

                    {isTranscriptOpen && (
                      <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded text-sm leading-6">
                        <p>
                          <strong>Transcript:</strong>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
                          erat molestie vehicula.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <aside className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Resources
                  </h4>
                  <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>
                      <a className="underline" href="#">
                        Download slides (PDF)
                      </a>
                    </li>
                    <li>
                      <a className="underline" href="#">
                        Exercise files
                      </a>
                    </li>
                    <li>
                      <a className="underline" href="#">
                        External reading
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>

              {/* Reivew Section */}
              <section className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Discussion
                </h3>
                <form onSubmit={submitComment} className="mt-3">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Ask a question or leave feedback..."
                    className="w-full p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 resize-none"
                    rows={3}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-xs text-gray-500 dark:text-gray-300">
                      Be respectful — no spam.
                    </div>
                    <button
                      className="px-4 py-2 rounded text-white text-sm"
                      style={{ backgroundColor: primary }}
                    >
                      Post
                    </button>
                  </div>
                </form>

                <ul className="mt-4 space-y-3">
                  {comments.map((c) => (
                    <li
                      key={c.id}
                      className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm text-gray-700 dark:text-gray-200">
                          {c.user[0]}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {c.user}{" "}
                            <span className="text-xs text-gray-400 dark:text-gray-300 font-normal">
                              · {c.time}
                            </span>
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {c.text}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </main>

          {/* Rgiht Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
                <div className=" text-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-500 dark:text-gray-300">
                      Course progress
                    </div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {progress}%
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${progress}%`, background: primary }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Lessons
                </h4>
                <ul className="mt-3 space-y-2 max-h-[50vh] overflow-auto">
                  {(curriculum.length
                    ? curriculum
                    : Array.from({ length: 6 }).map((_, i) => ({
                        id: i + 1,
                        title: `Lesson ${i + 1}`,
                        length: "10:00",
                      }))
                  ).map((l) => (
                    <li
                      key={l.id}
                      onClick={() => setActiveLesson(l.id)}
                      className={`p-2 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 flex items-center justify-between ${
                        activeLesson === l.id
                          ? "bg-[rgba(32,99,128,0.06)] dark:bg-[rgba(32,99,128,0.12)] border"
                          : ""
                      }`}
                    >
                      <div className="text-sm">
                        <div className="font-medium text-gray-900 dark:text-gray-100">
                          {l.title}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-300">
                          {l.length}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-300">
                        {l.completed ? "✓" : ""}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor  */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
                <div className="flex items-center gap-3">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {instructor.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-300">
                      {instructor.title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow text-sm text-gray-700 dark:text-gray-300">
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  Notes
                </div>
                <div className="mt-2">
                  Add personal notes for this lesson to keep track of questions
                  and examples.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
