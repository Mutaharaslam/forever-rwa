import { createThirdwebClient, getContract, getGasPrice } from "thirdweb";
import { polygonAmoy, polygon } from "thirdweb/chains";

export const usdtAddress = "0xd804422A897DE0FCE4c2c4Ea72091f9eCF42c463";
export const contractAddress = "0xC4542a81c40b4EE2F573843416f2A32D079D1040";

export const client = createThirdwebClient({
  clientId: "53ccb9f382e1e5a5c36346a83394803e",
});

export const chain = polygonAmoy;

export const contract = getContract({
  client,
  address: contractAddress,
  chain,
});

export const tokenContract = getContract({
  client,
  address: usdtAddress,
  chain,
});

export const getIncreasedGasPrice = async () => {
  const gasPrice = await getGasPrice({ client, chain });
  const increasedGasPrice = (gasPrice * BigInt(120)) / BigInt(100);
  return increasedGasPrice;
};
