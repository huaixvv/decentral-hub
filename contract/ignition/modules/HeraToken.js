const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const { ethers} = require("ethers");


/**
 * HeraTokenModule deploy HeraToken, Faucet and Airdrop contracts
 * @type {IgnitionModule<"HeraTokenModule", string, {Faucet: *, HeraToken: *, Airdrop: *}>}
 */
module.exports = buildModule("HeraTokenModule", (m) => {

  // deploy HeraToken contract
  const HeraToken = m.contract("HeraToken",
    [
      'Hera', 'HA', 18, ethers.parseEther('100000000')
    ]
  )

  // deploy Faucet contract
  const Faucet = m.contract(
    "Faucet",
    [HeraToken, ethers.parseEther('1')],
    {after: [HeraToken]}
  )
  // transfer 10000 heraToken to hera-faucet
  m.call(HeraToken, "transfer", [Faucet, ethers.parseEther("10000")], { id: "TransferToFaucet" })

  // deploy AirDrop contract
  const Airdrop = m.contract(
    "Airdrop",
    [HeraToken],
    {after: [HeraToken]}
  )

  // transfer 1000000 heraToken to airdrop
  m.call(HeraToken, "transfer", [Airdrop, ethers.parseEther("1000000")], { id: "TransferToAirdrop" })

  return { HeraToken, Faucet, Airdrop };
});

