import React from "react";

const TodoList = ({ todo, handleToggle }) => {
  return (
    <div>
      {todo.map((item) => {
        const { title, status, id } = item;
        return (
          <li key={id}>
            {title} - {status ? "Completed" : "Not completed"}
            <button onClick={() => handleToggle(id)}>Toggle</button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
