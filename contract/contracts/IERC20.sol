// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

interface IERC20 {

    // Returns the name of the token
    function name() external view returns (string memory);

    // Returns the symbol of the token
    function symbol() external view returns (string memory);

    // The decimal places used for token representation,
    // where tokens are divided by this value for display to users.
    // It's also known as precision, typically set to 18.
    function decimals() external view returns (uint8);

    // Returns the total token supply.
    function totalSupply() external view returns (uint256);

    // Returns the account balance
    function balanceOf(address _owner) external view returns (uint256 balance);

    // Transfers `_value` amount of tokens to address `_to`, Must fire Transfer event.
    function transfer(address _to, uint256 _value)
    external
    returns (bool success);

    // Transfers `_value` amount of tokens from address `_from` to address `_to`, Must fire Transfer event.
    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool success);

    // Allows `_spender` to withdraw from your account multiple times, up to the `_value` amount. Must fire Approval event.
    function approve(address _spender, uint256 _value)
    external
    returns (bool success);

    // Returns the amount which `_spender` is still allowed to withdraw from `_owner`.
    function allowance(address _owner, address _spender)
    external
    view
    returns (uint256 remaining);

    // Transfer event.
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // Approval event.
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
}
