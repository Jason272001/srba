import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const OurHappyClients = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.",
      name: "Jacqueline Wright",
      role: "Customer",
      image: "https://via.placeholder.com/50x50",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.",
      name: "John Doe",
      role: "Customer",
      image: "https://via.placeholder.com/50x50",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Risus lectus nisl.",
      name: "Alice Johnson",
      role: "Customer",
      image: "https://via.placeholder.com/50x50",
    },
  ];

  const sliderVariants = {
    animate: {
      x: ["100%", "0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full h-full p-5 flex flex-col pt-32 pb-40 justify-center items-center gap-10">
      <div className="w-full h-['30rem'] px-4 md:px-32 flex flex-col justify-center items-center gap-8 md:gap-16">
        <div className="text-center text-[#262626] text-3xl font-semibold break-words">
          Our Story
        </div>
        <div className="overflow-hidden w-full h-72">
          <motion.div
            className="flex space-x-6 w-full"
            variants={sliderVariants}
            animate="animate"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                className="flex-none w-96 h-60 p-6 mt-4 bg-white rounded-lg shadow-lg transform-3d testimonial-box"
                key={i}
                whileHover={{ scale: 1.05, rotateY: 10 }}
              >
                <div className="text-gray-600 text-lg leading-6">
                  {testimonial.text}
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <div className="text-black text-lg font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurHappyClients;
