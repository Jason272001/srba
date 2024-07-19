import React from "react";
import Banner from "../../components/Banner/Banner";
import MAboutUs from "../../components/AboutUs/AboutUs";
import OurPartners from "../../components/OurPartners/OurPartners";
import OurProject from "../../components/OurProject/OurProject";
import UpcomingEvent from "../../components/UCE/UpcomingEvent";
import MembershipBenefits from "../../components/Membership/MembershipBenefits";
import OurHappyClients from "../../components/OurClient/OurClient";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = ({ banner, logoteam, project, membershipData, sponsorData }) => {
  return (
    <div className="pt-24">
      <Banner data={banner} />

      <section>
        <MAboutUs />
      </section>
      <section>
        <OurPartners data={logoteam} />
      </section>
      <section>
        <OurProject data={project} />
      </section>
      <section>
        <UpcomingEvent />
      </section>
      <section>
        <MembershipBenefits
          membershipData={membershipData}
          sponsorData={sponsorData}
        />
      </section>
      <section>
        <OurHappyClients />
      </section>
      <section>
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
