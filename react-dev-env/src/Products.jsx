import "./App.css";
import { useState, useEffect } from "react";

function Products() {
  let [products, setProducts] = useState([]);
  async function fetchProducts() {
    let response = await fetch("http://localhost:3000/products");
    let data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products)
  return (
    <section id="productsList">
      {products.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
    </section>
  );
}

export default Products;
