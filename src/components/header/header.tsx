import React, { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Roadmap", href: "#roadmap", external: false },
    { name: "Rewards", href: "/", external: false },
    { name: "Contact", href: "/contact", external: false },
  ];

  return (
    <header className="bg-secondary-light text-white container mx-auto mt-12 rounded-xl shadow-md relative z-50">
      <nav
        className="relative mx-auto flex py-4 px-6 items-center justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between flex-1">
          <a
            href="/"
            className="flex items-center justify-start md:basis-1/4 basis-2/4 gap-2 md:min-w-52 min-w-fit"
          >
            <div>
              <img src={logo} alt="Logo" className="w-16 mr-2" />
            </div>
            <h1 className="text-primary font-medium text-xl">Forever RWA</h1>
          </a>

          <div className="hidden lg:flex items-center justify-end md:basis-3/4 basis-2/4">
            {navigation.map(({ name, href }, key) => (
              <React.Fragment key={`${key}-frag`}>
                <a
                  href={href}
                  className="text-primary hover:text-primary-light text-base xl:mx-6 lg:mx-4 mx-4 font-medium"
                >
                  {name}
                </a>
              </React.Fragment>
            ))}
            <button
              className="ml-3 flex items-center cursor-pointer text-primary scale-1 hover:text-primary
             transition-all group rounded-md bg-primary border border-primary px-3.5 py-2.5 text-sm font-semibold
              text-white shadow-sm hover:bg-transparent"
            >
              <IoWalletOutline className="text-2xl group-hover:scale-110" />
              <span className="ml-2 text-base font-semibold select-none">
                Connect Wallet
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary focus:outline-none text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMdMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-start bg-[#f3f2dc] rounded-xl px-8 pb-7">
          {navigation.map(({ name, href }, key) => (
            <a
              key={`${key}-mobile`}
              href={href}
              className="text-black hover:text-primary font-medium text-base my-3"
            >
              {name}
            </a>
          ))}
          <button
            className=" mt-3 w-full flex items-center justify-center cursor-pointer text-primary scale-1 hover:text-primary
             transition-all group rounded-md bg-primary border border-primary px-3.5 py-2.5 text-sm font-semibold
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
