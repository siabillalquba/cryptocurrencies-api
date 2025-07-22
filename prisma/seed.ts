import { PrismaClient } from "../src/generated/prisma";

import { dataSeedCryptocurrencies } from "./data/cryptocurrencies";

const prisma = new PrismaClient();

async function main() {
  for (const seedCryptocurrency of dataSeedCryptocurrencies) {
    const cryptocurrency = await prisma.cryptocurrency.upsert({
      where: { symbol: seedCryptocurrency.symbol },
      update: {},
      create: {
        name: seedCryptocurrency.name,
        symbol: seedCryptocurrency.symbol,
        founderId: seedCryptocurrency.founderId,
        typeId: seedCryptocurrency.typeId,
      },
    });
    console.log(
      `Cryptocurrency: ${cryptocurrency.name} (${cryptocurrency.symbol})`
    );
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
