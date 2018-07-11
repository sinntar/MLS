import Web3 from "web3";
/* Configure web3 with  a provider from Metamask. Doesn't work with Next JS
as HTML is rendered on Server */
//const web3 = new Web3(window.web3.currentProvider);

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //We are in the Browser and Metamask is running on browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the Server * OR * the User is not running Metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/swTzD4WziAiSXNnUPH5r"
  );
  web3 = new Web3(provider);
}
export default web3;
