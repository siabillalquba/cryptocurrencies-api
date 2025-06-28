type Cryptocurrency = {
  id: number;
  name: string;
  symbol: string;
  type?: "Layer 1" | "Layer 2" | "Stablecoin" | "Memecoin";
  founder: string;
};

export const dataCryptocurrencies: Cryptocurrency[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    type: "Layer 1",
    founder: "Satoshi Nakamoto",
  },
  {
    id: 2,
    name: "Etherium",
    symbol: "ETH",
    type: "Layer 1",
    founder: "Vitalik Buterin",
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    type: "Stablecoin",
    founder: "Jan Ludovicus van der Velde",
  },
  {
    id: 4,
    name: "Ripple",
    symbol: "XRP",
    type: "Layer 1",
    founder: "Chris Larsen & Jed McCaleb",
  },
  {
    id: 5,
    name: "Binance Coin",
    symbol: "BNB",
    type: "Layer 1",
    founder: "Changpeng Zhao",
  },
  {
    id: 6,
    name: "Solana",
    symbol: "SOL",
    type: "Layer 1",
    founder: "Anatoly Yakovenko",
  },
  {
    id: 7,
    name: "USDC",
    symbol: "USDC",
    type: "Stablecoin",
    founder: "Jeremy Allaire",
  },
  {
    id: 8,
    name: "Tron",
    symbol: "TRX",
    type: "Layer 1",
    founder: "Justin Sun",
  },
];
