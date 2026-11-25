import React from "react";
import LabelPrice from "./LabelPrice";
import QuantityContainer from "./QuantityContainer";
import styles from "./CartItem.module.css";

const CartItem = ({ id, label, price, quantity }) => {
  return (
    <li className={styles.cartItem}>
      <LabelPrice price={price} label={label} />
      <QuantityContainer quantity={quantity} />
    </li>
  );
};

export default CartItem;
