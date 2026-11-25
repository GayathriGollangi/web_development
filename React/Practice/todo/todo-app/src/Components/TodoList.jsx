import React from "react";
import styles from "./TodoList.module.css";

const TodoList = ({ todo, handleToggle }) => {
  return (
    <div className={styles.list}>
      {todo.map((item) => {
        const { title, status, id } = item;
        return (
          <li className={styles.item} key={id}>
            {title} - {status ? "Completed" : "Not completed"}
            <button className={styles.button} onClick={() => handleToggle(id)}>
              Toggle
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
