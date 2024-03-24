const { expect } = require("chai");
const { ethers, hre } = require("hardhat");


describe("HeraToken", () => {

  const address2 = "0xfeB92f6AA23d20643eA4Cea6bADd44d5d714F6d3"
  let owner;

  // deployed contract first
  let heraToken;
  beforeEach(async () => {
    const heraTokenFactory = await ethers.getContractFactory('HeraToken')
    heraToken = await heraTokenFactory.deploy('Hera', 'HA', 18, ethers.parseEther('1000'))
    let signers = await ethers.getSigners();
    owner = signers[0].address;
    // console.log("HeraToken deployed to:", heraToken);
    })


  // test basic information
  it("basic information", async () => {
    expect(await heraToken.name()).to.equal("Hera");
    expect(await heraToken.symbol()).to.equal("HA");
    expect(await heraToken.decimals()).to.equal("18");
    expect(await heraToken.totalSupply()).to.equal(ethers.parseEther('1000'));
  })

  // test balanceOf
  it("balanceOf", async () => {
    expect(await heraToken.balanceOf(owner)).to.equal(ethers.parseEther('1000'));
  })

  // test transfer
  it("transfer", async () => {
    // send 100 from singer to address2
    await heraToken.transfer(address2, ethers.parseEther("100"))
    let singerBalance = await heraToken.balanceOf(owner)
    let address2Balance = await heraToken.balanceOf(address2)
    expect(singerBalance).to.equal(ethers.parseEther('900'));
    expect(address2Balance).to.equal(ethers.parseEther('100'));
    // console.log(ethers.formatEther(singerBalance));
    // console.log(ethers.formatEther(address2Balance));
  });

  // test approve & allowance
  it("approve & allowance", async () => {
    await heraToken.approve(address2, ethers.parseEther("100"))
    let allowance = await heraToken.allowance(owner, address2)
    expect(allowance).to.equal(ethers.parseEther("100"))
    // console.log(ethers.formatEther(allowance));
  })
})
