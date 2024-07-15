import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../data/client";

const OurPartners = ({ data }) => {
  const sliderVariants = {
    animate: {
      x: [0, -100 * data.length + "%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 4 * data.length,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full h-full p-5 flex flex-col justify-center items-center gap-10">
      <div className="w-full h-44 px-4 md:px-32 flex flex-col justify-center items-center gap-8 md:gap-16">
        <div className="text-center text-[#262626] text-4xl font-semibold break-words">
          Our Members
        </div>
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex space-x-6 w-full"
            variants={sliderVariants}
            animate="animate"
          >
            {data.map((logo) => (
              <div key={logo._id} className="flex-none w-52 h-16">
                {" "}
                <img
                  className="flex-none w-52 h-16 transition-transform transform hover:scale-110"
                  src={urlFor(logo.logo && logo.logo)}
                  alt="partner 1"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
