import { PrismaClient } from "../src/generated/prisma";

import { dataSeedCryptocurrencies } from "./data/cryptocurrencies";
import { dataSeedFounders } from "./data/founders";
import { dataSeedTypes } from "./data/types";

const prisma = new PrismaClient();

async function main() {
  await seedFounders();
  await seedTypes();
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

async function seedTypes() {
  for (const type of dataSeedTypes) {
    const createdType = await prisma.type.upsert({
      where: { slug: type.slug },
      update: {},
      create: {
        slug: type.slug,
        name: type.name,
      },
    });
    console.log(`Type: ${createdType.name} (${createdType.slug})`);
  }
}

async function seedCryptocurrencies() {
  for (const seedCryptocurrency of dataSeedCryptocurrencies) {
    const upsertBody = {
      name: seedCryptocurrency.name,
      symbol: seedCryptocurrency.symbol,
      founder: { connect: { slug: seedCryptocurrency.founderSlug } },
      type: { connect: { slug: seedCryptocurrency.typeSlug } },
    };

    const cryptocurrency = await prisma.cryptocurrency.upsert({
      where: { symbol: seedCryptocurrency.symbol },
      update: upsertBody,
      create: upsertBody,
    });
    console.log(
      `Cryptocurrency: ${cryptocurrency.name} (${cryptocurrency.symbol})`
    );
  }
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
