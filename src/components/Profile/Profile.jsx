import React from "react";
import { logIn } from "../../app/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Profile() {
  //const firstName = useSelector((state) => state.auth.firstName);
  //const lastName = useSelector((state) => state.auth.lastName)
  //const dispatch = useDispatch();
  //dispatch(logIn())
  return <div>Welcome Back {/*firstName*/} {/*lastName*/}</div>;
}

//Consider adding an error boundary to your tree to customize error handling behavior.
export default Profile;
