import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ item, handleDelete, handleToggle }) => {
  return (
    <li className={styles.todoItem}>
      <span className={styles.title}>
        {item.title} -{" "}
        <span className={item.status ? styles.completed : styles.pending}>
          {item.status ? "Completed" : "Not completed"}
        </span>
      </span>

      <button
        className={styles.deleteBtn}
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>

      <button
        className={styles.toggleBtn}
        onClick={() => handleToggle(item.id)}
      >
        Toggle
      </button>
    </li>
  );
};

export default TodoItem;
