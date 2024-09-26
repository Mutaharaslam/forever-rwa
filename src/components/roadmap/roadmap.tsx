/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Image2 from "../../assets/images/img2.jpg";
import Image3 from "../../assets/images/img3.jpg";
import Image5 from "../../assets/images/img5.jpg";
import OnScrollViewHorizontal from "../atoms/onScrollviewHosrizontal";
import OnScrollView from "../atoms/onScrollview";
import { useInView } from "react-intersection-observer"; // Make sure to install this package

const RoadMap: React.FC = () => {
  const [progress, setProgress] = useState(0); // Start at 0
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.2, // 50% of the element must be in view
  });

  useEffect(() => {
    if (inView) {
      const targetProgress = 79; // Target progress value
      const baseDurationPerPercent = 50; // 30 milliseconds per percentage
      const duration = targetProgress * baseDurationPerPercent; // Total duration in ms
      const stepTime = 5; // Update interval (smoothness of the progress)
      const increment = targetProgress / (duration / stepTime);

      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + increment;
          if (newProgress >= targetProgress) {
            clearInterval(progressInterval);
            return targetProgress; 
          }
          return newProgress;
        });
      }, stepTime);

      return () => clearInterval(progressInterval);
    }
  }, [inView]);
// Progress Stepps 
  const defaultStops = [
    { percent: 0.1, nfts: 0, placement: "right" },
    { percent: 33, nfts: 6000, placement: "left" },
    { percent: 66, nfts: 20000, placement: "right" },
    { percent: 100, nfts: 40000, placement: "left" },
  ];

  const mobileStops = [
    { percent: 0.1, nfts: 0, placement: "right" },
    { percent: 30, nfts: 6000, placement: "left" },
    { percent: 63, nfts: 20000, placement: "right" },
    { percent: 100, nfts: 40000, placement: "left" },
  ];

  const [stops, setStops] = useState(defaultStops);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStops(mobileStops);
      } else {
        setStops(defaultStops);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="roadmap" className="container lg:py-32 py-24">
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold tracking-tight text-primary-dark lg:mb-32 mb-20">
        Road Map
      </h1>
      <div className="relative w-full flex flex-col items-center justify-center">
        {/* Progress Bar */}
        <div
          ref={ref}
          className="absolute lg:left-1/2 md:left-4 left-2 transform -translate-x-1/2 md:w-4 w-3 rounded-md border-[2px] border-gray-200 lg:p-[1px] p-[1px] bg-gray-100 h-full"
        >
          <div className="absolute left-1/2 md:-translate-x-1/2 -translate-x-1 right-0 md:-top-[45px] -top-[40px] h-auto min-w-16 rounded-md text-primary font-sans font-bold md:text-sm text-xs">
            NFT Sale
          </div>
          <div
            className={`inset-0 progressbarBG opacity-100 w-full rounded-md`}
            style={{
              height: `${progress}%`,
            }}
          ></div>
          <div
            className="absolute md:w-10 md:h-10 h-7 w-7 rounded-full bg-primary-700 text-white text-center
             flex items-center justify-center font-medium leading-tight font-sans md:text-[9px] text-[7px]
              left-1/2 transform -translate-x-1/2 md:-translate-y-[28px] -translate-y-[24px]"
            style={{ top: `${progress}%` }} // Position bassed on progressss
          >
            We're Here
          </div>
          {/* Progress Stops at specific percentaes */}
          {stops.map((stop) => (
            <div
              key={stop.percent}
              className={`absolute bg-transparent text-primary rounded-full
             flex items-center justify-center font-medium font-sans -translate-y-1/2
             ${
               stop.placement === "right"
                 ? "md:left-[18px] left-[12px]"
                 : "auto"
             } 
             ${
               stop.placement === "left"
                 ? "lg:right-[18px] right-auto lg:left-auto left-[12px]"
                 : "auto"
             }
             `}
              style={{
                top: `${stop.percent}%`,
              }}
            >
              {stop.placement === "right" ? (
                <div className="flex justify-start items-center gap-1.5 font-bold">
                  <div className="md:w-12 w-5 h-[2px] bg-primary"></div>
                  <span className="md:text-base sm:text-sm text-xs">
                    {stop.nfts}
                  </span>
                </div>
              ) : (
                <div className="flex justify-start items-center gap-1.5 font-bold">
                  <div className="md:w-12 w-5 h-[2px] bg-primary lg:hidden block"></div>
                  <span className="md:text-base sm:text-sm text-xs">
                    {stop.nfts}
                  </span>
                  <div className="md:w-12 w-5 h-[2px] bg-primary lg:block hidden"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Roadmap Section 1 */}
        <div className="flex lg:items-center items-end lg:flex-row flex-col-reverse w-full xl:py-32 lg:py-24 py-20 xl:gap-72 lg:gap-56">
          <OnScrollView className="lg:w-1/2 w-[90%] flex justify-end">
            <img src={Image5} alt="img1" className="object-cover rounded-lg" />
          </OnScrollView>
          <OnScrollViewHorizontal className="lg:w-1/2 w-[90%] lg:mb-0 mb-4">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary-dark flex justify-start items-center gap-4 font-bold m-0 mb-2 relative">
              {/* <BiSolidLeftArrow className=" absolute lg:-left-12 md:-left-8 -left-5" /> */}
              Phase One
            </h3>
            <p className="xl:text-base text-sm font-light xl:pr-16 lg:pr-6 text-justify">
              During this phase we guarantee a minimum of 10% rewards
              distributed on a quarterly basis.
            </p>
          </OnScrollViewHorizontal>
        </div>

        {/* Roadmap Section 2 */}
        <div className="flex lg:items-center items-end lg:flex-row flex-col xl:py-32 lg:py-24 py-20 xl:gap-72 lg:gap-56">
          <OnScrollViewHorizontal
            fromLeft
            className="lg:w-1/2 w-[90%] lg:text-right text-left flex flex-col lg:items-end items-start lg:mb-0 mb-4"
          >
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary-dark flex lg:justify-end items-center gap-4 font-bold m-0 mb-2 relative">
              {/* <BiSolidRightArrow className="absolute -right-12 lg:block hidden" />
              <BiSolidLeftArrow className=" absolute lg:-left-12 md:-left-8 -left-5 lg:hidden block" /> */}
              Phase Two
            </h3>
            <p className="xl:text-base text-sm font-light xl:pl-16 lg:pl-6 text-justify">
              During this phase we will create Sustainable Developments from the
              ground up in secure highly profitable markets such as the UAE.
              During this phase reward payouts will produce up to 100% returns.
            </p>
          </OnScrollViewHorizontal>
          <OnScrollView className="lg:w-1/2 w-[90%] flex justify-start">
            <img src={Image2} alt="img2" className="object-cover" />
          </OnScrollView>
        </div>

        {/* Roadmap Section 3 */}
        <div className="flex lg:items-center items-end lg:flex-row flex-col-reverse w-full xl:py-32 lg:py-24 py-20 xl:gap-72 lg:gap-56">
          <OnScrollView className="lg:w-1/2 w-[90%] flex justify-end">
            <img src={Image3} alt="img3" className="object-cover" />
          </OnScrollView>
          <OnScrollViewHorizontal className="lg:w-1/2 w-[90%] lg:mb-0 mb-4">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary-dark flex justify-start items-center gap-4 font-bold m-0 mb-2 relative">
              {/* <BiSolidLeftArrow className=" absolute lg:-left-12 md:-left-8 -left-5" /> */}
              Phase Three
            </h3>
            <p className="xl:text-base text-sm font-light xl:pr-16 lg:pr-6 text-justify">
              Our final and most important phase where we will focus on creating
              developments that will merge between luxury real estate and
              providing infrastructure such as energy, shelter and water where
              they are most needed ! Guaranteeing maximum return for our NFT
              holders through rewards that will range from 100% to 200% and most
              importantly making a difference !
            </p>
          </OnScrollViewHorizontal>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
