/**
 * a container for JS apps, it stores the whole state of the app in an immutable object tree.
 * The intended pattern for redux is to have a single store for app
 */

 import { configureStore } from "@reduxjs/toolkit";
 import userReducer from "../features/user/userSlice"

const store = configureStore({
   // an object that holds a reducer:
   reducer: {
    user: userReducer,
   },
 });

 export default store;