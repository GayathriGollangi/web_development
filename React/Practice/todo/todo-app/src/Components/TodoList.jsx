import React from "react";

const TodoList = ({ todo }) => {
  return (
    <div>
      {todo.map((item) => {
        return (
          <li key={item.id}>
            {item.title} - {item.status ? "Completed" : "Not completed"}
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
