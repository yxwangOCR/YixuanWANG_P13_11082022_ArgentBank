import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth:{
    email: null,
    password: null,
    token: null,
    firstName: null,
    lastName: null,
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.auth = action.payload;
    },
    logOut: (state) => {
      state.auth = null;
     
    },
  },
});
export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state) => state.auth.auth.email
export const selectAccessToken = (state) => state.auth.auth.accessToken
