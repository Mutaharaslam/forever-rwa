import { createThirdwebClient, getContract } from "thirdweb";
import { polygonAmoy, polygon } from "thirdweb/chains";

export const usdtAddress = "0xd804422A897DE0FCE4c2c4Ea72091f9eCF42c463";
export const contractAddress = "0xE99Bb2a5748a904dd4Bc9f5a73e177802c4A8a9C";

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
