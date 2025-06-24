# Cryptocurrencies API

## REST API Specification

| Endpoint                 | HTTP   | Description                 | Done |
| ------------------------ | ------ | --------------------------- | ---- |
| `/cryptocurrencies`      | GET    | Get all cryptocurrencies    | ✅   |
| `/cryptocurrencies/:id`  | GET    | Get cryptocurrency by id    | ✅   |
| `/cryptocurrencies`      | POST   | Add new cryptocurrency      |      |
| `/cryptocurrencies`      | DELETE | Delete all cryptocurrencies |      |
| `/cryptocurrencies/:id}` | DELETE | Delete cryptocurrency by id |      |
| `/cryptocurrencies/:id}` | PATCH  | Patch cryptocurrency by id  |      |
| `/cryptocurrencies/:id}` | PUT    | Update cryptocurrency by id |      |

## Endpoints

Endpoint HTTP Description
/items GET Get all items
/items/{id} GET Get item by id
/items POST Add new item
/items DELETE Delete all items
/items/{id} DELETE Delete item by id
/items/{id} PATCH Patch item by id
/items/{id} PUT Update item by id

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
