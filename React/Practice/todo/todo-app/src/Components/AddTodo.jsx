import React from "react";

const AddTodo = ({ handleAddTodo, handleText, text }) => {
  return (
    <div>
      <input type="text" onChange={handleText} value={text} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
