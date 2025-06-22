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

export default app;
