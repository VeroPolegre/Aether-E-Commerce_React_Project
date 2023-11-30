import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  let [countdown, setCountdown] = useState(6);

  const countdownStart = () => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown--);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);
  };
  useEffect(() => {
    countdownStart();
    setTimeout(() => {
      navigate("/home");
    }, 7000);
  }, []);
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="bg-[#171a21] mt-2 px-6 py-8 pb-20 rounded shadow-md text-white w-full max-w-3xl text-center">
        <FaExclamationTriangle className="text-4xl mb-4" />
        <h1 className=" mt-2 text-4xl font-bold">404 Page Not Found</h1>
        <p className=" mt-10 text-white">
          Oops! The page you are looking for might be in another castle.
        </p>
        <p>You will be redirected back to the Aether</p>
        <h1 className="bg-[#192533] mt-10 py-10 px-10 rounded focus:outline-none hover:bg-[#1d2f4a] text-white-500 text-[60px] ">
          {countdown}
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
