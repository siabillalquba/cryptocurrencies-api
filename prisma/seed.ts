import { PrismaClient } from "../src/generated/prisma";
const prisma = new PrismaClient();

async function main() {
  const cryptoBitcoin = await prisma.cryptocurrency.upsert({
    where: { symbol: "BTC" },
    update: {},
    create: {
      name: "Bitcoin",
      symbol: "BTC",
      //   type: {
      //     connect: {
      //       slug: "layer-1",
      //     },
      //   },
      //   founder: {
      //     connect: {
      //       slug: "satoshi-nakamoto",
      //     },
      //   },
    },
  });
  console.log({ cryptoBitcoin });
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
