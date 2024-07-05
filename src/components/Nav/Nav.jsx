import React, { useState } from "react";
import logob from "../../logob.jpeg";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import alogo from "../../logoA.mp4";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="fixed w-full z-10">
      <div className="flex flex-col bg-black shadow-md">
        <div className="flex flex-row justify-between p-4 md:px-32 px-5 bg-black shadow-[0_3px_105px_rgba(0,0,0,0.3)]">
          <div className="flex flex-row items-center cursor-pointer px-0">
            <video className="h-24 w-32 " loop muted autoPlay>
              <source src={alogo} type="video/mp4" />
            </video>
            s
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 px-5">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Membership
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Events
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Community
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              News & Updates
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            {showNav ? (
              <AiOutlineClose
                onClick={toggleNav}
                size={25}
                className="text-white"
              />
            ) : (
              <AiOutlineMenuUnfold
                onClick={toggleNav}
                size={25}
                className="text-white"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${showNav ? "translate-x-0" : "translate-x-full"} w-3/4 z-20`}
        >
          <div className="flex flex-row justify-between p-4 bg-white shadow-md">
            <div className="flex items-center justify-center cursor-pointer">
              <button className="text-white hover:text-gray-600 bg-black px-3 py-1 rounded-lg flex items-centerr space-x-2">
                <span>Become a Member</span>
                <FaHandshake size={20} />
              </button>
            </div>
            <AiOutlineClose onClick={toggleNav} size={25} />
          </div>
          <nav className="flex flex-col p-4 text-lg font-medium text-center">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 py-2 "
              onClick={toggleNav}
            >
              Home
              <hr className="bg-gray-800" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 py-2"
              onClick={toggleNav}
            >
              About Us
              <hr className="bg-gray-800" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 py-2"
              onClick={toggleNav}
            >
              Membership
              <hr className="bg-gray-800" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 py-2"
              onClick={toggleNav}
            >
              Events
              <hr className="bg-gray-800" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 py-2"
              onClick={toggleNav}
            >
              Community
              <hr className="bg-gray-800" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 py-2"
              onClick={toggleNav}
            >
              News & Updates
              <hr className="bg-gray-800" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 py-2"
              onClick={toggleNav}
            >
              More
              <hr className="bg-gray-800" />
            </a>
          </nav>
        </div>

        {/* Overlay for mobile menu */}
        {showNav && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleNav}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Nav;
