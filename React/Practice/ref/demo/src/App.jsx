import React, { useRef, useState } from "react";

const App = () => {
  const val = useRef(0);
  const [value, setValue] = useState(0);
  const handleRef = () => {
    val.current = val.current + 1;
    console.log(val);
    setValue(value + 1);
  };
  return (
    <div>
      <h1>{value}</h1>

      <button onClick={handleRef}>start</button>
    </div>
  );
};

export default App;
