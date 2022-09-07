import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import SignInLink from "../SignInLink/SignInLink";
import SignOutLink from "../SignOutLink/SignOutLink";
import "./Nav.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/authSlice";

const Nav = () => {
  const user = useSelector(selectUser);

  console.log(user);
  return (
    <nav className="nav-container">
      <Link to="/">
        <img className="logo" alt="argent-bank-logo" src={logo} />
      </Link>

      {user ? <SignOutLink /> : <SignInLink />}
    </nav>
  );
};
export default Nav;
