import "./App.css";
import { useState, useEffect, useContext } from "react";
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
    setMessage(`Added ${product.name} to your cart!`);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div id="product-page-div">
      <img id="product-details-img" src={product.imageUrl}></img>
      <div id="product-details">
        <h3 id="product-details-name">{product.name}</h3>
        {product.inStock ? (
          <p id="product-details-price">${product.price}</p>
        ) : (
          <p id="item-out-of-stock">Item is out of stock</p>
        )}
        <p id="product-details-description">{product.description}</p>
        {product.inStock ? (
          <div id="button-msg-div">
            <button
              type="submit"
              onClick={handleAddToCart}
              className="cart-button"
              id="add-to-cart-btn"
            >
              Add to Cart
            </button>
            <h3 id="added-to-cart-msg">{message}</h3>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
