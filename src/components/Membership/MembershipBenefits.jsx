import React from "react";

const MembershipBenefits = ({ membershipData = [], sponsorData = [] }) => {
  console.log("Membership Data:", membershipData); // Debugging line
  console.log("Sponsor Data:", sponsorData); // Debugging line

  const renderPackages = (packages) =>
    packages.map((pkg, index) => (
      <div
        key={index}
        className="w-full md:w-[377.60px] h-auto p-8 bg-white border border-[#D9D9D9] flex flex-col justify-start items-start gap-6"
      >
        <div className="w-full flex flex-col justify-end items-start gap-2">
          <div className="w-full text-[#1E1E1E] text-2xl font-semibold break-words font-inter">
            {pkg.name}
          </div>
          <div className="w-full flex justify-start items-baseline gap-2">
            <div className="text-[#1E1E1E] text-5xl font-bold break-words font-inter">
              $
            </div>
            <div className="text-[#1E1E1E] text-5xl font-bold break-words font-inter">
              {pkg.price}
            </div>
            <div className="text-[#1E1E1E] text-sm font-normal break-words font-inter">
              / month
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-3.5">
            {pkg.benefits.map((benefit, i) => (
              <div
                key={i}
                className="text-[#757575] text-lg font-normal break-words font-inter"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[301px] h-[60px] px-4 py-4 border border-black bg-black flex justify-center items-center gap-2 hover:bg-gray-800 transition-all duration-300">
          <div className="text-[#ffffff] text-lg font-semibold font-poppins leading-[28.80px] break-words">
            Select
          </div>
        </div>
      </div>
    ));

  return (
    <div className="w-full h-full py-12 flex flex-col justify-center items-center gap-14 bg-black px-6 md:px-12 lg:px-24">
      <div className="w-full text-center text-[#FFFCFC] text-4xl md:text-5xl font-semibold break-words font-poppins">
        Membership and Packages
      </div>
      <div className="w-full text-center text-[#FFFFFFB3] text-lg md:text-2xl font-semibold leading-[46.08px] break-words font-open-sans">
        Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
        Suspendisse lobortis vitae quis vehicula pellentesque sit id
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
        {renderPackages(membershipData)}
      </div>
      <div className="w-full text-center text-[#FFFCFC] text-4xl md:text-5xl font-semibold break-words font-poppins mt-16">
        Sponsor Packages
      </div>
      <div className="w-full text-center text-[#FFFFFFB3] text-lg md:text-2xl font-semibold leading-[46.08px] break-words font-open-sans">
        Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
        Suspendisse lobortis vitae quis vehicula pellentesque sit id
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
        {renderPackages(sponsorData)}
      </div>
    </div>
  );
};

export default MembershipBenefits;
