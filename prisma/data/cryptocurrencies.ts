// type SeedCryptocurrency = Omit<Cryptocurrency, "id">;
type SeedCryptocurrency = {
  name: string;
  symbol: string;
  founderId?: string | null;
  typeId?: string | null;
};

export const dataSeedCryptocurrencies: SeedCryptocurrency[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    founderId: null,
    typeId: null,
  },
  {
    name: "Etherium",
    symbol: "ETH",
    founderId: null,
    typeId: null,
  },
  {
    name: "Tether",
    symbol: "USDT",
    founderId: null,
    typeId: null,
  },
  {
    name: "Ripple",
    symbol: "XRP",
    founderId: null,
    typeId: null,
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    founderId: null,
    typeId: null,
  },
  {
    name: "Solana",
    symbol: "SOL",
    founderId: null,
    typeId: null,
  },
  {
    name: "USDC",
    symbol: "USDC",
    founderId: null,
    typeId: null,
  },
  {
    name: "Tron",
    symbol: "TRX",
    founderId: null,
    typeId: null,
  },
];
