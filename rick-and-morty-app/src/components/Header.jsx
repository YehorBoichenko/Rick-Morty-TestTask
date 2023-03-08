import React from "react";
import logo from "../images/PngItem.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__img-container">
        <img src={logo} alt="rick-and-morty-logo" />
      </div>
    </header>
  );
};

export default Header;
