import React, { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link
import logo from "../../assets/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Roadmap", href: "#roadmap" },
    { name: "Rewards", href: "#rewards" },
    { name: "Contact", href: "/contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // If on a different page (like /contact), navigate back to the homepage
      if (location.pathname !== "/") {
        navigate("/");
      }
      // Scroll to the section
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For regular page navigation like '/contact'
      navigate(href);
    }
  };
  return (
    <header className="bg-primary text-white container mx-auto mt-12 rounded-xl shadow-md relative z-50">
      <nav
        className="relative mx-auto flex py-4 px-6 items-center justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between flex-1">
          <Link
            to="/"
            className="flex items-center justify-start md:basis-1/4 basis-2/4 gap-2 md:min-w-52 min-w-fit"
          >
            <img src={logo} alt="Logo" className="w-16 mr-2" />
            <h1 className="text-white font-medium text-xl font-serif">
              Forever RWA
            </h1>
          </Link>

          <div className="hidden lg:flex items-center justify-end md:basis-3/4 basis-2/4">
            {navigation.map(({ name, href }, index) => (
              <span
                key={index}
                onClick={() => handleNavigation(href)}
                className="text-white hover:text-primary-100 text-base xl:mx-6 lg:mx-4 mx-4 font-medium cursor-pointer"
              >
                {name}
              </span>
            ))}
            <button
              className="ml-3 flex items-center cursor-pointer text-white scale-1 hover:text-white
             transition-all group rounded-md bg-primary-700 border border-primary px-3.5 py-2.5 text-sm font-semibold 
            shadow-sm hover:bg-transparent hover:border-white"
            >
              <IoWalletOutline className="text-2xl group-hover:scale-110" />
              <span className="ml-2 text-base font-semibold select-none">
                Connect Wallet
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none text-4xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMdMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-start bg-primary rounded-xl px-8 pb-7">
          {navigation.map(({ name, href }, index) => (
            <span
              key={index}
              onClick={() => handleNavigation(href)}
              className="text-white hover:text-primary-100 text-base xl:mx-6 lg:mx-4 mx-4 font-medium cursor-pointer"
            >
              {name}
            </span>
          ))}
          <button
            className="mt-3 w-full flex items-center justify-center cursor-pointer
           scale-1 hover:text-primary-700 transition-all group rounded-md bg-primary-700 
           border border-primary-700 px-3.5 py-2.5 text-sm font-semibold 
          text-white shadow-sm hover:bg-transparent"
          >
            <IoWalletOutline className="text-2xl group-hover:scale-110" />
            <span className="ml-2 text-base font-semibold select-none">
              Connect Wallet
            </span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
