import { useState, useEffect } from "react";

function Counter({ handleClick, count }) {
  return (
    <div>
      <button onClick={(e) => handleClick(1, e)}>+</button>
      <button onClick={(e) => handleClick(-count, e)}>Reset</button>
      <button onClick={(e) => handleClick(-1, e)}>-</button>
    </div>
  );
}
export default Counter;
