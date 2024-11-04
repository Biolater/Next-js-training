"use client";
import { useState } from "react";

export const Counter = () => {
  console.log("This is the counter");
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      {counter}
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
