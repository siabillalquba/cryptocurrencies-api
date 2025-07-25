import { PrismaClient } from "../src/generated/prisma";

import { dataSeedCryptocurrencies } from "./data/cryptocurrencies";
import { dataSeedFounders } from "./data/founders";

const prisma = new PrismaClient();

async function main() {
  await seedFounders();
  await seedCryptocurrencies();
}

async function seedFounders() {
  for (const founder of dataSeedFounders) {
    const createdFounder = await prisma.founder.upsert({
      where: { slug: founder.slug },
      update: {},
      create: {
        slug: founder.slug,
        name: founder.name,
        url: founder.url,
      },
    });
    console.log(`Founder: ${createdFounder.name} (${createdFounder.slug})`);
  }
}

async function seedCryptocurrencies() {
  for (const seedCryptocurrency of dataSeedCryptocurrencies) {
    const upsertBody = {
      name: seedCryptocurrency.name,
      symbol: seedCryptocurrency.symbol,
      founder: { connect: { slug: seedCryptocurrency.founderSlug } },
    };

    const cryptocurrency = await prisma.cryptocurrency.upsert({
      where: { symbol: seedCryptocurrency.symbol },
      update: upsertBody,
      create: upsertBody,
    });
    console.log(`Cryptocurrency: ${cryptocurrency.name} (${cryptocurrency.symbol})`);
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
