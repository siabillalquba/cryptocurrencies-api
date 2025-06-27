import { Hono } from "hono";
import { cryptocurrencies } from "./data/cryptocurrencies";

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

  const cryptocurrency = cryptocurrencies.find(
    (cryptocurrency) => cryptocurrency.id == id
  );

  if (!cryptocurrency) {
    return c.json(
      {
        message: "Cryptocurrency not found",
      },
      404
    );
  }

  return c.json(cryptocurrency);
});

app.post("/cryptocurrencies", async (c) => {
  const body = await c.req.json();

  const updatedCryptocurrencies = [
    ...cryptocurrencies,
    {
      id: cryptocurrencies[cryptocurrencies.length - 1].id + 1 || 1,
      ...body,
    },
  ];

  return c.json(body);
});

export default app;
