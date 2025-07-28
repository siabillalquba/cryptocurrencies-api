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

// Delete cryptocurrency by symbol
app.delete("/cryptocurrencies/:symbol", async (c) => {
  const symbol = c.req.param("symbol");

  const cryptocurrency = await prisma.cryptocurrency.delete({
    where: { symbol },
  });

  return c.json(cryptocurrency);
});

// TODO:Patch cryptocurrency by symbol
app.patch("/cryptocurrencies/:symbol", async (c) => {
  const symbol = c.req.param("symbol");
  const bodyJson = await c.req.json();

  const cryptocurrency = await prisma.cryptocurrency.update({
    where: { symbol },
    data: {
      name: bodyJson.name,
    },
  });

  return c.json(cryptocurrency);
});

// TODO:Update cryptocurrency by id
app.put("/cryptocurrencies/:id", async (c) => {
  //
});

export default app;
