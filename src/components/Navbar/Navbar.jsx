import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { ImDownload } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar bg-[#171a21]">
      <div className="flex items-center  max-w-[100vw] mx-auto relative">
        {/* Nav ham */}
        <div className="flex items-center justify-center  lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full lg:w-auto">
          <div className="lg:hidden left-4 absolute text-white">
            <FiMenu className="text-[30px]" />
          </div>
          {/* Logo */}
          <div className="flex items-center text-[#c5c3c0] font-semibold text-[26px]  ">
            <img src={logo} className="w-12 h-12 mr-2" />
            <h1>AETHER</h1>
          </div>
        </div>
        {/* Navbar */}
        <div className="hidden lg:flex pl-6">
          <ul className="text-[#c5c3c0] text-[18px] flex gap-5">
            <li>
              <Link to="/home" className="navbar-link">
                STORE
              </Link>
            </li>
            <li>
              <Link to="/library" className="navbar-link">
                LIBRARY
              </Link>
            </li>
            <li>
              <p className="">COMMUNITY</p>
            </li>
            <li>
              <Link to="/profile" className="navbar-link">
                PROFILE
              </Link>
            </li>
          </ul>
        </div>
        {/* Right top */}
        <div className="absolute text-white  right-10 top-0 text-[12px] lg:flex  items-center mt-2 hidden">
          <div className="flex items-center bg-[#b268df] px-2 py-1 rounded-[0.3rem]">
            <ImDownload className="mr-2" />
            <p className="mr-2 ">Install Aether</p>
          </div>
          <div className="h-[15px] w-[1px] bg-white mx-4"></div>
          <HiOutlineSpeakerphone className="w-5 h-5 mr-2" />
          <div className="flex items-center">
            <IoIosNotificationsOutline className="w-5 h-5 mr-1" />
          </div>
          <div className=" ml-4 mr-4 bg-[#c5c3c0] hover:bg-inherit px-2 py-[2px] rounded-[0.5rem] group duration-100 ease-out">
            <p className="text-[#2750b8] font-semibold group-hover:text-white duration-100 ease-out">
              Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
