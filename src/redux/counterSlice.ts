import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    incrementByTen: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByTen: (state, action: PayloadAction<number>) => {
      if (state.value > action.payload) state.value -= action.payload;
    },
    reset: (state) => {
      if (state.value > 0) state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByTen, decrementByTen, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
