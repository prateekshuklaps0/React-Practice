import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./ContextApi";

// eve.holt@reqres.in
// cityslicka
const initemail = "eve.holt@reqres.in";
const initpass = "cityslicka";

function LogIn() {
  const { isAuth, setIsAuth, setToken } = useContext(Context);
  const [email, setEmail] = useState(initemail);
  const [password, setPassword] = useState(initpass);
  const [text, setText] = useState("");

  async function FetchLogIn(url) {
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      let dat = await res.json();
      setToken((prev) => dat.token);
      setIsAuth((prev) => true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    FetchLogIn(`https://reqres.in/api/login`);

    setEmail((prev) => initemail);
    setPassword((prev) => initpass);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User is {isAuth ? "Authorised" : "Not Authorised"}</h2>

      <h1>{text}</h1>

      {!isAuth ? (
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail((prev) => e.target.value)}
            value={email}
            type="text"
            placeholder="Enter Email"
          />
          <br />
          <input
            onChange={(e) => setPassword((prev) => e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <input type="submit" />
        </form>
      ) : (
        <button onClick={() => setIsAuth((prev) => false)}>Log Out</button>
      )}
    </div>
  );
}

export default LogIn;
