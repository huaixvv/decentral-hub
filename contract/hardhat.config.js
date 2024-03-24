require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require('dotenv').config()


const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const GOERLI_URL = process.env.GOERLI_URL;
const GOERLI_CHAIN_ID = process.env.GOERLI_CHAIN_ID;

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const SEPOLIA_CHAIN_ID = process.env.SEPOLIA_CHAIN_ID;
console.log(ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY, GOERLI_URL, GOERLI_CHAIN_ID, SEPOLIA_URL, SEPOLIA_CHAIN_ID);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [ACCOUNT_PRIVATE_KEY],
      chainId: 1337,
    },
    goerli: {
      url: GOERLI_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
      chainId: Number(GOERLI_CHAIN_ID),
    },
    sepolia:{
      url: SEPOLIA_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
      chainId: Number(SEPOLIA_CHAIN_ID),
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  nameAccounts:{
    deployer: {
      default: 0,
    }
  },
};
