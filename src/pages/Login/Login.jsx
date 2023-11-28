import "./Login.scss";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Login = () => {
  const initialValue = { name: "", email: "", password: "" };
  const [user, setUser] = useState(initialValue);
  const { create } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    create(user);
  };

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container w-100 pt-10  items-center justify-center px-2">
        <div className="bg-[#171a21] px-6 py-8 rounded shadow-md text-white w-full">
          <h1 className="mb-8 text-3xl text-left text-white">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21]"
              name="email"
              value={user.email}
              onChange={handleOnChange}
              placeholder="email"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21]"
              name="password"
              value={user.password}
              onChange={handleOnChange}
              placeholder="password"
            />
            <button
              type="submit"
              className="w-100 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-[#b268df] px-2 py-1 rounded-[0.3rem]"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
