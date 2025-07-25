// type SeedCryptocurrency = Omit<Cryptocurrency, "id">;
type SeedCryptocurrency = {
  name: string;
  symbol: string;
  founderSlug: string;
  typeSlug: string | null;
};

export const dataSeedCryptocurrencies: SeedCryptocurrency[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    founderSlug: "satoshi-nakamoto",
    typeSlug: null,
  },
  {
    name: "Etherium",
    symbol: "ETH",
    founderSlug: "vitalik-buterin",
    typeSlug: null,
  },
  {
    name: "Tether",
    symbol: "USDT",
    founderSlug: "person",
    typeSlug: null,
  },
  {
    name: "Ripple",
    symbol: "XRP",
    founderSlug: "chris-larsen",
    typeSlug: null,
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    founderSlug: "changpeng-cao",
    typeSlug: null,
  },
  {
    name: "Solana",
    symbol: "SOL",
    founderSlug: "anatoly-yakovenko",
    typeSlug: null,
  },
  {
    name: "USDC",
    symbol: "USDC",
    founderSlug: "person",
    typeSlug: null,
  },
  {
    name: "Tron",
    symbol: "TRX",
    founderSlug: "person",
    typeSlug: null,
  },
];
