import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import SignInLink from "../SignInLink/SignInLink";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <img className="logo" alt="argent-bank-logo" src={logo} />
      </Link>
      <SignInLink />
    </nav>
  );
}
export default Nav;
