import React from "react";
import "./Header.scss";
import Navbar from "../../components/Navbar/Navbar";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="gradient mb-2">Developed by VeroPolegre</h1>
      <Navbar />
    </header>
  );
};

export default Header;
