// components/MileStoneSidebar.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

/**
 * MileStoneSidebar
 * Props:
 * - data: array of missions (see sampleData below)
 * - primary: color string (default '#206380')
 */
export default function MileStoneSidebar({
  data = sampleData,
  primary = "#206380",
}) {
  const [openMission, setOpenMission] = useState(null);
  const [openModule, setOpenModule] = useState({}); // { [missionIndex]: moduleIndex }

  const toggleMission = (i) => setOpenMission(openMission === i ? null : i);
  const toggleModule = (mIndex, modIndex) =>
    setOpenModule((s) => ({
      ...s,
      [mIndex]: s[mIndex] === modIndex ? undefined : modIndex,
    }));

  return (
    <aside className="w-full lg:w-">
      <div className="space-y-4">
        {data.map((mission, i) => {
          const isOpen = openMission === i;
          return (
            <div
              key={mission.id || i}
              className="rounded-xl border overflow-hidden shadow-lg"
            >
              {/* Outer card background: uses light and dark variants */}
              <div
                className={`w-full transition-colors duration-200 ${
                  isOpen
                    ? "bg-white dark:bg-slate-800"
                    : "bg-gradient-to-b from-white/5 to-white/2 dark:from-slate-900 dark:to-slate-900/90"
                }`}
                style={{
                  borderColor: "rgba(255,255,255,0.04)",
                }}
              >
                {/* mission header */}
                <button
                  onClick={() => toggleMission(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 p-4 sm:p-5 text-left hover:bg-gray-50 dark:hover:bg-slate-900 transition"
                >
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-lg font-semibold"
                      style={{ color: primary }}
                    >
                      {mission.title}
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
                      <div>{mission.duration}</div>
                      <div className="h-1 w-1 rounded-full bg-slate-400/40" />
                      <div>
                        {mission.completed}/{mission.total}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex flex-col items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-md flex items-center  justify-center ${
                        isOpen ? "text-white" : "text-nhd-700"
                      } text-sm font-bold`}
                      style={{
                        background: isOpen ? primary : "rgba(0,0,0,0.06)",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </div>
                  </div>
                </button>

                {/* modules list (collapsible) */}
                <div
                  className={`px-3 pb-4 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3 mt-2">
                    {mission.modules.map((mod, mi) => {
                      const modOpen = openModule[i] === mi;
                      return (
                        <div
                          key={mod.id || mi}
                          className="rounded-lg border bg-white dark:bg-slate-800 dark:border-slate-700"
                        >
                          <div
                            className="flex items-center justify-between p-3 sm:p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-900 transition"
                            onClick={() => toggleModule(i, mi)}
                          >
                            <div className="min-w-0">
                              <div className="font-medium text-sm text-slate-900 dark:text-slate-100">
                                {mod.title}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                {mod.duration} • {mod.completed}/{mod.total}
                              </div>
                            </div>
                            <div className="ml-3">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${modOpen? "text-white" : "text-nhd-700 "}`}
                                style={{
                                  background: modOpen
                                    ? primary
                                    : "rgba(0,0,0,0.05)",
                                }}
                              >
                                {modOpen ? "▾" : "▸"}
                              </div>
                            </div>
                          </div>

                          {/* lessons inside module */}
                          <div
                            className={`${
                              modOpen
                                ? "max-h-[800px] opacity-100"
                                : "max-h-0 opacity-0"
                            } transition-[max-height,opacity] duration-300 overflow-hidden px-3 pb-3`}
                          >
                            <ul className="space-y-2">
                              {mod.lessons.map((lesson) => (
                                <li
                                  key={lesson.id}
                                  className="rounded-md overflow-hidden"
                                >
                                  <Link
                                    href={`/courses/${
                                      lesson.courseId || mission.courseId
                                    }/lessons/${lesson.id}`}
                                    className=" px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition flex items-center justify-between"
                                  >
                                    <div className="min-w-0">
                                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                                        {lesson.title}
                                      </div>
                                      <div className="text-xs text-slate-500 dark:text-slate-400">
                                        {Math.floor(
                                          (lesson.durationSeconds || 0) / 60
                                        )}{" "}
                                        min
                                      </div>
                                    </div>

                                    <div className="ml-3 text-xs text-slate-500 dark:text-slate-300">
                                      {lesson.freePreview ? (
                                        <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200 px-2 py-0.5 rounded text-[11px] font-medium">
                                          Free
                                        </span>
                                      ) : null}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

/* -------------------------
   sampleData (for demo / copy)
   ------------------------- */
const sampleData = [
  {
    id: "mission-0",
    courseId: "2",
    title: "Mission 0: Welcome To Next Level World",
    duration: "0 h 56 m",
    completed: 7,
    total: 7,
    modules: [
      {
        id: "m0-0",
        title: "Module 0: Welcome To Next Level Web Development",
        duration: "0 h 7 m",
        completed: 1,
        total: 1,
        lessons: [
          {
            id: "l-0-1",
            title: "Intro & Orientation",
            durationSeconds: 420,
            freePreview: true,
            courseId: "2",
          },
        ],
      },
      {
        id: "m0-5",
        title: "Module 0.5: Orientation",
        duration: "0 h 49 m",
        completed: 6,
        total: 6,
        lessons: [
          {
            id: "l-0-5-1",
            title: "Getting Started",
            durationSeconds: 480,
            freePreview: true,
            courseId: "2",
          },
          {
            id: "l-0-5-2",
            title: "Setup",
            durationSeconds: 360,
            freePreview: true,
            courseId: "2",
          },
        ],
      },
    ],
  },

  {
    id: "mission-1",
    courseId: "2",
    title: "Mission 1: Be A Critical Thinker With JS",
    duration: "10 h 7 m",
    completed: 46,
    total: 46,
    modules: [
      {
        id: "m1-a",
        title: "Module 1: Core JS Principles",
        duration: "4 h 20 m",
        completed: 20,
        total: 20,
        lessons: [
          {
            id: "l-1-1",
            title: "JS Basics",
            durationSeconds: 600,
            freePreview: true,
            courseId: "2",
          },
          {
            id: "l-1-2",
            title: "Advanced Functions",
            durationSeconds: 800,
            freePreview: false,
            courseId: "2",
          },
        ],
      },
    ],
  },

  {
    id: "mission-2",
    courseId: "2",
    title: "Mission 2: Be A Typescript Technocrat",
    duration: "8 h 46 m",
    completed: 45,
    total: 45,
    modules: [
      {
        id: "m2-a",
        title: "Module 2: Types & Patterns",
        duration: "3 h 30 m",
        completed: 20,
        total: 20,
        lessons: [
          {
            id: "l-2-1",
            title: "Typescript Basics",
            durationSeconds: 620,
            freePreview: true,
            courseId: "2",
          },
          {
            id: "l-2-2",
            title: "Generics",
            durationSeconds: 700,
            freePreview: false,
            courseId: "2",
          },
        ],
      },
    ],
  },
];
