# Cryptocurrencies API

## REST API Specification

| Endpoint                 | HTTP   | Description                 | Done |
| ------------------------ | ------ | --------------------------- | ---- |
| `/cryptocurrencies`      | GET    | Get all cryptocurrencies    | ✅   |
| `/cryptocurrencies/:id`  | GET    | Get cryptocurrency by id    | ✅   |
| `/cryptocurrencies`      | POST   | Add new cryptocurrency      | ✅   |
| `/cryptocurrencies`      | DELETE | Delete all cryptocurrencies | ✅   |
| `/cryptocurrencies/:id}` | DELETE | Delete cryptocurrency by id | ✅   |
| `/cryptocurrencies/:id}` | PATCH  | Patch cryptocurrency by id  | ✅   |
| `/cryptocurrencies/:id}` | PUT    | Update cryptocurrency by id |      |

## Database Design

Access the Design here: [link](https://dbdiagram.io/d/Cryptocurrencies-API-68653ed2f413ba3508f08685)

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
