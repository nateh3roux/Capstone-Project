import React, { useState } from "react";
import axios from "axios";

const AddToCartBtn = ({ product }) => {
  const [recommendations, setRecommendations] = useState([]);

  const handleAddToCart = async () => {
    try {
      // Make a POST request to the API endpoint to get recommendations
      const response = await axios.post("/api/recommendations", {
        price: product.price,
        visual_appeal: product.visual_appeal,
        popularity: product.popularity,
      });

      // Update the state with the recommendations received from the backend
      setRecommendations(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* Display recommendations */}
      {recommendations.map((recommendation, index) => (
        <div key={index}>{recommendation.name}</div>
      ))}
    </div>
  );
};

export default AddToCartBtn;
