import React from "react";
import bannerImage from "../../assets/images/banner-img-min.png";
// import { GoCodeOfConduct } from "react-icons/go";
// import { MdGraphicEq } from "react-icons/md";
import OnScrollViewHorizontal from "../atoms/onScrollviewHosrizontal";
import { FaDotCircle } from "react-icons/fa";

const Banner: React.FC = () => {
  return (
    <section className="bg-transparent container mx-auto">
      <div className="lg:px-1 relative isolate flex md:flex-row flex-col items-center 
      pb-16 md:pb-24 lg:pb-32 xl:pb-40 pt-48 xl:pt-64 xl:gap-32 lg:gap-24 gap-16">
        {/* designs */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-900 to-secondary-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* designs ends */}
        {/* Left */}
        <OnScrollViewHorizontal fromLeft className="md:basis-2/4 basis-full">
          <div className="text-left">
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold tracking-tight mb-5 text-secondary">
              The Forever Project
            </h1>
            <ul className="pl-0">
              <li className="flex items-center gap-3 mb-4 text-primary-700">
                <FaDotCircle className="w-4 shrink-0 grow-0" />
                <h4 className="md:text-xl text-lg font-semibold tracking-normal leading-none">
                  Make a Difference
                </h4>
              </li>
              <li className="flex items-center gap-3 mb-5 text-primary-700">
                <FaDotCircle className="w-4 shrink-0 grow-0" />
                <div>
                  <h4 className="md:text-xl text-lg font-semibold tracking-normal leading-none">
                    Make a Profit
                  </h4>
                </div>
              </li>
            </ul>
            <p className="text-base leading-6 text-secondary font-light xl:pr-20 lg:pr-16 pr-0 m-0">
              As developers and contractors, we believe in the power of real
              estate to make a difference for those in need whether it is by
              providing electricity facilitating healthcare and education or
              simply by providing drinking water, and the aim of the Forever
              project is to do exactly that, having an ever lasting effect,
              while creating value for everyone involved.
            </p>
            <div className="mt-6 flex items-center justify-start gap-x-6">
              <a
                href="/"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Connect Wallet
              </a>
              <a
                href="#learnmore"
                className="text-sm font-semibold leading-6 text-primary"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </OnScrollViewHorizontal>
        {/* Right */}
        <OnScrollViewHorizontal className="md:basis-2/4 basis-full">
          <img src={bannerImage} alt="banner" />
        </OnScrollViewHorizontal>
        {/* designs */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-700 to-secondary-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* designs */}
      </div>
    </section>
  );
};

export default Banner;
