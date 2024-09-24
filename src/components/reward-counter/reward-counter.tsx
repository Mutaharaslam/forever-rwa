import React, { useEffect, useState } from "react";
import OnScrollView from "../atoms/onScrollview";

const RewardCounter: React.FC = () => {
  const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const [reward, setReward] = useState<number>(0);
  const targetReward: number = 8499872; // Set your target USDT amount here
  const baseIncrementPercentage: number = 0.01; // Base increment as a percentage of the targetReward
  const increment: number = Math.max(
    1,
    Math.floor(targetReward * baseIncrementPercentage)
  ); // Calculate increment based on targetReward
  const duration: number = (targetReward / increment) * 50; // Duration in milliseconds

  useEffect(() => {
    let animationFrameId: number;
    const startTime: number = performance.now();

    const animate = (currentTime: number) => {
      const elapsed: number = currentTime - startTime;
      const progress: number = Math.min(elapsed / duration, 1);
      const easedProgress: number = easeInOutQuad(progress); // Apply easing function

      setReward(Math.floor(easedProgress * targetReward)); // Update reward based on eased progress

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetReward, duration, increment]);

  const formattedReward: string = reward.toLocaleString("en-US", {
    minimumIntegerDigits: 8,
    useGrouping: false,
  });

  return (
    <section
      id="rewards"
      className=" container pb-12 xl:pt-24 lg:pt-16 pt-10 flex flex-col justify-start items-center relative z-20"
    >
      <OnScrollView>
        <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold tracking-tight text-primary-dark  mb-4">
          Rewards Paid Out
        </h1>
        <div className="flex items-center justify-center lg:mb-16 mb-12">
          <div className="counter-box shadow-2xl rounded-xl bg-primary-700 flex items-center justify-center gap-2 md:px-6 p-4 flex-wrap">
            {formattedReward
              .split("")
              .map((digit: string, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className={`${
                    digit === "0" || null
                      ? "bg-primary text-primary-700"
                      : "counter transition-all"
                  } digit-box flex items-center justify-center text-white xl:text-3xl lg:text-2xl md:text-xl text-lg lg:rounded-xl md:rounded-lg rounded-md xl:h-15 lg:h-12 h-10 xl:w-12 lg:w-10 w-8`}
                >
                  {digit}
                </div>
              ))}
            <div className="flex items-center justify-center sm:w-auto w-full font-bold font-sans lg:text-2xl md:text-xl sm:text-lg text-base text-white">
              USDT
            </div>
          </div>
        </div>
      </OnScrollView>
      <div className="xl:px-56 lg:px-44 md:px-24 sm:px-10 px-0">
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-primary-dark  mb-2">
          100-200% rewards, with a guaranteed minimum of 10% of passive income
        </h3>
        <p className="text-base leading-6 text-secondary font-light mb-4 text-center">
          As developers and contractors, we believe in the power of real estate
          to make a difference for those in need whether it is by providing
          electricity facilitating healthcare and education or simply by
          providing drinking water, and the aim of the Forever project is to do
          exactly that, having an ever lasting effect, while creating value for
          everyone involved.
        </p>
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-primary-dark  mb-2">
          Never going to 0
        </h3>
        <p className="text-base leading-6 text-secondary font-light mb-4 text-center">
          The Forever project is 100% backed by real estate and will never lose
          its value
        </p>
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-primary-dark  mb-2">
          Buy and receive rewards anywhere in the world
        </h3>
        <p className="text-base leading-6 text-secondary font-light mb-4 text-center">
          Unlike most platforms, there are no restrictions on NFT purchases and
          sales ! so you can buy and sell and earn money from anywhere in the
          world.
        </p>
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-primary-dark  mb-2">
          Sell any time!
        </h3>
        <p className="text-base leading-6 text-secondary font-light mb-4 text-center">
          Unlike fractional ownership platforms which restrict transactions to
          their platform, the Forever Project's NFT can be sold and transferred
          at any time either directly to your friends or in an open market place
          like Opensea
        </p>
        <h3 className="text-center lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-primary-dark  mb-2">
          Buy back promise!
        </h3>
        <p className="text-base leading-6 text-secondary font-light mb-4 text-center">
          In case of any unforeseen circumstances occurring causing the
          discontinuity of The Forever Project we will buy all NFTs back from
          holders.
        </p>
      </div>
    </section>
  );
};

export default RewardCounter;
