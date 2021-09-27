import {ThreeIdConnect, EthereumAuthProvider} from "@3id/connect";

export const threeID = new ThreeIdConnect();

export async function getProvider() {
  const ethereum = window.ethereum;

  if (typeof ethereum === "undefined") {
    console.log("Unable to connect to Metamask, attempt fallback");
    // Show toast or something here
  }

  console.log("MetaMask is installed!");
  const accounts = await ethereum.request({method: "eth_requestAccounts"});
  const ethAuthProvider = new EthereumAuthProvider(ethereum, accounts[0]);
  await threeID.connect(ethAuthProvider);

  window.ethAuthProvider = ethAuthProvider;

  return threeID.getDidProvider();
}
