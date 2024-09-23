import React, { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";

const RoadMap: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  return (
    <section id="roadmap" className="bg-[#f3f2dc] text-white container mx-auto mt-12 rounded-lg shadow-md relative z-50">
      <h1>Road Map</h1>
    </section>
  );
};

export default RoadMap;
