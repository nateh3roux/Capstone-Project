import "./App.css";
import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { CartContext } from "./context/cart";

function ProductPage() {
  let [product, setProduct] = useState([]);
  const [message, setMessage] = useState("");
  const { addToCart } = useContext(CartContext);
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

  const handleAddToCart = () => {
    addToCart(product);
    setMessage("Added to cart!");
    setTimeout(() => {
      setMessage("");
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  return (
    <div>
      <ProductCard
        name={product.name}
        price={product.price}
        description={product.description}
        inStock={product.inStock}
        imageUrl={product.imageUrl}
      ></ProductCard>
      <button type="submit" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <h3>{message}</h3>
    </div>
  );
}

export default ProductPage;
