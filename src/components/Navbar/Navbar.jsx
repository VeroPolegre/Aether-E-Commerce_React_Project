import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { UserContext } from "../../context/UserContext/UserState";
import { GameContext } from "../../context/GameContext/GameState";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(GameContext);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="navbar bg-[#171a21]">
      <div className="flex items-center max-w-[100vw] mx-auto relative">
        {/* Nav ham */}
        <div className="flex items-center justify-center lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full lg:w-auto">
          <div
            className="lg:hidden left-4 absolute text-white cursor-pointer"
            onClick={toggleMenu}
          >
            <FiMenu className="text-[30px]" />
          </div>
          {/* Logo */}
          <div className="flex items-center text-[#c5c3c0] font-semibold text-[26px]  ">
            <img src={logo} className="w-12 h-12 mr-2" />
            <h1>AETHER</h1>
          </div>
        </div>
        {/* Navbar */}
        <div
          className={`hidden lg:flex pl-6 ${isMenuOpen ? "lg:flex" : "hidden"}`}
        >
          <div className="text-[#c5c3c0] text-[18px] flex gap-5">
            <NavLink to="/home" className="navbar-link">
              STORE
            </NavLink>

            <NavLink to="/library" className="navbar-link">
              LIBRARY
            </NavLink>

            <NavLink to="/community" className="navbar-link">
              COMMUNITY
            </NavLink>

            {user ? (
              <NavLink to="/profile" className="navbar-link">
                PROFILE
              </NavLink>
            ) : null}
          </div>
          <Link to="/cart" className="relative inline-block">
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
            <FaShoppingCart className=" ml-5 text-2xl text-gray-500 hover:text-gray-700" />
          </Link>
        </div>
        {/* Right top */}
        <div className="absolute text-white right-10 top-0 text-[12px] lg:flex  items-center mt-2 hidden">
          <HiOutlineSpeakerphone className="w-5 h-5 ml-2 mr-2" />
          <div className="flex items-center">
            <IoIosNotificationsOutline className="w-5 h-5" />
          </div>
          {user ? (
            <div className="relative ml-2">
              <div
                className="bg-[#192533] px-10 py-[6px] rounded-[0.5rem] cursor-pointer flex items-center relative"
                onClick={handleDropdownToggle}
              >
                <p className="text-white font-bold group-hover:text-[#b268df]">
                  {user.name}
                </p>
                <IoIosArrowDown
                  className={`ml-1 w-4 h-4 transition-transform ${
                    showDropdown ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {showDropdown && (
                <div
                  className="absolute top-full bg-[#192533] px-11 py-[6px] rounded-[0.5rem]"
                  onClick={handleDropdownClick}
                >
                  <div className="text-white cursor-pointer" onClick={logout}>
                    Sign Out
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="ml-2 bg-[#174db3] hover:bg-inherit px-10 py-[6px] rounded-[0.5rem] group duration-100 ease-out">
              <Link
                to="/join"
                className="text-white font-bold group-hover:text-[#b268df]"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
