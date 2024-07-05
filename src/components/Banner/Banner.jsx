import React, { useState, useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Banner = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

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
    <div className="relative w-full h-full py-20 flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Welcome To Story Road Better Events Ever
          </h1>
          <p className="text-base md:text-xl text-gray-600 mt-2">
            Lorem ipsum dolar sit amet constreteur
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center cursor-pointer"
          >
            <FaCaretLeft size={45} />
          </button>
          <div className="w-full max-w-lg md:max-w-4xl h-auto flex justify-center items-center">
            {data.map((slide, index) => (
              <div
                key={index}
                className={`w-full h-full flex-shrink-0 transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? "block" : "hidden"
                }`}
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
                  <img
                    src={slide.content.asset.url}
                    alt={`Slide ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
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
            onClick={nextSlide}
            className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center cursor-pointer "
          >
            <FaCaretRight size={45} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
