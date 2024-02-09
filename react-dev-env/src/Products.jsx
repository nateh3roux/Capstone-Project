import "./App.css";
import { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import ProductCard from "./ProductCard";
>>>>>>> a05c306055388bd60cacfd689d19ea30effe66eb

function Products() {
  let [products, setProducts] = useState([]);
  async function fetchProducts() {
    let response = await fetch("http://localhost:3000/products");
<<<<<<< HEAD
    console.log(response);
=======
>>>>>>> a05c306055388bd60cacfd689d19ea30effe66eb
    let data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
<<<<<<< HEAD
 console.log(products)
 return (
    <section id="productsList">
      {products.map((product, index) => (
        <li key={index}>{product.name}</li>
=======
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
>>>>>>> a05c306055388bd60cacfd689d19ea30effe66eb
      ))}
    </section>
  );
}

export default Products;
