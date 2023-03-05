import React, { useContext } from "react";
import { useCart } from "../../context/cartContext";

const CartView = () => {
  const { cartItems, removeItemFromCart, clearCart, totalQuantity } = useCart;

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito esta vacio</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} ({item.artist}) - {item.price}$
              <button onClick={() => removeItemFromCart(index)}>Remove</button>
            </li>
          ))}
          <li>
            <b>Total: {totalQuantity}$</b>
          </li>
        </ul>
      )}
      <button onClick={() => clearCart()}>Empty Cart</button>
    </div>
  );
};

export {CartView} ;
