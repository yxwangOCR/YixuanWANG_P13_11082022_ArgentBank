import React, {useState} from "react";
import { FaUserCircle } from "react-icons/fa";
import Button from "../Button/Button";
import "./Form.css";

function Form() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

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
          required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="input-login-wrapper">
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          id="password" 
          required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="remember-wrapper">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
       <Button type="submit" className="sign-in-btn">Sign In</Button>
      </form>
    </section>
  );
}

export default Form;
