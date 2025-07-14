import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const allCryptocurrencies = await prisma.cryptocurrency.findMany();
  console.log(allCryptocurrencies);
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
