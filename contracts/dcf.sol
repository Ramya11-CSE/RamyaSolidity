// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DCF {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function restrictedAction() external view onlyOwner returns (string memory) {
        return "Success";
    }
}