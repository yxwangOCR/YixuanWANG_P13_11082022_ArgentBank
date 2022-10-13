import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Button from "../Button/Button";
import "./Form.css";
import axios from "../../app/axios";
import AuthContext from "../../app/AuthProvider";
import { useDispatch } from "react-redux";
import { logIn } from "../../app/authSlice";
import TextInput from "../TextInput/TextInput";

const LOGIN_URL = "/user/login";

const Form = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [, setSuccess] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // reload page
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: false, // if it's true?
        }
      );
      console.log(JSON.stringify(response));
      console.log(JSON.stringify(response?.data?.body.token));

      const accessToken = response?.data?.body.token;

      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      setSuccess(true);

      navigate("/profile");

      dispatch(
        logIn({
          email: email,
          accessToken: accessToken,
        })
      );
    } catch (error) {
      if (!error.response) {
        setErrMsg("No Server Response"); // not tested yet.
      } else if (error.response?.status === 400) {
        setErrMsg("Wrong Email or Password"); // tested: ok
      } else {
        setErrMsg("Login Failed"); // tested : ok
      }
    }
  };

  console.log(email, password);

  return (
    <section className="login-content">
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <FaUserCircle className="sign-in-icon" />
      <h1>Sign In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-login-wrapper">
          <TextInput
            label="E-mail:"
            inputProps={{
              type: "text",
              id: "email",
              autoComplete: "off",
            }}
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)} //as user change input, we get the value and put them into setEmail
          />
        </div>
        <div className="input-login-wrapper">
          <TextInput
            label="Password:"
            inputProps={{
              type: "password",
              id: "password",
              autoComplete: "off",
            }}
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="remember-wrapper">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Button type="submit" className="sign-in-btn">
          Sign In
        </Button>
      </form>
      <p className="signup-link">
        Don't have an account?
        <br />
        <Link to="/signup" className="sign-up-message">
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default Form;

/**
 * autoComplete="off"
 * [DOM] Input elements should have autocomplete attributes (suggested: "current-password"): (More info: https://goo.gl/9p2vKq)
 */
