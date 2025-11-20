"use client";
import React from "react";
import { FaBookOpen } from "react-icons/fa"; // Dummy logo icon

const CooSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Left Image with Background */}
        <div className="relative w-full md:w-1/3 flex justify-center basis-1/2">
          {/* Background Accent */}
          <div className="absolute top-5 left-5 w-[80%] h-[95%] bg-[#1f789b] rounded-lg"></div>

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
        <div className="w-full basis-1/2 md:w-2/3 border-r-4 border-[#1f789b] pr-6 ">
          <h2 className="text-2xl md:text-3xl text-end font-bold text-[#102b3c] dark:text-gray-100 mb-6">
            A Few Words About Our COO
          </h2>

          <p className="text-gray-700 text-end dark:text-gray-300 leading-relaxed mb-4">
            Tanjil Tanim is the Chief Operating Officer of An-Nahdah Online
            Academy, bringing vision and leadership to our educational
            initiatives. With a strong background in Computer Science and
            Engineering, he has been instrumental in shaping the academy's
            digital learning platform and expanding its reach.
          </p>

          <p className="text-gray-700 text-end dark:text-gray-300 leading-relaxed mb-4">
            Under his guidance, An-Nahdah Online Academy has grown into a
            thriving online community offering numerous courses and programs
            that benefit learners globally. Tanjil is dedicated to making
            quality Islamic and academic education accessible to all, while
            fostering innovation, collaboration, and excellence in every aspect
            of the academy.
          </p>

          {/* Founder Name & Role */}
          <div className="mt-6 text-end">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Tanjil Tanim
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              COO (Chief Operating Officer) — An-Nahdah Online Academy - AOI
            </p>
          </div>

          {/* Logo + License */}
          <div className="mt-6 flex justify-end items-center gap-3">
            <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
              <FaBookOpen className="text-[#1f789b] dark:text-gray-300 text-xl" />
            </div>
            <div>
              <p className="text-[#204459] dark:text-gray-200 font-medium">
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

export default CooSection;
