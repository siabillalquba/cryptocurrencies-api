import "dotenv/config";
import { PrismaClient } from "./generated/prisma";
import { Hono } from "hono";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Cryptocurrencies API",
    cryptocurrencies: "/cryptocurrencies",
  });
});

// Get all cryptocurrencies
app.get("/cryptocurrencies", async (c) => {
  const allCryptocurrencies = await prisma.cryptocurrency.findMany({
    include: {
      type: true,
      founder: true,
    },
  });

  return c.json(allCryptocurrencies);
});

// Get cryptocurrency by symbol
app.get("/cryptocurrencies/:symbol", async (c) => {
  const symbol = c.req.param("symbol");

  const cryptocurrency = await prisma.cryptocurrency.findUnique({
    where: { symbol },
    include: {
      type: true,
      founder: true,
    },
  });

  if (!cryptocurrency) return c.notFound();

  return c.json(cryptocurrency);
});

// Add new cryptocurrency
app.post("/cryptocurrencies", async (c) => {
  const body = await c.req.json();

  const newCryptocurrency = await prisma.cryptocurrency.create({
    data: {
      name: body.name,
      symbol: body.symbol,
      founder: body.founderSlug
        ? {
            connect: { slug: body.founderSlug },
          }
        : undefined,
      type: body.typeSlug
        ? {
            connect: { slug: body.typeSlug },
          }
        : undefined,
    },
    include: {
      type: true,
      founder: true,
    },
  });

  return c.json(newCryptocurrency);
});

// Delete all cryptocurrencies
app.delete("/cryptocurrencies", async (c) => {
  const result = await prisma.cryptocurrency.deleteMany();
  return c.json(result);
});

// Delete cryptocurrency by id
// app.delete("/cryptocurrencies/:id", (c) => {
//   const id = Number(c.req.param("id"));

//   const filteredCryptocurrency = cryptocurrencies.filter(
//     (cryptocurrency) => cryptocurrency.id != id
//   );

//   cryptocurrencies = filteredCryptocurrency;

//   return c.json(filteredCryptocurrency);
// });

// TODO:Patch cryptocurrency by id
// app.patch("/cryptocurrencies/:id", async (c) => {
//   const id = Number(c.req.param("id"));
//   const body = await c.req.json();

//   const newCryptocurrency = {
//     id,
//     ...body,
//   };

//   const cryptocurrency = cryptocurrencies.find(
//     (cryptocurrency) => cryptocurrency.id == id
//   );

//   if (!cryptocurrency) {
//     return c.json(
//       {
//         message: "Cryptocurrency not found",
//       },
//       404
//     );
//   }

//   const updatedCryptocurrency = cryptocurrencies.map((cryptocurrency) => {
//     if (cryptocurrency.id == id) {
//       return {
//         ...cryptocurrency,
//         ...newCryptocurrency,
//       };
//     }
//     return cryptocurrency;
//   });

//   cryptocurrencies = updatedCryptocurrency;

//   return c.json(newCryptocurrency);
// });

// TODO:Update cryptocurrency by id
app.put("/cryptocurrencies/:id", async (c) => {
  //
});

export default app;
