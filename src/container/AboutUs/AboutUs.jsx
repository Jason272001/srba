import React from "react";
import MBanner from "../../components/Banner/MBanner";
import Purpose from "../../components/AboutUs/Purpose";
import Team from "../../components/AboutUs/Team";
const AboutUs = ({ aboutBanner }) => {
  return (
    <div className="pt-24">
      <MBanner data={aboutBanner} />
      <Purpose />
      <Team />
    </div>
  );
};

export default AboutUs;
