"use client"
import contractData from "@/abi/heraToken.abi.json"
import {useAccount, useConnect, useReadContracts, useWatchContractEvent} from "wagmi";
import {injected, connect, readContract, writeContract, type WriteContractErrorType, disconnect} from "@wagmi/core";
import {BigNumberish, ethers} from "ethers";
import {useEffect, useState} from "react";
import {config} from "@/config/wagmi.config"
import "./hera-token.css"
import {message, Popconfirm} from "antd";
import {truncateText} from "@/utils/utils";

const contract = {
  address: contractData.contractAddress as `0x${string}`,
  abi: contractData.abi
}

const HeraToken = () => {

  // const { address } = useAccount()

  return (
    <div className={"hera-token"}>
      <div className={"flex justify-between"}>
        <div className={"text-3xl mt-5 font-bold"}>Hera Token</div>
        <ConnectWallet/>
      </div>
      <hr className={"address-hr mb-8"}/>
      <ContractInfo/>
      <GeBalance/>
      <Transfer/>
      <Allowance/>
      <Approve/>
      <TransferFrom/>

    </div>
  )
}

const ConnectWallet = () => {

  const [loginAddress, setLoginAddress] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)

  const con = async () => {
    // disconnect wallet
    if (loginAddress) {
      setOpen(true)
    } else {
      const res = await connect(config,{connector: injected()})
      setLoginAddress(res?.accounts[0] || "")
    }
  }

  const confirm = async (e: React.MouseEvent<HTMLElement>) => {
    await disconnect(config)
    setLoginAddress("")
    setOpen(false)
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error('Click on No');
  };

  return (
    <>
      <Popconfirm
        open={open}
        title="Disconnect Wallet?"
        // @ts-ignore
        onConfirm={confirm}
        // @ts-ignore
        onCancel={cancel}
        okType="danger"
        okText="Yes"
        cancelText="No"
      >
        <div
          onClick={con}
          className={"w-40 h-8 leading-8 mt-6 bg-black text-white text-center cursor-pointer rounded"}>
          {loginAddress ? truncateText(loginAddress, 10) : "Connect Wallet"}
        </div>
      </Popconfirm>
    </>
  )
}

const ContractInfo = () => {

  const {data} = useReadContracts({
    contracts: [
      {
        ...contract,
        functionName: "name"
      },
      {
        ...contract,
        functionName: "symbol"
      },
      {
        ...contract,
        functionName: "decimals",
      },
      {
        ...contract,
        functionName: "totalSupply",
      },
    ]
  })

  const [name, symbol, decimals, totalSupply] = data || [];

  return (
    <div>
      <div className={"text-lg mt-4 title-2"}>Hera Token</div>
      <div className={"mt-4"}>
        <span><strong>Contract Address</strong>: <a target="_blank" className={"hover:text-blue-500"} href="https://sepolia.etherscan.io/address/0x459123B215057579938b1477DC7E3AC4149FaC48">{"0x459123B215057579938b1477DC7E3AC4149FaC48"}</a></span>
      </div>
      <div className={"mt-2"}>
        <span><strong>Name</strong>: {String(name?.result)}</span>
        <span className={"ml-10"}><strong>Symbol</strong>: {String(symbol?.result)}</span>
      </div>
      <div className={"mt-2"}>
        <span><strong>Decimal</strong>: {String(decimals?.result)}</span>
        {/* @ts-ignore*/}
        <span className={"ml-10"}><strong>Supply Total</strong>: {ethers.formatEther(totalSupply?.result || 0)}</span>
      </div>
    </div>
  )
}

const GeBalance = () => {

  // get balance of
  const [balance, setBalance] = useState("");
  const [address, setAddress] = useState("");

  const getBalance = async () => {

    if (!address)  {
      return
    }
    const data = await readContract(config, {
      ...contract,
      functionName: "balanceOf",
      args: [address],
    })
    setBalance(ethers.formatEther(data as BigNumberish))
  }

  return (
    <div>
      <div className={"text-lg mt-4 title-2"}>Account Balance</div>
      <div className={"flex"}>
        <input type="text" value={address}
               placeholder={"Address"}
               onChange={e => setAddress(e.target.value)}/>
        <div
          className="bg-gray-700 text-white px-6 rounded text-center cursor-pointer address-button-get address-button"
          onClick={getBalance}>Get</div>
      </div>
      <div className={"italic"}>Balance: <strong>{balance || 0}</strong> HA</div>
    </div>
  )
}

