import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container pt-10 flex justify-between items-center">
        <div className="flex pb-4 space-x-6">
          <span className="text-sm">
            &copy; Aether Corporation.{" "}
            <p>All rights mischievously preserved.</p>
          </span>
          <span className="text-sm">
            All funmarks are property of their respective jesters in the Aether
            and other dimensions.
          </span>
          <span className="text-sm">
            Some gigglespatial data on this website is provided by my lovely cat
            Tifa.
          </span>
        </div>
        <div className="flex space-x-4 items-center">
          <a
            href="https://github.com/VeroPolegre"
            className="hover:text-gray-300"
            target="_blank"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/veronica-polegre/"
            className="hover:text-gray-300"
            target="_blank"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-2 text-sm">
        <div className="flex justify-center">
          <a href="#" className="hover:text-gray-300 mr-4">
            Privacy Jest
          </a>
          <a href="#" className="hover:text-gray-300 mr-4">
            Legal Laughs
          </a>
          <a href="#" className="hover:text-gray-300 mr-4">
            Jest Subscriber Agreement
          </a>
          <a href="#" className="hover:text-gray-300">
            Cookies & Chuckles
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
