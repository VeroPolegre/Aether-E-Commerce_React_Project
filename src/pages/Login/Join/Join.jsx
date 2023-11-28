import React from "react";
import "./Join.scss";

const Join = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container w-100 mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-[#171a21] px-6 py-8 rounded shadow-md text-white w-full">
          <h1 className="mb-8 text-3xl text-left text-white">
            CREATE YOUR ACCOUNT
          </h1>
          <div className="text-grey-dark mt-6 pb-2">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              ⭐Log in
            </a>
          </div>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21]"
            name="name"
            placeholder="username"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21]"
            name="email"
            placeholder="email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21]"
            name="password"
            placeholder="password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-[#171a21]"
            name="confirm_password"
            placeholder="confirm password"
          />

          <button
            type="submit"
            className="w-100 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-[#b268df] px-2 py-1 rounded-[0.3rem]"
          >
            Create Account
          </button>

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
