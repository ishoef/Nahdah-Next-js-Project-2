import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import instructors from "../../../../jsons/teachers.json";
import VisitingCard from "@/components/teachers-components/visitingCard";
import { TeachersTabSection } from "@/components/teachers-components/TeachersTabSection";

export function generateStaticParams() {
  return instructors.map((instructor) => ({
    id: instructor.id,
  }));
}

export default async function SingleInstructorPage({ params }) {
  const { id } = await params;
  console.log(id);
  const instructor = instructors.find((instruc) => instruc.id === id);

  if (!instructor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f9fc] via-white to-[#f0f7fb] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 text-center max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#206380] dark:text-cyan-400">
            Instructor Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Sorry, we couldn’t find the instructor you are looking for. The ID
            might be invalid or the instructor has been removed.
          </p>
          <a
            href="/instructors"
            className="inline-block px-6 py-3 bg-[#206380] text-white dark:bg-cyan-400 dark:text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Back to instructors
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f9fc] via-white to-[#f0f7fb] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-gray-100 transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Light overlay unchanged | Dark: deep gray */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#206380] via-[#1a4d66] to-[#0f3a4d] opacity-95 dark:from-gray-900 dark:via-gray-800 dark:to-black"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white dark:bg-gray-800 rounded-full opacity-5 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-white dark:bg-gray-800 rounded-full opacity-5 translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                <img
                  src={instructor.profileImage || "/placeholder.svg"}
                  alt={instructor.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#206380]/30 via-transparent to-transparent dark:from-black/60"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-white text-center lg:text-left max-w-3xl">
              <p className="text-xs sm:text-sm font-semibold text-blue-200 uppercase tracking-widest mb-2">
                Premium Educator
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                {instructor.name}
              </h1>
              <p className="text-sm sm:text-lg text-blue-100 mb-3 font-medium">
                {instructor.title}
              </p>
              <p className="text-sm sm:text-base text-blue-50 mb-6 sm:mb-8 leading-relaxed">
                {instructor.tagline}
              </p>

              <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 bg-white text-[#206380] dark:bg-gray-200 dark:text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200">
                  Follow
                </button>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 dark:bg-gray-800/50 dark:border-gray-600 dark:hover:bg-gray-700/50 transition-all duration-200 rounded-lg font-semibold">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 lg:-mt-16 mb-8 z-10">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {Object.entries(instructor.stats).map(([key, value]) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#206380] dark:text-gray-100 mb-1">
                {value.toLocaleString()}
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-medium capitalize text-sm sm:text-base">
                {key === "students"
                  ? "Students"
                  : key === "courses"
                  ? "Courses"
                  : "Years Exp."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Visiting Card */}
        <VisitingCard instructor={instructor} />

        {/* Tabs */}
        <TeachersTabSection instructor={instructor} />

        {/* Social Links */}
        <div className="mt-8 sm:mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 font-semibold mb-4 text-center md:text-left">
            Connect with the instructor
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href={instructor.social?.linkedin}
              className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-[#206380] dark:text-cyan-400 hover:bg-[#206380] dark:hover:bg-cyan-600 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={instructor.social?.twitter}
              className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-[#206380] dark:text-cyan-400 hover:bg-[#206380] dark:hover:bg-cyan-600 hover:text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href={instructor.social?.website}
              className="p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md text-[#206380] dark:text-cyan-400 hover:bg-[#206380] dark:hover:bg-cyan-600 hover:text-white transition-all duration-300"
              aria-label="Website"
            >
              <FaGlobe size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
