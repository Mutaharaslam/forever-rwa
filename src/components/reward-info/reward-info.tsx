import React from "react";

const RewardsInfo: React.FC = () => {
  return (
    <section className="relative md:py-32 py-24">
      <div className="absolute inset-0 bg-white blur-2xl z-[-1]"></div>
      <div className="container xl:px-56 lg:px-44 md:px-24 sm:px-10 px-4 z-10">
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-secondary  mb-2">
          100-200% rewards, with a guaranteed minimum of 10% of passive income
        </h3>
        <p className="text-base leading-6 text-gray font-light md:mb-6 mb-8 text-center">
          We guarantee 10% rewards for throughout phase 1 and the entire
          project’s life, while rewards can easily exceed 100-200% (see below)
          which are automatically sent to your wallet so all you have to do is
          sit back and enjoy !
        </p>
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-secondary mb-2">
          Never going to 0
        </h3>
        <p className="text-base leading-6 text-gray font-light md:md:mb-6 mb-8 text-center">
          The Forever project is 100% backed by real estate and will never lose
          its value
        </p>
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-secondary  mb-2">
          Buy and receive rewards anywhere in the world
        </h3>
        <p className="text-base leading-6 text-gray font-light md:mb-6 mb-8 text-center">
          Unlike most platforms, there are no restrictions on NFT purchases and
          sales ! so you can buy and sell and earn money from anywhere in the
          world.
        </p>
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-secondary  mb-2">
          Sell any time!
        </h3>
        <p className="text-base leading-6 text-gray font-light md:mb-6 mb-8 text-center">
          Unlike fractional ownership platforms which restrict transactions to
          their platform, the Forever Project's NFT can be sold and transferred
          at any time either directly to your friends or in an open market place
          like Opensea
        </p>
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-secondary  mb-2">
          Buy back promise!
        </h3>
        <p className="text-base leading-6 text-gray font-light text-center">
          In case of any unforeseen circumstances occurring causing the
          discontinuity of The Forever Project we will buy all NFTs back from
          holders.
        </p>
      </div>
    </section>
  );
};

export default RewardsInfo;
