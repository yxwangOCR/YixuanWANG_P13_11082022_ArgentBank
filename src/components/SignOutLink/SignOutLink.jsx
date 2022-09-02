import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./SignOutLink.css";
import { logOut, selectUser } from "../../app/authSlice";
import { useSelector } from "react-redux";

const SignOutLink = () => {
const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const handleLogOut = (e) =>{
    e.preventDefault(); 
    dispatch(logOut());
  }

  return (
    <div className="sign-out-container">
      Hello, {user.firstName}
      <FaSignOutAlt />
      <Link to="/" className="sign-out-link" onClick={handleLogOut}>
        Sign Out
      </Link>
    </div>
  );
}

export default SignOutLink;