import React from "react";
import OnScrollView from "../atoms/onScrollview";
import Counter from "../atoms/counter";


const RewardCounter: React.FC = () => {
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
          <Counter />
        </div>
      </OnScrollView>
    </section>
  );
};

export default RewardCounter;
