import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../components/Nav/Nav";
import Home from "../container/Home/Home";
import { client } from "../data/client";
import { bannerquery } from "../data/data";
import Footer from "../components/Footer/Footer";
const App = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerData = await bannerquery();
        client.fetch(bannerData).then((data) => {
          setBanner(data);
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
      <Home banner={banner} />
      <Footer />
    </div>
  );
};

export default App;
