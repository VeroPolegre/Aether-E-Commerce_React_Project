import React, { useState } from "react";
import "./Login.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValue = { email: "", password: "", confirmPassword: "" };
  const [user, setUser] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!user.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is not valid";
    }

    if (!user.password) {
      errors.password = "Password is required";
    }

    if (!user.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (user.password !== user.confirmPassword) {
      errors.confirmPassword =
        "Passwords do not match. Please write the same password.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(user);
        await login(user);
        navigate("/profile");
      } catch (error) {
        setErrors({
          email: "Incorrect email or password",
          password: "Incorrect email or password",
        });
      }
    }
  };

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container w-100 pt-10  items-center justify-center px-2">
        <div className="bg-[#171a21] px-6 py-8 rounded shadow-md text-white w-full">
          <h1 className="mb-8 text-3xl text-left text-white">SIGN IN</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={`block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21] ${
                errors.email ? "border-red-500" : ""
              }`}
              name="email"
              value={user.email}
              onChange={handleOnChange}
              placeholder="email"
            />
            {errors.email && (
              <p className="text-red-500 pb-4 text-l italic">{errors.email}</p>
            )}
            <input
              type="password"
              className={`block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21] ${
                errors.password ? "border-red-500" : ""
              }`}
              name="password"
              value={user.password}
              onChange={handleOnChange}
              placeholder="password"
            />
            <input
              type="password"
              className={`block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21] ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleOnChange}
              placeholder="confirm password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 pb-4 text-l italic">
                {errors.confirmPassword}
              </p>
            )}
            <button
              type="submit"
              className="w-100 text-center py-3 rounded bg-green text-white hover:bg-white-dark focus:outline-none my-1 bg-[#b268df] px-2 py-1 rounded-[0.3rem]"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
