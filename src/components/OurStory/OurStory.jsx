import React from "react";

const OurStory = () => {
  return (
    <div className="w-full h-full pt-16 pb-24 px-8 md:px-32 bg-[#050614] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="text-center text-white text-3xl md:text-5xl font-semibold leading-tight">
          Our Story
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-full h-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
            <div className="group flex flex-col justify-center items-center gap-5 p-5 w-full md:w-[374px] h-[546px] transition-transform transform hover:scale-105">
              <div className="flex flex-col justify-start items-start gap-1 w-full h-[172px]">
                <div className="text-[rgba(255,255,255,0.55)] text-4xl font-bold group-hover:text-white transition-colors">
                  01
                </div>
                <div className="text-[rgba(218,210,210,0.80)] text-lg font-normal group-hover:text-white transition-colors">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget. Et integer
                  facilisi eget.
                </div>
              </div>
              <img
                src="https://via.placeholder.com/334x314"
                alt="story 1"
                className="w-full h-[314px]"
              />
            </div>
            <div className="group flex flex-col justify-center items-center gap-5 p-5 w-full md:w-[374px] h-[546px] transition-transform transform hover:scale-105">
              <div className="flex flex-col justify-start items-start gap-1 w-full h-[172px]">
                <div className="text-[rgba(255,255,255,0.55)] text-4xl font-bold group-hover:text-white transition-colors">
                  02
                </div>
                <div className="text-[rgba(218,210,210,0.80)] text-lg font-normal group-hover:text-white transition-colors">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget. Et integer
                  facilisi eget.
                </div>
              </div>
              <img
                src="https://via.placeholder.com/334x314"
                alt="story 2"
                className="w-full h-[314px]"
              />
            </div>
            <div className="group flex flex-col justify-center items-center gap-5 p-5 w-full md:w-[374px] h-[546px] transition-transform transform hover:scale-105">
              <div className="flex flex-col justify-start items-start gap-1 w-full h-[172px]">
                <div className="text-[rgba(255,255,255,0.55)] text-4xl font-bold group-hover:text-white transition-colors">
                  03
                </div>
                <div className="text-[rgba(218,210,210,0.80)] text-lg font-normal group-hover:text-white transition-colors">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget. Et integer
                  facilisi eget.
                </div>
              </div>
              <img
                src="https://via.placeholder.com/334x314"
                alt="story 3"
                className="w-full h-[314px]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-[281px] h-[60px] bg-[#676666] border border-gray-500 p-4 text-white text-lg font-semibold">
            Our Story
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
