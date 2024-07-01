import React, { useState, useEffect } from "react";
import "./Banner.css"; // Import the CSS file
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "object-fit-polyfill";

const Banner = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto slide functionality
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlide); // Cleanup interval on component unmount
  }, [data]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden h-screen flex  justify-center">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex  justify-center"
          >
            {slide.mediaType === "links" && (
              <iframe
                title={`Slide ${index + 1}`}
                src={slide.url}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                style={{ objectFit: "cover" }}
              ></iframe>
            )}
            {slide.mediaType === "image" && (
              <div className="w-full h-4/6 flex items-center justify-center bg-black bg-opacity-100 mx-auto">
                <img
                  src={slide.content.asset.url}
                  alt={`Slide ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            {slide.mediaType === "video" && (
              <video
                controls
                src={slide.content.asset.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              ></video>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/3 left-4 transform -translate-y-1/2 hover:text-6xl text-white  rounded-full text-5xl font-thin"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/3 right-4 transform -translate-y-1/2 hover:text-6xl text-white  rounded-full text-5xl  font-thin"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Banner;
