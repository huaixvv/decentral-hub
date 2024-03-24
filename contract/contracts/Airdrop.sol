// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "./IERC20.sol";

contract Airdrop {

    IERC20 public tokenContract;
    address public owner;

    constructor(address _tokenContractAddress) {
        tokenContract = IERC20(_tokenContractAddress);
        owner = msg.sender;
    }

    function drop(address[] memory _to, uint256 _value) public {

        // Check if the caller is the owner
        require(msg.sender == owner, "Only the owner can airDrop tokens");

        // Check if there are enough tokens in the contract
        require(
            tokenContract.balanceOf(address(this)) >= _value * _to.length,
            "Not enough tokens in the contract"
        );

        // Transfer tokens to each address
        for (uint256 i = 0; i < _to.length; i++) {
            tokenContract.transfer(_to[i], _value);
        }
    }
}
