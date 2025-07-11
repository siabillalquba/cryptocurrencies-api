CREATE TABLE "cryptocurrencies" (
  "id" integer,
  "name" varchar,
  "symbol" varchar,
  "founder" varchar,
  "created_at" timestamp
);

CREATE TABLE "types" (
  "id" integer,
  "name" varchar,
  "cryptocurrency_id" integer
);

ALTER TABLE "types" ADD CONSTRAINT "cryptocurrencies_types" FOREIGN KEY ("cryptocurrency_id") REFERENCES "cryptocurrencies" ("id");
