import React from "react";
import "./style/button_roxo.css";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button type={type} className="btn-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;