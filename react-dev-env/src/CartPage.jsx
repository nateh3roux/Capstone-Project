import { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "./context/cart";
import Axios from "axios";
import ShippingForm from "./ShippingForm";

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  // const [recommendedItem, setRecommendedItem] = useState(null);
  console.log("Cart:", cartItems); // Add this line to check the value of cart
  console.log("Cart total:", getCartTotal); // Add this line to check the value of cart
  const cartTotal = getCartTotal();
  // console.log({
  //   id: cartItems[0].id,
  //   price: cartItems[0].price,
  //   popularity: cartItems[0].popularity,
  //   visual_appeal: cartItems[0].visual_appeal,
  // });

  // useEffect(() => {
  //   // Make a POST request to fetch the recommended item
  //   const fetchRecommendation = async () => {
  //     try {
  //       const response = await Axios.post(
  //         "http://localhost:3000/recommendations",
  //         {
  //           id: cartItems[0].id,
  //           price: cartItems[0].price,
  //           popularity: cartItems[0].popularity,
  //           visual_appeal: cartItems[0].visual_appeal,
  //         }
  //       );
  //       console.log(response);
  //       setRecommendedItem(response.data);
  //     } catch (error) {
  //       console.error("Error fetching recommendation:", error);
  //     }
  //   };

  //   if (cartItems){ fetchRecommendation();}
  // }, [cartItems]);
  // console.log(recommendedItem)
  return (
    <div id="cart-page-div">
      <div id="items-in-cart-div">
        <h2 className="cart-title">Your Cart</h2>
        <ul id="cart-items-list">
          <div className="cart-item-div">
            <div className="cart-img header"></div>
            <p className="cart-info cart-info-name header">Name</p>
            <p className="cart-info cart-info-price header">Price</p>
            <p className="cart-info cart-info-quantity header">Qty</p>
          </div>
          {cartItems &&
            cartItems.map(
              (
                item,
                index // Add a null check for cart
              ) => (
                <div key={index} className="cart-item-div">
                  <img src={item.imageUrl} className="cart-img"></img>
                  <p className="cart-info cart-info-name">{item.name}</p>
                  <p className="cart-info cart-info-price">${item.price}</p>
                  <p className="cart-info cart-info-quantity">
                    {item.quantity}
                  </p>
                </div>
              )
            )}
        </ul>
        <div id="clear-cart-total-div">
          <button onClick={clearCart} className="cart-button">
            Clear Cart
          </button>
          <h4 id="cart-total">Subtotal: ${cartTotal.toFixed(2)}</h4>
        </div>
        {/* {recommendedItem && (
          <div>
            <h3>Recommended Item</h3>
            <p>
              {recommendedItem.name} - {recommendedItem.price}
            </p>
          </div>
        )} */}
      </div>
      <div id="shipping-form-div">
        <h2 className="cart-title">Payment & Shipping</h2>
        <ShippingForm></ShippingForm>
      </div>
    </div>
  );
};

export default CartPage;
