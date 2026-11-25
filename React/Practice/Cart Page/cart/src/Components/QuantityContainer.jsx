import React from "react";
import styles from "./QuantityContainer.module.css";

const QuantityContainer = ({ quantity }) => {
  return (
    <div className={styles.quantityContainer}>
      <button className={styles.quantityButton}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.quantityButton}>+</button>
    </div>
  );
};

export default QuantityContainer;
