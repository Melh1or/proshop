const express = require("express");
const products = require("./data/products");

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

app.listen(5000, () => console.log("Server running on port 5000"));
