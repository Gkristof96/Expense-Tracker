import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "../features/balance/balanceSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: balanceSlice.reducer,
  },
});
