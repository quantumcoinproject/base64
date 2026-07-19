# @quantumcoin/base64

Base64 encoding library for Solidity 0.7.6 on the QuantumCoin blockchain.

# Local Development

Requires `node@>=18`. The library is compiled with the
[`@quantumcoin/solc`](https://www.npmjs.com/package/@quantumcoin/solc) npm package
(QuantumCoin's Solidity 0.7.6 with 32-byte address support).

## Install Dependencies

`npm install`

## Compile

`npm run compile`

## Run Tests

`npm test`

Tests run against a local QuantumCoin devnet using the `quantumcoin` SDK. The devnet is
downloaded, installed, and started automatically by `scripts/devnet.js` (Windows, macOS, and
Ubuntu). Overrides: `QC_RPC_URL`, `QC_DEVNET_DIR`, `QC_KEYSTORE`, `QC_KEY_PASSWORD`.

## Usage

Install via `npm install @quantumcoin/base64`, then:

```solidity
import '@quantumcoin/base64/base64.sol';
```
