import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  //   handle text
  const handleText = (event) => {
    setText(event.target.value);
    // console.log(text);
  };

  //   handle todo
  const handleAddTodo = () => {
    const newItem = {
      title: text,
      status: false,
      id: Date.now() + Math.random(),
    };
    console.log(newItem);
    // adding newItem to todo
    const addNewTodo = [...todo, newItem];
    console.log(addNewTodo);
    // updating todo
    setTodo(addNewTodo);
    setText("");
  };

  //   handle toggle
  const handleToggle = (id) => {
    const todoAfterUpdate = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item,
    );
    setTodo(todoAfterUpdate);
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
        <TodoList todo={todo} handleToggle={handleToggle} />
      </ul>
    </div>
  );
};

export default Todo;
