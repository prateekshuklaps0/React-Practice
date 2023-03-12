import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    setAmount(amount + 100);
    console.log(`amount is ${amount}`);
  };

  const handleWithdraw = () => {
    setAmount(amount - 100);
    console.log(`amount is ${amount}`);
  };

  return (
    <div className="App">
      <h1>Current : {amount}</h1>
      <button onClick={handleDeposit}>Deposit 100</button>
      <button onClick={handleWithdraw}>Withdraw 100</button>
    </div>
  );
}

export default App;
