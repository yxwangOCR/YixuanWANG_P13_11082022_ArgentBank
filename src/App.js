import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup"
import Profile from "./pages/Profile/Profile"
import Transaction from "./pages/Transaction/Transaction"

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile/>}/>
        <Route path="signup" element={<Signup />} />
        <Route path="transaction" element={<Transaction />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
