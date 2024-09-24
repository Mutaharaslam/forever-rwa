// src/pages/homepage.tsx

import React from "react";
import Banner from "../components/banner/banner";
import RoadMap from "../components/roadmap/roadmap";
import RewardCounter from "../components/reward-counter/reward-counter";
import Divider from "../components/divider/divider";

const Homepage: React.FC = () => {
  return (
    <div className="Homepage bg-secondary-light h-full flex flex-col">
      <Banner />
      <RewardCounter />
      <Divider  className="lg:my-16 my-8"/>
      <RoadMap />
      <Divider  className="lg:my-10 my-8"/>
    </div>
  );
};

export default Homepage;
