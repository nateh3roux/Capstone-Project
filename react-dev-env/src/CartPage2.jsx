import { useState, useEffect } from "react";
import Axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [recommendedItem, setRecommendedItem] = useState(null);

  useEffect(() => {
    // Fetch cart items from your backend API or local storage
    // Set the cart items state
  }, []);

  useEffect(() => {
    // Make a POST request to fetch the recommended item
    const fetchRecommendation = async () => {
      try {
        const response = await Axios.post("/recommendations", { cartItems });
        setRecommendedItem(response.data);
      } catch (error) {
        console.error("Error fetching recommendation:", error);
      }
    };

    fetchRecommendation();
  }, [cartItems]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      {recommendedItem && (
        <div>
          <h3>Recommended Item</h3>
          <p>
            {recommendedItem.name} - {recommendedItem.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
