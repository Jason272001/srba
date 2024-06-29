import React, { useState } from "react";
import "./Banner.css"; // Import the CSS file
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "https://via.placeholder.com/1800x600/FF0000/FFFFFF?text=Slide+1" },
    { url: "https://via.placeholder.com/1800x600/00FF00/FFFFFF?text=Slide+2" },
    { url: "https://via.placeholder.com/1800x600/0000FF/FFFFFF?text=Slide+3" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <iframe
            title="Slide"
            width="90%"
            key={index}
            src={slide.url}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 "
            frameborder="0"
            allowfullscreen
          ></iframe>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-75 text-black p-2 rounded-full"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-75 text-black p-2 rounded-full"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Banner;
