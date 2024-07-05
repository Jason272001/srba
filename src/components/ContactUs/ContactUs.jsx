import React from "react";
import bgImage from "./cu.jpg"; // Ensure the correct path to your image file

const ContactForm = () => {
  return (
    <div
      className="w-full h-full pt-28 pb-44 px-6 sm:px-12 md:px-20 lg:px-32 bg-opacity-40 flex flex-col items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 flex flex-col gap-7 text-white">
          <div className="text-3xl md:text-4xl font-semibold">Get In touch</div>
          <div className="text-lg md:text-xl text-white text-opacity-80">
            Have questions about our events or want to collaborate? Feel free to
            reach out to us using the contact form below or connect with us
            through our social media channels. We'd love to hear from you!
            <br />
            Contact Form:
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-white border border-gray-300 flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 text-lg md:text-xl font-normal">
              First Name
            </label>
            <input
              type="text"
              className="p-4 border border-gray-300"
              placeholder="Your first name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 text-lg md:text-xl font-normal">
              Last Name
            </label>
            <input
              type="text"
              className="p-4 border border-gray-300"
              placeholder="Your last name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 text-lg md:text-xl font-normal">
              Email
            </label>
            <input
              type="email"
              className="p-4 border border-gray-300"
              placeholder="Your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900 text-lg md:text-xl font-normal">
              Message
            </label>
            <textarea
              className="p-4 border border-gray-300"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-8 py-4 bg-gray-800 text-white text-lg md:text-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
