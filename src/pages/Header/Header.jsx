import React from "react";
import "./Header.scss";
import Navbar from "../../components/Navbar/Navbar";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="gradient pt-2 mb-2 text-[#c5c3c0]">
        Developed by <FaGithub className="absolute w-5 h-5" />
        VeroPolegre
      </h1>

      <Navbar />
    </header>
  );
};

export default Header;
