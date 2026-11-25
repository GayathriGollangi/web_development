import React, { useState } from "react";
import CartItem from "./CartItem";
import styles from "./CartContainer.module.css";

const cartItems = [
  { id: 1, label: "Noodles", price: 20, quantity: 1 },
  { id: 2, label: "Pizza", price: 100, quantity: 1 },
  { id: 3, label: "Burger", price: 50, quantity: 1 },
];
const CartContainer = () => {
  const [cart, setCart] = useState(cartItems);
  console.log(cart);
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default CartContainer;
