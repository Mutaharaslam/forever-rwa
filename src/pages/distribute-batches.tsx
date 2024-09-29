import React, { useState } from "react";
import NFTSoldCounter from "../components/atoms/NFT-sold-counter";
import {
  contract,
  contractAddress,
  tokenContract,
  client,
  chain,
} from "../constants";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { ethers } from "ethers";
import { prepareContractCall, sendAndConfirmTransaction } from "thirdweb";

const DistributeBatches: React.FC = () => {
  const account = useActiveAccount();

  const { data: totalSupply, isLoading: loading1 } = useReadContract({
    contract,
    method: "function totalSupply() returns (uint256)",
    params: [],
  });

  const [totalAwardAmount, setTotalAwardAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [batchSize, setBatchSize] = useState("");
  const [NFTID, setNFTID] = useState("1");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [batchSuccessMessage, setBatchSuccessMessage] = useState("");
  const [batchErrorMessage, setBatchErrorMessage] = useState("");

  const handleAwardDistribute = async () => {
    if (
      !totalAwardAmount ||
      isNaN(Number(totalAwardAmount)) ||
      Number(totalAwardAmount) <= 0
    ) {
      setErrorMessage("Please enter a valid total amount to distribute.");
      setSuccessMessage("");
      return;
    }

    if (account) {
      try {
        setSuccessMessage("Processing...");
        const tokenAmount = ethers.parseUnits(totalAwardAmount, 6);
        const transaction = prepareContractCall({
          contract: tokenContract,
          method: "function approve(address spender, uint256 value)",
          params: [contractAddress, tokenAmount],
        });
        await sendAndConfirmTransaction({
          account,
          transaction,
        });
        setSuccessMessage("Processing...");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const transaction2 = prepareContractCall({
          contract,
          method: "function distributeRewards(uint256 rewardAmount)",
          params: [tokenAmount],
        });
        await sendAndConfirmTransaction({
          account,
          transaction: transaction2,
        });
        setSuccessMessage("");
        window.alert("Successfully Distributed");
      } catch (err: any) {
        setSuccessMessage("");
        console.log(err);
        window.alert(err.message);
      }
    } else {
      setErrorMessage("Please connect your wallet");
    }
    // Simulate success
    // setSuccessMessage("Successfully distributed rewards to all.");
    setErrorMessage("");
    console.log("Distributing:", totalAwardAmount);
  };

  const handleBatchDistribute = async () => {
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

    if (account) {
      try {
        setBatchSuccessMessage("Processing...");
        const tokenAmount = ethers.parseUnits(totalAmount, 6);
        const transaction = prepareContractCall({
          contract: tokenContract,
          method: "function approve(address spender, uint256 value)",
          params: [contractAddress, tokenAmount],
        });
        await sendAndConfirmTransaction({
          account,
          transaction,
        });
        setBatchSuccessMessage("Processing...");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const startId = parseInt(NFTID);
        const totalSold = parseInt(ethers.formatUnits(totalSupply || 0, 0));
        const increment = parseInt(batchSize);
        let i = startId;
        while (i < totalSold) {
          const transaction2 = prepareContractCall({
            contract,
            method:
              "function batchDistributeRewards(uint256 rewardAmount, uint256 startTokenId, uint256 endTokenId)",
            params: [
              tokenAmount,
              ethers.parseUnits(`${i}`, 0),
              ethers.parseUnits(`${Math.min(totalSold, i + increment - 1)}`, 0),
            ],
          });
          await sendAndConfirmTransaction({
            account,
            transaction: transaction2,
          });
          await new Promise((resolve) => setTimeout(resolve, 5000));
          i += increment;
        }
        setBatchSuccessMessage("");
        window.alert("Successfully Distributed");
      } catch (err: any) {
        setBatchSuccessMessage("");
        console.log(err);
        window.alert(err.message);
      }
    } else {
      setBatchErrorMessage("Please connect your wallet");
    }
    // Simulate success
    // setBatchSuccessMessage("Successfully batch distributed rewards.");
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
      <div className="container pb-24">
        <div className="flex items-center flex-col justify-center">
          <h1 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold tracking-tight text-primary-dark mb-5">
            Total NFTs Sold
          </h1>
          <NFTSoldCounter />
        </div>
      </div>
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
        <div className="absolute inset-0 bg-white blur-2xl z-[-1]"></div>
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
            <div className="mb-4 lg:max-w-xs max-w-full w-full">
              <label className="block text-sm font-medium mb-2" htmlFor="nftid">
                Start NFT ID (optional)
              </label>
              <input
                type="number"
                id="nftid"
                value={NFTID}
                onChange={(e) => setNFTID(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Enter First NFT ID (optional)"
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
