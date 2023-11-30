import React, { useContext, useState } from "react";
import "./Join.scss";
import { UserContext } from "../../../context/UserContext/UserState";
import customImage from "../../../assets/logo.png";

const Join = () => {
  const initialValue = { name: "", email: "", password: "" };
  const [user, setUser] = useState(initialValue);
  const [join, setJoin] = useState(false);
  const [errors, setErrors] = useState({});
  const { create } = useContext(UserContext);

  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = "Username is required";
    }
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
        await create(user);
        setJoin(true);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrors({ ...errors, email: "Email already in use" });
        }
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
          <h1 className="mb-8 text-3xl text-left text-white">
            CREATE YOUR ACCOUNT
          </h1>
          {join ? (
            <div
              id="toast-default"
              className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8">
                <img
                  src={customImage}
                  alt="Custom Image"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="ms-3 text-sm text-white font-normal">
                ⭐ Please confirm your email
              </div>
            </div>
          ) : (
            ""
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={`block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21] ${
                errors.name ? "border-red-500" : ""
              }`}
              name="name"
              value={user.name}
              onChange={handleOnChange}
              placeholder="username"
            />
            {errors.name && (
              <p className="text-red-500 pb-4 text-l italic">{errors.name}</p>
            )}
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
            <div className="text-grey-dark mt-6 pb-2">
              Already have an account?
              <a
                className="no-underline border-b border-blue text-blue"
                href="../login/"
              >
                ⭐Log in
              </a>
            </div>
            <button
              type="submit"
              className="w-100 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-[#b268df] px-2 py-1 rounded-[0.3rem]"
            >
              Create Account
            </button>
          </form>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
