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
            state.email = action.payload.email;
            state.token = action.payload.accessToken;
        },
        logOut: (state) => {
            state.email = null;
            state.token = null;
        },
        updateProfile: (state,  action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },  
  },
    
});


export const { logIn, logOut, updateProfile, getUserProfile } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state) => state.auth.email;
export const selectToken = (state) => state.auth.token;
export const selectFirstName = (state) => state.auth.firstName
export const selectLastName = (state) => state.auth.lastName