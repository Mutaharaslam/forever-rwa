import React, { useEffect, useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link
import logo from "../../assets/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { ConnectButton, lightTheme } from "thirdweb/react";

import { client, chain, tokenContract, contractAddress } from "../../constants";
import { contract } from "../../constants";
import { useReadContract, useActiveAccount } from "thirdweb/react";
import { ethers } from "ethers";
import {
  prepareContractCall,
  sendAndConfirmTransaction,
} from "thirdweb";

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

  const account = useActiveAccount();

  const { data, isLoading } = useReadContract({
    contract,
    method: "function mintPrice() returns (uint256)",
    params: [],
  });

  const handleMint = async () => {
    if (account) {
      try {
        const amount = parseFloat(ethers.formatUnits(data || 0, 6)) * count;
        const tokenAmount = ethers.parseUnits(`${amount}`, 6);

        const transactionA = prepareContractCall({
          contract: tokenContract,
          method: "function approve(address spender, uint256 value)",
          params: [contractAddress, tokenAmount],
        });
        await sendAndConfirmTransaction({
          account,
          transaction: transactionA,
        });

        const transaction = prepareContractCall({
          contract,
          method: "function mintNFT(uint256 _mintAmount)",
          params: [ethers.parseUnits(`${count}`, 0)],
        });
        await sendAndConfirmTransaction({
          account,
          transaction,
        });
        window.alert("Successfully Minted");
      } catch (err: any) {
        window.alert(err.message);
      }
    }
  };
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1)); // prevent going below 1
  };

  const handleChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    setCount(value >= 1 ? value : 1); // make sure the count is at least 1
  };

  return (
    <header
      className={`${
        isScrolled
          ? "bg-white-base border shadow-xl border-secondary-50 !left-0 !right-0"
          : "bg-transparent"
      } ${isMobileMenuOpen ? "!px-0" : ""}
       bg-transparent text-white fixed top-0 xl:left-10 xl:right-10 md:left-4 md:right-4 left-0 right-0 z-50 transition-all md:px-0 px-2`}
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
            <div
              className={`flex items-center rounded-md px-3 mr-5 ${
                account && account?.address ? "bg-primary" : "transparent"
              }`}
            >
              <div
                className={`items-center justify-start gap-2 ${
                  account && account?.address ? "flex" : "hidden"
                }`}
              >
                <button
                  onClick={handleDecrement}
                  // disabled={account && account.address ? false : true}
                  className="text-xl font-semibold text-white p-2 py-[11px]"
                >
                  -
                </button>

                <input
                  type="number"
                  value={count}
                  onChange={handleChange}
                  min="1"
                  className="w-12 text-center border rounded-md text-black font-sans text-bold"
                />

                <button
                  onClick={handleIncrement}
                  // disabled={account && account.address ? false : true}
                  className="text-xl font-semibold text-white p-2"
                >
                  +
                </button>

                <div className="w-[2px] h-8 bg-white"></div>
              </div>

              <button
                onClick={() => handleMint()} // Pass the count to the mint function
                disabled={account && account.address ? false : true}
                className="rounded-md bg-primary-800 ml-3 disabled:bg-slate-300 disabled:text-slate-100 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {account && account.address
                  ? `Mint ${count} for ${
                      isLoading
                        ? 0
                        : count * parseFloat(ethers.formatUnits(data || 0, 6))
                    } USDT`
                  : " Mint"}
              </button>
            </div>

            <ConnectButton
              client={client}
              chain={chain}
              connectButton={{
                label: "Connect Wallet",
              }}
              theme={lightTheme({
                colors: {
                  primaryButtonBg: "var(--primary)",
                },
              })}
            />
            {/* <button
              onClick={handleConnectWallet}
              className={`${
                isScrolled
                  ? "py-1.5 text-sm font-medium"
                  : "py-2.5 text-base font-semibold"
              } xl:ml-6 ml-4 flex items-center cursor-pointer text-white scale-1 hover:text-primary
             transition-all group rounded-md bg-primary border border-primary px-3.5 
            shadow-sm hover:bg-transparent hover:border-primary`}
            >
              <IoWalletOutline className="text-2xl group-hover:scale-110" />
              <span className="ml-2 select-none">
                {isConnected ? "Mint" : "Connect Wallet"}
              </span>
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          {location.pathname === "/distribute" ? (
            //   <button
            //     onClick={handleConnectWallet}
            //     className={`${
            //       isScrolled
            //         ? "py-1.5 text-sm font-medium"
            //         : "py-2.5 text-base font-semibold"
            //     } xl:ml-6 ml-4 flex lg:hidden items-center cursor-pointer text-white scale-1 hover:text-primary
            //  transition-all group rounded-md bg-primary border border-primary px-3.5
            // shadow-sm hover:bg-transparent hover:border-primary`}
            //   >
            //     <IoWalletOutline className="text-2xl group-hover:scale-110" />
            //     <span className="ml-2 select-none">
            //       {isConnected ? "Mint" : "Connect Wallet"}
            //     </span>
            //   </button>
            // <ConnectButton
            //   client={client}
            //   chain={chain}
            //   connectButton={{
            //     label: "Connect Wallet",
            //   }}
            //   theme={lightTheme({
            //     colors: {
            //       primaryButtonBg: "var(--primary)",
            //     },
            //   })}
            // />
            <></>
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
          {/* <button
            onClick={handleConnectWallet}
            className="mt-3 w-full flex items-center justify-center cursor-pointer
           scale-1 hover:text-primary-700 transition-all group rounded-md bg-primary 
           border border-primary-700 px-3.5 py-2.5 text-sm font-semibold 
          text-white shadow-sm hover:bg-transparent"
          >
            <IoWalletOutline className="text-2xl group-hover:scale-110" />
            <span className="ml-2 text-base font-semibold select-none">
              {isConnected ? "Mint" : "Connect Wallet"}
            </span>
          </button> */}
          <div
            className={`flex items-center rounded-md ${
              account && account?.address
                ? "bg-primary px-3"
                : "transparent px-0"
            }`}
          >
            <div
              className={`items-center justify-start gap-2 ${
                account && account?.address ? "flex" : "hidden"
              }`}
            >
              <button
                onClick={handleDecrement}
                // disabled={account && account.address ? false : true}
                className="text-xl font-semibold text-white p-2 py-[11px]"
              >
                -
              </button>

              <input
                type="number"
                value={count}
                onChange={handleChange}
                min="1"
                className="w-12 text-center border rounded-md text-black font-sans text-bold"
              />

              <button
                onClick={handleIncrement}
                // disabled={account && account.address ? false : true}
                className="text-xl font-semibold text-white p-2"
              >
                +
              </button>

              <div className="w-[2px] h-8 bg-white"></div>
            </div>

            <button
              onClick={() => handleMint()} // Pass the count to the mint function
              disabled={account && account.address ? false : true}
              className="rounded-md bg-primary-800 md:ml-3 disabled:bg-slate-300 disabled:text-slate-100 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {account && account.address
                ? `Mint ${count} for ${
                    isLoading ? 0 : ethers.formatEther(data || 0)
                  } MATIC`
                : " Mint"}
            </button>
          </div>
          <ConnectButton
            client={client}
            chain={chain}
            connectButton={{
              label: "Connect Wallet",
            }}
            theme={lightTheme({
              colors: {
                primaryButtonBg: "var(--primary)",
              },
            })}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
