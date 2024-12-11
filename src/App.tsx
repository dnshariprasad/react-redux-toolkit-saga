import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByTen,
  decrementByTen,
  reset,
} from "./redux/actions";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

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
      <button onClick={() => dispatch(incrementByTen())}>+10</button>
      <button
        onClick={() => {
          dispatch(decrementByTen());
        }}
      >
        -10
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
