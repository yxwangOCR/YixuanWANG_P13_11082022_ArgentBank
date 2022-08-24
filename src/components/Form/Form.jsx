import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import SignInButton from "../SignInButton/SignInButton";
import "./Form.css"
import axios from '../../api/axios';

const LOGIN_URL = './auth';

function Form() {
  return (
    <section className="login-content">
        <FaUserCircle className="sign-in-icon" />
        <h1>Sign In</h1>
        <form className="login-form">
          <div className="input-login-wrapper">
            <label htmlFor="email">E-mail</label>
            <input 
              type="text" 
              id="email" 
              autoComplete="off"
              required/>
          </div>
          <div className="input-login-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              required />
          </div>
          <div className="remember-wrapper">
            <input 
            type="checkbox" 
            id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <SignInButton />
        </form>
      </section>
  )
}

export default Form