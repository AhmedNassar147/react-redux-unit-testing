import React from "react";
import "./index.css";

const Button = ({ title, ...props }) => (
  <button {...props} children={title}></button>
);

export default Button;
