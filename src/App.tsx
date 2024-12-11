import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Current State {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount((count) => count - 1);
          }
        }}
      >
        -1
      </button>
      <button onClick={() => setCount((count) => count + 10)}>+10</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount((count) => count - 10);
          }
        }}
      >
        -10
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
