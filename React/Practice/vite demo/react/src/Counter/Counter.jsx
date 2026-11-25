import React, { useState } from "react";
import styles from "./Counter.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p className={styles.count}>{count}</p>
      <button onClick={handleInc} className={styles.inc}>
        click here for Inc
      </button>
      <button onClick={handleDec} className={styles.dec}>
        Click here for dec
      </button>
    </div>
  );
};

export default Counter;
