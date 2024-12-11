import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_TEN,
  DECREMENT_BY_TEN,
  RESET,
  CounterAction,
} from "./actions";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY_TEN:
      return { ...state, count: state.count + 10 };
    case DECREMENT_BY_TEN:
      return { ...state, count: state.count - 10 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
