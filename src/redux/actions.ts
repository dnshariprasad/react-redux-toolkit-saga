// src/redux/actions.js

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_TEN = "INCREMENT_BY_TEN";
export const DECREMENT_BY_TEN = "DECREMENT_BY_TEN";
export const RESET = "RESET";

// Action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByTen = () => ({
  type: INCREMENT_BY_TEN,
});

export const decrementByTen = () => ({
  type: DECREMENT_BY_TEN,
});
export const reset = () => ({
  type: RESET,
});

// Define the action types explicitly for TypeScript
export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof incrementByTen>
  | ReturnType<typeof decrementByTen>
  | ReturnType<typeof reset>;
