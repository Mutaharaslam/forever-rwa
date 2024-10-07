import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { contract } from "../../constants";
import { useReadContract, useActiveAccount } from "thirdweb/react";

const Footer: React.FC = () => {
  const account = useActiveAccount();

  const { data, isLoading } = useReadContract({
    contract,
    method: "function owner() returns (address)",
    params: [],
  });

  return (
    <footer className="bg-transparent text-white py-6 w-full ">
      <div className="flex items-start justify-center mb-4">
        <img src={logo} alt="logo" className="max-w-24 w-full" />
      </div>
      <div className="flex flex-col md:flex-row justify-between container items-center">
        <div className="mb-4 md:mb-0 text-primary md:text-left text-center">
          <h3 className="text-lg font-bold">Forever RWA</h3>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 text-primary">
          {!isLoading &&
            data &&
            account &&
            account?.address &&
            account?.address &&
            data.toLowerCase() === account?.address?.toLowerCase() && (
              <Link to="/distribute" className="hover:text-secondary-400">
                Distribute Rewards
              </Link>
            )}
          <Link to="/" className="hover:text-secondary-400">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-secondary-400">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-secondary-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
