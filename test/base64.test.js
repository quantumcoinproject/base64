// Devnet tests for the Base64 library, checked against Node's own base64 encoder.
const { test, before } = require("node:test");
const path = require("node:path");
const { assert, qc, compileContract, deploy, scalar } = require("./helpers");

let base64;
before(async () => {
  const artifact = compileContract(path.resolve(__dirname, "Base64Test.sol"), "Base64Test");
  base64 = await deploy(artifact);
});

async function check(bytes, label) {
  // pass raw bytes: the SDK coder rejects "0x" (empty hex) for `bytes` args
  const encoded = scalar(await base64.encode(new Uint8Array(bytes)));
  assert.equal(encoded, Buffer.from(bytes).toString("base64"), label);
}

test("RFC 4648 vectors", async () => {
  for (const vector of ["", "f", "fo", "foo", "foob", "fooba", "foobar"]) {
    await check(Buffer.from(vector, "utf8"), `vector '${vector}'`);
  }
});

test("ascii sentence", async () => {
  await check(Buffer.from("hello world, this is base64 on QuantumCoin", "utf8"), "sentence");
});

test("all byte values", async () => {
  await check(Buffer.from([...Array(256)].map((_, i) => i)), "0x00..0xff");
});

test("long input", async () => {
  await check(Buffer.from("QuantumSwap".repeat(100), "utf8"), "long string");
});
