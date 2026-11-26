import React from "react";

const AddTodo = ({ handleAdd, handleChange, inputVal }) => {
  return (
    <div>
      <input type="text" onChange={handleChange} value={inputVal} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
