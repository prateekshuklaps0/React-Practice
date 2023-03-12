import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>

      <h1>Fan : {toggle ? "On" : "Off"}</h1>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Switch
      </button>
    </div>
  );
}

export default App;
