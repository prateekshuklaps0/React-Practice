import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const intID = setInterval(() => {
      setCount((count) => {
        if (count === 1) {
          clearInterval(intID);
          return 0;
        }
        return count - 1;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Timer : {count}</h1>
    </div>
  );
}

export default Timer;
