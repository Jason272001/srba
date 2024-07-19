import React from "react";
import MBanner from "../../components/Banner/MBanner";

const Event = ({ eventBanner }) => {
  const events = [
    {
      image: "https://via.placeholder.com/400x300",
      title: "Cleaning Event",
      date: "JULY 26 - 27 | SEPT 6 - 7 | OCT 11 - 12",
      location: "Grand Century Mall",
      description:
        "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate...",
      isFree: true,
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Night Market",
      date: "JULY 26 - 27 | SEPT 6 - 7 | OCT 11 - 12",
      location: "Grand Century Mall",
      description:
        "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate...",
      isFree: false,
      price: "40$ - 100$",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Meeting Room Event",
      date: "JULY 26 - 27 | SEPT 6 - 7 | OCT 11 - 12",
      location: "Grand Century Mall",
      description:
        "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate...",
      isFree: true,
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "Community Event",
      date: "JULY 26 - 27 | SEPT 6 - 7 | OCT 11 - 12",
      location: "Grand Century Mall",
      description:
        "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate...",
      isFree: true,
    },
  ];

  return (
    <div>
      <MBanner data={eventBanner} />
      <div className="w-full bg-gray-00 py-10">
        <div className="max-w-7xl mx-auto  py-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Our Events
          </h2>
          <div className="space-y-10">
            {events.map((event, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg hover:shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } transform transition-transform hover:scale-105`}
                style={{
                  minHeight: "200px",
                  maxWidth: "750px",
                  margin: "0 auto",
                  marginBottom: "20px",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 -10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="relative md:w-1/3">
                  <img
                    className="w-full h-48 object-cover md:h-full"
                    src={event.image}
                    alt={event.title}
                  />
                  <div className="absolute top-2 left-2 bg-rose-500 text-white text-sm font-semibold px-2 py-1 rounded">
                    {event.isFree ? "Free" : event.price}
                  </div>
                </div>
                <div className="p-4 md:w-2/3">
                  <div className="text-sm text-gray-500">{event.date}</div>
                  <div className="text-sm text-gray-500 mb-2">
                    {event.location}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="bg-black text-white px-4 py-2 rounded-lg">
                      {event.isFree
                        ? "Register Now"
                        : `Buy Tickets (${event.price})`}
                    </button>
                    <button className="text-gray-500 underline">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            <button className="px-4 py-2 bg-white border border-gray-300 text-black rounded">
              1
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-black rounded">
              2
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-black rounded">
              3
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-black rounded">
              ...
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-black rounded">
              10
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
