import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
const Todos = () => {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleAdd = async () => {
    console.log(inputVal);
    let newTask = {
      title: inputVal,
      status: false,
    };

    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error("Failed to add todo");
      }
      const result = await response.json();
      setData([...data, result]);
      setInputVal("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchingData();
  }, []);

  const handleToggle = async (id) => {
    const selectedTask = data.find((item) => item.id === id);

    const updatedTask = {
      ...selectedTask,
      status: !selectedTask.status,
    };

    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updatedTask.status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }

      const result = await response.json();

      const updatedData = data.map((item) => (item.id === id ? result : item));

      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      Todos
      <div>
        <AddTodo
          handleChange={handleChange}
          handleAdd={handleAdd}
          inputVal={inputVal}
        />
      </div>
      <ul>
        {data.map((item) => {
          return (
            <TodoItem
              item={item}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
