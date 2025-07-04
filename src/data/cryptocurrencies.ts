type Cryptocurrency = {
  id: number;
  name: string;
  symbol: string;
  type?: "Layer 1" | "Layer 2" | "Stablecoin" | "Memecoin";
  founder: Founder;
};

type Founder = {
  slug?: string;
  name: string;
  url?: string;
};

export const dataCryptocurrencies: Cryptocurrency[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    type: "Layer 1",
    founder: {
      slug: "satoshi-nakamoto",
      name: "Satoshi Nakamoto",
      url: "https://en.wikipedia.org/wiki/Satoshi_Nakamoto",
    },
  },
  {
    id: 2,
    name: "Etherium",
    symbol: "ETH",
    type: "Layer 1",
    founder: {
      slug: "vitalik-buterin",
      name: "Vitalik Buterin",
      url: "https://en.wikipedia.org/wiki/Vitalik_Buterin",
    },
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    type: "Stablecoin",
    founder: {
      slug: "jan-ludovicus-van-der-velde",
      name: "Jan Ludovicus van der Velde",
      url: "https://en.wikipedia.org/wiki/Jan_Ludovicus_van_der_Velde",
    },
  },
  {
    id: 4,
    name: "Ripple",
    symbol: "XRP",
    type: "Layer 1",
    founder: {
      slug: "chris-larsen-jed-mccaleb",
      name: "Chris Larsen & Jed McCaleb",
      url: "https://en.wikipedia.org/wiki/Chris_Larsen",
    },
  },
  {
    id: 5,
    name: "Binance Coin",
    symbol: "BNB",
    type: "Layer 1",
    founder: {
      slug: "changpeng-zhao",
      name: "Changpeng Zhao",
      url: "https://en.wikipedia.org/wiki/Changpeng_Zhao",
    },
  },
  {
    id: 6,
    name: "Solana",
    symbol: "SOL",
    type: "Layer 1",
    founder: {
      slug: "anatoly-yakovenko",
      name: "Anatoly Yakovenko",
      url: "https://en.wikipedia.org/wiki/Anatoly_Yakovenko",
    },
  },
  {
    id: 7,
    name: "USDC",
    symbol: "USDC",
    type: "Stablecoin",
    founder: {
      slug: "jeremy-allaire",
      name: "Jeremy Allaire",
      url: "https://en.wikipedia.org/wiki/Jeremy_Allaire",
    },
  },
  {
    id: 8,
    name: "Tron",
    symbol: "TRX",
    type: "Layer 1",
    founder: {
      slug: "justin-sun",
      name: "Justin Sun",
      url: "https://en.wikipedia.org/wiki/Justin_Sun",
    },
  },
];
