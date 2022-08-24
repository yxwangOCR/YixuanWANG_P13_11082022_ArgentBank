import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SignOutLink.css";

function SignOutLink() {
  return (
    <div className="logout-container">
      <div className="user-name">
        Hello, <span>User</span>
      </div>
      <div className="user-logout">
        <FaSignOutAlt />
        <Link to="logout" className="sign-out-link">
          Sign Out
        </Link>
      </div>
    </div>
  );
}

export default SignOutLink;
