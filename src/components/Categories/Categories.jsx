import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="gradient mx-[2rem] pl-4 pr-2 mt-4 flex items-center justify-between">
      <ul className="flex items-center py-1.5 text-white text-[16px] gap-10">
        <li>
          <Link to="/categories/action" className="category-link">
            Action
          </Link>
        </li>
        <li>
          <Link to="/categories/role-playing" className="category-link">
            Role-Playing
          </Link>
        </li>
        <li>
          <Link to="/categories/strategy" className="category-link">
            Strategy
          </Link>
        </li>
        <li>
          <Link to="/categories/adventure" className="category-link">
            Adventure
          </Link>
        </li>
        <li>
          <Link to="/categories/simulation" className="category-link">
            Simulation
          </Link>
        </li>
        <li>
          <Link to="/categories/sports-and-racing" className="category-link">
            Sports & Racing
          </Link>
        </li>
      </ul>
      <input
        type="search"
        placeholder="search"
        className="pl-4 bg-[#171a21] placeholder:text-[#c5c3c0] "
      />
    </div>
  );
};

export default Categories;
