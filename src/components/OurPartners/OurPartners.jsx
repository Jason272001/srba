import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const OurPartners = () => {
  const sliderVariants = {
    animate: {
      x: ["100%", "0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full h-full p-5 flex flex-col justify-center items-center gap-10">
      <div className="w-full h-44 px-4 md:px-32 flex flex-col justify-center items-center gap-8 md:gap-16">
        <div className="text-center text-[#262626] text-4xl font-semibold break-words">
          Our Partners
        </div>
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex space-x-6 w-full"
            variants={sliderVariants}
            animate="animate"
          >
            <img
              className="flex-none w-52 h-16 transition-transform transform hover:scale-110"
              src="https://via.placeholder.com/208x61"
              alt="partner 1"
            />
            <img
              className="flex-none w-52 h-16 transition-transform transform hover:scale-110"
              src="https://via.placeholder.com/208x61"
              alt="partner 2"
            />
            <img
              className="flex-none w-52 h-16 transition-transform transform hover:scale-110"
              src="https://via.placeholder.com/208x61"
              alt="partner 3"
            />
            <img
              className="flex-none w-52 h-16 transition-transform transform hover:scale-110"
              src="https://via.placeholder.com/208x61"
              alt="partner 4"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
