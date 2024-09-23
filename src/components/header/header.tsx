import React from "react";
import { IoWalletOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  const navigation = [
    { name: "Drops", href: "/", external: false },
    { name: "Marketplace", href: "/", external: false },
    { name: "Activity", href: "/", external: false },
    { name: "Discover", href: "/", external: false },
    { name: "FAQs", href: "/", external: false },
    { name: "Creators", href: "/", external: false },
  ];
  return (
    <header className="bg-[#f3f2dc] text-white  container mx-auto mt-12 rounded-lg shadow-md relative z-50">
      <nav
        className="relative mx-auto flex py-5 px-6 items-center justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center justify-between lg:w-auto w-1/4">
            <a href="/">
              <img src={logo} alt="Logo" className="w-12 mr-2" />
            </a>
          </div>
          <div className="hidden lg:flex items-center justify-end w-2/3">
            {navigation.map(({ name, href, external }, key) => (
              <React.Fragment key={`${key}-frag`}>
                <a
                  href={href}
                  className={`text-black hover:text-primary text-base xl:mx-6 lg:mx-4 mx-4 font-medium`}
                >
                  {name}
                </a>
              </React.Fragment>
            ))}

            <div className="ml-3 flex items-center cursor-pointer text-info scale-1 hover:text-primary transition-all group">
              <IoWalletOutline className="text-2xl group-hover:scale-110" />
              <span className="ml-2 text-base font-semibold select-none">
                Connect Wallet to Mint
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
