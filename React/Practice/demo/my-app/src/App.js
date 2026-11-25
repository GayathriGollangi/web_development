import "./App.css";
import { Authentication } from "./Authentication";
import ButtonComponent from "./ButtonComponent";
import { FirstComponent } from "./FirstComponent";

function App() {
  const greenButton = () => {
    alert("green button clicked");
  };
  const blueButton = () => {
    alert("green button clicked");
  };
  const yellowButton = () => {
    alert("green button clicked");
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <FirstComponent />
      <ButtonComponent
        buttonText="Try this!"
        backgroundCol="green"
        click={greenButton}
      />
      <ButtonComponent
        buttonText="login!"
        backgroundCol="blue"
        click={blueButton}
      />
      <ButtonComponent
        buttonText="logout!"
        backgroundCol="yellow"
        click={yellowButton}
      />
      <Authentication />
    </div>
  );
}

export default App;
