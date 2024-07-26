import React from "react";
import MBanner from "../../components/Banner/MBanner";
import Purpose from "../../components/AboutUs/Purpose";
import Team from "../../components/AboutUs/Team";
import Project from "../../components/AboutUs/Project";
const AboutUs = ({ aboutBanner, project }) => {
  return (
    <div className="pt-24">
      <MBanner data={aboutBanner} />
      <Purpose />
      <Team />
      <Project data={project} />
    </div>
  );
};

export default AboutUs;
