import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useParams, useNavigate } from "react-router-dom";
import "./Confirmation.scss";
const Confirmation = () => {
  const { email } = useParams();
  const { confirmed, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    confirmed(email);
  }, []);

  const goToHome = () => {
    navigate("/home");
  };

  return (
    <div className="bg-grey-lighter pt-16 flex flex-col items-center justify-center">
      <div className="bg-[#171a21] px-6 py-8 rounded shadow-md text-white w-full max-w-md text-center">
        <h1 className="mb-4 text-3xl text-white">
          Thanks {user && user.name} !
        </h1>
        <p className="text-lg text-white pt-2">
          Your email has been confirmed successfully
        </p>

        <button
          onClick={goToHome}
          className="mt-4 px-4 py-2 bg-[#7c5ece] text-white rounded hover:bg-[your-hover-color] focus:outline-none"
        >
          <h2>Enjoy Aether</h2>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
