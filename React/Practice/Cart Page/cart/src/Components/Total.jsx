import React from "react";
import styles from "./Total.module.css";
const Total = ({ totalPrice }) => {
  return <div className={styles.total}>Total: ₹{totalPrice}</div>;
};

export default Total;
