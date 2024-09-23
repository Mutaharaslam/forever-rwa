import React, { useEffect, useState } from "react";

const RewardCounter: React.FC = () => {
  const [reward, setReward] = useState(0);
  const targetReward = 9870; // Set your target USDT amount here
  const duration = 2000; // Duration for counting animation in milliseconds

  useEffect(() => {
    let start = 0;
    const end = targetReward;
    const increment = Math.ceil(end / (duration / 60)); // Update every 100ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setReward(start);
    }, 100);

    return () => clearInterval(timer);
  }, [targetReward, duration]);
  return (
    <section
      id="rewards"
      className="container py-24 flex flex-col justify-start items-center"
    >
      <h1 className="text-center xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold text-primary-dark mb-4">
        USDT Reward amount sent up to date
      </h1>
      <p className="text-center text-base font-normal text-primary mb-8 px-56">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <h3 className="text-4xl max-w-fit lg:min-w-96 min-w-72  font-semibold border border-secondary counter px-10 py-7 rounded-2xl text-white text-center">
        {reward.toLocaleString()} USDT
      </h3>
    </section>
  );
};

export default RewardCounter;
