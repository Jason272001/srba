import React from "react";
import Banner from "../../components/Banner/Banner";
import OurStory from "../../components/OurStory/OurStory";
import OurPartners from "../../components/OurPartners/OurPartners";
import OurCommunity from "../../components/OurCommunity/OurCommunity";
import UpcomingEvent from "../../components/UCE/UpcomingEvent";
import MembershipBenefits from "../../components/Membership/MembershipBenefits";
import OurHappyClients from "../../components/OurClient/OurClient";

import ContactUs from "../../components/ContactUs/ContactUs";

const Home = (props) => {
  return (
    <div className="pt-24">
      <Banner data={props.banner} />
      <session>
        <OurStory />
      </session>
      <session>
        <OurPartners />
      </session>

      <session>
        <OurCommunity />
      </session>

      <session>
        <UpcomingEvent />
      </session>

      <session>
        <MembershipBenefits />
      </session>

      <session>
        <OurHappyClients />
      </session>

      <session>
        <ContactUs />
      </session>
    </div>
  );
};

export default Home;
