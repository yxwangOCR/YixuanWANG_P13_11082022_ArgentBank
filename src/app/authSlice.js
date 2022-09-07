import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    email: null,
    password: null,
    token: null,
    firstName: null,
    lastName: null,
  
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.email = action.payload;
    },
    logOut: (state) => {
      state.email = null;
    },
    getToken: (state, action) => {
      state.token = action.payload
    },
    getFirstName: (state, action) => {
      state.firstName = action.payload
    },
    getLastName: (state, action) => {
      state.lastName = action.payload
    }
  },
});


export const { logIn, logOut, getToken, getFirstName, getLastName } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state) => state.auth.email;
export const selectToken = (state) => state.auth.token;
export const selectFirstName = (state) => state.auth.firstName
export const selectLastName = (state) => state.auth.lastName