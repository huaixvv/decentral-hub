"use client"

import {AbstractProvider, BrowserProvider, ethers, formatEther, parseEther} from "ethers";
import {useEffect, useState} from "react";

type account = {
  account: any,
  address: string,
  network: string,
  balance: string
}

const useWallet = () => {

  const [account, setAccount] = useState<account | null>(null); // 默认账户为 null
  const [provider, setProvider] = useState(null); // 提供者对象
  const [isConnected, setIsConnected] = useState(false); // 连接状态

  useEffect(() => {
    const initProvider = async () => {

      let provider: AbstractProvider
      // @ts-ignore
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults")
        provider = ethers.getDefaultProvider()
      } else {
        // @ts-ignore
        provider = new ethers.BrowserProvider(window.ethereum)
      }
      // @ts-ignore
      setProvider(provider)
    }
    initProvider()
  }, []);

  const connectWallet = async () => {
    if (!provider) {
      console.error("Provider not initialized");
      return;
    }

    try {
      // @ts-ignore
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        // @ts-ignore
        let network = await provider.getNetwork().name;
        console.log(network);
        // @ts-ignore
        let balance = await provider.getBalance(accounts[0]);
        console.log(network, balance);
        setAccount({
          account: accounts[0],
          address: accounts[0].address,
          network: !network ? "unknown" : network,
          balance: formatEther(balance).substring(0, 5),
        })
        setIsConnected(true); // 设置连接状态为已连接
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  }

  const getBalance = async (account: any) => {
    try {
      // @ts-ignore
      const balance = await provider.getBalance(account.account)
      console.log(balance);
      setAccount({
        ...account,
        balance: formatEther(balance).substring(0, 5)
      })
    } catch (error) {
      console.error("Failed to get balance:", error);
      return "0";
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
  }

  const sendEth = async (to: string, amount: number) => {
    try {
      // @ts-ignore
      const signer = await provider.getSigner()
      const tx = await signer.sendTransaction({
        to,
        value: parseEther(amount.toString())
      })
      const receipt = await tx.wait()
      return true
    } catch (error) {
      return false
    }
  }

  return {account, isConnected, connectWallet, disconnectWallet, sendEth, getBalance}
}

export default useWallet
