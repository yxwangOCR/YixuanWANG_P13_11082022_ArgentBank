import React from 'react'
import "./Button.css";
import { Link } from "react-router-dom";

const STYLE = ["btn--primary"];
const SIZE = ["btn--medium", "btn--large"];



const Button=({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const ButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const ButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  
  return (
    <Link to="/" className="btn-link">
      <button className={`btn ${ButtonStyle} ${ButtonSize}`} onClick={onClick} type={type}>
        {children}
        </button>
    </Link>
  );
};


export default Button








  
