import web3 from "./web3";
import REService from "./build/REService.json";

export default address => {
  return new web3.eth.Contract(JSON.parse(REService.interface), address);
};
