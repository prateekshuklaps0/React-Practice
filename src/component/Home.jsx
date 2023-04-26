import { useState, useContext, useEffect } from "react";
import { Context } from "./ContextApi";

function Home() {
  const { isAuth, token } = useContext(Context);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>This Is Home Page</h1>
      <h3>User is {isAuth ? "Authorised" : "Not Authorised"}</h3>
      {token && <h4>User Token is - {token}</h4>}
    </div>
  );
}
export default Home;
