import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logob from "../../logob.jpeg";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import alogo from "../../logoA.mp4";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-400" : "text-white";
  };

  const isActiveMobile = (path) => {
    return location.pathname === path ? "text-blue-800" : "text-black";
  };

  return (
    <div className="fixed w-full z-30 pt-0">
      <div className="flex flex-col bg-black shadow-md">
        <div className="flex flex-row justify-between  md:px-32 px-5 bg-black shadow-[0_3px_105px_rgba(0,0,0,0.3)]">
          <div className="flex flex-row items-center cursor-pointer px-0">
            <video
              className="h-24 w-32"
              loop
              muted
              autoPlay
              preload="auto"
              playsInline
            >
              <source src={alogo} type="video/mp4" />
            </video>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8 px-5">
            <a href="/" className={`${isActive("/")} hover:text-gray-400`}>
              Home
            </a>
            <a
              href="/about"
              className={`${isActive("/about")} hover:text-gray-400`}
            >
              About Us
            </a>
            <a
              href="/membership"
              className={`${isActive("/membership")} hover:text-gray-400`}
            >
              Membership
            </a>
            <a
              href="/events"
              className={`${isActive("/events")} hover:text-gray-400`}
            >
              Events
            </a>
            <a
              href="/community"
              className={`${isActive("/community")} hover:text-gray-400`}
            >
              Community
            </a>
            <a
              href="/news"
              className={`${isActive("/news")} hover:text-gray-400`}
            >
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
              href="/"
              className={`${isActiveMobile("/")} hover:text-gray-800 py-2`}
              onClick={toggleNav}
            >
              Home
              <hr className="bg-gray-800" />
            </a>
            <a
              href="/about"
              className={`${isActiveMobile("/about")} hover:text-gray-800 py-2`}
              onClick={toggleNav}
            >
              About Us
              <hr className="bg-gray-800" />
            </a>
            <a
              href="/membership"
              className={`${isActiveMobile("/membership")} hover:text-gray-800 py-2`}
              onClick={toggleNav}
            >
              Membership
              <hr className="bg-gray-800" />
            </a>
            <a
              href="/events"
              className={`${isActiveMobile("/events")} hover:text-gray-800 py-2`}
              onClick={toggleNav}
            >
              Events
              <hr className="bg-gray-800" />
            </a>
            <a
              href="/community"
              className={`${isActiveMobile("/community")} hover:text-gray-800 py-2`}
              onClick={toggleNav}
            >
              Community
              <hr className="bg-gray-800" />
            </a>
            <a
              href="/news"
              className={`${isActiveMobile("/news")} hover:text-gray-800 py-2`}
              onClick={toggleNav}
            >
              News & Updates
              <hr className="bg-gray-800" />
            </a>
            <a
              href="/more"
              className={`${isActiveMobile("/more")} hover:text-gray-800 py-2`}
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
