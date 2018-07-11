const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/REServiceFactory.json");

const provider = new HDWalletProvider(
  "nothing cattle marine motion place weird patient snow fresh faith sentence grid",
  "https://rinkeby.infura.io/swTzD4WziAiSXNnUPH5r"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const ethAccounts = await web3.eth.getAccounts();

  console.log(
    "Attempting to deploy to eth network from Account",
    ethAccounts[0]
  );

  const deployResult = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "3000000", from: ethAccounts[0] });

  console.log("The Contract is deployed to ->", deployResult.options.address);
};

deploy();
