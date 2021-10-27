import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "../features/balance/balanceSlice";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: balanceSlice.reducer,
    user: userReducer.reducer,
  },
});
