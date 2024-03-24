// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "./IERC20.sol";

contract Faucet {

    // Token contract
    IERC20 public tokenContract;

    // Record the time of the last withdrawal
    mapping(address => uint256) public receiveRecord;

    // Amount of tokens to be withdrawn each time
    uint256 public amountEachTime;

    // Contract owner
    address public owner;

    constructor(address _tokenContractAddress, uint256 _amountEachTime){
        tokenContract = IERC20(_tokenContractAddress);
        amountEachTime = _amountEachTime;
        owner = msg.sender;
    }

    // Withdraw tokens, each address can only withdraw once every 24 hours
    function withdraw() external {

        // Check if the address has withdrawn tokens
        if (receiveRecord[msg.sender] > 0) {
            require(
                block.timestamp - receiveRecord[msg.sender] > 24 hours,
                "You can only withdraw once a day"
            );
        }

        // Check if there are enough tokens in the contract
        require(
            tokenContract.balanceOf(address(this)) >= amountEachTime,
            "Not enough tokens in the contract"
        );

        // Update the withdrawal record and transfer the tokens
        receiveRecord[msg.sender] = block.timestamp;
        tokenContract.transfer(msg.sender, amountEachTime);
    }

    // Set the amount of tokens to be withdrawn each time, only the owner can call this function
    function setAmountEachTime(uint256 _amountEachTime) public {
        require(msg.sender == owner, "Only the owner can set the amount");
        amountEachTime = _amountEachTime; // 更新每次领取的数量
    }
}
