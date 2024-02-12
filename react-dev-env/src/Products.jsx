import "./App.css";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() {
  let [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  async function fetchProducts() {
    let response = await fetch("http://localhost:3000/products");
    let data = await response.json();
    setProducts(data);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  if (searchInput.length > 0) {
    products = products.filter((product) => {
      console.log(product.name.toLowerCase().includes('c'));
      console.log(searchInput)
      return product.name.toLowerCase().includes(searchInput);
    });
    console.log(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id='all-products-page'>
      <input
        type="text"
        placeholder="Search here..."
        id="search-bar"
        onChange={handleChange}
        value={searchInput}
      />
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
    </div>
  );
}

export default Products;
