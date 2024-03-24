"use client"

import useWallet from "@/app/wallet/useWallet";
import {useState} from "react";
import {message, Popconfirm, Spin} from "antd";
import {useAccount} from "wagmi";
import {truncateText} from "@/utils/utils";
import {disconnect} from "@wagmi/core";
import {config} from "@/config/wagmi.config";
import "./wallet.css"

const Wallet = () => {

  let { account,isConnected, connectWallet, disconnectWallet, sendEth, getBalance } = useWallet()
  const [address, setAddress] = useState<string>("")
  const [amount, setAmount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)


  const disconnect = () => {
    if (account) {
      setOpen(true)
    }
  }

  const send = async () => {
    setLoading(true)
    const result = await sendEth(address, amount)
    console.log(result);
    if (result) {
      // messageApi.success("Transfer success")
    } else {
      // messageApi.error("Transfer failed")
    }
    await getBalance(account)
    setLoading(false)
  }

  const confirm = async (e: React.MouseEvent<HTMLElement>) => {
    disconnectWallet()
    setOpen(false)
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false)
  };

  return (
    <>
      {/*{contextHolder}*/}
      <div className={"flex justify-center items-center h-full w-full"}>

        {account
          ? (
            <div className={"h-full w-full"}>

              {/*title*/}
              <div className={"flex justify-between w-full"}>
                <div className={"w-4/5"}>
                  <div className={"text-3xl mt-5 font-bold"}>Wallet</div>
                  <hr className={"address-hr mb-8 w-3/5"}/>
                </div>
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
                    onClick={disconnect}
                    className={"w-40 h-8 leading-8 mt-6 bg-black text-white text-center cursor-pointer rounded"}>
                    {truncateText(account?.address, 10)}
                  </div>
                </Popconfirm>
              </div>

              {/*account*/}
              <div className={""}>
                <div className={"text-lg mt-2 title-2"}>Account</div>
                <div className={"h-30 bg-gray-700 text-white mt-5 rounded"}>
                  <div className={"flex justify-between"}>
                    <p className={"text-2xl text-center pt-2 pl-4"}>Balance</p>
                    <p className={"pr-4 pt-2"}>Network: {account.network}</p>
                  </div>
                  <div className={"mt-10 pb-2"}>
                    <span className={"text-xl pl-4"}>{account.balance}</span>
                    <span className={""}> ETH</span>
                  </div>
                </div>
              </div>


              {/*transfer*/}
              <Spin spinning={loading}>
                <div>
                  <div className={"text-lg mt-4 title-2 mt-12"}>transfer</div>
                  <div className="wallet">
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      type="text" placeholder="Address"/>
                    <input
                      onChange={(e) => setAmount(Number(e.target.value))}
                      type="number" placeholder="Count"
                      style={{appearance: "textfield", "MozAppearance": "textfield"}}
                    />
                  </div>
                  <div
                    onClick={send}
                    className="bg-gray-700 text-white py-2 px-6 rounded text-center cursor-pointer mt-2 address-button">
                    Send
                  </div>
                </div>
              </Spin>
            </div>
          )
          : (<div
            onClick={connectWallet}
            className={"bg-black text-white font-bold py-4 px-12 rounded text-center cursor-pointer"}>
            connect to metamask
          </div>)
        }
      </div>
    </>
  )
}

export default Wallet
