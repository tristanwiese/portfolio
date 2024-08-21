import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  value: string;
  total: number | null;
  lastAction: string;
}

const initialState: CounterState = {
  value: "",
  total: null,
  lastAction: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    action: (state, action: PayloadAction<string>) => {
      switch (state.lastAction) {
        case "+":
          state.total! += parseFloat(state.value);
          state.value = "";
          state.lastAction = action.payload;
          break;

        case "-":
          state.total! -= parseFloat(state.value);
          state.value = "";
          state.lastAction = action.payload;
          break;

        case "x":
          state.total! *= parseFloat(state.value);
          state.value = "";
          state.lastAction = action.payload;
          break;
        case "/":
          state.total! /= parseFloat(state.value);
          state.value = "";
          state.lastAction = action.payload;
          break;
        default:
          state.total! = parseFloat(state.value);
          state.value = "";
          state.lastAction = action.payload;
          break;
      }
    },
    count: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    backspace: (state) => {
      const newStr = state.value.substring(0, state.value.length - 1);

      state.value = newStr;
    },
    display: (state) => {
      switch (state.lastAction) {
        case "+":
          state.value = String(state.total! + parseFloat(state.value));
          break;

        case "-":
          state.value = String(state.total! - parseFloat(state.value));
          break;

        case "x":
          state.value = String(state.total! * parseFloat(state.value));
          break;

        case "/":
          state.value = String(state.total! / parseFloat(state.value));
          break;

        default:
          break;
      }
      state.lastAction = "";
      state.total = null;
    },
    reset: (state) => {
      state.value = "";
      state.total = null;
      state.lastAction = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { count, reset, action, display, backspace } =
  counterSlice.actions;
export const state = (state: RootState) => state.counter;

export default counterSlice.reducer;
