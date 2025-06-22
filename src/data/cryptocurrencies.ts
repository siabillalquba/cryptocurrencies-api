type Cryptocurrency = {
  id: number;
  name?: string | null;
  type?: "Layer 1" | "Layer 2" | "Stablecoin" | "Memecoin" | null;
};

export const cryptocurrencies: Cryptocurrency[] = [
  {
    id: 1,
    name: "Bitcoin",
    type: "Layer 1",
  },
  {
    id: 2,
    name: "Etherium",
    type: "Layer 1",
  },
  {
    id: 3,
    name: "Tether",
    type: "Stablecoin",
  },
  {
    id: 4,
    name: "XRP",
    type: "Layer 1",
  },
  {
    id: 5,
    name: "BNB",
    type: "Layer 1",
  },
];
