import React from "react";

const Team = () => {
  const teamMembers = [
    {
      title: "Mr.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      imgSrc: "https://via.placeholder.com/250x250",
    },
    {
      title: "Ms.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      imgSrc: "https://via.placeholder.com/250x250",
    },
    {
      title: "Ms.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      imgSrc: "https://via.placeholder.com/250x250",
    },
    {
      title: "Mr.",
      description:
        "To drive economic vitality and district safety, cleanliness, and beautification in the Story Rd. geographical area in the City of San Jose, CA.",
      imgSrc: "https://via.placeholder.com/250x250",
    },
  ];

  return (
    <div className="w-full h-full pt-16 pb-24 px-8 md:px-32 bg-[#050614] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="text-center text-white text-3xl md:text-5xl font-semibold leading-tight">
          S.R.B.A Board Member
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 w-full h-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col justify-center items-center gap-5 p-5 w-full sm:w-[calc(30.33%-1rem)] md:w-[calc(30.33%-1rem)] lg:w-[calc(30.33%-1rem)] transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col justify-start items-start gap-1 w-full h-[172px]">
                <div className="text-[rgba(255,255,255,0.55)] text-4xl font-bold group-hover:text-white transition-colors">
                  {member.title}
                </div>
                <div className="text-[rgba(218,210,210,0.80)] text-lg font-normal group-hover:text-white transition-colors">
                  {member.description}
                </div>
              </div>
              <img
                src={member.imgSrc}
                alt={`story ${index + 1}`}
                className="w-[250px] h-[250px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
