import web3 from "./web3";
import REServiceFactory from "./build/REServiceFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(REServiceFactory.interface),
  "0x5910a24aCE8c7C9CfD44eD9EbC2439f3856e0a9a"
);

export default instance;
