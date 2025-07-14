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

app.get("/cryptocurrencies", async (c) => {
  const allCryptocurrencies = await prisma.cryptocurrency.findMany();

  return c.json(allCryptocurrencies);
});

app.get("/cryptocurrencies/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const cryptocurrency = await prisma.cryptocurrency.findUnique({
    where: { id },
  });

  if (!cryptocurrency) return c.notFound();

  return c.json(cryptocurrency);
});

app.post("/cryptocurrencies", async (c) => {
  const body = await c.req.json();

  const newCryptocurrency = await prisma.cryptocurrency.create({
    data: {
      name: body.name,
      symbol: body.symbol,
      founder: body.founder,
    },
  });

  return c.json(newCryptocurrency);
});

app.delete("/cryptocurrencies");

app.delete("/cryptocurrencies/:id");

app.patch("/cryptocurrencies/:id");

app.put("/cryptocurrencies/:id");

export default app;
