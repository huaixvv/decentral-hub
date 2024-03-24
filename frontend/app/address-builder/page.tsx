"use client"

import "./address-builder.css";
import {useState} from "react";
import {ethers, randomBytes} from "ethers";
import {matchConAddress} from "@/utils/utils";
import {Checkbox, Radio, RadioChangeEvent, Spin} from "antd";
const XLSX = require('xlsx');

type wallet = {
  address: string,
  publicKey: string,
  privateKey: string,
  mnemonic: string
}

const AddressBuilder = () => {

  const [startWith, setStartWith] = useState<string>('')
  const [contain, setContain] = useState<string>('')
  const [endWith, setEndWith] = useState<string>('')
  const [count, setCount] = useState<number>(0)
  const [useSamePhrase, setUseSamePhrase] = useState<boolean>(false)
  const [wallets, setWallets] = useState<Array<wallet>>([])
  const [geneType, setGeneType] = useState<number>(1)
  const generate = () => {

    if (count < 1) return

    setWallets([])
    const path = "44'/60'/0'/0";
    const mnemonic = ethers.Mnemonic.entropyToPhrase(randomBytes(32))

    // batch generate
    if (geneType === 1) {
      setWallets(prevWallets => {
        const newWallets = []
        for (let i = 0; i < count; i++) {
          // 如果需要生成的助记词相同
          if (useSamePhrase){
            const hdNode = ethers.HDNodeWallet.fromPhrase(mnemonic);
            let hdNodeNew = hdNode.derivePath(`${path}/${i}`);
            let walletNew = new ethers.Wallet(hdNodeNew.privateKey);
            newWallets.push({
              address: walletNew.address,
              publicKey: walletNew.signingKey.publicKey,
              privateKey: walletNew.signingKey.privateKey,
              mnemonic: mnemonic
            })
          } else {
            const wallet = ethers.Wallet.createRandom();
            newWallets.push({
              address: wallet.address,
              publicKey: wallet.publicKey,
              privateKey: wallet.signingKey.privateKey,
              // @ts-ignore
              mnemonic: wallet.mnemonic.phrase
            })
          }
        }
        return [...prevWallets, ...newWallets]
      })
    }

    // use conditions
    if (geneType === 2) {
      setWallets(prevWallets => {
        const newWallets = []
        while (true) {
          let wallet = ethers.Wallet.createRandom();
          if (matchConAddress(startWith, contain, endWith, wallet.address)) {
            if (useSamePhrase){
              newWallets.push({
                address: wallet.address,
                publicKey: wallet.signingKey.publicKey,
                privateKey: wallet.signingKey.privateKey,
                mnemonic: mnemonic
              })
            } else {
              newWallets.push({
                address: wallet.address,
                publicKey: wallet.publicKey,
                privateKey: wallet.signingKey.privateKey,
                // @ts-ignore
                mnemonic: wallet.mnemonic.phrase
              })
            }
            break;
          }
        }
        return [...prevWallets, ...newWallets]
      })
    }
  }


  const exportExcel = () => {

    if (wallets.length === 0) return

    const data = wallets.map(
      ({ address, publicKey, privateKey, mnemonic }) => ({
        Address: address,
        'Public Key': publicKey,
        'Private Key': privateKey,
        Mnemonic: mnemonic,
      })
    );

    const ws = XLSX.utils.json_to_sheet(data);

    // 设置列宽
    const columnWidths = [
      { wch: 60 }, // 第一列宽度为 200px
      { wch: 100 },  // 第二列宽度为 20 个字符
      { wch: 100 },  // 第三列宽度为 30 个字符
      { wch: 100 },  // 第四列宽度为 40 个字符
    ];
    ws['!cols'] = columnWidths;
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Wallets');
    XLSX.writeFile(wb, 'wallets.xlsx');
  }

  const countChange = (e:any) => {
    // 获取输入框的值并转换为整数
    let inputValue = parseInt(e.target.value, 10);

    // 检查是否是有效的整数且小于50
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 50) {
      // 更新输入框的值
      setCount(inputValue);
    } else if (inputValue > 50) {
      // 输入无效，设置为最大值50
      setCount(50);
    } else {
      // 输入无效，清空输入框的值
      setCount(0);
    }
  }

  const geneTypeChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    if (e.target.value !== 1) {
      setCount(1)
    }

    if (e.target.value !== 2) {
      setStartWith('')
      setContain('')
      setEndWith('')
      console.log(111);
    }
    setGeneType(e.target.value)
  }

  return(
    <>
      <div className={"text-3xl mt-5 font-bold"}>Wallet Address Builder</div>
      <hr className={"address-hr mb-8"}/>
      <div className={"text-lg mt-4 title-2"}>Build Condition</div>

      {/*inputs*/}
      <Radio.Group onChange={geneTypeChange} value={geneType} className={"mt-4 w-full"}>
        <div className={"w-full"}>
          <div className={"w-full"}>
            <Radio value={1}>batch generate</Radio><br/>
            <div className={"address-search-form w-full"}>
              <input
                disabled={geneType !== 1}
                onChange={countChange}
                type="number"
                min="1" max="50"
                value={count}
                placeholder="Count"/>
            </div>

            <Checkbox checked={useSamePhrase} onChange={(e) => {setUseSamePhrase(e.target.checked)}}>
              use the same phrase to create address?
            </Checkbox>
          </div>
          <div className={"mt-8 w-full"}>
            <Radio value={2}>use conditions</Radio>
            <div className={"address-search-form"}>
              <input disabled={geneType !== 2}
                     onChange={(e) => {setStartWith(e.target.value)}
                     } type="text" placeholder="Start with" value={startWith}/>

              <input disabled={geneType !== 2}
                     onChange={(e) => {setContain(e.target.value)}}
                     type="text" placeholder="Should Contain" value={contain} className={"mid-input"}/>

              <input disabled={geneType !== 2}
                     onChange={(e) => {setEndWith(e.target.value)}}
                     type="text" placeholder="End With" value={endWith}/>
            </div>

          </div>
        </div>
      </Radio.Group>

      {/*button*/}
      <div
        onClick={generate}
        className="bg-gray-700 text-white py-2 px-6 rounded text-center cursor-pointer mt-6 address-button">Generate
      </div>
      <div
        onClick={exportExcel}
        className="bg-gray-700 text-white py-2 px-6 rounded text-center cursor-pointer mt-2 address-button">Export to
        File
      </div>
      <div className={"tip"}>Tip: Complex conditions may cause the page to freeze, after selecting the conditions, the
        limit for the count is set to 1.
      </div>

      <div className={"text-lg mt-8 title-2"}>Addresses</div>
      <div className={"mt-2 address-table"}>
        {wallets.map(wallet => {
          return (
            <div key={wallet.address}
                 className={"bg-white border border-solid border-black text-sm py-2 border-b-0 text-center"}>
              {wallet.address}
            </div>
          )
        })}
      </div>
    </>
  )
}


export default AddressBuilder;
