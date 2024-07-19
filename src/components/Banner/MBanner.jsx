import React, { useState, useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const MBanner = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? data.length - 1 : prevIndex - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === data.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className="relative w-full h-[650px] flex justify-center items-center">
      {data.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.mediaType === "video" ? (
            <video
              className="w-full h-full object-cover"
              src={slide.content.asset.url}
              autoPlay
              loop
              muted
            />
          ) : (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.content.asset.url})` }}
            ></div>
          )}
        </div>
      ))}
      <div className="relative z-10 w-full h-[650px] px-4 md:px-16 lg:px-32 pt-20 md:pt-40 pb-20 bg-gradient-to-b from-black to-transparent flex justify-center items-center">
        <div className="flex flex-col justify-start items-center gap-8 w-full">
          <div className="flex flex-col justify-start items-center gap-6 w-full md:w-3/4 lg:w-1/2">
            <div className="text-center text-white text-2xl md:text-4xl lg:text-[50px] font-semibold leading-tight md:leading-snug lg:leading-tight">
              "From Vision To Reality: Our Path Forward"
            </div>
            <div className="text-center text-stone-300 text-base md:text-lg lg:text-2xl font-normal leading-normal md:leading-relaxed lg:leading-normal">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button onClick={prevSlide} className="text-white text-2xl">
          <FaCaretLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button onClick={nextSlide} className="text-white text-2xl">
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default MBanner;
