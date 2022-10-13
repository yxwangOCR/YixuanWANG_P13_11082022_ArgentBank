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
    updateProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { logIn, logOut, updateProfile } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state) => state.auth.email;
export const selectToken = (state) => state.auth.token;
export const selectFirstName = (state) => state.auth.firstName;
export const selectLastName = (state) => state.auth.lastName;

// Allowing to use useSelector Hook to connect function components to redux (to grab data from redux)

/*
Create a slice:
1. Use createSlice to create a slice.
2. Each slice contains reducers and actions, allowing for modular encapsulation.
3. All related operations are done independently in a single file.

Key properties:
(1) name : will be set to the action prefix by default when the action is called
(2) initialState: The initial value of the state data
(3) reducers: use the assignment to change the data without returning a new state data every time. 
Properties are automatically exported as actions, which can be triggered directly by dispatch in the component.
*/
