# Paradise Nursery

Paradise Nursery is a React front-end shopping application for a houseplant store.
Browse houseplants by category, add them to a Redux-powered shopping cart, adjust
quantities, and review the total cost before checkout.

## Features

- Landing page with company name, background image, About Us section and a Get Started button
- Product listing page with six houseplants in three categories (Air Purifying, Low Maintenance, Flowering), each with thumbnail, name, price and an Add to Cart button that disables after adding
- Header with navigation (Home / Plants / Cart) and a cart icon whose count updates dynamically
- Shopping cart page showing total number of plants and total cost, per-plant thumbnail, name, unit price and line total, increase/decrease quantity buttons, delete button, Continue Shopping and Checkout (Coming Soon)

## Tech stack

- React + Vite
- Redux Toolkit + React Redux (cart state in `src/CartSlice.jsx`, store in `src/store.js`)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
