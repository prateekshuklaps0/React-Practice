import "./App.css";
import { useContext, useEffect, useState } from "react";
import RoutesPage from "./contexts/routes";
import Nav from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <RoutesPage />
    </div>
  );
}

export default App;
