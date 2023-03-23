import "./App.css";
import { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/contact" element={<p>Contact</p>} />
      </Routes>
    </div>
  );
}

export default App;
