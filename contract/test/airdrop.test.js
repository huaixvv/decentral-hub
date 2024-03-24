
const { ethers, hre } = require("hardhat");
const { expect } = require("chai");

describe("HeraToken", () => {

  let owner;
  let heraToken;
  let faucet;
  let AirDrop

  beforeEach(async () => {

    // deployed token contract first
    const heraTokenFactory = await ethers.getContractFactory('HeraToken')
    heraToken = await heraTokenFactory.deploy('Hera', 'HA', 18, ethers.parseEther('1000000000'))
    console.log("heraToken deployed to:", heraToken.target);

    // deploy the air drop contract
    const AirDropFactory = await ethers.getContractFactory('Airdrop')
    AirDrop = await AirDropFactory.deploy(heraToken.target)
    console.log("airDrop deployed to:", AirDrop.target);

    // transfer 1000000 heraToken to airDrop
    await heraToken.transfer(AirDrop.target, ethers.parseEther("1000000"))
    })

  it("air drop", async () => {

    // create 3 random accounts
    let accounts1 = ethers.Wallet.createRandom().address
    let accounts2 = ethers.Wallet.createRandom().address
    let accounts3 = ethers.Wallet.createRandom().address

    // set number of air drop
    const amount = 10

    // air drop to 3 accounts
    await AirDrop.drop([accounts1, accounts2, accounts3], ethers.parseEther(amount.toString()))

    // check the balance of 3 accounts
    let balance1 = await heraToken.balanceOf(accounts1)
    let balance2 = await heraToken.balanceOf(accounts2)
    let balance3 = await heraToken.balanceOf(accounts3)

    expect(ethers.formatEther(balance1)).to.equal('10.0')
    expect(ethers.formatEther(balance2)).to.equal('10.0')
    expect(ethers.formatEther(balance3)).to.equal('10.0')
  })
})
