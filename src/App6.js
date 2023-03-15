import "./App.css";
import Timer from "./components/Timer";

const ap = () => {
  return fetch(`http://localhost:3000/todo`).then((res) => res.json());
};

async function get() {
  try {
    let dat = await ap();
    console.log(dat);
  } catch (error) {
    console.log("error");
  }
}
get();

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
