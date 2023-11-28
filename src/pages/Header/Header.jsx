import React from "react";
import "./Header.scss";
import Navbar from "../../components/Navbar/Navbar";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <h1 className="pt-4 pb-2 text-[#c5c3c0]">
        <a
          className="github w-50 text-center py-0.5 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-[#171a21] px-2 py-1 rounded-[0.3rem]"
          href="https://github.com/VeroPolegre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="inline-block w-5 h-5 mr-2" />
          VeroPolegre
        </a>
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
