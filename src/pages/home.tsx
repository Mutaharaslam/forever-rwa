// src/pages/homepage.tsx

import React from "react";
import Banner from "../components/banner/banner";
import RoadMap from "../components/roadmap/roadmap";
import RewardCounter from "../components/reward-counter/reward-counter";
import Divider from "../components/divider/divider";
import RewardsInfo from "../components/reward-info/reward-info";

const Homepage: React.FC = () => {
  return (
    <div className="bg-secondary-light h-full flex flex-col">
      <Banner />
      <RewardCounter />
      <RewardsInfo />
      <RoadMap />
      <Divider  className="lg:my-16 my-8"/>
    </div>
  );
};

export default Homepage;
