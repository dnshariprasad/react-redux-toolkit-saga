import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByTen,
  decrementByTen,
  reset,
} from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <div>
      <h2>Current State {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -1
      </button>
      <button onClick={() => dispatch(incrementByTen(10))}>+10</button>
      <button
        onClick={() => {
          dispatch(decrementByTen(10));
        }}
      >
        -10
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
