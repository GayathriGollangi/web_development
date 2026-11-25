import React, { useState } from "react";
import CartItem from "./CartItem";
import styles from "./CartContainer.module.css";
import Total from "./Total";

const cartItems = [
  { id: 1, label: "Noodles", price: 20, quantity: 1 },
  { id: 2, label: "Pizza", price: 100, quantity: 1 },
  { id: 3, label: "Burger", price: 50, quantity: 1 },
];
const CartContainer = () => {
  const [cart, setCart] = useState(cartItems);
  const totalPrice = cart.reduce(function (bag, item) {
    return bag + item.price * item.quantity;
  }, 0);

  const changeQuantity = (id, value) => {
    const updateCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item,
    );
    setCart(updateCart);
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} changeQuantity={changeQuantity} />
        ))}
      </ul>
      <Total totalPrice={totalPrice} />
    </div>
  );
};

export default CartContainer;
