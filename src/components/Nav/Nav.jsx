import React from "react";
import logob from "../../logob.jpeg";
const Nav = () => {
  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-getween p-4 md:px-32 px-5 bg-white shadow-[0_3px_105px_rgba(0,0,0,0.3)]">
          <div className="flex flex-row items-center cursor-pointer px-0">
            <span>
              <img alt="log" src={logob} className="h-20 w-20 rounded-full" />
            </span>
            {/* <h1 className="text-xl font-bold p-6">
              Story Road Business Association{" "}
            </h1> */}
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 px-5">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Membership
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Events
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Community
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              News & Updates
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              More
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
