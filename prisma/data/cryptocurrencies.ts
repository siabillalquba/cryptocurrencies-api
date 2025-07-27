// type SeedCryptocurrency = Omit<Cryptocurrency, "id">;
type SeedCryptocurrency = {
  name: string;
  symbol: string;
  founderSlug: string;
  typeSlug: string;
};

export const dataSeedCryptocurrencies: SeedCryptocurrency[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    founderSlug: "satoshi-nakamoto",
    typeSlug: "layer-1",
  },
  {
    name: "Etherium",
    symbol: "ETH",
    founderSlug: "vitalik-buterin",
    typeSlug: "layer-1",
  },
  {
    name: "Tether",
    symbol: "USDT",
    founderSlug: "brock-pierce",
    typeSlug: "stablecoin",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    founderSlug: "chris-larsen",
    typeSlug: "layer-1",
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    founderSlug: "changpeng-cao",
    typeSlug: "layer-1",
  },
  {
    name: "Solana",
    symbol: "SOL",
    founderSlug: "anatoly-yakovenko",
    typeSlug: "layer-1",
  },
  {
    name: "USDC",
    symbol: "USDC",
    founderSlug: "jeremy-allaire",
    typeSlug: "stablecoin",
  },
  {
    name: "Tron",
    symbol: "TRX",
    founderSlug: "justin-sun",
    typeSlug: "layer-1",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    founderSlug: "billy_markus",
    typeSlug: "memecoin",
  },
];
