import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="gradient mx-[2rem] pl-4 pr-2 mt-4 flex items-center justify-between ">
      <ul className="flex items-center py-1.5 text-white text-[14px] gap-10">
        <li>
          <p>Action</p>
        </li>
        <li>
          <p>Role-Playing</p>
        </li>
        <li>
          <p>Strategy</p>
        </li>
        <li>
          <p>Adventure</p>
        </li>
        <li>
          <p>Simulation</p>
        </li>
        <li>
          <p>Sports & Racing</p>
        </li>
      </ul>
      <input
        type="search"
        placeholder="search"
        className="pl-4 bg-[#171a21] placeholder:text-white "
      />
    </div>
  );
};

export default Categories;
