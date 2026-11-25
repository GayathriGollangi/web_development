import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

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
        <AddTodo
          text={text}
          handleAddTodo={handleAddTodo}
          handleText={handleText}
        />
      </div>
      <ul>
        <TodoList todo={todo} />
      </ul>
    </div>
  );
};

export default Todo;
