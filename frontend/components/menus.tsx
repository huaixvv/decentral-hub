"use client"
import "./menus.css"
import {useRouter} from "next/navigation";

type MenusProps = {
  title: string
  path: string
}
const Menus = () => {

  const menuList:Array<MenusProps> = [
    {title: 'Wallet', path: '/wallet'},
    {title: 'Address Builder', path: '/address-builder'},
    {title: "Hera Token", path: '/hera-token'},
    {title: "Hera Faucet", path: '/hera-faucet'},
    {title: "Hera Airdrop", path: '/hera-airdrop'},
  ]

  const router = useRouter()

  const menuClick = (menu: MenusProps) => {
    router.push(menu.path)
  }

  return (
    <div className={"mt-6"}>
      {menuList.map(item => {
        return (
          <div
            key={item.title}
            onClick={() => menuClick(item)}
            className={"h-20 flex justify-center items-center menu-hover font-bold"}>
            <p className={""}>
              {item.title}
            </p>
          </div>
        )
      })}
    </div>
  )
}


export default Menus
