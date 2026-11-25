import React from "react";
import styles from "./LabelPrice.module.css";

const LabelPrice = ({ label, price }) => {
  return (
    <div className={styles.labelPrice}>
      <p className={styles.label}>{label}</p>
      <p className={styles.price}>INR: {price}</p>
    </div>
  );
};

export default LabelPrice;
