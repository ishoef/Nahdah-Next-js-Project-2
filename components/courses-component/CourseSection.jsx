"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { BookOpen, GraduationCap, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CourseGrid from "../ui/CourseGrid";

const allCourses = [
  // Islamic Knowledge Courses
  {
    id: 1,
    title: "Tafsir Al-Quran: Surah Al-Baqarah",
    instructor: "Sheikh Ahmad Al-Mansour",
    category: "Islamic Knowledge",
    subcategory: "Quran & Tafsir",
    level: "Intermediate",
    duration: "12 weeks",
    students: 2450,
    rating: 4.9,
    price: "Free",
    type: "Islamic",
    image:
      "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cXVyYW58ZW58MHx8MHx8fDA%3D",
    offlineAvailable: true,
  },
  {
    id: 2,
    title: "Arabic Grammar Fundamentals (Nahw)",
    instructor: "Dr. Fatima Hassan",
    category: "Islamic Knowledge",
    subcategory: "Arabic Language",
    level: "Beginner",
    duration: "8 weeks",
    students: 3200,
    rating: 4.8,
    price: "$49",
    type: "Islamic",
    image:
      "https://images.unsplash.com/photo-1611131922192-9e1d9f483900?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXJhYmljJTIwR3JhbW1hciUyMEZ1bmRhbWVudGFscyUyMChOYWh3KXxlbnwwfHwwfHx8MA%3D%3D",
    offlineAvailable: true,
  },
  {
    id: 3,
    title: "Sahih Al-Bukhari: Selected Hadith",
    instructor: "Sheikh Abdullah Rahman",
    category: "Islamic Knowledge",
    subcategory: "Hadith Sciences",
    level: "Intermediate",
    duration: "10 weeks",
    students: 1890,
    rating: 4.9,
    price: "$79",
    type: "Islamic",
    image:
      "https://plus.unsplash.com/premium_photo-1679671812146-71581a1419bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEhhZGl0aHxlbnwwfHwwfHx8MA%3D%3D",
    offlineAvailable: true,
  },
  // Skill Development Courses
  {
    id: 101,
    title: "Web Development with React & Next.js",
    instructor: "Yusuf Ibrahim",
    category: "Skill Development",
    subcategory: "Digital Skills & Coding",
    level: "Intermediate",
    duration: "10 weeks",
    students: 1850,
    rating: 4.7,
    price: "$99",
    type: "Skill",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFdlYiUyMERldmVsb3BtZW50JTIwd2l0aCUyMFJlYWN0JTIwJTI2JTIwTmV4dC5qc3xlbnwwfHwwfHx8MA%3D%3D",
    offlineAvailable: true,
  },
  {
    id: 102,
    title: "Graphic Design Fundamentals",
    instructor: "Aisha Rahman",
    category: "Skill Development",
    subcategory: "Graphic Design",
    level: "Beginner",
    duration: "8 weeks",
    students: 2340,
    rating: 4.8,
    price: "$79",
    type: "Skill",
    image:
      "https://plus.unsplash.com/premium_photo-1721225465446-02f5b991a37f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R3JhcGhpYyUyMERlc2lnbiUyMEZ1bmRhbWVudGFsc3xlbnwwfHwwfHx8MA%3D%3D",
    offlineAvailable: true,
  },
  {
    id: 103,
    title: "Digital Marketing Essentials",
    instructor: "Omar Abdullah",
    category: "Skill Development",
    subcategory: "Digital Marketing",
    level: "Beginner",
    duration: "6 weeks",
    students: 3890,
    rating: 4.6,
    price: "Free",
    type: "Skill",
    image:
      "https://images.unsplash.com/photo-1758973935099-5b662a863f6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGlnaXRhbCUyME1hcmtldGluZyUyMEVzc2VudGlhbHN8ZW58MHx8MHx8fDA%3D",
    offlineAvailable: true,
  },
];

export default function CourseSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || course.subcategory === selectedCategory;

    const matchesTab =
      activeTab === "all" || course.type.toLowerCase() === activeTab;

    return matchesSearch && matchesCategory && matchesTab;
  });
  return (
    <>
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-blue-500">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-6 "
          >
            <TabsList className="grid dark:bg-gray-800 w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="islamic">
                <BookOpen className="h-4 w-4 mr-2" />
                Islamic
              </TabsTrigger>
              <TabsTrigger value="skill">
                <GraduationCap className="h-4 w-4 mr-2" />
                Skills
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses or instructors..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full lg:w-64">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Quran & Tafsir">Quran & Tafsir</SelectItem>
                  <SelectItem value="Hadith Sciences">
                    Hadith Sciences
                  </SelectItem>
                  <SelectItem value="Arabic Language">
                    Arabic Language
                  </SelectItem>
                  <SelectItem value="Digital Skills & Coding">
                    Digital Skills & Coding
                  </SelectItem>
                  <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                  <SelectItem value="Digital Marketing">
                    Digital Marketing
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredCourses.length} of {allCourses.length} courses
          </div>
        </div>
      </section>

      <CourseGrid filteredCourses={filteredCourses} />
    </>
  );
}
