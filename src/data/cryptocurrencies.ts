type Cryptocurrency = {
  id: number;
  name: string;
  symbol: string;
  type?: "Layer 1" | "Layer 2" | "Stablecoin" | "Memecoin";
};

export const dataCryptocurrencies: Cryptocurrency[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    type: "Layer 1",
  },
  {
    id: 2,
    name: "Etherium",
    symbol: "ETH",
    type: "Layer 1",
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    type: "Stablecoin",
  },
  {
    id: 4,
    name: "Ripple",
    symbol: "XRP",
    type: "Layer 1",
  },
  {
    id: 5,
    name: "Binance Coin",
    symbol: "BNB",
    type: "Layer 1",
  },
];
