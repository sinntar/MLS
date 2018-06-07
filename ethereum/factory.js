import web3 from "./web3";
import REServiceFactory from "./build/REServiceFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(REServiceFactory.interface),
  "0x99230f1f702467EcC4E274750F73b6945Af843D8"
);

export default instance;
