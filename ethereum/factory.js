import web3 from "./web3";
import REServiceFactory from "./build/REServiceFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(REServiceFactory.interface),
  "0x71dDa68244298527D35Ce9c701254BA74B67A459"
);

export default instance;
