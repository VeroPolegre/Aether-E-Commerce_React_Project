import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex items-center  text-[#c5c3c0] font-semibold text-[26px]  ">
        <img src={logo} className="w-20 h-20 mr-2" />
      </div>
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
      <Link to="/store" className="navbar-link">
        Store
      </Link>
      {/* <Link to="/ex[plore" className="navbar-link">
        Discovery Queue
      </Link> */}
      {/* <Link to={`/wishlist/${user.id}`} className="navbar-link">
        Wishlist
      </Link> */}
    </nav>
  );
};

export default Navbar;
