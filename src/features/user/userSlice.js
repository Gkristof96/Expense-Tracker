import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
    login: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = !!state.token;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
