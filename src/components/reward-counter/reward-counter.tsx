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
      className=" container lg:pb-40 pb-16 xl:pt-24 pt-16 flex flex-col justify-start items-center relative z-20"
    >
      <OnScrollView>
        <h1 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold tracking-tight text-primary-dark mb-5">
          Rewards Paid Out
        </h1>
        <div className="flex items-center justify-center">
          <div className="counter-box shadow-2xl rounded-md bg-primary flex items-center justify-center gap-2 md:px-6 p-4 flex-wrap">
            {formattedReward
              .split("")
              .map((digit: string, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className={`${
                    digit === "0" || null
                      ? "!text-primary-700"
                      : "transition-all text-white"
                  } digit-box flex font-sans font-bold items-center justify-center text-white
                   xl:text-3xl text-2xl lg:rounded-xl md:rounded-lg rounded-md`}
                >
                  {digit}
                </div>
              ))}
            <div className="flex items-end lg:mt-1 justify-center sm:w-auto w-full font-semibold font-serif md:text-xl sm:text-lg text-base text-white">
              USDTs
            </div>
          </div>
        </div>
      </OnScrollView>
    </section>
  );
};

export default RewardCounter;
