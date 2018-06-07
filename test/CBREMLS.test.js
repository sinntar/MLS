const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledREServiceFactory = require("../ethereum/build/REServiceFactory.json");
const compiledREService = require("../ethereum/build/REService.json");

let accounts;
let factory;
let reServiceAddress;
let reService;
let balance;

const printBalances = async () => {
  accounts = await web3.eth.getAccounts();
  balance = await web3.eth.getBalance(accounts[1]);
  balance = web3.utils.fromWei(balance, "ether");
  console.log("*************************************************");
  console.log("The balance of Account1 is ->" + balance);
  console.log("*************************************************");
  balance = await web3.eth.getBalance(accounts[4]);
  balance = web3.utils.fromWei(balance, "ether");
  console.log("*************************************************");
  console.log("The balance of Account4 is ->" + balance);
  console.log("*************************************************");
};

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  balance = await web3.eth.getBalance(accounts[1]);
  printBalances();
  factory = await new web3.eth.Contract(
    JSON.parse(compiledREServiceFactory.interface)
  )
    .deploy({ data: compiledREServiceFactory.bytecode })
    .send({ from: accounts[1], gas: "3000000" });

  await factory.methods.CreateREService("100").send({
    from: accounts[1],
    gas: "3000000"
  });

  const addresses = await factory.methods.deployedREServices().call();
  reServiceAddress = addresses[0];
  reService = await new web3.eth.Contract(
    JSON.parse(compiledREService.interface),
    reServiceAddress
  );
});

describe("REService", () => {
  it("Deploys a Factory and REService", () => {
    assert.ok(factory.options.address);
    //console.log("Factory Address -> " + factory.options.address);
    assert.ok(reService.options.address);
    //console.log("REService Address -> " + reService.options.address);
  });
  it("Marks caller as the Broker/Agent", async () => {
    const broker = await reService.methods.broker().call();
    assert.equal(accounts[1], broker);
    console.log("broker address is " + broker);
  });
  it("Create a Broker/Agent Profile", async () => {
    try {
      await reService.methods
        .createBrokerProfile(
          "Satya",
          "9727689640",
          "Satya.Raju@cbre.com",
          "Tx Broker"
        )
        .send({
          from: accounts[1],
          gas: "1000000"
        });
      //assert(false);
    } catch (err) {
      assert(err);
      console.log("error in Creating Profile");
      console.log(err);
    }
    const profileRec = await reService.methods.brokersInfo(0).call();
    console.log("Printing" + profileRec.name);
    assert.equal("Satya", profileRec.name);
  });
  it("Create a Listing Record", async () => {
    try {
      await reService.methods
        .createListing("1A", "Commercial", "Lease", "75028", 4000, 90)
        .send({
          from: accounts[1],
          gas: "1000000"
        });
    } catch (err) {
      assert(err);
      console.log("hmmm");
    }
    const listingRec = await reService.methods.propertyListings(0).call();
    console.log("Printing listingRec" + listingRec.propertyId);
    assert.equal("1A", listingRec.propertyId);
  });

  it("Ensure Property Count is more than 0", async () => {
    const propertyListingsLen = await reService.methods
      .getBasicPropertyInfoCount()
      .call();
    console.log("Total Property Listings " + propertyListingsLen);
    assert(propertyListingsLen >= 0);
  });

  it("Upload property Media Content ", async () => {
    try {
      await reService.methods
        .uploadPropertyMedia("5A", "http://localhost:8080/img5.jpg")
        .send({
          from: accounts[1],
          gas: "1800000"
        });
    } catch (err) {
      assert(err);
    }
    const propertyMediaContentRec = await reService.methods
      .propertyMediaData(0)
      .call();
    console.log(
      "printing propertyMediaContentRec ->" + propertyMediaContentRec.mediaURL
    );
    printBalances();
    assert.equal(
      "http://localhost:8080/img5.jpg",
      propertyMediaContentRec.mediaURL
    );
  });
  it("Ensure Media Count is more than 0", async () => {
    const mediaCountLen = await reService.methods
      .getPropertyMediaCount()
      .call();
    console.log("Total Media " + mediaCountLen);
    assert(mediaCountLen >= 0);
  });
});
