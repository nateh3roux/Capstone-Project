// express
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

// Connecting to mongodb
const { MongoClient } = require("mongodb");
let url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// database
const dbName = "bakeryapi";
const db = client.db(dbName);

// collections
const products = db.collection("products");
const type = db.collection("type");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get types
app.get("/type", async (req, res) => {
  const results = await type.find().toArray();
  res.json(results);
});

// get products
app.get("/products", async (req, res) => {
  const results = await products.find().toArray();
  res.json(results);
});

//get product by id
app.get("/products/:id", async (req, res) => {
  const prodId = parseInt(req.params.id);
  try {
    const results = await products.findOne({ id: prodId });
    if (results) {
      res.json(results);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
