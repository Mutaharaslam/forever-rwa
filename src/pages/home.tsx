// src/pages/homepage.tsx

import React from 'react';
import Header from '../components/header/header';
import Banner from '../components/banner/banner';

const Homepage: React.FC = () => {
  return (
    <div className="Homepage bg-secondary h-screen flex flex-col">
      <Header />
      <Banner />
    </div>
  );
};

export default Homepage;
