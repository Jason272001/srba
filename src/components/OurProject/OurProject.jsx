import React from "react";
import { urlFor } from "../../data/client";

const OurProject = ({ data }) => {
  return (
    <div className="w-full h-full pt-16 pb-24 px-8 md:px-32 bg-[#000000] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="text-center text-white text-3xl md:text-5xl font-semibold leading-tight">
          Our Projects
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-full h-full">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 w-full">
            {data.map((project) => (
              <div
                key={project._id}
                className="group flex flex-col justify-center items-center gap-5 p-5 pt-24 mb-20 w-full md:w-[374px] h-[546px] transition-transform transform hover:scale-105"
              >
                <div className="flex flex-col justify-start items-start gap-1 w-full h-[172px]">
                  <div className="text-[rgba(255,255,255,0.55)] text-4xl font-bold group-hover:text-white transition-colors">
                    {project.name}
                  </div>
                  <div className="text-[rgba(218,210,210,0.80)] text-lg font-normal group-hover:text-white transition-colors">
                    {project.details}
                  </div>
                </div>
                <img
                  src={urlFor(project.image && project.image[0])}
                  alt="story 1"
                  className="w-[334px] h-[314px]"
                />
                <div className="flex justify-center items-center w-[281px] h-[60px] bg-[#676666] border border-gray-500 p-4 text-white text-lg font-semibold">
                  Learn More
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
