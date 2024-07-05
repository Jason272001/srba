import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="w-full h-full py-12 flex flex-col justify-center items-center gap-14">
      <div className="w-full text-center text-[#353535] text-4xl font-semibold break-words font-poppins">
        Upcoming Events
      </div>
      <div className="w-full h-auto flex flex-col gap-8">
        <div className="w-full bg-[#FBFBFB] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 p-4 md:p-8">
          <div className="bg-white flex justify-end items-center w-full md:w-auto">
            <img
              className="w-full md:w-[705px] h-auto md:h-[526px] object-cover"
              src="https://via.placeholder.com/705x526"
              alt="event"
            />
          </div>
          <div className="w-full md:w-[506px] flex flex-col justify-start items-center gap-6">
            <div className="w-full h-auto flex flex-col justify-center items-start gap-2">
              <div className="relative w-full h-auto flex flex-col md:flex-row justify-around items-center md:items-start gap-4 md:gap-0">
                <div className="text-center md:text-left text-[#35353599] text-xl font-medium font-poppins leading-[27px] break-words">
                  JULY 26 - 27
                </div>
                <div className="text-center md:text-left text-[#35353599] text-xl font-medium font-poppins leading-[27px] break-words">
                  SEPT 6 - 7
                </div>
                <div className="text-center md:text-left text-[#35353599] text-xl font-medium font-poppins leading-[27px] break-words">
                  OCT 11 - 12
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-start items-center gap-4 md:gap-6">
                <div className="text-center md:text-left text-[#35353599] text-xl font-light font-poppins leading-[27px] break-words">
                  FRI & SAT 4 PM - 10 PM
                </div>
                <div className="text-center md:text-left text-[#353535cc] text-xl font-medium font-poppins leading-[27px] break-words">
                  Grand Century Mall
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
              <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
                <div className="w-full text-[#262626] text-2xl font-bold font-poppins leading-[45px] break-words">
                  Community Cleaning Event
                </div>
                <div className="w-full text-[#1E1E1E] text-lg font-light font-poppins leading-[28px] break-words">
                  Excepteur efficient emerging, minim veniam anim aute carefully
                  curated Ginza conversation exquisite perfect nostrud nisi
                  intricate Content. Qui international first-class nulla ut.
                  Punctual adipisicing, essential lovely queen tempor eiusmod
                  irure. Exclusive izakaya charming S
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-start items-center gap-6 md:gap-24">
                <div className="w-[281px] h-[60px] px-4 py-4 border border-black flex justify-center items-center gap-2 bg-black hover:w-[300px] hover:h-[70px] transition-all duration-300">
                  <div className="text-[#ffffff] text-lg font-semibold font-poppins leading-[28.80px] break-words">
                    Buy Tickets
                  </div>
                </div>
                <div className="text-[#262626] text-lg font-medium font-poppins underline leading-[28.80px] break-words hover:text-blue-600 transition-all duration-300">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#FBFBFB] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 p-4 md:p-8">
          <div className="w-full md:w-[506px] flex flex-col justify-start items-center gap-6 order-2 md:order-1">
            <div className="w-full h-auto flex flex-col justify-center items-start gap-2">
              <div className="relative w-full h-auto flex flex-col md:flex-row justify-around items-center md:items-start gap-4 md:gap-0">
                <div className="text-center md:text-left text-[#35353599] text-xl font-medium font-poppins leading-[27px] break-words">
                  JULY 26 - 27
                </div>
                <div className="text-center md:text-left text-[#35353599] text-xl font-medium font-poppins leading-[27px] break-words">
                  SEPT 6 - 7
                </div>
                <div className="text-center md:text-left text-[#35353599] text-xl font-medium font-poppins leading-[27px] break-words">
                  OCT 11 - 12
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-start items-center gap-4 md:gap-6">
                <div className="text-center md:text-left text-[#35353599] text-xl font-light font-poppins leading-[27px] break-words">
                  FRI & SAT 4 PM - 10 PM
                </div>
                <div className="text-center md:text-left text-[#353535cc] text-xl font-medium font-poppins leading-[27px] break-words">
                  Grand Century Mall
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
              <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
                <div className="w-full text-[#262626] text-2xl font-bold font-poppins leading-[45px] break-words">
                  Community Cleaning Event
                </div>
                <div className="w-full text-[#1E1E1E] text-lg font-light font-poppins leading-[28px] break-words">
                  Excepteur efficient emerging, minim veniam anim aute carefully
                  curated Ginza conversation exquisite perfect nostrud nisi
                  intricate Content. Qui international first-class nulla ut.
                  Punctual adipisicing, essential lovely queen tempor eiusmod
                  irure. Exclusive izakaya charming S
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-start items-center gap-6 md:gap-24">
                <div className="w-[281px] h-[60px] px-4 py-4 border border-black flex justify-center items-center gap-2 bg-black hover:w-[300px] hover:h-[70px] transition-all duration-300">
                  <div className="text-[#ffffff] text-lg font-semibold font-poppins leading-[28.80px] break-words">
                    Buy Tickets
                  </div>
                </div>
                <div className="text-[#262626] text-lg font-medium font-poppins underline leading-[28.80px] break-words hover:text-blue-600 transition-all duration-300">
                  Read More
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-end items-center w-full md:w-auto order-1 md:order-2">
            <img
              className="w-full md:w-[705px] h-auto md:h-[526px] object-cover"
              src="https://via.placeholder.com/705x526"
              alt="event"
            />
          </div>
        </div>
      </div>
      <div className="w-[281px] h-[60px] px-4 py-4 border border-black flex justify-center items-center gap-2 bg-black hover:w-[300px] hover:h-[70px] transition-all duration-300">
        <div className="text-[#ffffff] text-lg font-semibold font-poppins leading-[28.80px] break-words">
          See More
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
