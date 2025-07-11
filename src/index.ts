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

// Get all cryptocurrencies
app.get("/cryptocurrencies", (c) => {
  return c.json(cryptocurrencies);
});

// Get cryptocurrency by id
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

// Add new cryptocurrency
app.post("/cryptocurrencies", async (c) => {
  const body = await c.req.json();

  const nextId =
    cryptocurrencies.length === 0
      ? 1
      : cryptocurrencies[cryptocurrencies.length - 1].id + 1;

  const newCryptocurrency = {
    id: nextId,
    ...body,
  };

  const updatedCryptocurrencies = [...cryptocurrencies, newCryptocurrency];

  cryptocurrencies = updatedCryptocurrencies;

  return c.json(newCryptocurrency);
});

// Delete all cryptocurrencies
app.delete("/cryptocurrencies", (c) => {
  cryptocurrencies = [];
  return c.json(cryptocurrencies);
});

// Delete cryptocurrency by id
app.delete("/cryptocurrencies/:id", (c) => {
  const id = Number(c.req.param("id"));

  const filteredCryptocurrency = cryptocurrencies.filter(
    (cryptocurrency) => cryptocurrency.id != id
  );

  cryptocurrencies = filteredCryptocurrency;

  return c.json(filteredCryptocurrency);
});

// TODO:Patch cryptocurrency by id
app.patch("/cryptocurrencies/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  const newCryptocurrency = {
    id,
    ...body,
  };

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

  const updatedCryptocurrency = cryptocurrencies.map((cryptocurrency) => {
    if (cryptocurrency.id == id) {
      return {
        ...cryptocurrency,
        ...newCryptocurrency,
      };
    }
    return cryptocurrency;
  });

  cryptocurrencies = updatedCryptocurrency;

  return c.json(newCryptocurrency);
});

// TODO:Update cryptocurrency by id
app.put("/cryptocurrencies/:id", async (c) => {
  //
});

export default app;
