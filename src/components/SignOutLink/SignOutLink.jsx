import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SignOutLink.css";
import { logOut, selectUser, selectFirstName } from "../../app/authSlice";

const SignOutLink = () => {
  const firstName = useSelector(selectFirstName);
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logOut());
    console.log("Logout success!");
  };

  return (
    <div className="sign-out-container">
      Hello, {firstName}
      <FaSignOutAlt />
      <Link to="/" className="sign-out-link" onClick={handleLogout}>
        Sign Out
      </Link>
    </div>
  );
};

export default SignOutLink;
