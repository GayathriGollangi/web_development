import "./App.css";
import ButtonComponent from "./ButtonComponent";
import { FirstComponent } from "./FirstComponent";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FirstComponent />
      <ButtonComponent buttonText="Try this!" backgroundCol="green" />
      <ButtonComponent buttonText="login!" backgroundCol="blue" />
      <ButtonComponent buttonText="logout!" backgroundCol="yellow" />
    </div>
  );
}

export default App;
