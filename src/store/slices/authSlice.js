import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authState",
  initialState: { id: '', username: '', name: '', email: '', phone_number: '', register_date: ''},
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setUsername(state, action){
      state.username = action.payload;
    },
    setName(state, action){
        state.username = action.payload;
    },
    setEmail(state, action){
        state.username = action.payload;
    },
    setPhoneNumber(state, action){
        state.username = action.payload;
    },
    setRegisterDate(state, action){
        state.username = action.payload;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
