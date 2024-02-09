import "./App.css";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

function ProductPage() {
  let [product, setProduct] = useState([]);
  let { id } = useParams();
  async function fetchProduct() {
    let response = await fetch(`http://localhost:3000/products/${id}`);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(product);
  return (
    <ProductCard
      name={product.name}
      price={product.price}
      description={product.description}
      inStock={product.inStock}
      imageUrl={product.imageUrl}
    ></ProductCard>
  );
}

export default ProductPage;
