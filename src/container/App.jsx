import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../components/Nav/Nav";
import Home from "../container/Home/Home";
import { client } from "../data/client";
import {
  bannerquery,
  logoteamquery,
  projectquery,
  membershipquery,
} from "../data/data";
import Footer from "../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [banner, setBanner] = useState([]);
  const [logoteam, setLogoteam] = useState([]);
  const [project, setProject] = useState([]);
  const [membershipData, setMembershipData] = useState([]);
  const [sponsorData, setSponsorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerData = await bannerquery();
        client.fetch(bannerData).then((data) => {
          setBanner(data);
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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
