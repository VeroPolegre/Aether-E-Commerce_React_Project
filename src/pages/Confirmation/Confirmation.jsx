import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate, useParams } from "react-router-dom";

const Confirmation = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const { confirmed } = useContext(UserContext);
  useEffect(() => {
    confirmed(email);
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  }, []);

  return <div>Confirmation</div>;
};

export default Confirmation;
