import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/login" className="navbar-link">
        Login
      </Link>
      <Link to="/store" className="navbar-link">
        Store
      </Link>
      {/* Dropdown */}
      <Link to="/home" className="navbar-link">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
