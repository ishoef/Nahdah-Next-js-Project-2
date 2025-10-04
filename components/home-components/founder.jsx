"use client";
import React from "react";
import { FaBookOpen } from "react-icons/fa"; // Dummy logo icon

const FounderSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl  py-16 border-b-3 border-b-blue-500 mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image with Background */}
        <div className="relative w-full md:w-1/3 flex justify-center basis-1/2">
          {/* Background Accent */}
          <div className="absolute top-5 left-5 w-[80%] h-[95%] bg-[#153151] rounded-lg"></div>

          {/* Photo Card */}
          <div className="overflow-hidden rounded-lg shadow-lg transform transition-all z-10 duration-500 hover:scale-105 hover:rotate-1">
            <img
              src="https://images.unsplash.com/photo-1722409195216-b4a54601d38c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlJTIwY2VvfGVufDB8fDB8fHww"
              alt="Founder"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full basis-1/2 md:w-2/3 border-l-4 border-blue-600 pl-6 ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#153151] dark:text-gray-100 mb-6">
            A Few Words About Our Founder
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Ismail Nayef is a passionate technology entrepreneur. With a strong
            background in Computer Science and Engineering, he founded one of
            the first digital learning platforms in 2010. His dedication and
            vision have impacted thousands of learners across the globe.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Today, this platform has grown into a thriving global community with
            500+ online courses and millions of learners. His mission is to make
            quality education free and accessible to all, while building a
            culture of innovation and collaboration.
          </p>

          {/* Founder Name & Role */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Ismail Nayef
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Student, Al-Azhar University, Cairo, Egypt (3rd Year)
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Founder & CEO — An-Nahdah Online Academy - AOI
            </p>
          </div>

          {/* Logo + License */}
          <div className="mt-6 flex items-center gap-3">
            <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
              <FaBookOpen className="text-blue-600 dark:text-gray-300 text-xl" />
            </div>
            <div>
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                An-Nahdah Online Academy - AOI
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                License No: TRAD/DNCC/009595/2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
