import React from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./SignOutLink.css";
import { logOut, selectUser, selectFirstName } from "../../app/authSlice";

const SignOutLink = () => {
  const firstName = useSelector(selectFirstName);
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logOut());
    console.log("Logout success!");
    navigate("/");
  };

  return (
    <div className="sign-out-container">
      <FaUserCircle className="sign-in-user-icon" /> Hello, {firstName}
      <FaSignOutAlt />
      <Link to="/" className="sign-out-link" onClick={handleLogout}>
        Sign Out
      </Link>
    </div>
  );
};

export default SignOutLink;
