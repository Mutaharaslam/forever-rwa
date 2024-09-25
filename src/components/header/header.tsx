import React, { useEffect, useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link
import logo from "../../assets/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll event to change background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
        setIsMobileMenuOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { name: "Roadmap", href: "#roadmap" },
    { name: "Rewards", href: "#rewards" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
      }
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`${
        isScrolled
          ? "bg-white-base border shadow-xl border-secondary-50"
          : "bg-transparent"
      } ${isMobileMenuOpen ? "!px-0" : ""}
       bg-transparent text-white fixed top-0 left-0 w-full z-50 transition-all md:px-0 px-2`}
    >
      <nav
        className={`${
          isScrolled
            ? "bg-white-base mt-0 !py-2 border-0 shadow-none border-none px-2"
            : "bg-transparent mt-8 shadow-xl"
        } ${
          isMobileMenuOpen ? "!shadow-none border-transparent" : ""
        } relative mx-auto flex transition-all  
        py-4 md:px-6 px-4 items-center justify-between rounded-xl container
           border border-secondary-50`}
        aria-label="Global"
      >
        <div className="flex items-center justify-between flex-1">
          <Link
            to="/"
            className="flex items-center justify-start md:basis-1/4 basis-2/4 gap-2 md:min-w-52 min-w-fit"
          >
            <img
              src={logo}
              alt="Logo"
              className={`${isScrolled ? "w-12" : "w-16"} mr-2 transition-all`}
            />
            <h1 className="text-primary-800 font-medium text-xl font-sans tracking-wider">
              Forever
            </h1>
          </Link>

          <div className="hidden lg:flex items-center justify-end md:basis-3/4 basis-2/4">
            {location.pathname !== "/distribute" && (
              <>
                {navigation.map(({ name, href }, index) => (
                  <span
                    key={index}
                    onClick={() => handleNavigation(href)}
                    className={`${
                      isScrolled ? "text-sm" : "text-base"
                    } relative text-primary hover:text-primary-600 text-base xl:mx-6 
                          lg:mx-4 mx-4 font-medium cursor-pointer after:content-[''] after:absolute after:left-1/2 after:right-1/2
                           after:mx-auto after:-bottom-[2px] after:w-0 after:h-[2px] 
                          after:bg-primary-600 after:transition-all after:duration-500 hover:after:w-full hover:after:right-0 
                          hover:after:left-0 hover:after:mx-[0px] after:rounded-xl`}
                  >
                    {name}
                  </span>
                ))}
              </>
            )}

            <button
              className={`${
                isScrolled
                  ? "py-1.5 text-sm font-medium"
                  : "py-2.5 text-base font-semibold"
              } xl:ml-6 ml-4 flex items-center cursor-pointer text-white scale-1 hover:text-primary
             transition-all group rounded-md bg-primary border border-primary px-3.5 
            shadow-sm hover:bg-transparent hover:border-primary`}
            >
              <IoWalletOutline className="text-2xl group-hover:scale-110" />
              <span className="ml-2 select-none">Connect Wallet</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          {location.pathname === "/distribute" ? (
            <button
              className={`${
                isScrolled
                  ? "py-1.5 text-sm font-medium"
                  : "py-2.5 text-base font-semibold"
              } xl:ml-6 ml-4 flex lg:hidden items-center cursor-pointer text-white scale-1 hover:text-primary
           transition-all group rounded-md bg-primary border border-primary px-3.5 
          shadow-sm hover:bg-transparent hover:border-primary`}
            >
              <IoWalletOutline className="text-2xl group-hover:scale-110" />
              <span className="ml-2 select-none">Connect</span>
            </button>
          ) : (
            <button
              className="lg:hidden text-primary focus:outline-none text-4xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <IoClose /> : <IoMdMenu />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`${
            isScrolled ? "px-4" : "px-8"
          } lg:hidden flex flex-col items-start bg-white-base shadow-xl space-y-4 rounded-xl pb-7`}
        >
          {navigation.map(({ name, href }, index) => (
            <span
              key={index}
              onClick={() => handleNavigation(href)}
              className={`text-primary hover:text-primary-700 text-base font-medium cursor-pointer`}
            >
              {name}
            </span>
          ))}
          <button
            className="mt-3 w-full flex items-center justify-center cursor-pointer
           scale-1 hover:text-primary-700 transition-all group rounded-md bg-primary 
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
