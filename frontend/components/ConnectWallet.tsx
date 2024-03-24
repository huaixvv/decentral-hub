import {useState} from "react";
import {connect, disconnect, injected} from "@wagmi/core";
import {config} from "@/config/wagmi.config";
import {Popconfirm} from "antd";
import {truncateText} from "@/utils/utils";

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

export default ConnectWallet
