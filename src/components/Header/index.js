import React from "react";
import Avatar from "../Avatar";
import Logo from "../../assets/favicon.ico";
import "./index.css";

const userSrc =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEFNABOTfVvGRgGeLanXjK53Aeu_NBLBy_scZSgYXsoxHT1We";

const Header = () => (
  <header data-test="headerComponent">
    <img data-test="logo" src={Logo} alt="Logo" />
    <h2 data-test="title" children="React Testing" />

    <div className="avatar-container">
      <Avatar src={userSrc} />
    </div>
  </header>
);

export default Header;
