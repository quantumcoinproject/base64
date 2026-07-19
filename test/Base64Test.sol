// SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

import '../base64.sol';

// test harness exposing the internal library function; not part of the published package
contract Base64Test {
    function encode(bytes memory data) external pure returns (string memory) {
        return Base64.encode(data);
    }
}
