import { Hono } from "hono";
import { dataCryptocurrencies } from "./data/cryptocurrencies";

let cryptocurrencies = dataCryptocurrencies;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Cryptocurrencies API",
    cryptocurrencies: "/cryptocurrencies",
  });
});

app.get("/cryptocurrencies", (c) => {
  return c.json(cryptocurrencies);
});

app.get("/cryptocurrencies/:id", (c) => {
  const id = Number(c.req.param("id"));

  const cryptocurrency = cryptocurrencies.find((cryptocurrency) => cryptocurrency.id == id);

  if (!cryptocurrency) {
    return c.json({ message: "Cryptocurrency not found" }, 404);
  }

  return c.json(cryptocurrency);
});

app.post("/cryptocurrencies", async (c) => {
  const body = await c.req.json();

  const nextId = cryptocurrencies[cryptocurrencies.length - 1].id + 1 || 1;

  const newCryptocurrency = {
    id: nextId,
    ...body,
  };

  const updatedCryptocurrencies = [...cryptocurrencies, newCryptocurrency];

  cryptocurrencies = updatedCryptocurrencies;

  return c.json(newCryptocurrency);
});

// TODO:Delete all cryptocurrencies
app.delete();

// TODO:Delete cryptocurrency by id
app.delete();

// TODO:Patch cryptocurrency by id
app.patch();

// TODO:Update cryptocurrency by id
app.put();

export default app;
