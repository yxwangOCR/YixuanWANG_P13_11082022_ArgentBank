import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SignInLink.css";

function SignInLink() {
  return (
    <div className="login-container">
      <FaSignInAlt />
      <Link to="login" className="sign-in-link">
        Sign In
      </Link>
    </div>
  );
}

export default SignInLink;
