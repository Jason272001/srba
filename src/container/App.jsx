import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../components/Nav/Nav";
import Home from "../container/Home/Home";
import Email from "../components/Email/Email";
import { client } from "../data/client";
import {
  bannerquery,
  logoteamquery,
  projectquery,
  membershipquery,
} from "../data/data";
import Footer from "../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Event from "./Event/Event";

const App = () => {
  const [banner, setBanner] = useState([]);
  const [aboutBanner, setaboutBanner] = useState([]);
  const [memberBanner, setmemberBanner] = useState([]);
  const [eventBanner, seteventBanner] = useState([]);
  const [communityBanner, setcommunityBanner] = useState([]);
  const [newsBanner, setnewsBanner] = useState([]);

  const [logoteam, setLogoteam] = useState([]);
  const [project, setProject] = useState([]);
  const [membershipData, setMembershipData] = useState([]);
  const [sponsorData, setSponsorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerData = await bannerquery();
        client.fetch(bannerData).then((data) => {
          setBanner(
            data.filter(
              (item) => item.category === "Home" || item.category === "All"
            )
          );

          setaboutBanner(
            data.filter(
              (item) => item.category === "About" || item.category === "All"
            )
          );

          setmemberBanner(
            data.filter(
              (item) => item.category === "Member" || item.category === "All"
            )
          );
          seteventBanner(
            data.filter(
              (item) => item.category === "Event" || item.category === "All"
            )
          );
          setcommunityBanner(
            data.filter(
              (item) => item.category === "Community" || item.category === "All"
            )
          );
          setnewsBanner(
            data.filter(
              (item) => item.category === "News" || item.category === "All"
            )
          );
        });

        const logoteamData = await logoteamquery();
        client.fetch(logoteamData).then((data) => {
          setLogoteam(data);
        });

        const projectData = await projectquery();
        client.fetch(projectData).then((data) => {
          setProject(data);
        });

        const membershipData = await membershipquery();
        client.fetch(membershipData).then((data) => {
          setMembershipData(
            data.filter((item) => item.type === "Membership and Packages")
          );
          setSponsorData(
            data.filter((item) => item.type === "Sponsor Packages")
          );
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              banner={banner}
              logoteam={logoteam}
              project={project}
              membershipData={membershipData}
              sponsorData={sponsorData}
            />
          }
        />
        <Route
          path="team-2024-user-srbaemail-subscription"
          element={<Email />}
        />

        <Route
          path="about"
          element={<AboutUs aboutBanner={aboutBanner} project={project} />}
        />

        <Route path="events" element={<Event eventBanner={eventBanner} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
