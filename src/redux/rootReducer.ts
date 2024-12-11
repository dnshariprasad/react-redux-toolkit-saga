import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

// Combine all your reducers (you can add more reducers as needed)
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
