import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { urlFor } from "../../data/client";

const Project = ({ data }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const [currentPages, setCurrentPages] = useState(Array(data.length).fill(0));
  const imagesPerPage = 3; // Number of images per page

  useEffect(() => {
    console.log("Project data:", data);
  }, [data]);

  const handleMouseEnter = (cardIndex, imageIndex) => {
    console.log("Mouse enter on card:", cardIndex, "image:", imageIndex);
    setHoveredCard(cardIndex);
    setHoveredImageIndex(imageIndex);
  };

  const handleMouseLeave = () => {
    console.log("Mouse leave");
    setHoveredCard(null);
    setHoveredImageIndex(0);
  };

  const handleNextPage = (cardIndex) => {
    setCurrentPages((prevPages) => {
      const newPages = [...prevPages];
      const totalPages = Math.ceil(
        data[cardIndex].image.length / imagesPerPage
      );
      newPages[cardIndex] =
        newPages[cardIndex] + 1 < totalPages
          ? newPages[cardIndex] + 1
          : newPages[cardIndex];
      return newPages;
    });
  };

  const handlePrevPage = (cardIndex) => {
    setCurrentPages((prevPages) => {
      const newPages = [...prevPages];
      const totalPages = Math.ceil(
        data[cardIndex].image.length / imagesPerPage
      );
      newPages[cardIndex] =
        newPages[cardIndex] - 1 >= 0
          ? newPages[cardIndex] - 1
          : newPages[cardIndex];
      return newPages;
    });
  };

  return (
    <div className="container mx-auto p-4">
      {data.map((project, projectIndex) => (
        <div
          className="flex flex-col md:flex-row gap-8 pt-11"
          key={projectIndex}
        >
          <div>
            <div>
              {project.image &&
                project.image[
                  hoveredCard === projectIndex ? hoveredImageIndex : 0
                ] && (
                  <img
                    className="w-full max-w-md h-auto md:w-[300px] md:h-[300px] rounded-lg"
                    src={urlFor(
                      project.image[
                        hoveredCard === projectIndex ? hoveredImageIndex : 0
                      ]
                    )}
                    alt="Event"
                    onMouseLeave={handleMouseLeave}
                  />
                )}
            </div>
            <div className="flex gap-2 mt-4">
              {currentPages[projectIndex] > 0 && (
                <FaAngleLeft
                  size={36}
                  className="mt-6 cursor-pointer"
                  onClick={() => handlePrevPage(projectIndex)}
                />
              )}
              {project.image &&
                project.image
                  .slice(
                    currentPages[projectIndex] * imagesPerPage,
                    (currentPages[projectIndex] + 1) * imagesPerPage
                  )
                  .map((image, i) => (
                    <img
                      key={i}
                      className="w-20 h-20 rounded-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
                      src={urlFor(image)}
                      alt="Event"
                      onMouseEnter={() =>
                        handleMouseEnter(
                          projectIndex,
                          currentPages[projectIndex] * imagesPerPage + i
                        )
                      }
                    />
                  ))}
              {(currentPages[projectIndex] + 1) * imagesPerPage <
                project.image.length && (
                <FaAngleRight
                  size={36}
                  className="mt-6 cursor-pointer"
                  onClick={() => handleNextPage(projectIndex)}
                />
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full max-w-4xl mx-auto mt-8 text-center pb-4 text-black text-xl md:text-4xl font-semibold font-['Poppins']">
              {project.name}
            </div>
            <div className="opacity-70 text-stone-900 text-base md:text-xl font-normal font-['Poppins'] leading-loose">
              {project.details}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
