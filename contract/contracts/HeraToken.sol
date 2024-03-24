// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "./IERC20.sol";

contract HeraToken is IERC20 {

    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;

    // Returns address token
    mapping(address => uint256) private _balances;

    //
    mapping(address => mapping(address => uint256)) private _allowance;

    // contract owner
    address public owner;

    constructor(
        string memory _initName,
        string memory _initSymbol,
        uint8 _initDecimals,
        uint256 _initTotalSupply
    ) {
        owner = msg.sender;
        _name = _initName;
        _symbol = _initSymbol;
        _decimals = _initDecimals;
        _totalSupply = _initTotalSupply;

        // Assign the total supply to the contract owner
        _balances[owner] = _initTotalSupply;
    }

    function name() external view override returns (string memory) {
        return _name;
    }

    function symbol() external view override returns (string memory) {
        return _symbol;
    }

    function decimals() external view override returns (uint8) {
        return _decimals;
    }

    function totalSupply() external view override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _owner) external view override returns (uint256 balance) {
        return _balances[_owner];
    }

    function transfer(address _to, uint256 _value) external override returns (bool success)  {

        require(_balances[msg.sender] >= _value, "Insufficient balance");
        _balances[msg.sender] -= _value;
        _balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) external override returns (bool success) {
        require (_balances[_from] >= _value, "Insufficient balance");

        // Check if the sender has enough allowance
        require (_allowance[_from][_to] >= _value, "Insufficient allowance");

        _balances[_from] -= _value;
        _balances[_to] += _value;
        _allowance[_from][_to] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) external override returns (bool success) {

        // Set the allowance, the amount the spender can withdraw
        _allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) external view override returns (uint256 remaining) {

        // Returns the amount which `_spender` is still allowed to withdraw from `_owner`.
        return _allowance[_owner][_spender];
    }
}














