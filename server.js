// express
const express = require("express");
const cors = require("cors");
const { PythonShell } = require("python-shell");
const app = express();
app.use(cors());
const router = express.Router();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to mongodb
const { MongoClient } = require("mongodb");
let url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
client.connect();

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

app.post("/checkout", async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection("SalesData");

    // Insert the form data into the database
    const {
      firstName,
      lastName,
      address,
      state,
      city,
      zipCode,
      cardNumber,
      expirationMonth,
      expirationYear,
      CVC,
    } = req.body;
    const result = await collection.insertOne(req.body);

    res.status(201).json({ message: "Form data saved successfully" });
    res.end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
    res.end();
  }
});

// Define the route to handle requests for product recommendations
app.post("/recommendations", (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Route /recommendations accessed");
  // Extract relevant details of the product from the request
  const { price, visual_appeal, popularity } = req.body;
  console.log("Price:", price);
  console.log("Visual Appeal:", visual_appeal);
  console.log("Popularity:", popularity);

  // Call the Python script to get recommendations
  PythonShell.run(
    "react-dev-env/src/python_scripts/KnnScript.py",
    { args: [price, visual_appeal, popularity] },
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        const recommendations = JSON.parse(results[0]);
        res.json(recommendations);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
