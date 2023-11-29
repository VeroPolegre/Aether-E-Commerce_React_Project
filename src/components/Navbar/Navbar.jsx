import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { UserContext } from "../../context/UserContext/UserState";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(UserContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <ul className="text-[#c5c3c0] text-[18px] flex gap-5">
            <li>
              <NavLink to="/home" className="navbar-link">
                STORE
              </NavLink>
            </li>
            <li>
              <NavLink to="/library" className="navbar-link">
                LIBRARY
              </NavLink>
            </li>
            <li>
              <p className="">COMMUNITY</p>
            </li>
            <li>
              <NavLink to="/profile" className="navbar-link">
                PROFILE
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Right top */}
        <div className="absolute text-white right-10 top-0 text-[12px] lg:flex  items-center mt-2 hidden">
          <HiOutlineSpeakerphone className="w-5 h-5 ml-2 mr-2" />
          <div className="flex items-center">
            <IoIosNotificationsOutline className="w-5 h-5" />
          </div>
          {user ? (
            <div className="ml-2 bg-[#192533] px-10 py-[6px] rounded-[0.5rem] ">
              <p className=" text-white font-bold group-hover:text-[#b268df]">
                {user.name}
              </p>
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
