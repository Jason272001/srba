import React from "react";
import { FaBullseye, FaLightbulb, FaMedal, FaTrophy } from "react-icons/fa";

const Purpose = () => {
  const sections = [
    {
      title: "Our Mission",
      description:
        "To drive economic vitality and district safety, cleanliness, and beautification in the Story Rd. geographical area in the City of San Jose, CA. With a strong cultural presence, this association will help market the corridor for economic development activities, safety, and promote environmental responsibilities for the area's businesses.",
      icon: <FaBullseye className="w-12 h-12 text-orange-500" />,
    },
    {
      title: "Our Value",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: <FaMedal className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Our Vision",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: <FaLightbulb className="w-12 h-12 text-yellow-500" />,
    },
    {
      title: "Our Achievement",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: <FaTrophy className="w-12 h-12 text-blue-500" />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 px-4 pt-24 pb-10">
      {sections.map((section, index) => (
        <div
          key={index}
          className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] xl:w-[calc(50%-1rem)] bg-white border rounded-lg p-8 flex flex-col justify-center items-center transition transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
        >
          <div className="w-24 h-24 mb-4 flex justify-center items-center">
            {section.icon}
          </div>
          <div className="text-center text-black text-2xl lg:text-3xl font-semibold mb-4">
            {section.title}
          </div>
          <div className="text-center text-neutral-600 text-base lg:text-lg">
            {section.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Purpose;
