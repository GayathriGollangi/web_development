import React from "react";
import styles from "./AddTodo.module.css";

const AddTodo = ({ handleAdd, handleChange, inputVal }) => {
  return (
    <div className={styles.addTodo}>
      <input
        className={styles.input}
        type="text"
        onChange={handleChange}
        value={inputVal}
        placeholder="Enter your todo..."
      />

      <button className={styles.addBtn} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
