import React from "react";
import fb from "./facebook.png";
import ig from "./instagram.png";
import ld from "./linkedin.png";
import yt from "./youtube.png";
import logo from "../../logob.jpeg";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-400" : "text-white";
  };

  return (
    <div className="w-full h-full pt-12 pb-12 px-4 md:px-32 bg-black flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-10 w-full max-w-6xl">
        <div className="flex flex-col items-start gap-5 w-full md:w-1/4">
          <img className="h-36" src={logo} alt="Logo" />
          <div className="text-white text-md font-medium">Contacts</div>
          <div className="text-gray-300 text-base font-normal opacity-60">
            Office:{" "}
            <a
              className="text-white  hover:text-blue-500 underline font-normal"
              href=""
            ></a>
          </div>
          <div className="text-gray-300 text-base font-normal opacity-60">
            Phone:{" "}
            <a
              className="text-white  hover:text-blue-500 underline font-normal"
              href="tel:"
            ></a>
          </div>
          <div className="text-gray-300 text-base font-normal opacity-60">
            Contact Us:{" "}
            <a
              className="text-white  hover:text-blue-500 underline font-normal"
              href="mailto:info@srba.co"
            >
              info@srba.co
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/4">
          <div className="text-white text-lg font-normal hover:text-gray-400">
            <a
              href="/membership"
              className={`${isActive("/membership")} hover:text-gray-400`}
            >
              Membership
            </a>
          </div>
          <div className="text-white text-lg font-normal hover:text-gray-400">
            <a
              href="/events"
              className={`${isActive("/events")} hover:text-gray-400`}
            >
              Events
            </a>
          </div>
          <div className="text-white text-lg font-normal hover:text-gray-400">
            <a
              href="/community"
              className={`${isActive("/community")} hover:text-gray-400`}
            >
              Community
            </a>
          </div>
          <div className="text-white text-lg font-normal hover:text-gray-400">
            <a
              href="/about"
              className={`${isActive("/about")} hover:text-gray-400`}
            >
              About Us
            </a>
          </div>
          <div className="text-white text-lg font-normal hover:text-gray-400">
            Privacy Policy
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/4">
          <div className="text-white text-lg font-medium hover:text-gray-400">
            <a
              href="/news"
              className={`${isActive("/news")} hover:text-gray-400`}
            >
              {" "}
              News & Updates
            </a>
          </div>
          <div className="text-white text-lg font-medium hover:text-gray-400">
            <a href="/" className={`${isActive("/")} hover:text-gray-400`}>
              Home
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/4">
          <div className="text-white text-lg font-medium">Connect with us</div>
          <div className="flex gap-7">
            <div className="relative w-12 h-12">
              <img src={fb} alt="Facebook" className="w-9 h-9" />
            </div>
            <div className="relative w-12 h-12">
              <img src={yt} alt="YouTube" className="w-9 h-9" />
            </div>
            <div className="relative w-12 h-12">
              <img src={ig} alt="Instagram" className="w-9 h-9" />
            </div>
            <div className="relative w-12 h-12">
              <img src={ld} alt="LinkedIn" className="w-9 h-9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
