import React from "react";
import Banner from "../../components/Banner/Banner";

const Home = (props) => {
  return (
    <div className="pt-24">
      <Banner data={props.banner} />
    </div>
  );
};

export default Home;
