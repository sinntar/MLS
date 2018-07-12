const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const mlsPath = path.resolve(__dirname, "contracts", "CBREMLS.sol");
console.log(mlsPath);
const source = fs.readFileSync(mlsPath, "utf8");
console.log(mlsPath);

const output = solc.compile(source, 1).contracts;
console.log("Compile Initiated");

fs.ensureDirSync(buildPath);
try {
  for (let contract in output) {
    fs.outputJsonSync(
      path.resolve(buildPath, contract.replace(":", "") + ".json"),
      output[contract]
    );
  }
} catch (err) {
  console.log("hmm");
}
console.log("Compile Completed");
