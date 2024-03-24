
const { ethers, hre } = require("hardhat");
const { expect } = require("chai");

describe("HeraToken", () => {

  let owner;
  let heraToken;
  let faucet;

  beforeEach(async () => {
    // deployed token contract first
    const heraTokenFactory = await ethers.getContractFactory('HeraToken')
    heraToken = await heraTokenFactory.deploy('Hera', 'HA', 18, ethers.parseEther('100000'))
    console.log("heraToken deployed to:", heraToken.target);

    // deployed hera-faucet contract
    const FaucetFactory = await ethers.getContractFactory('Faucet')
    faucet = await FaucetFactory.deploy(heraToken.target, ethers.parseEther('1'))
    console.log("faucet deployed to:", faucet.target);

    // transfer 1000 heraToken to hera-faucet
    await heraToken.transfer(faucet.target, ethers.parseEther("1000"))

    let signers = await ethers.getSigners();
    owner = signers[0].address;
  })

  it("withdraw hera-faucet", async () => {
    // first withdraw
    let balanceBefore = await heraToken.balanceOf(faucet.target)
    await faucet.withdraw()
    let balanceAfter = await heraToken.balanceOf(faucet.target)
    expect(ethers.formatEther(balanceBefore)).to.equal('1000.0')
    expect(ethers.formatEther(balanceAfter)).to.equal('999.0')

    // second withdraw
    try {
      await faucet.withdraw();
    } catch (e) {
      expect(e.message).to.include('You can only withdraw once a day')
    }
  })
})
