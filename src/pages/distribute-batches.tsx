import React, { useState } from "react";
import Divider from "../components/divider/divider";

const DistributeBatches: React.FC = () => {
  const [totalAwardAmount, setTotalAwardAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [batchSize, setBatchSize] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [batchSuccessMessage, setBatchSuccessMessage] = useState("");
  const [batchErrorMessage, setBatchErrorMessage] = useState("");

  const handleAwardDistribute = () => {
    if (
      !totalAwardAmount ||
      isNaN(Number(totalAwardAmount)) ||
      Number(totalAwardAmount) <= 0
    ) {
      setErrorMessage("Please enter a valid total amount to distribute.");
      setSuccessMessage("");
      return;
    }

    // Simulate success
    setSuccessMessage("Successfully distributed rewards to all.");
    setErrorMessage("");
    console.log("Distributing:", totalAwardAmount);
  };

  const handleBatchDistribute = () => {
    if (
      !totalAmount ||
      isNaN(Number(totalAmount)) ||
      Number(totalAmount) <= 0
    ) {
      setBatchErrorMessage("Please enter a valid total amount to distribute.");
      setBatchSuccessMessage("");
      return;
    }
    if (!batchSize || isNaN(Number(batchSize)) || Number(batchSize) <= 0) {
      setBatchErrorMessage("Please enter a valid batch size.");
      setBatchSuccessMessage("");
      return;
    }

    // Simulate success
    setBatchSuccessMessage("Successfully batch distributed rewards.");
    setBatchErrorMessage("");
    console.log(
      "Batch distributing:",
      totalAmount,
      "with batch size:",
      batchSize
    );
  };

  return (
    <section className="mx-auto pt-48 xl:pt-64 xl:py-32 py-24">
      {/* Distribute Rewards Section */}
      <div className="lg:pb-24 pb-16">
        <div className="container">
          <h2 className="text-left xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold tracking-tight text-primary-dark lg:mb-12 mb-8">
            Distribute Rewards to All
          </h2>
          <div className="mb-4 lg:max-w-lg max-w-full">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="totalAwardAmount"
            >
              Total Amount to Distribute
            </label>
            <input
              type="number"
              id="totalAwardAmount"
              value={totalAwardAmount}
              onChange={(e) => setTotalAwardAmount(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter total amount"
            />
          </div>
          <button
            onClick={handleAwardDistribute}
            className="bg-blue-600 bg-primary text-white rounded-md px-4 py-2 hover:bg-transparent border border-primary hover:text-primary"
          >
            Distribute
          </button>
          {successMessage && (
            <p className="mt-4 text-green">{successMessage}</p>
          )}
          {errorMessage && <p className="mt-4 text-red">{errorMessage}</p>}
        </div>
      </div>
      {/* Batch Distribute Section */}
      <div className="relative lg:py-24 py-16">
        <div className="absolute inset-0 bg-secondary-50 blur-sm z-[-1]"></div>
        <div className="container z-10 relative">
          <h2 className="text-left xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold tracking-tight text-primary-dark lg:mb-12 mb-8">
            Batch Distribute
          </h2>
          <div className="flex lg:flex-row flex-col justify-start items-start lg:gap-6 gap-4">
            <div className="mb-4 w-full lg:max-w-lg max-w-full">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="totalAmountBatch"
              >
                Total Amount to Distribute
              </label>
              <input
                type="number"
                id="totalAmountBatch"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Enter total amount"
              />
            </div>
            <div className="mb-4 lg:max-w-xs max-w-full w-full">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="batchSize"
              >
                Batch Size
              </label>
              <input
                type="number"
                id="batchSize"
                value={batchSize}
                onChange={(e) => setBatchSize(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Enter batch size"
              />
            </div>
          </div>
          <button
            onClick={handleBatchDistribute}
            className="bg-blue-600 bg-primary text-white rounded-md px-4 py-2 hover:bg-transparent border border-primary hover:text-primary "
          >
            Batch Distribute
          </button>
          {batchSuccessMessage && (
            <p className="mt-4 text-green">{batchSuccessMessage}</p>
          )}
          {batchErrorMessage && (
            <p className="mt-4 text-red">{batchErrorMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DistributeBatches;
