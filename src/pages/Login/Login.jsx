import React from "react";
import "./Login.css";
import { FaUserCircle } from "react-icons/fa";
import SignInButton from "../../components/SignInButton/SignInButton";

function Login() {
  return (
    <main className="login-wapper">
       <section className="login-content">
       <FaUserCircle className="sign-in-icon"/>
       <h1>Sign In</h1>
       <form>
       <div className="input-login-wrapper">
                  <label htmlFor="email">E-mail</label>
                  <input type="text" id="email" />
               </div>
               <div className="input-login-wrapper">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" autoComplete="off" />
               </div>
               <div className="remember-wrapper">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
               </div>
               <SignInButton/>
       </form>
       </section>
    </main>
  );
}

export default Login;
