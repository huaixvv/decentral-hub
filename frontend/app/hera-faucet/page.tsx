"use client"
import "./hera-faucet.css"
import {useState} from "react";
import {connect, disconnect, injected, writeContract, type WriteContractErrorType} from "@wagmi/core";
import {config} from "@/config/wagmi.config";
import {message, Popconfirm} from "antd";
import {truncateText} from "@/utils/utils";
import {ethers} from "ethers";
import contractData from "@/abi/hera.faucet.abi.json";


const contract = {
  address: contractData.contractAddress as `0x${string}`,
  abi: contractData.abi
}

const Faucet = () => {

  const [loginAddress, setLoginAddress] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();


  const Withdraw = async () => {

    try {
      if (!loginAddress) {
        messageApi.error("Wallet is not connected!")
        return
      }

      await writeContract(config, {
        ...contract,
        functionName: "withdraw",
      });
      messageApi.success("withdraw success")
    } catch (e) {

      const error = e as WriteContractErrorType
      // @ts-ignore
      messageApi.error(error?.cause?.message || e.message)
    }
  }

  const handleConnectWallet = (loginAddress:string) => {
    setLoginAddress(loginAddress)
  };

  const handleDisConnectWallet = () => {
    setLoginAddress("")
  };

  return (
    <>
      {contextHolder}
      <div>
        <div className={"flex justify-between"}>
          <div className={"text-3xl mt-5 font-bold"}>Hera Faucet</div>
          <ConnectWallet
            onDisconnected={handleDisConnectWallet}
            onConnected={handleConnectWallet}
            loginAddress={loginAddress}/>
        </div>
        <hr className={"faucet-hr mb-8"}/>

        <div className={"text-lg mt-4 title-2"}>Withdraw</div>

        <div className={"w-full flex justify-center flex-wrap"}>
          <div className={"w-3/4"}>
            <div className={"border border-gray-600 flex justify-center items-center flex-wrap text-left mt-6 h-24"}>
              <p className={"text-left"}>
                You are allowed to withdraw once a day.<br/>
                You are allowed to withdraw 1 Hera token every time.
              </p>
            </div>
          </div>

          <div
            onClick={Withdraw}
            className="w-3/4 bg-gray-700 text-white py-2 px-6 rounded text-center cursor-pointer mt-10 address-button">
            Withdraw
          </div>
        </div>
      </div>
    </>
  )

}

const ConnectWallet = ({onConnected, onDisconnected, loginAddress}:any) => {

  // const [loginAddress, setLoginAddress] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const con = async () => {
    // disconnect wallet
    if (loginAddress) {
      setOpen(true);
    } else {
      const res = await connect(config, {connector: injected()});
      // setLoginAddress(res?.accounts[0] || "");
      onConnected(res?.accounts[0])
    }
  };

  const confirm = async (e: React.MouseEvent<HTMLElement>) => {
    await disconnect(config);
    // setLoginAddress("");
    onDisconnected()
    setOpen(false)
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false)
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

export default Faucet
