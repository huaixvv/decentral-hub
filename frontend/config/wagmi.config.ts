import { http, createConfig, Connector} from 'wagmi'
import {localhost, mainnet, sepolia, goerli} from "wagmi/chains";
import {EIP1193RequestFn, TransportConfig, type Chain} from 'viem'
import {StoreApi} from 'zustand/vanilla';


console.log(localhost);

export const ganache = {
  id: 1337,
  name: 'Ganache',
  nativeCurrency: {name: 'Ganache', symbol: 'GAN', decimals: 18},
  rpcUrls: {default: {http: ['http://127.0.0.1:7545']}},

} as const satisfies Chain


export const config = createConfig({
  chains: [goerli, sepolia, ganache],
  // @ts-ignore
  transports: {
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
    [ganache.id]: http()
    // [goerli.id]:http()

  },
})
