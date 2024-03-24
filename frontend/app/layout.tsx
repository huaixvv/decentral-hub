"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Menus from "@/components/menus";
import {WagmiProvider} from "wagmi";
import {config} from "@/config/wagmi.config";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "./layout.css";

// const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={"bg-white"}>
    <div className={"flex h-screen w-screen"}>
      <div className="w-1/4 p-4 menu-border bg-gray-100">
        <div className={"flex justify-center"}>
          <div className={"text-2xl font-bold mt-6 ml-4"}>Decentral Hub</div>
        </div>
        <Menus></Menus>
      </div>

      <div className={"w-3/4 bg-white p-4"}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {/** ... */}
            {children}
          </QueryClientProvider>
        </WagmiProvider>

      </div>

    </div>

    </body>
    </html>
  );
}
