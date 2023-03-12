import "./App.css";
import { useState } from "react";

function getData() {
  return fetch(`https://reqres.in/api/users?`).then((res) => res.json());
}

function style() {
  return {
    border: "2px solid blue",
    padding: "15px",
    margin: "20px",
  };
}

function Card({ avatar, email, last_name, first_name }) {
  return (
    <div style={style()}>
      <h3>
        {first_name} {last_name}
      </h3>
      <p>{"Email: " + email}</p>
      <img src={avatar}></img>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  async function handleDeposit() {
    try {
      let { data } = await getData();
      setUsers(data);
    } catch (error) {}
  }

  return (
    <div className="App">
      <h1>Fetch The Data</h1>
      <button onClick={handleDeposit}>Get Data</button>
      {users.length > 1 &&
        users.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
}

export default App;
