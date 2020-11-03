const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (res, req) => {
  const { id } = res.params;
  const product = products.find(p => p._id === id);

  req.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () => console.log(`Server running in ${process.env.NDOE_ENV} mode on port ${PORT}`)
);
