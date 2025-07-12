import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});

async function getCryptocurrencies() {
  await client.connect();

  const result = await client.query("SELECT * FROM cryptocurrencies");
  const cryptocurrencies = result.rows;
  console.log({ cryptocurrencies });

  await client.end();
}

async function addCryptocurrency() {
  await client.connect();

  const result = await client.query(
    "INSERT INTO cryptocurrencies (name, symbol, founder) VALUES ('TOKENOMY', 'TEN', 'Oscar Darmawan');"
  );
  console.log({ result });

  const cryptocurrencies = result.rows;
  console.log({ cryptocurrencies });

  await client.end();
}

getCryptocurrencies();
