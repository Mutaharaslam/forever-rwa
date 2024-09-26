import React, { useEffect, useState } from "react";
import Image2 from "../../assets/images/img2.jpg";
import Image3 from "../../assets/images/img3.jpg";
import Image5 from "../../assets/images/img5.jpg";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";
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
      const targetProgress = 70; // Target progress value
      const baseDurationPerPercent = 50; // 30 milliseconds per percentage
      const duration = targetProgress * baseDurationPerPercent; // Total duration in ms
      const stepTime = 5; // Update interval (smoothness of the progress)
      const increment = targetProgress / (duration / stepTime);

      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + increment;
          if (newProgress >= targetProgress) {
            clearInterval(progressInterval);
            return targetProgress; // Ensure it stops at the target value
          }
          return newProgress;
        });
      }, stepTime);

      return () => clearInterval(progressInterval); // Cleanup interval
    }
  }, [inView]);

  return (
    <section id="roadmap" className="container lg:py-32 py-24">
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold tracking-tight text-primary-dark lg:mb-32 mb-20">
        Road Map
      </h1>
      <div className="relative w-full flex flex-col items-center justify-center">
        {/* Progress Bar */}
        <div
          ref={ref}
          className="absolute lg:left-1/2 md:left-2 left-0 transform -translate-x-1/2 md:w-4 w-3 rounded-md border-[2px] border-gray-200 lg:p-[1px] p-[1px] bg-gray-100 h-full"
        >
          <div
            className={`inset-0 progressbarBG opacity-100 w-full rounded-md`}
            style={{
              height: `${progress}%`,
            }}
          ></div>
          <div
            className="absolute md:w-10 md:h-10 h-7 w-7 rounded-full bg-primary-700 text-white text-center
             flex items-center justify-center font-medium leading-tight font-sans md:text-[9px] text-[7px]
              left-1/2 transform -translate-x-1/2  md:-translate-y-[28px] -translate-y-[24px]"
            style={{ top: `${progress}%` }} // Position based on progress
          >
            We're Here
          </div>
          {/* Progress Stops at specific percentages */}

          {/* {[
            { percent: 2, nfts: 22, placement: "left" },
            { percent: 38, nfts: 4232, placement: "right" },
            { percent: 76, nfts: 7832, placement: "left" },
            { percent: 99, nfts: 44232, placement: "left" },
          ].map((stop) => (
            <div
              key={stop.percent}
              className="absolute h-8 -translate-y-1 bg-transparent text-primary rounded-full
             lg:flex hidden items-center justify-center font-medium font-sans"
              style={{
                top: `${stop.percent}%`,
                left: stop.placement === "left" ? "30px" : "auto",
                right: stop.placement === "right" ? "30px" : "auto",
                transform: "translate(0, -50%)",
              }}
            >
              {stop.placement === "left" ? (
                <div className="flex justify-start items-center gap-1.5 font-bold">
                  <TbArrowBigLeftLinesFilled
                    style={{
                      animation: "moveLeft 1.5s linear infinite",
                    }}
                    className="text-lg transition-all"
                  />
                  <span className="text-base">{stop.percent}%</span>
                </div>
              ) : (
                <div className="flex justify-start items-center gap-1.5 font-bold">
                  <span className="text-base">{stop.percent}%</span>
                  <TbArrowBigRightLinesFilled
                    style={{
                      animation: "moveRight 1.5s linear infinite",
                    }}
                    className="text-lg transition-all"
                  />
                </div>
              )}
            </div>
          ))} */}

          {[
            { percent: 2, nfts: 100, placement: "left" },
            { percent: 38, nfts: 5232, placement: "right" },
            { percent: 76, nfts: 8832, placement: "left" },
            { percent: 95, nfts: 44232, placement: "left" },
          ].map((stop) => (
            <div
              key={stop.percent}
              className="absolute -translate-y-1 rounded-full
             left-1/2 font-medium font-sans"
              style={{
                top: `${stop.percent}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="text-xs flex items-center justify-center min-w-16 px-1 
              border-0 border-gray-400 hover:scale-105 rounded-sm bg-gray-100 text-center
              hover:bg-primary hover:text-white-base hover:border-transparent shadow-xl transition-all box-content py-1">
                {stop.nfts} NFTs
              </span>
            </div>
          ))}
        </div>

        {/* Roadmap Section 1 */}
        <div className="flex lg:items-center items-end lg:flex-row flex-col-reverse w-full pt-4 xl:pb-32 lg:pb-24 pb-16 xl:gap-72 lg:gap-56">
          <OnScrollView className="lg:w-1/2 w-[90%] flex justify-end">
            <img src={Image5} alt="img1" className="object-cover rounded-lg" />
          </OnScrollView>
          <OnScrollViewHorizontal className="lg:w-1/2 w-[90%] lg:mb-0 mb-6">
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
        <div className="flex lg:items-center items-end lg:flex-row flex-col xl:py-32 lg:py-24 py-16 xl:gap-72 lg:gap-56">
          <OnScrollViewHorizontal
            fromLeft
            className="lg:w-1/2 w-[90%] lg:text-right text-left flex flex-col lg:items-end items-start lg:mb-0 mb-6"
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
        <div className="flex lg:items-center items-end lg:flex-row flex-col-reverse w-full xl:pt-32 lg:pt-24 pt-16 pb-0 xl:gap-72 lg:gap-56">
          <OnScrollView className="lg:w-1/2 w-[90%] flex justify-end">
            <img src={Image3} alt="img3" className="object-cover" />
          </OnScrollView>
          <OnScrollViewHorizontal className="lg:w-1/2 w-[90%] lg:mb-0 mb-6">
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
