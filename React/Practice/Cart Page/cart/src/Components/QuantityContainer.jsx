import React from "react";
import styles from "./QuantityContainer.module.css";

const QuantityContainer = ({ quantity, id, changeQuantity }) => {
  return (
    <div className={styles.quantityContainer}>
      <button
        className={styles.quantityButton}
        onClick={() => changeQuantity(id, -1)}
      >
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button
        className={styles.quantityButton}
        onClick={() => changeQuantity(id, +1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityContainer;