const Transfer = () => {

  const [messageApi, contextHolder] = message.useMessage();

  useWatchContractEvent({
    ...contract,
    eventName: "Transfer",
    onLogs(logs) {
      console.log("Transfer Event log:", logs);
    },
    onError(error) {
      console.error('Transfer Event Error', error)
    },
    // poll: true
  })

  const [toAddress, setToAddress] = useState("")
  const [count, setCount] = useState(0)

  const send = async () => {
    try {
      if (!toAddress) {
        return
      }
      const data = await writeContract(config, {
        ...contract,
        functionName: "transfer",
        args: [toAddress, ethers.parseEther(String(count))]
      });
      messageApi.success("Transfer success")
    } catch (e : any) {
      const error = e as WriteContractErrorType
      // @ts-ignore
      messageApi.error(error?.cause?.message || e.message)
    }
  }

  return (
    <div>
      {contextHolder}
      <div className={"text-lg mt-4 title-2"}>Transfer To</div>
      <div className={"flex justify-between"}>
        <input type="text" placeholder={"To Address"} value={toAddress}
               onChange={e => setToAddress((e.target as any).value)}/>
        <input
          type="text" placeholder={"count"} value={count}
          onChange={e => setCount((e.target as any).value)}/>
      </div>
      <div
        className="bg-gray-700 text-white rounded text-center cursor-pointer address-button-send address-button"
        onClick={send}>Send
      </div>
    </div>
  )
}

const Allowance = () => {

  const [address, setAddress] = useState("");
  const [spender, setSpender] = useState("")
  const [allowance, setAllowance] = useState("")

  const getAllowance = async () => {

    if (!address || !spender) {
      return
    }
    const data = await readContract(config, {
      ...contract,
      functionName: "allowance",
      args: [address, spender]
    })
    setAllowance(ethers.formatEther(data as BigNumberish))
  }

  return (
    <div>
      <div className={"text-lg mt-4 title-2"}>Allowance</div>
      <div className={"flex justify-between"}>
        <input type="text" value={address}
               placeholder={"Owner Address"}
               onChange={e => setAddress(e.target.value)}/>
        <input
          placeholder={"Spender Address"}
          type="text" value={spender}
          onChange={e => setSpender(e.target.value)}/>
      </div>
      <div
        className="bg-gray-700 text-white rounded text-center cursor-pointer address-button-send address-button"
        onClick={getAllowance}>Get
      </div>
      <div className={"italic mt-2"}>Allowance: <strong>{allowance || 0}</strong> HA</div>
    </div>
  )
}

const Approve = () => {

  const [spender, setSpender] = useState("");
  const [count, setCount] = useState(0)
  const [messageApi, contextHolder] = message.useMessage();


  useWatchContractEvent({
    ...contract,
    eventName: "Approve",
    onLogs(logs) {
      console.log("Approve Event log:", logs);
    },
    onError(error) {
      console.error('Approve Event Error', error)
    },
    // poll: true
  })

  const approve = async () => {
    try {
      if (!spender || !count) {
        return
      }
      const data = await writeContract(config, {
        ...contract,
        functionName: "approve",
        args: [spender, ethers.parseEther(String(count))]
      });
      console.log(data);
    } catch (e) {
      const error = e as WriteContractErrorType
      // @ts-ignore
      messageApi.error(error?.cause?.message || e.message)
    }
  }

  return (
    <div>
      <div className={"text-lg mt-4 title-2"}>Approve</div>
      <div className={"flex justify-between"}>
        <input type="text" placeholder={"Spender Address"} value={spender}
               onChange={e => setSpender((e.target as any).value)}/>
        <input type="text" placeholder={"count"} value={count}
               onChange={e => setCount((e.target as any).value)}/>
      </div>
      <div
        className="bg-gray-700 text-white rounded text-center cursor-pointer address-button-send address-button"
        onClick={approve}>approve</div>
    </div>
  )
}

const TransferFrom = () => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [count, setCount] = useState(0);

  const [messageApi, contextHolder] = message.useMessage();

  useWatchContractEvent({
    ...contract,
    eventName: "Transfer",
    onLogs(logs) {
      console.log("Transfer Event log of TransferFrom:", logs);
    },
    onError(error) {
      console.error('Transfer Event Error of TransferFrom', error)
    },
    // poll: true
  })

  const send = async () => {
    try {
      const data = await writeContract(config, {
        ...contract,
        functionName: "transferFrom",
        args: [from, to, ethers.parseEther(String(count))]
      });
      messageApi.success("success")
    } catch (e:any) {
      const error = e as WriteContractErrorType
      // @ts-ignore
      messageApi.error(error?.cause?.message || e.message)
    }
  }

  return (
    <div>
      {contextHolder}
      <div className={"text-lg mt-4 title-2"}>Approve Transfer From</div>
      <div className={"flex justify-between flex-wrap"}>
        <input type="text" value={from} placeholder={"From Address"}
               onChange={e => setFrom(e.target.value)}/>
        <input type="text" value={to} placeholder={"To Address"}
               onChange={e => setTo(e.target.value)}/>
        <input type="text" value={count} placeholder={"count"}
               onChange={e => setCount(Number(e.target.value))}/>
      </div>
      <div
        className="bg-gray-700 text-white rounded text-center cursor-pointer address-button-send address-button"
        onClick={send}>Send</div>
      <div className={"h-10"}></div>
    </div>
  )
}

export default HeraToken;
