import web3 from "./web3";
import REServiceFactory from "./build/REServiceFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(REServiceFactory.interface),
  "0xA38AD36B1072fc65a0E79c14D7135b616bf7404b" //latest deployed address.
);

export default instance;
