// import { useState } from "react";

// function Add_inp_comp(props) {
//   console.log(props);
//   return (
//     <div>
//       <input type="text" value={props.val} onChange={props.handle_inp} />
//       <button onClick={props.handle_add}>Add</button>
//     </div>
//   );
// }

// function Todo() {
//   const [val, setVal] = useState("");
//   const [store_val, setStore_val] = useState([]);

//   const handle_inp = (e) => {
//     setVal(e.target.value);
//   };

//   const handle_add = (e) => {
//     const new_todo = {
//       title: val,
//       status: false,
//       id: Math.random(10 * 5),
//     };
//     const add_new = [...store_val, new_todo];

//     setStore_val(add_new);

//     setVal("");
//   };

//   const style = {
//     border: "1px solid gray",
//     justifyContent: "space-around",
//     margin: "10px",
//     display: "flex",
//   };

//   return (
//     <div>
//       <Add_inp_comp val={val} handle_inp={handle_inp} handle_add={handle_add} />
//       {/* Show Here */}
//       {store_val.map((el) => (
//         <div style={style} key={el.id}>
//           <p>{el.title}</p>
//           <p>{el.status ? "Completed" : "Not Completed"}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Todo;
