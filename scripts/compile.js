const path = require("node:path");
const qcSolc = require("./qc-solc");

const root = path.resolve(__dirname, "..");

const output = qcSolc.compile([
  path.join(root, "base64.sol"),
  path.join(root, "test", "Base64Test.sol"),
]);
qcSolc.writeArtifacts(output, path.join(root, "build"));
console.log(`base64.sol compiled OK (${qcSolc.compilerVersion()})`);
