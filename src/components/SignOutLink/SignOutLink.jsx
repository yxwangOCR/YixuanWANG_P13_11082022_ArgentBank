import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SignOutLink.css";

function SignInLink () {
  
  return (
    <div className="sign-out-container">
      <FaSignOutAlt />
      <Link to="/" className="sign-out-link">
        Sign Out
      </Link>
    </div>
  );
}

export default SignInLink;