import React from "react";

const Title = ({ subTitle = "", title1, title2 }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153151] dark:text-white">
        {title1}{" "}
        <span className="text-[#206380] dark:text-blue-400">{title2}</span>
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
