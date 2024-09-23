import React from "react";
import bannerImage from "../../assets/images/banner-img-min.png";

const Banner: React.FC = () => {
  return (
    <section className="bg-transparent container mx-auto">
      <div className="relative isolate flex md:flex-row flex-col items-center py-16 md:py-20 lg:py-24 xl:py-36 xl:gap-32 lg:gap-24 md:gap-16 gap-12">
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
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* designs ends */}
        {/* Left */}
        <div className="md:basis-2/4 basis-full">
          <div className="text-left">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-primary">
              Digital art and collectibles
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary font-light xl:pr-20 lg:pr-16 pr-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
              veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
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
        </div>
        {/* Right */}
        <div className="md:basis-2/4 basis-full">
          <img src={bannerImage} alt="banner" />
        </div>
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
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* designs */}
      </div>
    </section>
  );
};

export default Banner;
