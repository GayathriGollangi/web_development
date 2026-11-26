import React from "react";

const TodoItem = ({ item, handleDelete, handleToggle }) => {
  return (
    <div>
      <li key={item.id}>
        {item.title}- {item.status ? "Completed" : "Not completed"}
        <button onClick={() => handleDelete(item.id)}>Delete</button>
        <button onClick={() => handleToggle(item.id)}>Toggle</button>
      </li>
    </div>
  );
};

export default TodoItem;
