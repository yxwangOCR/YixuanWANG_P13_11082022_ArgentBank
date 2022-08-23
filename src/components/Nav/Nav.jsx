import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaSignInAlt } from "react-icons/fa";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <img className="logo" alt="argent-bank-logo" src={logo} />
      </Link>
      <div className="login-container">
        <FaSignInAlt />
        <Link to="login" className="sign-in-link">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
