import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginState",
  initialState: { loginStatus: false},
  reducers: {
    isLogin(state) {
      state.loginStatus = true;
    },
    isLogout(state){
      state.loginStatus = false;
    },
  },
});

export const {isLogin, isLogout} = loginSlice.actions;
export default loginSlice;