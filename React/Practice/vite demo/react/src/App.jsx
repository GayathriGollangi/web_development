import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import List from "./List";
import data from "./data";

function App() {
  // console.log(data);

  return <>{<List data={data} />}</>;
}

export default App;
