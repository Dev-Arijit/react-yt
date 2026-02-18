import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    console.log("incresing...");
    setCount(count+1);
  }

  function decreaseCount() {
    console.log("decreasing...");
    setCount(count-1);
  }

  function jump5() {
    setCount(count+5);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={jump5}>Jump by 5</button>
    </div>
  );
};

export default App;
