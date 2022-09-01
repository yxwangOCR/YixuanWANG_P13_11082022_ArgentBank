import React from "react";
import "./Button.css";

const STYLE = ["btn--primary", "btn--secondary"];
const SIZE = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const ButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const ButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <button
      className={`btn ${ButtonStyle} ${ButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
