import React from "react";

const OurCommunity = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-20  pt-10 bg-black">
      <div className="w-full h-64 px-8 md:px-32 flex flex-col justify-center items-center gap-8">
        <div className="w-full text-center text-white text-4xl font-semibold break-words">
          Our Community
        </div>
        <div className="w-full text-center text-gray-400 text-xl md:text-2xl font-semibold leading-relaxed break-words">
          Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor
          sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id
        </div>
        <div className="w-72 h-15 px-4 py-4 bg-gray-600 border flex justify-center items-center gap-4">
          <div className="text-white text-lg font-semibold leading-7 break-words">
            Join Our Community
          </div>
        </div>
      </div>
      <img
        className="w-full h-auto"
        style={{ background: "linear-gradient(0deg, white 0%, white 100%)" }}
        src="https://via.placeholder.com/1440x606"
        alt="Community"
      />
    </div>
  );
};

export default OurCommunity;
