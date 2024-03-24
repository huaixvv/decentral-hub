"use client"

import ConnectWallet from "@/components/ConnectWallet";
import {useState} from "react";
import "./airdrop.css"
import {message} from "antd";
import {writeContract, type WriteContractErrorType} from "@wagmi/core";
import {config} from "@/config/wagmi.config";
import airdropAbiData from "@/abi/hera.airdrop.abi.json";
import contractData from "@/abi/hera.airdrop.abi.json";
import {ethers} from "ethers";

const contract = {
  address: contractData.contractAddress as `0x${string}`,
  abi: contractData.abi
}

const HeraAirdrop = () => {

  const [loginAddress, setLoginAddress] = useState("");
  const [addressList, setAddressList] = useState<string[]>([])
  const [messageApi, contextHolder] = message.useMessage();

  const handleConnectWallet = (loginAddress:string) => {
    setLoginAddress(loginAddress)
  };

  const handleDisConnectWallet = () => {
    setLoginAddress("")
  };

  const addressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const addressStr = e.target.value;
    const text = addressStr.trim();
    const lines = text.split('\n');
    const res = lines.map(line => line.trim())
    setAddressList([...res])
  }

  const AirDrop = async () => {
    if (!loginAddress) {
      messageApi.error("Please connect wallet")
      return
    }

    try {
      await writeContract(config, {
        ...contract,
        functionName: "drop",
        args: [addressList, ethers.parseEther("10")]
      });
      messageApi.success("Airdrop success")
    } catch (e) {
      const error = e as WriteContractErrorType
      // @ts-ignore
      messageApi.error(error?.cause?.message || e.message)
    }
  }


  return (
    <>
      {contextHolder}
      <div>
        <div className={"flex justify-between"}>
          <div className={"text-3xl mt-5 font-bold"}>Hera Airdrop</div>
          <ConnectWallet
            onDisconnected={handleDisConnectWallet}
            onConnected={handleConnectWallet}
            loginAddress={loginAddress}/>
        </div>
        <hr className={"faucet-hr mb-8"}/>

        <div className={"text-lg mt-4 title-2"}>Airdrop</div>
        <div className={"flex justify-center mt-6 flex-wrap"}>
          <textarea
            onChange={addressChange}
            // @ts-ignore
            rows="10" cols="64" placeholder={"Enter your address here, one input per line, every address will receive 10 HA."}
            className={"airdrop-textarea"}/>

          <div
            onClick={AirDrop}
            className="drop-btn bg-gray-700 text-white py-2 px-6 rounded text-center cursor-pointer mt-10 address-button">
            AirDrop
          </div>
        </div>
      </div>
    </>
  )
}

export default HeraAirdrop;
