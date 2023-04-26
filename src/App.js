import { useState, useEffect, useRef } from "react";
import Counter from "./3component/Counter";

const initState = 0;

function App() {
  const [count, setCount] = useState(initState);

  const handleClick = (val, e) => {
    setCount((prev) => prev + val);
  };

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h2>Count : {count}</h2>
      <Counter handleClick={handleClick} count={count} />
    </div>
  );
}

export default App;
