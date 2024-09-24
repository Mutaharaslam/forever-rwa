import React, { useEffect, useState } from "react";
import Image2 from "../../assets/images/img2.jpg";
import Image3 from "../../assets/images/img3.jpg";
import Image5 from "../../assets/images/img5.jpg";
import borderbgs from "../../assets/images/slider-bg-2.jpg";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
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
    <section id="roadmap" className="container py-12">
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold tracking-tight text-primary-dark mb-4">
        The Road Map
      </h1>
      <p className="text-center text-base font-normal text-secondary lg:mb-24 mb-16 xl:px-56 lg:px-24 px-0">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,{" "}
      </p>
      <div className="relative w-full flex flex-col items-center justify-center">
        {/* Progress Bar */}
        <div
          ref={ref}
          className="absolute lg:left-1/2 md:left-2 left-0 transform -translate-x-1/2 w-4 rounded-md border-[1px] border-secondary-200 p-[2px] bg-secondary-50 h-full"
        >
          <div
            className="inset-0 bg-cover bg-center opacity-100 w-full rounded-md"
            style={{
              backgroundImage: `url(${borderbgs})`,
              height: `${progress}%`,
              animation: "moveBackground 15s linear infinite",
            }}
          ></div>
          <div
            className="absolute w-12 h-12 rounded-full bg-primary text-white text-center flex items-center justify-center font-medium leading-tight font-sans text-[11px] left-1/2 transform -translate-x-1/2  -translate-y-[28px] "
            style={{ top: `${progress}%` }} // Position based on progress
          >
            We're Here
          </div>
        </div>

        {/* Roadmap Section 1 */}
        <div className="flex lg:items-start items-end lg:flex-row flex-col-reverse w-full pt-4 xl:pb-32 lg:pb-24 md:pb-16 pb-10 xl:gap-72 lg:gap-56">
          <OnScrollView className="lg:w-1/2 w-[90%] flex justify-end">
            <img src={Image5} alt="img1" className="object-cover rounded-lg" />
          </OnScrollView>
          <OnScrollViewHorizontal className="lg:w-1/2 w-[90%] lg:mb-0 mb-6">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary-dark flex justify-start items-center gap-4 font-bold m-0 mb-2 relative">
              <BiSolidLeftArrow className=" absolute lg:-left-12 md:-left-8 -left-5" />
              Phase One
            </h3>
            <p className="text-base xl:pr-16 lg:pr-6 ">
              During this phase we guarantee a minimum of 10% rewards
              distributed on a quarterly basis.
            </p>
          </OnScrollViewHorizontal>
        </div>

        {/* Roadmap Section 2 */}
        <div className="flex lg:items-start items-end lg:flex-row flex-col xl:py-32 lg:py-24 md:py-16 py-10 xl:gap-72 lg:gap-56">
          <OnScrollViewHorizontal
            fromLeft
            className="lg:w-1/2 w-[90%] lg:text-right text-left flex flex-col lg:items-end items-start lg:mb-0 mb-6"
          >
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary-dark flex lg:justify-end items-center gap-4 font-bold m-0 mb-2 relative">
              <BiSolidRightArrow className="absolute -right-12 lg:block hidden" />
              <BiSolidLeftArrow className=" absolute lg:-left-12 md:-left-8 -left-5 lg:hidden block" />
              Phase Two
            </h3>
            <p className="text-base xl:pl-16 lg:pl-6">
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
        <div className="flex lg:items-start items-end lg:flex-row flex-col-reverse w-full xl:pt-32 lg:pt-24 md:pt-16 pt-10 pb-0 xl:gap-72 lg:gap-56">
          <OnScrollView className="lg:w-1/2 w-[90%] flex justify-end">
            <img src={Image3} alt="img3" className="object-cover" />
          </OnScrollView>
          <OnScrollViewHorizontal className="lg:w-1/2 w-[90%] lg:mb-0 mb-6">
            <h3 className="lg:text-2xl md:text-xl text-lg text-primary-dark flex justify-start items-center gap-4 font-bold m-0 mb-2 relative">
              <BiSolidLeftArrow className=" absolute lg:-left-12 md:-left-8 -left-5" />
              Phase Three
            </h3>
            <p className="text-base xl:pr-16 lg:pr-6">
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
