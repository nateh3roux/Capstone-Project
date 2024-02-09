import { useContext } from "react";
import { CartContext } from "./context/cart";
import CreditCardForm from "./CreditCardForm";
import ShippingForm from "./ShippingForm";

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
  console.log("Cart:", cartItems); // Add this line to check the value of cart
  console.log("Cart total:", getCartTotal); // Add this line to check the value of cart
  const cartTotal = getCartTotal();
  console.log(clearCart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems &&
          cartItems.map(
            (
              item,
              index // Add a null check for cart
            ) => (
              <li key={index}>
                {item.name} - ${item.price} - {item.quantity}
              </li>
            )
          )}
      </ul>
      <h4>Cart Total: ${cartTotal}</h4>
      <button onClick={clearCart}>Clear Cart</button>
      <ShippingForm></ShippingForm>
    </div>
  );
};

export default CartPage;
