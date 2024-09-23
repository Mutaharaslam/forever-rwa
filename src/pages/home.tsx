// src/pages/homepage.tsx

import React from 'react';
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import RoadMap from '../components/roadmap/roadmap';
import RewardCounter from '../components/reward-counter/reward-counter';

const Homepage: React.FC = () => {
  return (
    <div className="Homepage bg-secondary h-full flex flex-col md:px-10 px-6">
      <Header />
      <Banner />
      <RoadMap />
      <RewardCounter />
    </div>
  );
};

export default Homepage;
