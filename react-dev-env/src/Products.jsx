import "./App.css";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

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
  console.log(products);

  return (
    <section id="products-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          inStock={product.inStock}
          imageUrl={product.imageUrl}
        ></ProductCard>
      ))}
    </section>
  );
}

export default Products;
