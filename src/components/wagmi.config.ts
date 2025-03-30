import { defineChain } from "viem";
import { http } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const ethberry = defineChain({
  id: 10000,
  name: "Besu",
  nativeCurrency: {
    name: "Besu",
    symbol: "BESU",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Ethereum Lite Explorer",
      url: "http://127.0.0.1:8080/",
    },
  },
});

export const config = getDefaultConfig({
  appName: "RainbowKit Demo",
  projectId: "1a771229734ecc7f9a9561262fe88f4a",
  chains: [mainnet, polygon, ethberry],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [ethberry.id]: http(),
  },
});
