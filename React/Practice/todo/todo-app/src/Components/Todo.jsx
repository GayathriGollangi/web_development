import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleText = (event) => {
    setText(event.target.value);
    // console.log(text);
  };

  const handleAddTodo = () => {
    const newItem = {
      title: text,
      status: false,
      id: Date.now() + Math.random(),
    };
    console.log(newItem);
    const addNewTodo = [...todo, newItem];
    console.log(addNewTodo);
    setTodo(addNewTodo);
    setText("");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" onChange={handleText} value={text} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todo.map((item) => {
          return (
            <li key={item.id}>
              {item.title} - {item.status ? "Completed" : "Not completed"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
