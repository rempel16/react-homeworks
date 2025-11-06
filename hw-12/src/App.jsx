import { useState } from "react";
import ValueDisplay from "./components/ValueDisplay/ValueDisplay";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <h1>Current and Previous Value</h1>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something"
        className="input"
      />

      <ValueDisplay value={inputValue} />
    </div>
  );
}

export default App;
