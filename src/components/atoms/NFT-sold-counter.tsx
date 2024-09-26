import React, { useEffect, useState } from "react";

const NFTSoldCounter: React.FC = () => {
  const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const [reward, setReward] = useState<number>(0);
  const targetReward: number = 2800; // Set your target USDT amount here
  const toTalNFTsWehave: number = 40000; // Set your target USDT amount here
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
    minimumIntegerDigits: 6,
    useGrouping: false,
  });
  return (
    <div>
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
        <div className="lg:mt-1 sm:w-auto w-full font-semibold font-sans md:text-xl sm:text-lg text-base text-white">
          <span className="text-sm">Out of</span> {toTalNFTsWehave}
        </div>
      </div>
    </div>
  );
};

export default NFTSoldCounter;
