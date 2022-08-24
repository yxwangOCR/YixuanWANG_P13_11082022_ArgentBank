import React from "react";
import { FaSignInAlt } from "react-icons/fa";
/*import { FaSignOutAlt } from "react-icons/fa";*/
import { Link } from "react-router-dom";
import "./SignInLink.css";

function SignInLink() {
  return (
    <div className="sign-in-container">
      <FaSignInAlt />
      <Link to="login" className="sign-in-link">
        Sign In
      </Link>
    </div>
  );
}

export default SignInLink;
