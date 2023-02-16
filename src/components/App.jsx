import React, { useState } from "react";
import SlotM from "./SlotM";

const App = () => {
  const state = useState();

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickDecr = () => {
    count === 0 ? 0 : setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>

        <button onClick={handleClick}>incr</button>
        <button onClick={handleClickDecr}>decr</button>
      </div>
    </>
  );
};

export default App;
