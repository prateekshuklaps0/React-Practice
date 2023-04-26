import { useState, useEffect, createContext, Children } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  return (
    <Context.Provider value={{ isAuth, setIsAuth, token, setToken }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
