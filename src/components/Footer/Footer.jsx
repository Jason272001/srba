import React from "react";

import fb from "./facebook.png";
import ig from "./instagram.png";
import ld from "./linkedin.png";
import yt from "./youtube.png";
import logo from "../../logob.jpeg";

const Footer = () => {
  return (
    <div className="w-full h-full pt-12 pb-12 px-4 md:px-32 bg-black flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-10 w-full max-w-6xl ml-[-10px] md:ml-[-20px]">
        <div className="flex flex-col items-center gap-5 w-full md:w-1/4">
          <img className="h-36" src={logo} alt="Contact" />
          <div className="relative w-24 h-32">
            <div className="absolute top-0 left-0 text-white text-lg font-medium">
              Contacts
            </div>
            <div className="absolute top-12 left-0 text-gray-300 text-base font-normal opacity-60">
              Location
            </div>
            <div className="absolute top-20 left-0 text-gray-300 text-base font-normal opacity-60">
              Phone
            </div>
            <div className="absolute top-28 left-0 text-gray-300 text-base font-normal opacity-60">
              Email
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/4">
          <div className="text-white text-lg font-normal">Membership</div>
          <div className="text-white text-lg font-normal">Events</div>
          <div className="text-white text-lg font-normal">News</div>
          <div className="text-white text-lg font-normal">Privacy Policy</div>
          <div className="text-white text-lg font-normal">Help</div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/4">
          <div className="text-white text-lg font-medium">News & Updates</div>
          <div className="text-white text-lg font-medium">Donation</div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/4">
          <div className="text-white text-lg font-medium">Connect with us</div>
          <div className="flex gap-7">
            <div className="relative w-12 h-12">
              <img
                src={fb}
                alt=""
                style={{
                  width: "75%",
                  height: "75%",
                }}
              />
            </div>
            <div className="relative w-12 h-12">
              <img
                src={yt}
                alt=""
                style={{
                  width: "75%",
                  height: "75%",
                }}
              />
            </div>
            <div className="relative w-12 h-12 ">
              <img
                src={ig}
                alt=""
                style={{
                  width: "75%",
                  height: "75%",
                }}
              />
            </div>
            <div className="relative w-12 h-12 ">
              <img
                src={ld}
                alt=""
                style={{
                  width: "75%",
                  height: "75%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
