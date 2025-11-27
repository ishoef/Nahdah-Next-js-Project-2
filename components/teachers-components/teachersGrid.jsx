"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  Star,
  Clock,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import teachers from "@/jsons/teachers.json";
export default function TeachersGrid() {
    const demoTeachers = teachers;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const departments = useMemo(() => {
    const depts = Array.from(new Set(demoTeachers.map((t) => t.department)));
    return ["all", ...depts];
  }, []);

  const subjects = useMemo(() => {
    const subjs = Array.from(
      new Set(demoTeachers.flatMap((t) => t.specialties))
    );
    return ["all", ...subjs];
  }, []);

  const filteredTeachers = useMemo(() => {
    return demoTeachers.filter((teacher) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.specialties.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesDepartment =
        selectedDepartment === "all" ||
        teacher.department === selectedDepartment;
      const matchesSubject =
        selectedSubject === "all" ||
        teacher.specialties.includes(selectedSubject);

      return matchesSearch && matchesDepartment && matchesSubject;
    });
  }, [searchQuery, selectedDepartment, selectedSubject]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 dark:text-gray-300 dark:hover:text-gray-100 mb-6 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl text-nhd-950 sm:text-5xl font-bold mb-2 text-center dark:text-gray-100">
            Our Teachers Directory
          </h1>
          <p className="sm:text-lg text-muted-foreground dark:text-gray-400 text-center">
            Explore our complete collection of experienced and dedicated
            educators
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-6 mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground dark:text-gray-500" />
            <input
              type="search"
              placeholder="Search by name, subject, or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border dark:border-gray-700 bg-card dark:bg-gray-800 text-foreground dark:text-gray-100 placeholder:text-muted-foreground dark:placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-gray-600 focus:border-primary dark:focus:border-gray-600 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-foreground dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-gray-700 bg-card dark:bg-gray-800 text-foreground dark:text-gray-100 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-gray-600 focus:border-primary dark:focus:border-gray-600 transition-all pr-10"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === "all" ? "All Categories" : dept}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-9 w-4 h-4 text-muted-foreground dark:text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-foreground dark:text-gray-300 mb-2">
                Teaching Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-gray-700 bg-card dark:bg-gray-800 text-foreground dark:text-gray-100 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-gray-600 focus:border-primary dark:focus:border-gray-600 transition-all pr-10"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject === "all" ? "All Subjects" : subject}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-9 w-4 h-4 text-muted-foreground dark:text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <article
              key={teacher.id}
              className="group flex flex-col h-full bg-card dark:bg-gray-800 rounded-2xl border border-border dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="h-24 bg-gradient-to-br from-primary via-primary to-primary dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20 dark:opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3), transparent 50%)",
                  }}
                />
              </div>

              <div className="px-6 pb-6 flex flex-col flex-grow">
                <div className="flex gap-4 -mt-12 mb-4 items-start">
                  <div className="relative flex-shrink-0">
                    <img
                      src={teacher.profileImage || "/placeholder.svg"}
                      alt={`${teacher.name} profile`}
                      className="w-20 h-20 rounded-xl object-cover border-4 border-card dark:border-gray-700 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary dark:bg-gray-700 text-primary-foreground dark:text-gray-100 flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-bold shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      {teacher.rating}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 dark:bg-gray-700/30 text-accent dark:text-gray-300 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {teacher.years} yrs
                  </div>
                </div>

                <h3 className="font-bold text-lg text-foreground dark:text-gray-100 line-clamp-2 mb-1">
                  {teacher.name}
                </h3>
                <p className="text-sm font-semibold text-primary dark:text-gray-300 mb-1">
                  {teacher.title}
                </p>
                <p className="text-xs text-muted-foreground dark:text-gray-400 mb-4">
                  {teacher.department}
                </p>

                <p className="text-sm text-foreground/75 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                  {teacher.bio}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2.5">
                    <BookOpen className="w-4 h-4 text-primary dark:text-gray-300" />
                    <span className="text-xs font-semibold text-foreground dark:text-gray-300">
                      Teaching Subjects
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((subject) => (
                      <span
                        key={subject}
                        className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 dark:bg-gray-700/40 text-primary dark:text-gray-300 font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border dark:border-gray-700/50">
                  <a
                    href={`mailto:${teacher.email}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-primary dark:bg-gray-700 text-primary-foreground dark:text-gray-100 text-sm font-semibold hover:bg-primary/90 dark:hover:bg-gray-600 transition-colors shadow-sm"
                  >
                    Contact
                  </a>
                  <Link
                    href={`/instructors/${teacher.id}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-primary/20 dark:border-gray-600 text-foreground dark:text-gray-300 text-sm font-semibold hover:border-primary dark:hover:border-gray-500 hover:bg-primary/5 dark:hover:bg-gray-700/20 transition-all"
                  >
                    Profile
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground dark:text-gray-400 text-lg mb-2">
              No teachers match your criteria
            </p>
            <p className="text-muted-foreground dark:text-gray-500 text-sm">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
