import "./App.css";
import { useState } from "react";

const Nav = ({ addHandler }) => {
  return <Button addHandler={addHandler} />;
};

const Button = ({ addHandler }) => {
  return <button onClick={addHandler}>ADD ONE</button>;
};

const Main = ({ count }) => {
  return <CountDisplay count={count} />;
};

const CountDisplay = ({ count }) => {
  return <p>{count}</p>;
};

function App() {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Nav addHandler={addHandler} />
      <Main count={count} />
    </div>
  );
}

export default App;
