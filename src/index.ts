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

export default app;
