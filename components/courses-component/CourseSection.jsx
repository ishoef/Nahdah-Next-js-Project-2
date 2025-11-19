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
import coourseData from "../../jsons/courses.json";
const allCourses = coourseData.allCourses;
console.log(allCourses);
export default function CourseSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || course.subcategory === selectedCategory;

    const matchesTab =
      activeTab === "all" || course.type?.toLowerCase() === activeTab;

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
