## decentral hub 

Website: https://huaixvv.github.io/decentral-hub-front

Some projects of web3, include wallet, address builder, Hera token, faucet and airdrop.

### developed by
ether.js, hardhat, next.js, react.js, tailwind.css, wagmi, Ganache, and so on.

### contract
Base on IERC20 standard. 
- HeraToken.sol, Faucet.sol, Airdrop.sol
  
### use

#### 0. config
- input config in ```.env``` file 
- select a default network in ```hardhat.config.js```

#### 1. develop contract
``` shell
hardhat ignition deploy ./ignition/modules/HeraToken.js 
```

#### 2. change deployed contractAddress in api json file

```json
/frontend/api/xxx.abi.json

{
  "contractName": "Airdrop",
  "contractAddress":"0xXXXXXXXXXXXXX",
  "abi": []
}
```

#### 3. choose network
```javascript
export const config = createConfig({
  chains: [goerli, sepolia, ganache],
  transports: {
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
    [ganache.id]: http()
    // [goerli.id]:http()

  },
})
```

#### 4. run

```npm dev run```





