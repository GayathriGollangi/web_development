import React from "react";
import styles from "./AddTodo.module.css";

const AddTodo = ({ handleAddTodo, handleText, text }) => {
  return (
    <div className={styles.form}>
      <input
        type="text"
        className={styles.input}
        onChange={handleText}
        placeholder="Enter your task..."
        value={text}
      />
      <button className={styles.button} onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
