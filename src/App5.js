import "./App.css";
import { useState, useEffect } from "react";

const PostItem = (props) => {
  return (
    <div>
      <img src={props.avatar}></img>
    </div>
  );
};

async function getData() {
  return fetch(`https://reqres.in/api/users`).then((res) => res.json());
}

function Posts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const dat = await getData();
      setData(dat.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <h1>POSTS</h1>
      {/* <button onClick={fetchData}>Get Posts</button> */}

      {data.length > 0 &&
        data.map((item) => {
          return <PostItem key={item.id} {...item} />;
        })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
