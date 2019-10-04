import React from "react";
import Logo from "../../assets/favicon.ico";
import "./index.css";

const Header = () => (
  <header data-test="headerComponent">
    <img data-test="logo" src={Logo} alt="Logo" />
    <h2 data-test="title" children="React Testing" />
  </header>
);

export default Header;
